#SingleInstance force
#Requires AutoHotkey v2

#Include "Dependencies\_JXON.ahk"
#Include "Dependencies\MidiOut.ahk"
#Include "Dependencies\fuzzyMatch.ahk"
#Include "Dependencies\Class_LV_Colors.ahk"

; ==================================
; ON LOAD
; ==================================

global commands := Map()

global SEARCH_RESULT_MAX := 20
global SETTINGS_WINDOW_NAME := "Cubase Keycommander - Settings"
global MAIN_WINDOW_NAME := "Cubase Keycommander"
global MAIN_WINDOW_WIDTH := 1350
global GUI_BACKGROUND_COLOR := "0x474747"
global SELECTED_ROW_BG_COLOR := "0x9fc7ff"
global ini := "keycommander_settings.ini" ; name of .ini file

global SearchTimer := 0 ;search debounce time
global enterQueued := false
global busy := false

global isGuiCreated := false
global totalItems := 0
global openGuiHotkey := '~' . IniRead(ini, "hotkey", "key", "^j") ;add tilde so it is non blocking
global useLastCommandHotkey := '~' . IniRead(ini, "repeatHotkey", "key", "^i") ;add tilde so it is non blocking
global windowToReturnTo := ""

global lastUsedCommand := ""

Hotkey(openGuiHotkey, OpenGui) ;create a dynamic hotkey for opening the gui

Hotkey(useLastCommandHotkey, useLastUsedCommand) ; Create a dynamic hotkey for re-triggering the last used command

global Fuz := Fuzzy() ;initialize the fuzzy matching algorithm

Init() {
    global
    try {
        FileRead(ini)
    } catch {
        KeyCommanderSettingsGui('', 0, '') ;if no ini file, automatically load settings gui
    } else {
        
        LoadKeyBindXML('', 0, '') ; parse the keybind file

        ;connect midi stuff
        midi := MidiOut.Call()

        ; Open the virtual MIDI port (replace "LoopMIDI Port" with the name of your port)
        midiport := IniRead(ini, "midiport", "key", "")
        
        For dev in MidiOut.GetDeviceList() {
            If (dev.Name = midiport) { ; Replace with your port name
                midi := MidiOut.Call(dev.ID)
                break
            }
        }

        ; Check if the port was opened successfully
        If (!isSet(midi)) {
            MsgBox("Midi Port not found, select an available midi port")
            KeyCommanderSettingsGui('', 0, '')
        }
    }
}

Init()

class Command {
    index := ""
    category := ""
    name := ""
    keybind := ""
    score := 1
    __New(index, category, name, keybind) {
        this.index := index
        this.category := category
        this.name := name
        this.keybind := keybind
    }
    AddToList(list, _score := 1) {
        list.Add(, this.name, this.category, this.keybind , this.index, _score)
    }
}

; Function to check if cubase is active and not in an edit field
isCubaseActiveAndReady(*) {
    if (WinActive(SETTINGS_WINDOW_NAME)) { ;Don't proceed if settings GUI is open
        return false
    }
    local cubaseVersion := IniRead(ini, "cubaseVersion", "key", "Cubase 13")
    if WinActive("ahk_exe Cubase" . StrSplit(cubaseVersion, ' ')[2] . ".exe") {
        if (ControlGetFocus("A") != 0) {
            return ControlGetClassNN(ControlGetFocus("A")) != "Edit1"
        }
        return true
    }
    return false
}

OpenGui(*) {
    if !isCubaseActiveAndReady()
        return
    windowToReturnTo := WinGetTitle("A")

    if isGuiCreated {
        myGui.Show() ; Bring the existing GUI to the front
        cmdSearchBox.Focus()
        Send "^a" ; Have the search bar select any text that is still there from a previous search
    } else {
        CreateGui()
    }
}

useLastUsedCommand(*) {
    if !isCubaseActiveAndReady()
        return
    if lastUsedCommand !== ""
        midi.ControlChange(lastUsedCommand[2], lastUsedCommand[3], lastUsedCommand[1])
}

CreateGui() {
    global
    myGui := Gui()
    myGui.OnEvent("Close", GuiClose)
    myGui.OnEvent("Escape", GuiClose)
    myGui.SetFont("s14", "Segoe UI")
    myGui.Opt("+Resize")

    

    fileMenu := Menu()
    fileMenu.Add("&Settings", (*) => KeyCommanderSettingsGui('', 0, ''))
    fileMenu.Add("Refresh", refreshGUI)
    fileMenu.Add("E&xit", (*) => ExitApp())
    helpMenu := Menu()
    helpMenu.Add("&About", (*) => MsgBox(
        "Shortcuts the easy way. `n`n Made by Thomas van der Burg"
    ))
    myMenuBar := MenuBar()
    myMenuBar.Add("&File", fileMenu)
    myMenuBar.Add("&Help", helpMenu)

    myGui.MenuBar := myMenuBar

    myGui.Add("Text", , "Type a command:")
    
    cmdSearchBox := myGui.Add("Edit", "vSearchTerm " . "w" . MAIN_WINDOW_WIDTH)
    cmdSearchBox.OnEvent("Change", DelayedSearch.Bind("Change"))
    
    cmdListView := MyGui.Add("ListView", "-0x08 Count2300 -Multi h200 " . "w" . MAIN_WINDOW_WIDTH, ["Command", "Category", "Key", "index", "score"])
    cmdListView.OnEvent("DoubleClick", sendCommand)

    hiddenBtn := myGui.Add("Button", "x-10 y-10 w1 h1 +default") ; hidden button that enables pressing enter to submit
    hiddenBtn.OnEvent("Click", sendCommand)

    ;add commands to the listview
    for index, cmd in commands {
        cmd.AddToList(cmdListView)
        if A_Index == SEARCH_RESULT_MAX
            break
    }
    totalItems := cmdListView.getCount()

    clv := LV_Colors(cmdListView)
    clv.SelectionColors(SELECTED_ROW_BG_COLOR)

    cmdListView.Modify(1, "Select") ;select first row
    cmdListView.Modify(1, "Focus")

    cmdListView.ModifyCol(1, 750)
    cmdListView.ModifyCol(2, 300)
    cmdListView.ModifyCol(3, 250)
    cmdListView.ModifyCol(4, 0)
    cmdListView.ModifyCol(5, 0)

    myGui.Title := MAIN_WINDOW_NAME

    isGuiCreated := true

    ;make gui resizable

    resizeGui(thisGui, MinMax, Width, Height) {
        cmdSearchBox.Move(10, 10, Width - 20, 30)
        cmdListView.Move(10, 50, Width - 20, Height - 60)
    }
    myGui.OnEvent("Size", resizeGui)

    myGui.Show("Center h300 " . "w" . MAIN_WINDOW_WIDTH)

}

refreshGUI(*) {
    global
    CloseMidi()
    isGuiCreated := false
    myGui.Destroy
    Init()
    CreateGui()
}

; // enable arrow keys for navigation //
#HotIf WinActive("ahk_class AutoHotkeyGUI")
Up:: {
    global
    NavigateListBox(-1)
}
Down:: {
    global
    NavigateListBox(1)
}
#HotIf

NavigateListBox(v) {
    global
    current := cmdListView.GetNext()
    newValue := current + v
    if (newValue > 0 && newValue <= cmdListView.GetCount()) {
        cmdListView.Modify(current, "-Select")
        cmdListView.Modify(newValue, "Select")
    }
}

convertToMidiMessage(msg) {
    split := StrSplit(msg, ",")
    loop 3 {
        split[A_Index] := RegExReplace(split[A_Index], "^0+", "") ;regEx is for removing trailing zeros
    }
    return split
}

sendCommand(*) {
    global
    selected := cmdListView.getText(cmdListView.GetNext(), 4) ; column 4 = index
    if (selected != "" && selected != "index") {
        msg := convertToMidiMessage(selected) ; channel, control, value
        lastUsedCommand := msg
        WinActivate(windowToReturnTo)
        midi.ControlChange(msg[2], msg[3], msg[1]) ; control, value, channel
        GuiClose()
    }
}

; CLOSE FUNCTION
GuiClose(*) {
    global
    MyGui.Hide()
}

OnExit CloseMidi

CloseMidi(*) {
    global midi
    if isSet(midi)
        midi.__Delete() ; Ensure the port is closed
}

DelayedSearch(*) {
    global
    cmdListView.Modify(1, "-Select")
    ; Cancel any existing timer
    SetTimer Search, 0

    ; Start a new timer (300ms delay, adjust as needed)
    SearchTimer := SetTimer(Search, -50)
}
; SEARCH FUNCTION
Search() {
    global
    SearchTerm := StrLower(Trim(cmdSearchBox.Value))
    cmdListView.Opt("-Redraw")
    cmdListView.Delete()

    for index, cmd in commands {
            if (SearchTerm = "") {
                if A_Index <= SEARCH_RESULT_MAX {
                    cmd.AddToList(cmdListView)
                }
                cmd.score := 1
                continue
            }

            score := Round(Fuz.Match(SearchTerm, cmd.name), 5) ; fuzzy matching

            If (InStr(cmd.name, SearchTerm) = 1) { ; check if command starts with search string
            score += 1
            } else if (InStr(cmd.name, SearchTerm)) { ;check if command contains search string
            score += 0.2
            }

            if (InStr(cmd.category, SearchTerm)) { ;check if category starts with search string
            score += 0.5
            } else if (InStr(cmd.category, SearchTerm)) { ;check if category contains search string
            score += 0.1
            }

            cmd.score := score ;set new score
    }
    if (SearchTerm != "") {
        
        topScores := getHighestScores(commands, SEARCH_RESULT_MAX) ;get the top scores

        for index, cmd in topScores {
            cmd.AddToList(cmdListView, cmd.score)
        }

    }

    cmdListView.ModifyCol(5, "SortDesc")

    cmdListView.Opt("+Redraw")

    items := cmdListView.GetCount()

    if (items > 0) {
        cmdListView.Modify(1, "Select")
        cmdListView.Modify(1, "Focus")
    }

    Return
}

getHighestScores(mapOfObjects, amount) {
    topScores := []  ; Array to store top objects

    for _, obj in mapOfObjects {
        if (topScores.Length < amount) {
            topScores.Push(obj)
        } else {
            ; Find the smallest object in the current top
            smallestIndex := 1
            for i, topObj in topScores {
                if (topObj.score < topScores[smallestIndex].score) {
                    smallestIndex := i
                }
            }

            ; Replace smallest if current object's score is higher
            if (obj.score > topScores[smallestIndex].score) {
                topScores[smallestIndex] := obj
            }
        }
    }

    return topScores
}

class IndexGenerator {
    __New() {
        this.currentIndex := [2, 119] ; Start with "02,119"
    }
    GetCurrentIndex() {
        return Format("{:02},{:03}", this.currentIndex[1], this.currentIndex[2])
    }
    GetNextIndex() {
        channel := this.currentIndex[1]
        cc := this.currentIndex[2]

        if (cc < 127) {
            cc++
        } else if (channel < 16) {
            cc := 119
            channel++
        } else {
            throw Error("No more available indexes")
        }

        this.currentIndex := [channel, cc]
        ; Format numbers with the specified rules
        return Format("{:02},{:03}", channel, cc)
    }
}

LoadKeybindXML(*) {
    global
    keyCommandsXmlPath := IniRead(ini, "keycommands_path", "key", "-1")

    if (keyCommandsXmlPath = "-1") {
        MsgBox('No path selected, please check settings or the .ini file')
        ExitApp
    }

    try {
        KeyCommandsXmlData := FileRead(keyCommandsXmlPath)
    } catch {
        MsgBox('Cannot find Key Commands.Xml, please check settings or the .ini file')
        ExitApp
    }
    
    doc := loadXML(KeyCommandsXmlData)
    nodesPerCategory := doc.SelectNodes("//list[@name='Categories']/item")

    commands := Map()
    commandsForCubase := Map()

    gen := IndexGenerator()

    ; PARSE KEY COMMMANDS XML DATA
    for categoryNode in nodesPerCategory {
        nodes := categoryNode.selectNodes(".//item[string[@name='Name'] and not(list)]")
        category := categoryNode.selectSingleNode("string[@name='Name']").getAttribute("value")

        for node in nodes {
            nameNode := node.selectSingleNode("string[@name='Name']").getAttribute("value")
            keyNode := node.selectSingleNode("string[@name='Key']")
            local key := " "
            if (keyNode) {
                key := keyNode.getAttribute("value")
            }
            currentIndex := gen.GetCurrentIndex()
            if (commandsForCubase.Has(currentIndex)){
                if (commandsForCubase[currentIndex].Length > 126) {
                    currentIndex := gen.GetNextIndex()
                    commandsForCubase.Set(currentIndex, Array())
                }
            } else {
                commandsForCubase.Set(currentIndex, Array())
            }
            arrayIndex := commandsForCubase[currentIndex].Length + 1
            commandsForCubase[currentIndex].push([arrayIndex, category, nameNode])
            index := currentIndex . "," . Format("{:03}",arrayIndex) ; add value with trailing zero's to index
            commands.set(index, Command(index, category, nameNode, key))
        }
    }

    json := jxon_dump(commandsForCubase, indent := 1)
    try {
        existingJsonFile := FileRead("commands_json.json")
    } catch {

    } else {
        FileDelete("commands_json.json")
    }
    FileAppend json, "commands_json.json"

    ; ////////////////////////////////////////

    ScriptDir := IniRead(ini, "script_dir", "key", "-1")

    if (ScriptDir = "-1") {
        MsgBox('no path to Driver Scripts folder selected, please check settings or the .ini file')
        ExitApp
    }
    cubaseJsFilePath := ScriptDir . "/Local/Thomasvanderburg/Keycommander/Thomasvanderburg_Keycommander.js"
    cubaseJsFileBackupPath := ScriptDir . "/Local/Thomasvanderburg/Keycommander/Thomasvanderburg_Keycommander_Backup.bak"

    ; Try and find/read the script file
    try {
        cubaseJsFile := FileRead(cubaseJsFilePath)
    } catch {
        MsgBox('Cannot find AHK_Keycommander.js, please check settings or the .ini file')
        ExitApp
    }
    
    ; Try and find the backup script file
    try {
        jsBackup := FileRead(cubaseJsFileBackupPath)
    } catch {
        ; doesn't matter, will create it if not found
    } else {
        FileDelete(cubaseJsFileBackupPath)
    }

    FileAppend(cubaseJsFile, cubaseJsFileBackupPath) ; save a backup

    StartMarker := "// START_JSONDATA"
    EndMarker := "// END_JSONDATA"

    ; Find the positions of the markers
    StartIndex := InStr(cubaseJsFile, StartMarker)
    EndIndex := InStr(cubaseJsFile, EndMarker)

    if (StartIndex = 0 || EndIndex = 0) {
        MsgBox ("Script markers not found, please replace the AHK_Keycommander.js file with a fresh one")
        ExitApp
    }

    ; Extract everything outside the markers
    Before := SubStr(cubaseJsFile, 1, StartIndex + StrLen(StartMarker) - 1)  ; Up to the end of the start marker
    After := SubStr(cubaseJsFile, EndIndex)  ; From the start of the end marker onward

    UpdatedContent := Before . "`n" . "var jsonData = " . json . "`n" . After ; add everything together

    ; Replace Midi Port name with the one stored in .ini
    midiPortName := IniRead(ini, "midiport", "key", "loopMIDI Keycommander")

    UpdatedContent := RegExReplace(UpdatedContent, "(.expectInputNameEquals\(')(.*)('\))", "$1" . midiPortName . "$3",,1) ;

    FileDelete(cubaseJsFilePath) ; delete previous version
    FileAppend(UpdatedContent, cubaseJsFilePath) ; re-create the file with the updated content

    return
}

LoadXML(data) {
    o := ComObject("msxml2.DOMDocument.6.0") ; may need to be 3.0 depending on the XML
    o.async := False
    o.LoadXML(data)
    if o.parseError.errorCode {
        MsgBox "Unable to load XML data"
            . "`nError: " . o.parseError.errorCode
            . "`nReason: " . o.parseError.reason
            , "XML Load Error"
            , 16
        ExitApp
    }
    return o
}

; ADD TRAY MENU ITEM FOR GOING TO SETTINGS
A_TrayMenu.Add()  ; Creates a separator line.
A_TrayMenu.Add("Settings", KeyCommanderSettingsGui)  ; Creates a new menu item.
Persistent


KeyCommanderSettingsGui(ItemName, ItemPos, MyMenu) {
    global
    Hotkey(openGuiHotkey, OpenGui, "Off") ;turn off jumpkey hotkey

    settings := {
        cubaseVersion: IniRead(ini, "cubaseVersion", "key", "Cubase 13"),
        cubaseVersionDDLIndex: "Choose" . IniRead(ini, "cubaseVersionDDLIndex", "key", "3"),
        xmlFilePath: IniRead(ini, "keycommands_path", "key", "Path to your Key Commands.xml"),
        scriptDir: IniRead(ini, "script_dir", "key", "Driver Script Directory"),
        defaultHotkey: IniRead(ini, "hotkey", "key", ""),
        repeatCommandHotkey: IniRead(ini, "repeatHotkey", "key", ""),
        midiPort: IniRead(ini, "midiport", "key", ""),
        midiPortIndex: 1,
    }

    ; GATHER ALL AVAILABLE MIDI PORTS
    midiPorts := []
    For dev in MidiOut.GetDeviceList() {
        midiPorts.push(dev.Name)
        if (dev.Name == settings.midiPort) {
            settings.midiPortIndex := A_Index
        }
    }

    sGui := Gui() ; CREATE THE MAIN SETTINGS GUI

    ; CUBASE VERSION DROPDOWN LIST
    sGui.Add("GroupBox", "w600 h50", "Set your Cubase Version:")
    cubaseVersionDDL := sGui.Add("DDL","vCubaseVersionDDL h150 xp+10 yp+20 " settings.cubaseVersionDDLIndex, ["Cubase 12","Cubase 13","Cubase 14"])

    ; KEYCOMMANDS.XML FILE SELECT
    sGui.Add("GroupBox", "w600 h50 x10 y+20", "Select the location of your KeyCommands.xml: ")
    fileSelectBtn := sGui.Add("Button", "-Default w80 xp+10 yp+20", "Select File")
    fileSelectBtn.OnEvent("Click", selectXMLfile)
    xmlPathText := sGui.Add("Text","vpathText w500 YP YP+5", settings.xmlFilePath)
    xmlPathText.SetFont("italic", )

    ; DRIVER SCRIPTS FOLDER SELECT
    sGui.Add("GroupBox", "w600 h50 x10 y+20", "Select the location of your Driver Scripts folder. (Usually /User/Documents/Steinberg/Cubase/MIDI Remote/Driver Scripts) ")
    folderSelectBtn := sGui.Add("Button", "-Default w80 xp+10 yp+20", "Select Folder")
    folderSelectBtn.OnEvent("Click", selectScriptFolder)
    scriptDirText := sGui.Add("Text","vscriptDirText w500 YP YP+5", settings.scriptDir)
    scriptDirText.SetFont("italic", )

    ; ACTIVATION HOTKEY SELECT
    sGui.Add("GroupBox","w600 h50 xm y+20", "Set a key command for activating the jump bar:")
    chosenHotKey := sGui.Add("Hotkey", "vChosenHotkey xp+10 yp+20", settings.defaultHotkey)

    ; ACTIVATION HOTKEY SELECT
    sGui.Add("GroupBox","w600 h50 xm y+20", "Set a key command for repeating your last used command:")
    chosenRepeatHotKey := sGui.Add("Hotkey", "vChosenRepeatHotkey xp+10 yp+20", settings.repeatCommandHotkey)

    ; MIDI PORT SELECT
    sGui.Add("GroupBox","w600 xp-10 y+20", "Select Midi Port to use: ")
    midiPortList := sGui.Add("DDL","vmidiPortList xp+10 yp+20 w300 h150 " . "Choose" . settings.midiPortIndex, midiPorts)

    ; SAVE BUTTON
    sGui.Add("Button", "default xp-10 y+30", "Save Settings").OnEvent("Click", processSettings)

    sGui.Title := SETTINGS_WINDOW_NAME
    sGui.OnEvent("Close", settingsGuiClose)
    sGui.Show("H400")
}

settingsGuiClose(*) {
    unsavedSettings := settings.cubaseVersion == cubaseVersionDDL.Text &&
                       settings.xmlFilePath == xmlPathText.Text &&
                       settings.scriptDir == scriptDirText.Text &&
                       settings.defaultHotkey == chosenHotKey.Value &&
                       settings.repeatCommandHotkey == chosenRepeatHotKey.Value &&
                       settings.midiPort == midiPortList.Text
    if (!unsavedSettings) {
        if (MsgBox("You have unsaved changes, are you sure you want to close the GUI?", "", "y/n") == "No")
            return true  ; true = 1
    }
    Hotkey(openGuiHotkey, OpenGui, "On") ;turn on jumpkey hotkey
}

processSettings(*) {
    global midi
    IniWrite(cubaseVersionDDL.Text, ini, "cubaseVersion", "key")
    IniWrite(cubaseVersionDDL.Value, ini, "cubaseVersionDDLIndex", "key")
    IniWrite(xmlPathText.Text, ini, "keycommands_path", "key")
    IniWrite(scriptDirText.Text, ini, "script_dir", "key")
    IniWrite(chosenHotKey.Value, ini, "hotkey", "key")
    IniWrite(chosenRepeatHotKey.Value, ini, "repeatHotkey", "key")
    IniWrite(midiPortList.Text, ini, "midiport", "key")
    MsgBox("Settings saved to " . ini)
    Hotkey(openGuiHotkey, OpenGui, "On") ;turn on jumpkey hotkey
    sGui.Hide()

    if isSet(midi) ;make sure midi port gets deleted so it can be re-opened
        midi.__Delete()
    Init()
}

selectXMLfile(*) {
    global
    selectedFile := FileSelect(3, "%\AppData\Roaming\Steinberg\" . cubaseVersionDDL.Text . "_64\", "Select your Cubase Keybinds", "XML Source File (*.xml)")
    if selectedFile = ""
        return
    SplitPath(selectedFile, &name)
    if (name == "Key Commands.xml") {
        xmlPathText.Text := selectedFile
    } else {
        result := MsgBox("Incorrect file selected: " . name, "Invalid file", "RetryCancel")
        if (result == "Retry") {
            selectXMLfile()
        }
        else
            return
    }

}

selectScriptFolder(*) {
    global
    selectedFolder := DirSelect(, 0, "Select your Driver Scripts Folder")
    if selectedFolder = ""
        return
    SplitPath(selectedFolder, &OutName)
    if (OutName == "Driver Scripts") {
        scriptDirText.Text := selectedFolder
    } else {
        result := MsgBox("Incorrect folder selected: " . OutName, "Invalid folder", "RetryCancel")
        if (result == "Retry") {
            selectScriptFolder()
        }
        else
            return
    }
    return
}