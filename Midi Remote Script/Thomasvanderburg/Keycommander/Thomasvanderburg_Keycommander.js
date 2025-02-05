var midiremote_api = require("midiremote_api_v1")
var deviceDriver = midiremote_api.makeDeviceDriver("Thomasvanderburg", "Thomasvanderburg_Keycommander", "Thomas van der Burg")

var midiInput = deviceDriver.mPorts.makeMidiInput("MIDI Input")

deviceDriver.makeDetectionUnit().detectSingleInput(midiInput)
  .expectInputNameEquals('loopMIDI Keycommander')

// START_JSONDATA
var jsonData = {
 "02,119": [
  [
   1,
   "Preferences",
   "Controls - Value Box\/Time Control Mode"
  ],
  [
   2,
   "Preferences",
   "MediaBay - Scan Folders only when MediaBay is open"
  ],
  [
   3,
   "Preferences",
   "MediaBay - Scan unknown File Types"
  ],
  [
   4,
   "Preferences",
   "Editing - 'Edit Solo'\/'Record in MIDI Editors' follow Focus"
  ],
  [
   5,
   "Preferences",
   "Project & MixConsole - Enable Record on Selected MIDI Track"
  ],
  [
   6,
   "Preferences",
   "MIDI - MIDI-CI Support"
  ],
  [
   7,
   "Preferences",
   "MIDI - MIDI Thru Active"
  ],
  [
   8,
   "Preferences",
   "MIDI - Reset on Stop"
  ],
  [
   9,
   "Preferences",
   "MIDI - Never Reset Chased Controllers"
  ],
  [
   10,
   "Preferences",
   "MIDI - Record-Enable allows MIDI Thru"
  ],
  [
   11,
   "Preferences",
   "MIDI - Snap MIDI Parts to Bars"
  ],
  [
   12,
   "Preferences",
   "MIDI - Legato Mode: Between Selected Notes Only"
  ],
  [
   13,
   "Preferences",
   "MIDI - Split MIDI Events"
  ],
  [
   14,
   "Preferences",
   "MIDI - Split MIDI Controllers"
  ],
  [
   15,
   "Preferences",
   "MIDI - High Resolution Display Range"
  ],
  [
   16,
   "Preferences",
   "MIDI - High Resolution Display Format"
  ],
  [
   17,
   "Preferences",
   "MIDI - ASIO Latency Compensation Active by Default"
  ],
  [
   18,
   "Preferences",
   "MIDI - Add Latency to MIDI-Thru Processing"
  ],
  [
   19,
   "Preferences",
   "MIDI - Replace Recording in Editors"
  ],
  [
   20,
   "Preferences",
   "MIDI - Insert Reset Events after Record"
  ],
  [
   21,
   "Preferences",
   "MIDI - Audition through MIDI Inserts\/Sends"
  ],
  [
   22,
   "Preferences",
   "MIDI - MIDI Latency Mode"
  ],
  [
   23,
   "Preferences",
   "MIDI - Part Data Mode"
  ],
  [
   24,
   "Preferences",
   "MIDI - Show Controllers"
  ],
  [
   25,
   "Preferences",
   "Editors - Use Drum Editor when Drum Map is assigned"
  ],
  [
   26,
   "Preferences",
   "MIDI - Select Controllers in Note Range: Use Extended Note Context"
  ],
  [
   27,
   "Preferences",
   "Plug-ins - Warn Before Removing Modified Effects"
  ],
  [
   28,
   "Preferences",
   "Plug-ins - Open Effect Editor After Loading it"
  ],
  [
   29,
   "Preferences",
   "Plug-ins - Create MIDI track when loading VSTi"
  ],
  [
   30,
   "Preferences",
   "Audio - Interpolate Audio Waveforms"
  ],
  [
   31,
   "Preferences",
   "Audio - Remove Regions\/Hitpoints on all Offline Processes"
  ],
  [
   32,
   "Preferences",
   "Audio - On Processing Shared Clips"
  ],
  [
   33,
   "Preferences",
   "Audio - Simple Crossfade Editor"
  ],
  [
   34,
   "Preferences",
   "Audio - Enable Automatic Hitpoint Detection"
  ],
  [
   35,
   "Preferences",
   "Audio - Time Stretch Tool Algorithm"
  ],
  [
   36,
   "Preferences",
   "Transport - Playback Toggle triggers Local Preview"
  ],
  [
   37,
   "Preferences",
   "Audio - Create Audio Images During Record"
  ],
  [
   38,
   "Preferences",
   "Audio - Treat Muted Audio Events like Deleted"
  ],
  [
   39,
   "Preferences",
   "Project & MixConsole - Enable Record on Selected Audio Track"
  ],
  [
   40,
   "Preferences",
   "Audio - Show Event Volume Curves Always"
  ],
  [
   41,
   "Preferences",
   "Audio - Append Clip Name to Event Name"
  ],
  [
   42,
   "Preferences",
   "Audio - Show Waveforms"
  ],
  [
   43,
   "Preferences",
   "Audio - Show Hitpoints on Selected Events"
  ],
  [
   44,
   "Preferences",
   "Audio - Background Color Modulation"
  ],
  [
   45,
   "Preferences",
   "Audio - Use Mouse Wheel for Event Volume and Fades"
  ],
  [
   46,
   "Preferences",
   "Audio - Default Warping Algorithm"
  ],
  [
   47,
   "Preferences",
   "Video - Extract Audio on Import Video File"
  ],
  [
   48,
   "Preferences",
   "MediaBay - Allow Editing in Results List"
  ],
  [
   49,
   "Preferences",
   "MediaBay - Show File Extensions in Results List"
  ],
  [
   50,
   "Preferences",
   "VST - Warn if real time mixdown is required in order to include external plug-in."
  ],
  [
   51,
   "Preferences",
   "VariAudio - Inhibit warning when changing the Sample Data"
  ],
  [
   52,
   "Preferences",
   "VariAudio - Inhibit warning when applying Offline Processes"
  ],
  [
   53,
   "Preferences",
   "Markers - Show Marker Lines"
  ],
  [
   54,
   "Preferences",
   "Editing - Display Warning before Deleting Non-Empty Tracks"
  ],
  [
   55,
   "Preferences",
   "Audio - Snap to Zero Crossing"
  ],
  [
   56,
   "Preferences",
   "Controls - Knob Mode"
  ],
  [
   57,
   "Preferences",
   "Controls - Slider Mode"
  ],
  [
   58,
   "Preferences",
   "General - Show Tips"
  ],
  [
   59,
   "Preferences",
   "Tools - Show Toolbox on Right-Click"
  ],
  [
   60,
   "Preferences",
   "Project & MixConsole - Select Channel\/Track on Solo"
  ],
  [
   61,
   "Preferences",
   "Project & MixConsole - Select Channel\/Track on Edit Settings"
  ],
  [
   62,
   "Preferences",
   "Project & MixConsole - Scroll to selected Track"
  ],
  [
   63,
   "Preferences",
   "Tools - Show Vertical Cross Hair Cursor Line"
  ],
  [
   64,
   "Preferences",
   "Tools - Show Horizontal Cross Hair Cursor Line"
  ],
  [
   65,
   "Preferences",
   "General - Run Setup on Create New Project"
  ],
  [
   66,
   "Preferences",
   "General - Open Projects in Last Used View"
  ],
  [
   67,
   "Preferences",
   "General - Show News in Hub"
  ],
  [
   68,
   "Preferences",
   "General - Open Last Project on Startup"
  ],
  [
   69,
   "Preferences",
   "General - Auto Save"
  ],
  [
   70,
   "Preferences",
   "Project & MixConsole - Sync Selection in Project Window and MixConsole"
  ],
  [
   71,
   "Preferences",
   "Editing - Default Track Time Type"
  ],
  [
   72,
   "Preferences",
   "Folders - Show Data on Folder Tracks"
  ],
  [
   73,
   "Preferences",
   "Folders - Show Event Details"
  ],
  [
   74,
   "Preferences",
   "Project & MixConsole - Scrolling: Disable Mouse Wheel for Parameter Change"
  ],
  [
   75,
   "Preferences",
   "Transport - Show Timecode Subframes"
  ],
  [
   76,
   "Preferences",
   "Transport - Stop playback while winding"
  ],
  [
   77,
   "Preferences",
   "Record - Deactivate Punch In on Stop"
  ],
  [
   78,
   "Preferences",
   "Record - Stop after Automatic Punch Out"
  ],
  [
   79,
   "Preferences",
   "Plug-ins - Plug-in Editors \"Always on Top\""
  ],
  [
   80,
   "Preferences",
   "Plug-ins - Synchronize Plug-in Program Selection to Track Selection"
  ],
  [
   81,
   "Preferences",
   "VST - Default Stereo Panner Mode"
  ],
  [
   82,
   "Preferences",
   "VST - Connect Sends automatically for each newly created Channel"
  ],
  [
   83,
   "Preferences",
   "Scrub - Use High Quality Scrub Mode"
  ],
  [
   84,
   "Preferences",
   "Scrub - Use Inserts While Scrubbing"
  ],
  [
   85,
   "Preferences",
   "VST - Auto Monitoring"
  ],
  [
   86,
   "Preferences",
   "Audio - When Recording Wave Files larger than 4 GB"
  ],
  [
   87,
   "Preferences",
   "VST - Instruments use Automation Read All and Write All"
  ],
  [
   88,
   "Preferences",
   "VST - Mute Pre-Send when Mute"
  ],
  [
   89,
   "Preferences",
   "VST - Default Send Level"
  ],
  [
   90,
   "Preferences",
   "VST - Group Channels: Mute Sources as well"
  ],
  [
   91,
   "Preferences",
   "VST - Do Not Connect Input\/Output Busses When Loading External Projects"
  ],
  [
   92,
   "Preferences",
   "VST - Warn on Processing Overloads"
  ],
  [
   93,
   "Preferences",
   "Metering - Map Input Bus Metering to Audio Track (in Direct Monitoring)"
  ],
  [
   94,
   "Preferences",
   "Plug-ins - Suspend VST 3 plug-in processing when no audio signals are received"
  ],
  [
   95,
   "Preferences",
   "Editing - Delete Overlaps"
  ],
  [
   96,
   "Preferences",
   "Editing - Parts Get Track Names"
  ],
  [
   97,
   "Preferences",
   "Editing - Lock Event Attributes"
  ],
  [
   98,
   "Preferences",
   "Event Display - Show Event Names"
  ],
  [
   99,
   "Preferences",
   "Event Display - Hide Truncated Event Names"
  ],
  [
   100,
   "Preferences",
   "Event Display - Show Overlaps"
  ],
  [
   101,
   "Preferences",
   "Zoom - Quick Zoom"
  ],
  [
   102,
   "Preferences",
   "Zoom - Use Selection Start as Zoom Anchor"
  ],
  [
   103,
   "Preferences",
   "Editing - Cycle Follows Range Selection"
  ],
  [
   104,
   "Preferences",
   "Editing - Auto Select Events under Cursor"
  ],
  [
   105,
   "Preferences",
   "Transport - Locate when Clicked in Empty Space"
  ],
  [
   106,
   "Preferences",
   "Project & MixConsole - Enable Solo on Selected Track"
  ],
  [
   107,
   "Preferences",
   "Project & MixConsole - Deep Track Folding"
  ],
  [
   108,
   "Preferences",
   "Project & MixConsole - Enlarge Selected Track"
  ],
  [
   109,
   "Preferences",
   "Zoom - Zoom while Locating in Time Scale"
  ],
  [
   110,
   "Preferences",
   "Transport - Clicking Locator Range in Upper Part of the Ruler Activates Cycle"
  ],
  [
   111,
   "Preferences",
   "Editors - Double-click Destination"
  ],
  [
   112,
   "Preferences",
   "Editors - Open Command Destination"
  ],
  [
   113,
   "Preferences",
   "Editing - Use Up\/Down Navigation Commands for Selecting Tracks only"
  ],
  [
   114,
   "Preferences",
   "Editing - Track Selection Follows Event Selection"
  ],
  [
   115,
   "Preferences",
   "Editing - Select Track on Background Click"
  ],
  [
   116,
   "Preferences",
   "Zoom - Zoom Tool Standard Mode: Horizontal Zooming Only"
  ],
  [
   117,
   "Preferences",
   "Tools - Select Tool: Show Extra Info"
  ],
  [
   118,
   "Preferences",
   "Tools - Show Notification when Switching Tool Mode with Key Command"
  ],
  [
   119,
   "Preferences",
   "Event Display - Smallest Track Height To Show Data"
  ],
  [
   120,
   "Preferences",
   "Event Display - Smallest Track Height To Show Name"
  ],
  [
   121,
   "Preferences",
   "Editors - Editor Content Follows Event Selection"
  ],
  [
   122,
   "Preferences",
   "Control Room - Show Control Room Volume in Transport Panel"
  ],
  [
   123,
   "Preferences",
   "Control Room - Auto Disable Talkback Mode"
  ],
  [
   124,
   "Preferences",
   "Control Room - Use Phones Channel as Preview Channel"
  ],
  [
   125,
   "Preferences",
   "Control Room - Dim Cue during Talkback"
  ],
  [
   126,
   "Preferences",
   "Control Room - Exclusive Device Ports for Monitor Channels"
  ],
  [
   127,
   "Preferences",
   "Track & MixConsole Channel Colors - Auto Track\/Channel Color Mode"
  ]
 ],
 "02,120": [
  [
   1,
   "Preferences",
   "Tracks - Track Name Font Weight"
  ],
  [
   2,
   "Preferences",
   "VST - Activate 'Link Panners' for New Tracks"
  ],
  [
   3,
   "Preferences",
   "VST - Warn on Channel Configuration Change"
  ],
  [
   4,
   "Preferences",
   "General - Enable Usage Logging"
  ],
  [
   5,
   "Process Logical Preset",
   "Add Note [+12],if ModWheel is above 64"
  ],
  [
   6,
   "Process Logical Preset",
   "Delete SMF Events"
  ],
  [
   7,
   "Process Logical Preset",
   "Delete all Controller in Cycle Range"
  ],
  [
   8,
   "Process Logical Preset",
   "Delete each 5th note"
  ],
  [
   9,
   "Process Logical Preset",
   "Kill Notes on C-Major"
  ],
  [
   10,
   "Process Logical Preset",
   "Scale down Velocity in Sustain Range"
  ],
  [
   11,
   "Process Logical Preset",
   "Select all Events beyond Cursor"
  ],
  [
   12,
   "Process Logical Preset",
   "Select all Events in Cycle Range"
  ],
  [
   13,
   "Process Logical Preset",
   "Shift Key C1 Transpose by 24"
  ],
  [
   14,
   "Process Logical Preset",
   "Shift Notes by 12 Ticks beyond Cursor"
  ],
  [
   15,
   "Process Logical Preset",
   "Transform Notes after D#3 or C#3"
  ],
  [
   16,
   "Process Logical Preset",
   "Transpose EventsInSustainRange"
  ],
  [
   17,
   "Process Logical Preset",
   "CSB Legato Offset Fast"
  ],
  [
   18,
   "Process Logical Preset",
   "CSB Legato Offset Slow"
  ],
  [
   19,
   "Process Logical Preset",
   "CSS Legato Offset Fast"
  ],
  [
   20,
   "Process Logical Preset",
   "CSS Legato Offset Med"
  ],
  [
   21,
   "Process Logical Preset",
   "CSS Legato Offset Slow"
  ],
  [
   22,
   "Process Logical Preset",
   "CSW Legato Offset Fast"
  ],
  [
   23,
   "Process Logical Preset",
   "CSW Legato Offset Med"
  ],
  [
   24,
   "Process Logical Preset",
   "CSW Legato Offset Slow"
  ],
  [
   25,
   "Process Logical Preset",
   "Add 4th Above"
  ],
  [
   26,
   "Process Logical Preset",
   "Add 4th Below"
  ],
  [
   27,
   "Process Logical Preset",
   "Add 5th Above"
  ],
  [
   28,
   "Process Logical Preset",
   "Add 5th Below"
  ],
  [
   29,
   "Process Logical Preset",
   "Add Minor Sevenths to Chords with 3 or More Voices"
  ],
  [
   30,
   "Process Logical Preset",
   "Add Ninths to Chords"
  ],
  [
   31,
   "Process Logical Preset",
   "Add Octave Above"
  ],
  [
   32,
   "Process Logical Preset",
   "Add Octave Below"
  ],
  [
   33,
   "Process Logical Preset",
   "Add Octaves to Chords with Less than 4 Voices"
  ],
  [
   34,
   "Process Logical Preset",
   "Add maj3 Above"
  ],
  [
   35,
   "Process Logical Preset",
   "Add maj3 Below"
  ],
  [
   36,
   "Process Logical Preset",
   "Add min3 Above"
  ],
  [
   37,
   "Process Logical Preset",
   "Add min3 Below"
  ],
  [
   38,
   "Process Logical Preset",
   "Delete Fifths from Chords with 3 or More Voices"
  ],
  [
   39,
   "Process Logical Preset",
   "Delete Minor Sevenths of Chords"
  ],
  [
   40,
   "Process Logical Preset",
   "Delete Notes that do not Match the Current Scale"
  ],
  [
   41,
   "Process Logical Preset",
   "Extract Alto"
  ],
  [
   42,
   "Process Logical Preset",
   "Extract Diminished and Augmented Fifths of Chords"
  ],
  [
   43,
   "Process Logical Preset",
   "Select Highest MIDI Volume CC"
  ],
  [
   44,
   "Process Logical Preset",
   "Select Highest Pitch"
  ],
  [
   45,
   "Process Logical Preset",
   "Select Highest Pitches and 4 Semitones Below"
  ],
  [
   46,
   "Process Logical Preset",
   "Select Highest Velocity"
  ],
  [
   47,
   "Process Logical Preset",
   "Select Notes that do not Match the Current Chord"
  ],
  [
   48,
   "Process Logical Preset",
   "Select bottom note"
  ],
  [
   49,
   "Process Logical Preset",
   "Select top note"
  ],
  [
   50,
   "Process Logical Preset",
   "Transpose Highest Pitches 1 Octave Down"
  ],
  [
   51,
   "Process Logical Preset",
   "Transpose Lowest Pitches 1 Octave Up"
  ],
  [
   52,
   "Process Logical Preset",
   "Convert MIDI Expression to VST3 Volume"
  ],
  [
   53,
   "Process Logical Preset",
   "Create VST3 Pan OneShot"
  ],
  [
   54,
   "Process Logical Preset",
   "Create VST3 Tuning OneShot"
  ],
  [
   55,
   "Process Logical Preset",
   "Erase in Cycle"
  ],
  [
   56,
   "Process Logical Preset",
   "Invert Values"
  ],
  [
   57,
   "Process Logical Preset",
   "Light VST3 Auto Detune"
  ],
  [
   58,
   "Process Logical Preset",
   "Pitchbend to VST3 Tuning"
  ],
  [
   59,
   "Process Logical Preset",
   "Remove All MIDI data"
  ],
  [
   60,
   "Process Logical Preset",
   "Remove All VST3 Events"
  ],
  [
   61,
   "Process Logical Preset",
   "Remove Invalid VST3 Parameter"
  ],
  [
   62,
   "Process Logical Preset",
   "Reverse"
  ],
  [
   63,
   "Process Logical Preset",
   "Set Random VST3 Pan"
  ],
  [
   64,
   "Process Logical Preset",
   "add volume 0 to end of note"
  ],
  [
   65,
   "Process Logical Preset",
   "delete black keys"
  ],
  [
   66,
   "Process Logical Preset",
   "downbeat accent (4-4)"
  ],
  [
   67,
   "Process Logical Preset",
   "extract volume and pan"
  ],
  [
   68,
   "Process Logical Preset",
   "filter off beats"
  ],
  [
   69,
   "Process Logical Preset",
   "insert midi volume for velocity"
  ],
  [
   70,
   "Process Logical Preset",
   "delete muted"
  ],
  [
   71,
   "Process Logical Preset",
   "delete short notes"
  ],
  [
   72,
   "Process Logical Preset",
   "double tempo"
  ],
  [
   73,
   "Process Logical Preset",
   "fixed velocity 100"
  ],
  [
   74,
   "Process Logical Preset",
   "half tempo"
  ],
  [
   75,
   "Process Logical Preset",
   "push back - 4"
  ],
  [
   76,
   "Process Logical Preset",
   "push forward   +4"
  ],
  [
   77,
   "Process Logical Preset",
   "random notes (c3 to c5)"
  ],
  [
   78,
   "Process Logical Preset",
   "random velocity (60 to 100)"
  ],
  [
   79,
   "Process Logical Preset",
   "del patch changes"
  ],
  [
   80,
   "Process Logical Preset",
   "del velocity below 30"
  ],
  [
   81,
   "Process Logical Preset",
   "del velocity below 35"
  ],
  [
   82,
   "Process Logical Preset",
   "del velocity below 40"
  ],
  [
   83,
   "Process Logical Preset",
   "del velocity below 45"
  ],
  [
   84,
   "Process Logical Preset",
   "del.aftertouch"
  ],
  [
   85,
   "Process Logical Preset",
   "extract note (c3  60)"
  ],
  [
   86,
   "Process Logical Preset",
   "high notes to channel 1"
  ],
  [
   87,
   "Process Logical Preset",
   "low notes to channel 2"
  ],
  [
   88,
   "Process Logical Preset",
   "set notes to fixed pitch (c3)"
  ],
  [
   89,
   "Process Logical Preset",
   "transpose +1"
  ],
  [
   90,
   "Process Logical Preset",
   "transpose +12"
  ],
  [
   91,
   "Process Logical Preset",
   "transpose -1"
  ],
  [
   92,
   "Process Logical Preset",
   "transpose -12"
  ],
  [
   93,
   "Process Logical Preset",
   "CC 55 (127)"
  ],
  [
   94,
   "Process Logical Preset",
   "Delete CC before cursor"
  ],
  [
   95,
   "Process Logical Preset",
   "Duplicate notes"
  ],
  [
   96,
   "Process Logical Preset",
   "Every Other Note"
  ],
  [
   97,
   "Process Logical Preset",
   "Filter Poly Pressure"
  ],
  [
   98,
   "Process Logical Preset",
   "Midi CC1 + 5"
  ],
  [
   99,
   "Process Logical Preset",
   "Midi CC1 - 5"
  ],
  [
   100,
   "Process Logical Preset",
   "Midi CC1 .95"
  ],
  [
   101,
   "Process Logical Preset",
   "Midi CC1 1.05"
  ],
  [
   102,
   "Process Logical Preset",
   "Midi Send Transform"
  ],
  [
   103,
   "Process Logical Preset",
   "Midi send trans."
  ],
  [
   104,
   "Process Logical Preset",
   "Randomize Position"
  ],
  [
   105,
   "Process Logical Preset",
   "Randomize Velocity"
  ],
  [
   106,
   "Process Logical Preset",
   "Select All CC"
  ],
  [
   107,
   "Process Logical Preset",
   "Select All High Notes"
  ],
  [
   108,
   "Process Logical Preset",
   "Select All Low Notes"
  ],
  [
   109,
   "Process Logical Preset",
   "Select All Middle Notes"
  ],
  [
   110,
   "Process Logical Preset",
   "Select CC Beyond Cursor"
  ],
  [
   111,
   "Process Logical Preset",
   "Select CC1"
  ],
  [
   112,
   "Process Logical Preset",
   "Select first cc value"
  ],
  [
   113,
   "Process Logical Preset",
   "init"
  ],
  [
   114,
   "Process Logical Preset",
   "Double Tempo"
  ],
  [
   115,
   "Process Logical Preset",
   "Half Tempo"
  ],
  [
   116,
   "Process Logical Preset",
   "Shift Position +1 Frame"
  ],
  [
   117,
   "Process Logical Preset",
   "Shift Position +10 Ticks"
  ],
  [
   118,
   "Process Logical Preset",
   "Shift Position -1 Frame"
  ],
  [
   119,
   "Process Logical Preset",
   "Shift Position -10 Ticks"
  ],
  [
   120,
   "Process Logical Preset",
   "Copy CC1 (Modulation) of Ch1 to Ch2"
  ],
  [
   121,
   "Process Logical Preset",
   "Copy CC11 (Expression) of Ch1 to Ch2"
  ],
  [
   122,
   "Process Logical Preset",
   "Shift All CC Positions +1 Frame"
  ],
  [
   123,
   "Process Logical Preset",
   "Shift All CC Positions +10 Ticks"
  ],
  [
   124,
   "Process Logical Preset",
   "Shift All CC Positions -1 Frame"
  ],
  [
   125,
   "Process Logical Preset",
   "Shift All CC Positions -10 Ticks"
  ],
  [
   126,
   "Process Logical Preset",
   "Copy Highest Note in Chords to New Track"
  ],
  [
   127,
   "Process Logical Preset",
   "Copy Note Velocity to CC1 (Modulation) Value"
  ]
 ],
 "02,121": [
  [
   1,
   "Process Logical Preset",
   "Copy Note Velocity to CC11 (Expression) Value"
  ],
  [
   2,
   "Process Logical Preset",
   "Extract 3rd Positions in Chord to Lanes"
  ],
  [
   3,
   "Process Logical Preset",
   "Extract Kick Drum (C1) to New Track"
  ],
  [
   4,
   "Process Logical Preset",
   "Extract Snare Drum (D1) to New Track"
  ],
  [
   5,
   "Process Logical Preset",
   "Extract Volume and Pan"
  ],
  [
   6,
   "Process Logical Preset",
   "Delete All Data in Selected Cycle Markers"
  ],
  [
   7,
   "Process Logical Preset",
   "Delete Every 5th Note"
  ],
  [
   8,
   "Process Logical Preset",
   "Delete Melody Line"
  ],
  [
   9,
   "Process Logical Preset",
   "Delete Muted Events"
  ],
  [
   10,
   "Process Logical Preset",
   "Delete Notes Out of Chord"
  ],
  [
   11,
   "Process Logical Preset",
   "Delete Notes Out of Scale"
  ],
  [
   12,
   "Process Logical Preset",
   "Delete Program Change & Bank Select"
  ],
  [
   13,
   "Process Logical Preset",
   "Delete Program Change"
  ],
  [
   14,
   "Process Logical Preset",
   "Delete Short Notes"
  ],
  [
   15,
   "Process Logical Preset",
   "Delete SysEx"
  ],
  [
   16,
   "Process Logical Preset",
   "Add Sub Bass to Chords"
  ],
  [
   17,
   "Process Logical Preset",
   "Change Major Chord to Minor Chord"
  ],
  [
   18,
   "Process Logical Preset",
   "Change Minor Chord to Major Chord"
  ],
  [
   19,
   "Process Logical Preset",
   "Create Pan One Shot"
  ],
  [
   20,
   "Process Logical Preset",
   "Create Random Pan"
  ],
  [
   21,
   "Process Logical Preset",
   "Create Random VST3 Detune"
  ],
  [
   22,
   "Process Logical Preset",
   "Create Tuning One Shot"
  ],
  [
   23,
   "Process Logical Preset",
   "Erase Note Expression in Cycle"
  ],
  [
   24,
   "Process Logical Preset",
   "Remove All MIDI Data Inside Note Expression"
  ],
  [
   25,
   "Process Logical Preset",
   "Increase Length +1 Frame"
  ],
  [
   26,
   "Process Logical Preset",
   "Increase Length +10 Ticks"
  ],
  [
   27,
   "Process Logical Preset",
   "Randomize Length to 16th +-10%"
  ],
  [
   28,
   "Process Logical Preset",
   "Randomize Length to 4th +-10%"
  ],
  [
   29,
   "Process Logical Preset",
   "Randomize Length to 8th +-10%"
  ],
  [
   30,
   "Process Logical Preset",
   "Shorten Length -1 Frame"
  ],
  [
   31,
   "Process Logical Preset",
   "Shorten Length -10 Ticks"
  ],
  [
   32,
   "Process Logical Preset",
   "Quantize to Quarter Notes"
  ],
  [
   33,
   "Process Logical Preset",
   "Randomize Position +-10 Ticks"
  ],
  [
   34,
   "Process Logical Preset",
   "Shift Every 2nd Note +10 Ticks"
  ],
  [
   35,
   "Process Logical Preset",
   "Shift Every 2nd Note -10 Ticks"
  ],
  [
   36,
   "Process Logical Preset",
   "Add Higher Octave to All Notes before Cursor"
  ],
  [
   37,
   "Process Logical Preset",
   "Add Higher Octave to All Notes beyond Cursor"
  ],
  [
   38,
   "Process Logical Preset",
   "Add Lower Octave to All Notes before Cursor"
  ],
  [
   39,
   "Process Logical Preset",
   "Add Lower Octave to All Notes beyond Cursor"
  ],
  [
   40,
   "Process Logical Preset",
   "Randomize Notes (C3 to C5)"
  ],
  [
   41,
   "Process Logical Preset",
   "Set Notes to Fixed Pitch (C3)"
  ],
  [
   42,
   "Process Logical Preset",
   "Transpose 1 Octave up When Sustain Pedal Is Down"
  ],
  [
   43,
   "Process Logical Preset",
   "Transpose All D Pitches to D-2"
  ],
  [
   44,
   "Process Logical Preset",
   "Transpose All Notes before Cursor 1 Octave Down"
  ],
  [
   45,
   "Process Logical Preset",
   "Transpose All Notes before Cursor 1 Octave Up"
  ],
  [
   46,
   "Process Logical Preset",
   "Transpose All Notes beyond Cursor 1 Octave Down"
  ],
  [
   47,
   "Process Logical Preset",
   "Transpose All Notes beyond Cursor 1 Octave Up"
  ],
  [
   48,
   "Process Logical Preset",
   "+10% in Chord"
  ],
  [
   49,
   "Process Logical Preset",
   "+10% in Scale"
  ],
  [
   50,
   "Process Logical Preset",
   "+10% to Downbeat 2_4"
  ],
  [
   51,
   "Process Logical Preset",
   "+10% to Downbeat 3_4"
  ],
  [
   52,
   "Process Logical Preset",
   "+10% to Downbeat 4_4"
  ],
  [
   53,
   "Process Logical Preset",
   "+10% to Off-Beat 2_4"
  ],
  [
   54,
   "Process Logical Preset",
   "+10% to Off-Beat 3_4"
  ],
  [
   55,
   "Process Logical Preset",
   "+10% to Off-Beat 4_4"
  ],
  [
   56,
   "Process Logical Preset",
   "+10%"
  ],
  [
   57,
   "Process Logical Preset",
   "-10% for Off-Beat 3_4"
  ],
  [
   58,
   "Process Logical Preset",
   "-10% for Off-Beat 4_4"
  ],
  [
   59,
   "Process Logical Preset",
   "-10% in Chord"
  ],
  [
   60,
   "Process Logical Preset",
   "-10% in Scale"
  ],
  [
   61,
   "Process Logical Preset",
   "-10% to Downbeat 2_4"
  ],
  [
   62,
   "Process Logical Preset",
   "-10% to Downbeat 3_4"
  ],
  [
   63,
   "Process Logical Preset",
   "-10% to Downbeat 4_4"
  ],
  [
   64,
   "Process Logical Preset",
   "-10% to Off-Beat 2_4"
  ],
  [
   65,
   "Process Logical Preset",
   "-10%"
  ],
  [
   66,
   "Process Logical Preset",
   "-20 Velocity for Notes Not on Beat"
  ],
  [
   67,
   "Process Logical Preset",
   "Compress Notes Velocity Higher Than 100 to 80%"
  ],
  [
   68,
   "Process Logical Preset",
   "Crescendo in Cycle Range"
  ],
  [
   69,
   "Process Logical Preset",
   "Decrescendo in Cycle Range"
  ],
  [
   70,
   "Process Logical Preset",
   "Every Other Hi-Hat (F#1) Velocity -40"
  ],
  [
   71,
   "Process Logical Preset",
   "Expand Notes Velocity Lower than 20 to 120%"
  ],
  [
   72,
   "Process Logical Preset",
   "Randomize Velocity Relatively (-10 to 10)"
  ],
  [
   73,
   "Process Logical Preset",
   "Transform Velocity +10%"
  ],
  [
   74,
   "Process Logical Preset",
   "Transform Velocity -10%"
  ],
  [
   75,
   "Process Logical Preset",
   "Velocity +10% for Each 2nd Note"
  ],
  [
   76,
   "Process Logical Preset",
   "Velocity -10% for Each 2nd Note"
  ],
  [
   77,
   "Process Logical Preset",
   "Deselect Lowest Notes in Chords"
  ],
  [
   78,
   "Process Logical Preset",
   "Select Aftertouch in Cycle Range"
  ],
  [
   79,
   "Process Logical Preset",
   "Select All Notes That Start at the Beginning of the Bar"
  ],
  [
   80,
   "Process Logical Preset",
   "Select Chord Notes"
  ],
  [
   81,
   "Process Logical Preset",
   "Select Every Other Hi-Hat (F#1)"
  ],
  [
   82,
   "Process Logical Preset",
   "Select Every Other Note"
  ],
  [
   83,
   "Process Logical Preset",
   "Select MIDI CCs in Cycle Range"
  ],
  [
   84,
   "Process Logical Preset",
   "Select Melody Line"
  ],
  [
   85,
   "Process Logical Preset",
   "Select Notes in Chord"
  ],
  [
   86,
   "Process Logical Preset",
   "Select Notes in Cycle Range"
  ],
  [
   87,
   "Process Logical Preset",
   "Select Notes in Scale"
  ],
  [
   88,
   "Process Logical Preset",
   "Select Pitchbend in Cycle Range"
  ],
  [
   89,
   "Process Logical Preset",
   "Select Scale Notes"
  ],
  [
   90,
   "Process Project Logical Editor",
   "Colorize small MIDI parts"
  ],
  [
   91,
   "Process Project Logical Editor",
   "Delete Volume Automation"
  ],
  [
   92,
   "Process Project Logical Editor",
   "English to German conversion"
  ],
  [
   93,
   "Process Project Logical Editor",
   "Move selected events by 1000 bars"
  ],
  [
   94,
   "Process Project Logical Editor",
   "Randomize Start Position for MIDI Parts by 10 Ticks"
  ],
  [
   95,
   "Process Project Logical Editor",
   "Select MIDI Parts named Drum"
  ],
  [
   96,
   "Process Project Logical Editor",
   "Toggle Folder open state if name contains MIDI"
  ],
  [
   97,
   "Process Project Logical Editor",
   "Add  a Date to selected MIDI + Audio Tracks"
  ],
  [
   98,
   "Process Project Logical Editor",
   "Prepend Number and remove spaces & Extra Characters"
  ],
  [
   99,
   "Process Project Logical Editor",
   "Rename and Renumber Audiotracks"
  ],
  [
   100,
   "Process Project Logical Editor",
   "Delete Events beyond Song cursor"
  ],
  [
   101,
   "Process Project Logical Editor",
   "Delete Timesignatures"
  ],
  [
   102,
   "Process Project Logical Editor",
   "Delete all Automation beyond cursor"
  ],
  [
   103,
   "Process Project Logical Editor",
   "Delete empty parts"
  ],
  [
   104,
   "Process Project Logical Editor",
   "Delete muted MIDI parts"
  ],
  [
   105,
   "Process Project Logical Editor",
   "Delete muted elements"
  ],
  [
   106,
   "Process Project Logical Editor",
   "Delete small Part and Events"
  ],
  [
   107,
   "Process Project Logical Editor",
   "Quantize 16th if selected"
  ],
  [
   108,
   "Process Project Logical Editor",
   "Quantize 8th if selected"
  ],
  [
   109,
   "Process Project Logical Editor",
   "Quantize Start by 480 ticks if unquantized"
  ],
  [
   110,
   "Process Project Logical Editor",
   "Select Parts using Color 1"
  ],
  [
   111,
   "Process Project Logical Editor",
   "Select if exactly matching cycle"
  ],
  [
   112,
   "Process Project Logical Editor",
   "Select if not on the beat"
  ],
  [
   113,
   "Process Project Logical Editor",
   "Set length to one bar  if less than one bar"
  ],
  [
   114,
   "Process Project Logical Editor",
   "Shift events by 2 frames"
  ],
  [
   115,
   "Process Project Logical Editor",
   "Shift selected events by 2 frames"
  ],
  [
   116,
   "Process Project Logical Editor",
   "Trim  selected Automation by 10 %"
  ],
  [
   117,
   "Process Project Logical Editor",
   "Delete MIDI tracks"
  ],
  [
   118,
   "Process Project Logical Editor",
   "Delete empty tracks"
  ],
  [
   119,
   "Process Project Logical Editor",
   "Delete muted  tracks"
  ],
  [
   120,
   "Process Project Logical Editor",
   "Toggle Folder close state"
  ],
  [
   121,
   "Process Project Logical Editor",
   "Toggle Folder open state"
  ],
  [
   122,
   "Process Project Logical Editor",
   "Toggle Inserts Bypass for MIDI"
  ],
  [
   123,
   "Process Project Logical Editor",
   "Toggle Mute MIDI Tracks"
  ],
  [
   124,
   "Process Project Logical Editor",
   "Toggle Mute, if name contains voc"
  ],
  [
   125,
   "Process Project Logical Editor",
   "Toggle lanes active"
  ],
  [
   126,
   "Process Project Logical Editor",
   "Unmute all muted MIDI tracks"
  ],
  [
   127,
   "Process Project Logical Editor",
   "Hide All"
  ]
 ],
 "02,122": [
  [
   1,
   "Process Project Logical Editor",
   "Invert Visibility Status for MIDI Tracks"
  ],
  [
   2,
   "Process Project Logical Editor",
   "Invert Visibility Status for Non-Audio and Non-MIDI"
  ],
  [
   3,
   "Process Project Logical Editor",
   "Invert Visibility and Mute Status for MIDI Tracks"
  ],
  [
   4,
   "Process Project Logical Editor",
   "Invert Visibility and Mute Status for Selected Tracks"
  ],
  [
   5,
   "Process Project Logical Editor",
   "Show Tracks Following the Chord Track"
  ],
  [
   6,
   "Process Project Logical Editor",
   "Show Tracks containing Drum in the Name"
  ],
  [
   7,
   "Process Project Logical Editor",
   "Show Tracks with Track Versions"
  ],
  [
   8,
   "Process Project Logical Editor",
   "Show only Audio Tracks - Show all Tracks"
  ],
  [
   9,
   "Process Project Logical Editor",
   "Toggle Mix Group Visibility"
  ],
  [
   10,
   "Process Project Logical Editor",
   "Toggle Reverb Group Visibility"
  ],
  [
   11,
   "Process Project Logical Editor",
   "Toggle Stems Group Visibility"
  ],
  [
   12,
   "Process Project Logical Editor",
   "Toggle Stereo Out Visibility"
  ],
  [
   13,
   "Process Project Logical Editor",
   " Init"
  ],
  [
   14,
   "Process Project Logical Editor",
   "Close all folders"
  ],
  [
   15,
   "Process Project Logical Editor",
   "Hide Empty"
  ],
  [
   16,
   "Process Project Logical Editor",
   "Set Cycle Marker to 30s"
  ],
  [
   17,
   "Process Project Logical Editor",
   "Set Cycle Marker to 60s"
  ],
  [
   18,
   "Process Project Logical Editor",
   "Set to Brass Color"
  ],
  [
   19,
   "Process Project Logical Editor",
   "Set to Ethnic Color"
  ],
  [
   20,
   "Process Project Logical Editor",
   "Set to Misc Color"
  ],
  [
   21,
   "Process Project Logical Editor",
   "Set to Percussion Color"
  ],
  [
   22,
   "Process Project Logical Editor",
   "Set to Strings Color"
  ],
  [
   23,
   "Process Project Logical Editor",
   "Set to Synth Color"
  ],
  [
   24,
   "Process Project Logical Editor",
   "Set to WW Color"
  ],
  [
   25,
   "Process Project Logical Editor",
   "Show All"
  ],
  [
   26,
   "Process Project Logical Editor",
   "Toggle disabled tracks"
  ],
  [
   27,
   "Process Project Logical Editor",
   "Slijm4_DtoCB"
  ],
  [
   28,
   "Process Project Logical Editor",
   "Slijm4_SelectDuplicateBrassAndChangeToDtoCB"
  ],
  [
   29,
   "Process Project Logical Editor",
   "_slijm4_HornsCB"
  ],
  [
   30,
   "Process Project Logical Editor",
   "_slijm4_Monster"
  ],
  [
   31,
   "Process Project Logical Editor",
   "_slijm4_Timpani2"
  ],
  [
   32,
   "Process Project Logical Editor",
   "_slijm4_TrombonesCB"
  ],
  [
   33,
   "Process Project Logical Editor",
   "_slijm4_TubaCB"
  ],
  [
   34,
   "Process Project Logical Editor",
   "_slijm4_celeste2"
  ],
  [
   35,
   "Process Project Logical Editor",
   "_slijm4_mel.percs 2"
  ],
  [
   36,
   "Process Project Logical Editor",
   "_slijm4_metals2"
  ],
  [
   37,
   "Process Project Logical Editor",
   "_slijm4_snares2"
  ],
  [
   38,
   "Process Project Logical Editor",
   "slijm4_A. Guitar"
  ],
  [
   39,
   "Process Project Logical Editor",
   "slijm4_Bass"
  ],
  [
   40,
   "Process Project Logical Editor",
   "slijm4_Brass_HI_CB"
  ],
  [
   41,
   "Process Project Logical Editor",
   "slijm4_Brass_HI_CSB - kopie"
  ],
  [
   42,
   "Process Project Logical Editor",
   "slijm4_Brass_HI_CSB"
  ],
  [
   43,
   "Process Project Logical Editor",
   "slijm4_Brass_LOW_CB"
  ],
  [
   44,
   "Process Project Logical Editor",
   "slijm4_Brass_LOW_CSB"
  ],
  [
   45,
   "Process Project Logical Editor",
   "slijm4_Celeste"
  ],
  [
   46,
   "Process Project Logical Editor",
   "slijm4_Choir"
  ],
  [
   47,
   "Process Project Logical Editor",
   "slijm4_ChoirtoBass"
  ],
  [
   48,
   "Process Project Logical Editor",
   "slijm4_Cymbals"
  ],
  [
   49,
   "Process Project Logical Editor",
   "slijm4_Drum Kits"
  ],
  [
   50,
   "Process Project Logical Editor",
   "slijm4_Duplicate_Brass"
  ],
  [
   51,
   "Process Project Logical Editor",
   "slijm4_Duplicate_Mixbusses"
  ],
  [
   52,
   "Process Project Logical Editor",
   "slijm4_Duplicate_Piano"
  ],
  [
   53,
   "Process Project Logical Editor",
   "slijm4_E. Guitar"
  ],
  [
   54,
   "Process Project Logical Editor",
   "slijm4_Ethnic"
  ],
  [
   55,
   "Process Project Logical Editor",
   "slijm4_Harp"
  ],
  [
   56,
   "Process Project Logical Editor",
   "slijm4_Low Skins"
  ],
  [
   57,
   "Process Project Logical Editor",
   "slijm4_Mel. Percs"
  ],
  [
   58,
   "Process Project Logical Editor",
   "slijm4_Perc Overig"
  ],
  [
   59,
   "Process Project Logical Editor",
   "slijm4_PercToOverig"
  ],
  [
   60,
   "Process Project Logical Editor",
   "slijm4_PercToSnares"
  ],
  [
   61,
   "Process Project Logical Editor",
   "slijm4_Piano"
  ],
  [
   62,
   "Process Project Logical Editor",
   "slijm4_PianotoCeleste"
  ],
  [
   63,
   "Process Project Logical Editor",
   "slijm4_RenameBigDrums"
  ],
  [
   64,
   "Process Project Logical Editor",
   "slijm4_RenameMelPerc"
  ],
  [
   65,
   "Process Project Logical Editor",
   "slijm4_RenameMetals"
  ],
  [
   66,
   "Process Project Logical Editor",
   "slijm4_Reverb Routing & Naming"
  ],
  [
   67,
   "Process Project Logical Editor",
   "slijm4_Reverb Routing"
  ],
  [
   68,
   "Process Project Logical Editor",
   "slijm4_Select ===REVERB==="
  ],
  [
   69,
   "Process Project Logical Editor",
   "slijm4_SkinsToTimp"
  ],
  [
   70,
   "Process Project Logical Editor",
   "slijm4_Snares"
  ],
  [
   71,
   "Process Project Logical Editor",
   "slijm4_String Ensembles"
  ],
  [
   72,
   "Process Project Logical Editor",
   "slijm4_Strings Long"
  ],
  [
   73,
   "Process Project Logical Editor",
   "slijm4_Strings Short"
  ],
  [
   74,
   "Process Project Logical Editor",
   "slijm4_Strings Solo"
  ],
  [
   75,
   "Process Project Logical Editor",
   "slijm4_Timpani"
  ],
  [
   76,
   "Process Project Logical Editor",
   "slijm4_Trailer Hits & FX"
  ],
  [
   77,
   "Process Project Logical Editor",
   "slijm4_Woods and shakers"
  ],
  [
   78,
   "Process Project Logical Editor",
   "slijm4_Woodwinds_HI"
  ],
  [
   79,
   "Process Project Logical Editor",
   "slijm4_Woodwinds_LOW"
  ],
  [
   80,
   "Process Project Logical Editor",
   "Init"
  ],
  [
   81,
   "Process Project Logical Editor",
   "Decrease Volume of Selected Track by 1dB inside Cycle"
  ],
  [
   82,
   "Process Project Logical Editor",
   "Delete All Automation Data of Selected Audio, Instrument & MIDI Tracks inside Cycle"
  ],
  [
   83,
   "Process Project Logical Editor",
   "Delete All Automation Data of Selected Audio, MIDI & Instrument Tracks beyond Cursor"
  ],
  [
   84,
   "Process Project Logical Editor",
   "Delete All Automation Data of Selected Tracks"
  ],
  [
   85,
   "Process Project Logical Editor",
   "Delete All Automation of Selected Audio, Instrument & MIDI Tracks before Cursor"
  ],
  [
   86,
   "Process Project Logical Editor",
   "Delete All Automation of Selected Track after Cursor"
  ],
  [
   87,
   "Process Project Logical Editor",
   "Toggle Automation Read of Visible Tracks"
  ],
  [
   88,
   "Process Project Logical Editor",
   "Toggle Automation Write of Visible Tracks"
  ],
  [
   89,
   "Process Project Logical Editor",
   "Open Key Editor for Parts under Cursor on Tracks Containing 'String' in the Name"
  ],
  [
   90,
   "Process Project Logical Editor",
   "Open Key Editor for Tracks Containing 'String' in the Name"
  ],
  [
   91,
   "Process Project Logical Editor",
   "Open Key Editor of All MIDI Parts in Selected Folder"
  ],
  [
   92,
   "Process Project Logical Editor",
   "Open Key Editor of All MIDI Parts inside Cycle"
  ],
  [
   93,
   "Process Project Logical Editor",
   "Open Key Editor of All MIDI Parts on Selected Tracks"
  ],
  [
   94,
   "Process Project Logical Editor",
   "Open List Editor for Parts in Selected Cycle Marker"
  ],
  [
   95,
   "Process Project Logical Editor",
   "Open Sample Editor of All Audio Events in Selected Folder"
  ],
  [
   96,
   "Process Project Logical Editor",
   "Open Sample Editor of All Audio Events inside Cycle"
  ],
  [
   97,
   "Process Project Logical Editor",
   "Open Sample Editor of All Selected Audio Events on Selected Tracks"
  ],
  [
   98,
   "Process Project Logical Editor",
   "Open Score Editor for MIDI Parts under Cursor"
  ],
  [
   99,
   "Process Project Logical Editor",
   "Open Score Editor for Parts under Cursor on Tracks Containing 'String' in the Name"
  ],
  [
   100,
   "Process Project Logical Editor",
   "Open Score Editor of All MIDI Parts in Selected Folder"
  ],
  [
   101,
   "Process Project Logical Editor",
   "Open Score Editor of All MIDI Parts inside Cycle"
  ],
  [
   102,
   "Process Project Logical Editor",
   "Open Score Editor of All MIDI Parts on Selected Tracks"
  ],
  [
   103,
   "Process Project Logical Editor",
   "Toggle EQ Bypass of Selected Tracks"
  ],
  [
   104,
   "Process Project Logical Editor",
   "Toggle EQ Bypass of Tracks with 'Out' in the Name"
  ],
  [
   105,
   "Process Project Logical Editor",
   "Toggle Inserts Bypass of Selected Tracks"
  ],
  [
   106,
   "Process Project Logical Editor",
   "Toggle Inserts Bypass of Tracks with 'Out' in the Name"
  ],
  [
   107,
   "Process Project Logical Editor",
   "Toggle Sends Bypass of Selected Tracks"
  ],
  [
   108,
   "Process Project Logical Editor",
   "Add Date to Selected MIDI + Audio Track Names"
  ],
  [
   109,
   "Process Project Logical Editor",
   "Append '-Hi' to Selected Track Names"
  ],
  [
   110,
   "Process Project Logical Editor",
   "Append Time to Names of Selected Events or Parts"
  ],
  [
   111,
   "Process Project Logical Editor",
   "Erase End Character on Selected Tracks"
  ],
  [
   112,
   "Process Project Logical Editor",
   "Prepend 'Drums-' to All Track Names in Selected Folder"
  ],
  [
   113,
   "Process Project Logical Editor",
   "Remove 'Brass-' from Track Names"
  ],
  [
   114,
   "Process Project Logical Editor",
   "Rename and Renumber Audio Tracks"
  ],
  [
   115,
   "Process Project Logical Editor",
   "Nudge All Events or Parts on Selected Tracks +1 Frame"
  ],
  [
   116,
   "Process Project Logical Editor",
   "Nudge All Events or Parts on Selected Tracks -1 Frame"
  ],
  [
   117,
   "Process Project Logical Editor",
   "Nudge Crossfade of Selected and Following Event +1 Frame"
  ],
  [
   118,
   "Process Project Logical Editor",
   "Nudge Crossfade of Selected and Following Event -1 Frame"
  ],
  [
   119,
   "Process Project Logical Editor",
   "Nudge Parts or Events inside Cycle +1 Frame"
  ],
  [
   120,
   "Process Project Logical Editor",
   "Nudge Parts or Events inside Cycle -1 Frame"
  ],
  [
   121,
   "Process Project Logical Editor",
   "Nudge Selected Parts and Events +1 Second"
  ],
  [
   122,
   "Process Project Logical Editor",
   "Nudge Selected Parts and Events -1 Second"
  ],
  [
   123,
   "Process Project Logical Editor",
   "Nudge Selected Parts or Events +1 Frame"
  ],
  [
   124,
   "Process Project Logical Editor",
   "Nudge Selected Parts or Events -1 Frame"
  ],
  [
   125,
   "Process Project Logical Editor",
   "Resize Selected Events or Parts Length +1 Frame"
  ],
  [
   126,
   "Process Project Logical Editor",
   "Resize Selected Events or Parts Length -1 Frame"
  ],
  [
   127,
   "Process Project Logical Editor",
   "Colorize Small MIDI parts"
  ]
 ],
 "02,123": [
  [
   1,
   "Process Project Logical Editor",
   "Create Random Detune per Note"
  ],
  [
   2,
   "Process Project Logical Editor",
   "Create Random Pan per Note"
  ],
  [
   3,
   "Process Project Logical Editor",
   "Delete All Muted Events and Parts"
  ],
  [
   4,
   "Process Project Logical Editor",
   "Delete Empty MIDI and Audio Parts"
  ],
  [
   5,
   "Process Project Logical Editor",
   "Delete Small Parts and Events"
  ],
  [
   6,
   "Process Project Logical Editor",
   "Increment Color for Selected Events and Parts"
  ],
  [
   7,
   "Process Project Logical Editor",
   "Process DOP Favorite 1 for Events on Selected Tracks"
  ],
  [
   8,
   "Process Project Logical Editor",
   "Set Length to One Bar If Less than One Bar"
  ],
  [
   9,
   "Process Project Logical Editor",
   "Quantize Selected Data to Eighth Note"
  ],
  [
   10,
   "Process Project Logical Editor",
   "Quantize Selected Data to EighthTriplet"
  ],
  [
   11,
   "Process Project Logical Editor",
   "Quantize Selected Data to Quarter Note"
  ],
  [
   12,
   "Process Project Logical Editor",
   "Quantize Selected Data to Quarter Triplet"
  ],
  [
   13,
   "Process Project Logical Editor",
   "Quantize Selected Data to Sixteenth Triplet"
  ],
  [
   14,
   "Process Project Logical Editor",
   "Quantize Selected Data to Sixteenth"
  ],
  [
   15,
   "Process Project Logical Editor",
   "Quantize Start by 480 Ticks If Unquantized"
  ],
  [
   16,
   "Process Project Logical Editor",
   "Disable Record of All Tracks"
  ],
  [
   17,
   "Process Project Logical Editor",
   "Enable Record of All Tracks"
  ],
  [
   18,
   "Process Project Logical Editor",
   "Enable Record of Visible Tracks"
  ],
  [
   19,
   "Process Project Logical Editor",
   "Toggle Monitor for Tracks Containing 'HALion' in the Name"
  ],
  [
   20,
   "Process Project Logical Editor",
   "Toggle Monitor of All Audio Tracks"
  ],
  [
   21,
   "Process Project Logical Editor",
   "Toggle Monitor of Visible Folders"
  ],
  [
   22,
   "Process Project Logical Editor",
   "Toggle Monitor of Visible Tracks"
  ],
  [
   23,
   "Process Project Logical Editor",
   "Toggle Record Enable of All Tracks"
  ],
  [
   24,
   "Process Project Logical Editor",
   "Toggle Record Enable of Audio Tracks"
  ],
  [
   25,
   "Process Project Logical Editor",
   "Toggle Record of Visible Folders"
  ],
  [
   26,
   "Process Project Logical Editor",
   "Copy All Data on Selected Tracks before Cursor"
  ],
  [
   27,
   "Process Project Logical Editor",
   "Copy All Data on Selected Tracks beyond Cursor"
  ],
  [
   28,
   "Process Project Logical Editor",
   "Copy All Data on Selected Tracks inside Cycle"
  ],
  [
   29,
   "Process Project Logical Editor",
   "Keep Audio Events Only in Selection"
  ],
  [
   30,
   "Process Project Logical Editor",
   "Reduce Data Selection to before Cursor Only"
  ],
  [
   31,
   "Process Project Logical Editor",
   "Reduce Data Selection to beyond Cursor Only"
  ],
  [
   32,
   "Process Project Logical Editor",
   "Reduce Data Selection to inside Cycle Only"
  ],
  [
   33,
   "Process Project Logical Editor",
   "Select All Data on Selected Tracks before Cursor"
  ],
  [
   34,
   "Process Project Logical Editor",
   "Select All Data on Selected Tracks beyond Cursor"
  ],
  [
   35,
   "Process Project Logical Editor",
   "Select All Data on Selected Tracks inside Cycle"
  ],
  [
   36,
   "Process Project Logical Editor",
   "Select All Muted Events or Parts"
  ],
  [
   37,
   "Process Project Logical Editor",
   "Select All Tracks with 'Guitar' in the Name"
  ],
  [
   38,
   "Process Project Logical Editor",
   "Select If Exactly Matching Cycle"
  ],
  [
   39,
   "Process Project Logical Editor",
   "Select MIDI Parts with 'Drum' in the Name"
  ],
  [
   40,
   "Process Project Logical Editor",
   "Select Parts Using Color 1"
  ],
  [
   41,
   "Process Project Logical Editor",
   "Select Tracks Sending to HALion on MIDI Channel 1"
  ],
  [
   42,
   "Process Project Logical Editor",
   "Delete Tempo Changes inside Cycle"
  ],
  [
   43,
   "Process Project Logical Editor",
   "Delete Time Signatures"
  ],
  [
   44,
   "Process Project Logical Editor",
   "Double Tempo before Cursor"
  ],
  [
   45,
   "Process Project Logical Editor",
   "Double Tempo beyond Cursor"
  ],
  [
   46,
   "Process Project Logical Editor",
   "Double Tempo inside Cycle"
  ],
  [
   47,
   "Process Project Logical Editor",
   "Double Tempo of Selected Tempo Events"
  ],
  [
   48,
   "Process Project Logical Editor",
   "Half Tempo inside Cycle"
  ],
  [
   49,
   "Process Project Logical Editor",
   "Halve Tempo of Selected Tempo Events"
  ],
  [
   50,
   "Process Project Logical Editor",
   "Move Tempo Changes before Cursor 1 Bar Left"
  ],
  [
   51,
   "Process Project Logical Editor",
   "Move Tempo Changes before Cursor 1 Bar Right"
  ],
  [
   52,
   "Process Project Logical Editor",
   "Select Tempo Changes inside Cycle and Out of 1_4"
  ],
  [
   53,
   "Process Project Logical Editor",
   "Select Tempo Changes inside Cycle"
  ],
  [
   54,
   "Process Project Logical Editor",
   "Connect Selected Audio Tracks to Stereo Out 2"
  ],
  [
   55,
   "Process Project Logical Editor",
   "Delete All Data on Selected Tracks before Cursor"
  ],
  [
   56,
   "Process Project Logical Editor",
   "Delete All Data on Selected Tracks beyond Cursor"
  ],
  [
   57,
   "Process Project Logical Editor",
   "Delete All Data on Selected Tracks inside Cycle"
  ],
  [
   58,
   "Process Project Logical Editor",
   "Delete Muted Tracks"
  ],
  [
   59,
   "Process Project Logical Editor",
   "Mute Tracks of Selected Events or Parts"
  ],
  [
   60,
   "Process Project Logical Editor",
   "Mute Tracks with Muted Events or Parts"
  ],
  [
   61,
   "Process Project Logical Editor",
   "Set All Audio Track Inputs to No Bus"
  ],
  [
   62,
   "Process Project Logical Editor",
   "Set Time Base to Linear for Selected Tracks"
  ],
  [
   63,
   "Process Project Logical Editor",
   "Show Tracks Containing 'Drum' in the Name"
  ],
  [
   64,
   "Process Project Logical Editor",
   "Switch MIDI Tracks Off and Hide if empty or short"
  ],
  [
   65,
   "Process Project Logical Editor",
   "Switch MIDI Tracks On if empty or short"
  ],
  [
   66,
   "Process Project Logical Editor",
   "Toggle Folder Open State If Name Contains 'MIDI'"
  ],
  [
   67,
   "Process Project Logical Editor",
   "Toggle Lanes Active"
  ],
  [
   68,
   "Process Project Logical Editor",
   "Toggle Mute for Hidden Tracks"
  ],
  [
   69,
   "Process Project Logical Editor",
   "Toggle Time Base for Selected Tracks"
  ],
  [
   70,
   "Process Project Logical Editor",
   "Zoom In on Tracks with Selected Events & Parts"
  ],
  [
   71,
   "Process Project Logical Editor",
   "Collapse All Visible Folders"
  ],
  [
   72,
   "Process Project Logical Editor",
   "Invert Visibility State for MIDI Tracks"
  ],
  [
   73,
   "Process Project Logical Editor",
   "Invert Visibility State for Non-Audio and Non-MIDI"
  ],
  [
   74,
   "Process Project Logical Editor",
   "Invert Visibility and Mute State for MIDI Tracks"
  ],
  [
   75,
   "Process Project Logical Editor",
   "Invert Visibility and Mute State for Selected Tracks"
  ],
  [
   76,
   "Process Project Logical Editor",
   "Open All Visible Folders"
  ],
  [
   77,
   "Process Project Logical Editor",
   "Show All Marker Tracks"
  ],
  [
   78,
   "Process Project Logical Editor",
   "Show All Ruler Tracks"
  ],
  [
   79,
   "Process Project Logical Editor",
   "Toggle Visibility of All Track Types except Audio"
  ],
  [
   80,
   "Process Project Logical Editor",
   "Empty"
  ],
  [
   81,
   "MIDI",
   "List Editor: Show\/Hide Filters"
  ],
  [
   82,
   "MIDI",
   "Pitch Visibility: On\/Off"
  ],
  [
   83,
   "MIDI",
   "Pitch Visibility: Select Next Option"
  ],
  [
   84,
   "MIDI",
   "Type of New Controller Events: Toggle Step\/Ramp"
  ],
  [
   85,
   "MIDI",
   "Pitchbend: Snap Pitchbend Events On\/Off"
  ],
  [
   86,
   "MIDI",
   "Fixed Lengths"
  ],
  [
   87,
   "MIDI",
   "Legato"
  ],
  [
   88,
   "MIDI",
   "Delete Doubles"
  ],
  [
   89,
   "MIDI",
   "Delete Controllers"
  ],
  [
   90,
   "MIDI",
   "Freeze Length"
  ],
  [
   91,
   "MIDI",
   "Transpose"
  ],
  [
   92,
   "MIDI",
   "Transpose Notes"
  ],
  [
   93,
   "MIDI",
   "Logical Editor"
  ],
  [
   94,
   "MIDI",
   "Apply Logical Preset"
  ],
  [
   95,
   "MIDI",
   "Merge MIDI"
  ],
  [
   96,
   "MIDI",
   "Velocity"
  ],
  [
   97,
   "MIDI",
   "Fixed Velocity"
  ],
  [
   98,
   "MIDI",
   "Delete Notes"
  ],
  [
   99,
   "MIDI",
   "Restrict Polyphony"
  ],
  [
   100,
   "MIDI",
   "Pedals to Note Length"
  ],
  [
   101,
   "MIDI",
   "Reverse"
  ],
  [
   102,
   "MIDI",
   "Mirror"
  ],
  [
   103,
   "MIDI",
   "Delete Overlaps (mono)"
  ],
  [
   104,
   "MIDI",
   "Delete Overlaps (poly)"
  ],
  [
   105,
   "MIDI",
   "Thin Out"
  ],
  [
   106,
   "MIDI",
   "Dissolve Part"
  ],
  [
   107,
   "MIDI",
   "Repeat Loop"
  ],
  [
   108,
   "MIDI",
   "Reset"
  ],
  [
   109,
   "MIDI",
   "Send All Notes Off Message"
  ],
  [
   110,
   "MIDI",
   "Toggle Step Input"
  ],
  [
   111,
   "MIDI",
   "Toggle MIDI Input"
  ],
  [
   112,
   "MIDI",
   "Show\/Hide Controller Lanes"
  ],
  [
   113,
   "MIDI",
   "Toggle Computer Keyboard Input"
  ],
  [
   114,
   "MIDI",
   "Controller Lane Setup 7"
  ],
  [
   115,
   "MIDI",
   "Controller Lane Setup 10"
  ],
  [
   116,
   "MIDI",
   "Controller Lane Setup 11"
  ],
  [
   117,
   "MIDI",
   "Controller Lane Setup 12"
  ],
  [
   118,
   "MIDI",
   "Controller Lane Setup 13"
  ],
  [
   119,
   "MIDI",
   "Controller Lane Setup 14"
  ],
  [
   120,
   "MIDI",
   "Controller Lane Setup 15"
  ],
  [
   121,
   "MIDI",
   "Controller Lane Setup 16"
  ],
  [
   122,
   "MIDI",
   "Open Insert Velocities Dialog"
  ],
  [
   123,
   "MIDI",
   "Insert Velocity 1"
  ],
  [
   124,
   "MIDI",
   "Insert Velocity 2"
  ],
  [
   125,
   "MIDI",
   "Insert Velocity 3"
  ],
  [
   126,
   "MIDI",
   "Insert Velocity 4"
  ],
  [
   127,
   "MIDI",
   "Insert Velocity 5"
  ]
 ],
 "02,124": [
  [
   1,
   "MIDI",
   "Auto Select Controllers"
  ],
  [
   2,
   "MIDI",
   "Record In Editor"
  ],
  [
   3,
   "MIDI",
   "Show Used Controllers"
  ],
  [
   4,
   "MIDI",
   "Open CC Automation Setup Dialog"
  ],
  [
   5,
   "MIDI",
   "Drum Editor Length Display"
  ],
  [
   6,
   "MIDI",
   "Merge Tempo from Tapping"
  ],
  [
   7,
   "MIDI",
   "Project Input Transformer"
  ],
  [
   8,
   "MIDI",
   "Freeze Track Params"
  ],
  [
   9,
   "MIDI",
   "Bounce"
  ],
  [
   10,
   "MIDI",
   "ONote Conversion"
  ],
  [
   11,
   "MIDI",
   "Delete Continuous Controllers"
  ],
  [
   12,
   "MIDI",
   "Extract MIDI"
  ],
  [
   13,
   "MIDI",
   "Drummap Setup"
  ],
  [
   14,
   "MIDI",
   "InstrumentMap Setup"
  ],
  [
   15,
   "MIDI",
   "Iterative Quantize"
  ],
  [
   16,
   "MIDI",
   "Quantize"
  ],
  [
   17,
   "MIDI",
   "Undo Quantize"
  ],
  [
   18,
   "MIDI",
   "Freeze Quantize"
  ],
  [
   19,
   "MIDI",
   "Quantize Setup"
  ],
  [
   20,
   "MIDI",
   "Quantize Lengths"
  ],
  [
   21,
   "MIDI",
   "Quantize Ends"
  ],
  [
   22,
   "Editors",
   "Open Drum Editor in Window"
  ],
  [
   23,
   "Editors",
   "Open Drum Editor in Lower Zone"
  ],
  [
   24,
   "Editors",
   "Open Key Editor in Window"
  ],
  [
   25,
   "Editors",
   "Open Key Editor in Lower Zone"
  ],
  [
   26,
   "Editors",
   "Open Audio Part Editor in Window"
  ],
  [
   27,
   "Editors",
   "Open Audio Part Editor in Lower Zone"
  ],
  [
   28,
   "Editors",
   "Open in separate Window\/Lower Zone"
  ],
  [
   29,
   "Editors",
   "Open Sample Editor in Window"
  ],
  [
   30,
   "Editors",
   "Open Sample Editor in Lower Zone"
  ],
  [
   31,
   "Editors",
   "Visibility: Keep Editor Contents on\/off"
  ],
  [
   32,
   "Editors",
   "Show\/Hide Global Tracks in Editor"
  ],
  [
   33,
   "Editors",
   "Track Display Settings: Show\/Hide Tracks in Editor"
  ],
  [
   34,
   "Editors",
   "Track Display Settings: Active Track Only"
  ],
  [
   35,
   "Editors",
   "Track Display Settings: All Visible Tracks"
  ],
  [
   36,
   "Editors",
   "Track Display Settings: Toggle Modes"
  ],
  [
   37,
   "Editors",
   "Open Score Editor in Window"
  ],
  [
   38,
   "Editors",
   "Open Score Editor in Lower Zone"
  ],
  [
   39,
   "Editors",
   "Open Sample Editor"
  ],
  [
   40,
   "Editors",
   "Open Audio Part Editor"
  ],
  [
   41,
   "Editors",
   "Set up Editor Preferences"
  ],
  [
   42,
   "Editors",
   "Show\/Hide Infoview"
  ],
  [
   43,
   "Editors",
   "Show\/Hide Overview"
  ],
  [
   44,
   "Editors",
   "Show\/Hide Status Line"
  ],
  [
   45,
   "Editors",
   "Show\/Hide Regions"
  ],
  [
   46,
   "Edit",
   "Edit Inplace"
  ],
  [
   47,
   "Edit",
   "Open Key Editor"
  ],
  [
   48,
   "Edit",
   "Open List Editor"
  ],
  [
   49,
   "Edit",
   "Open In-Place Editor"
  ],
  [
   50,
   "Edit",
   "Open Drum Editor"
  ],
  [
   51,
   "Edit",
   "Open Score Editor"
  ],
  [
   52,
   "Edit",
   "Open\/Close Editor"
  ],
  [
   53,
   "Edit",
   "Scale Assistant: Quantize Pitches"
  ],
  [
   54,
   "Edit",
   "Scale Assistant: Toggle Show Scale Note Guides"
  ],
  [
   55,
   "Edit",
   "Scale Assistant: Toggle Snap Pitch Editing"
  ],
  [
   56,
   "Edit",
   "Scale Assistant: Toggle Snap Live Input"
  ],
  [
   57,
   "Edit",
   "Undo"
  ],
  [
   58,
   "Edit",
   "Redo"
  ],
  [
   59,
   "Edit",
   "History"
  ],
  [
   60,
   "Edit",
   "Cut"
  ],
  [
   61,
   "Edit",
   "Copy"
  ],
  [
   62,
   "Edit",
   "Paste"
  ],
  [
   63,
   "Edit",
   "Select All"
  ],
  [
   64,
   "Edit",
   "Select None"
  ],
  [
   65,
   "Edit",
   "Preferences"
  ],
  [
   66,
   "Edit",
   "Key Commands"
  ],
  [
   67,
   "Edit",
   "Duplicate"
  ],
  [
   68,
   "Edit",
   "Open"
  ],
  [
   69,
   "Edit",
   "Repeat"
  ],
  [
   70,
   "Edit",
   "Move to Front"
  ],
  [
   71,
   "Edit",
   "Move to Back"
  ],
  [
   72,
   "Edit",
   "To Real Copy"
  ],
  [
   73,
   "Edit",
   "Set Spacer between Selected Events"
  ],
  [
   74,
   "Edit",
   "Lock"
  ],
  [
   75,
   "Edit",
   "Unlock"
  ],
  [
   76,
   "Edit",
   "Cut Time"
  ],
  [
   77,
   "Edit",
   "Delete Time"
  ],
  [
   78,
   "Edit",
   "Paste Time"
  ],
  [
   79,
   "Edit",
   "Paste at Origin"
  ],
  [
   80,
   "Edit",
   "Paste Relative to Cursor"
  ],
  [
   81,
   "Edit",
   "Paste to Matching Track Name"
  ],
  [
   82,
   "Edit",
   "Move to Selected Track"
  ],
  [
   83,
   "Edit",
   "Insert Bars"
  ],
  [
   84,
   "Edit",
   "Click Pattern to Default"
  ],
  [
   85,
   "Edit",
   "Split Range"
  ],
  [
   86,
   "Edit",
   "Crop Range"
  ],
  [
   87,
   "Edit",
   "Insert Silence"
  ],
  [
   88,
   "Edit",
   "Fill Loop"
  ],
  [
   89,
   "Edit",
   "Global Copy"
  ],
  [
   90,
   "Edit",
   "Select Event"
  ],
  [
   91,
   "Edit",
   "Select in Loop"
  ],
  [
   92,
   "Edit",
   "Select All on Tracks"
  ],
  [
   93,
   "Edit",
   "Select Events under Cursor"
  ],
  [
   94,
   "Edit",
   "Invert Selection"
  ],
  [
   95,
   "Edit",
   "Split at Cursor"
  ],
  [
   96,
   "Edit",
   "Move to Cursor"
  ],
  [
   97,
   "Edit",
   "Move End to Cursor"
  ],
  [
   98,
   "Edit",
   "Split Loop"
  ],
  [
   99,
   "Edit",
   "Group"
  ],
  [
   100,
   "Edit",
   "Ungroup"
  ],
  [
   101,
   "Edit",
   "Glue"
  ],
  [
   102,
   "Edit",
   "Move Insert Cursor To Part Start"
  ],
  [
   103,
   "Edit",
   "Activate Next Part"
  ],
  [
   104,
   "Edit",
   "Activate Previous Part"
  ],
  [
   105,
   "Edit",
   "Edit Active Part Only"
  ],
  [
   106,
   "Edit",
   "Part\/Clip Editing Mode: All Parts\/Clips"
  ],
  [
   107,
   "Edit",
   "Part\/Clip Editing Mode: Active Part\/Clip"
  ],
  [
   108,
   "Edit",
   "Edit Info Line"
  ],
  [
   109,
   "Edit",
   "Acoustic Feedback On\/Off"
  ],
  [
   110,
   "Edit",
   "Slip Event Content Left"
  ],
  [
   111,
   "Edit",
   "Slip Event Content Right"
  ],
  [
   112,
   "Edit",
   "Solo"
  ],
  [
   113,
   "Edit",
   "Solo Defeat"
  ],
  [
   114,
   "Edit",
   "Mute"
  ],
  [
   115,
   "Edit",
   "Record Enable"
  ],
  [
   116,
   "Edit",
   "Monitor"
  ],
  [
   117,
   "Edit",
   "Read"
  ],
  [
   118,
   "Edit",
   "Write"
  ],
  [
   119,
   "Edit",
   "Primary Parameter: Increase"
  ],
  [
   120,
   "Edit",
   "Primary Parameter: Decrease"
  ],
  [
   121,
   "Edit",
   "Secondary Parameter: Increase"
  ],
  [
   122,
   "Edit",
   "Secondary Parameter: Decrease"
  ],
  [
   123,
   "Edit",
   "Primary Parameter: Fine Increase"
  ],
  [
   124,
   "Edit",
   "Primary Parameter: Fine Decrease"
  ],
  [
   125,
   "Edit",
   "Secondary Parameter: Fine Increase"
  ],
  [
   126,
   "Edit",
   "Secondary Parameter: Fine Decrease"
  ],
  [
   127,
   "Edit",
   "Mute Events"
  ]
 ],
 "02,125": [
  [
   1,
   "Edit",
   "Unmute Events"
  ],
  [
   2,
   "Edit",
   "Mute\/Unmute Objects"
  ],
  [
   3,
   "Edit",
   "Edit Channel Settings"
  ],
  [
   4,
   "Edit",
   "Edit Channel Panner"
  ],
  [
   5,
   "Edit",
   "Lock\/Unlock Track"
  ],
  [
   6,
   "Edit",
   "Lane Display Type"
  ],
  [
   7,
   "Edit",
   "Clean Up Lanes"
  ],
  [
   8,
   "Edit",
   "Solo Lane"
  ],
  [
   9,
   "Edit",
   "Create Tracks from Lanes"
  ],
  [
   10,
   "Edit",
   "Freeze\/Unfreeze Selected Tracks"
  ],
  [
   11,
   "Edit",
   "Freeze\/Unfreeze Selected Tracks (with Current Settings)"
  ],
  [
   12,
   "Edit",
   "Find Track\/Channel"
  ],
  [
   13,
   "Edit",
   "Project Logical Editor"
  ],
  [
   14,
   "Edit",
   "Apply Project Logical Preset"
  ],
  [
   15,
   "Edit",
   "Rename Selected Events"
  ],
  [
   16,
   "Edit",
   "Rename"
  ],
  [
   17,
   "Edit",
   "Part\/Clip Editing Mode: All Parts\/Clips on Active Track"
  ],
  [
   18,
   "Edit",
   "Listen"
  ],
  [
   19,
   "Edit",
   "Process Tempo"
  ],
  [
   20,
   "Edit",
   "Toggle Group Tracks"
  ],
  [
   21,
   "Edit",
   "Toggle A\/B Setting"
  ],
  [
   22,
   "Edit",
   "Copy A<->B Setting"
  ],
  [
   23,
   "Edit",
   "Reset to Default"
  ],
  [
   24,
   "Edit",
   "Save as Default"
  ],
  [
   25,
   "Edit",
   "Deactivate All Solo"
  ],
  [
   26,
   "Edit",
   "Unmute All"
  ],
  [
   27,
   "Edit",
   "Open Device Panel"
  ],
  [
   28,
   "Edit",
   "Solo Editor Mode: Solo All Parts\/Clips"
  ],
  [
   29,
   "Edit",
   "Solo Editor Mode: Solo follows 'Part\/Clip Editing Mode'"
  ],
  [
   30,
   "Edit",
   "Solo Editor Mode: Toggle Modes"
  ],
  [
   31,
   "Edit",
   "Left Selection Side to Cursor"
  ],
  [
   32,
   "Edit",
   "Right Selection Side to Cursor"
  ],
  [
   33,
   "Edit",
   "Select from Start to Cursor"
  ],
  [
   34,
   "Edit",
   "Select from Cursor to End"
  ],
  [
   35,
   "Edit",
   "Stationary Cursor"
  ],
  [
   36,
   "Edit",
   "Autoscroll"
  ],
  [
   37,
   "Edit",
   "Snap On\/Off"
  ],
  [
   38,
   "Edit",
   "Snap On"
  ],
  [
   39,
   "Edit",
   "Snap Off"
  ],
  [
   40,
   "Edit",
   "Switch MIDI Editor Grid Type"
  ],
  [
   41,
   "Edit",
   "Select Next Grid Type"
  ],
  [
   42,
   "Edit",
   "Select Prev Grid Type"
  ],
  [
   43,
   "Edit",
   "Grid Type: Bar"
  ],
  [
   44,
   "Edit",
   "Grid Type: Beat"
  ],
  [
   45,
   "Edit",
   "Grid Type: Use Quantize"
  ],
  [
   46,
   "Edit",
   "Grid Type: Adapt to Zoom"
  ],
  [
   47,
   "Edit",
   "Select Next Snap Type"
  ],
  [
   48,
   "Edit",
   "Select Prev Snap Type"
  ],
  [
   49,
   "Edit",
   "Snap Type: Grid"
  ],
  [
   50,
   "Edit",
   "Snap Type: Grid Relative"
  ],
  [
   51,
   "Edit",
   "Snap Type: Events"
  ],
  [
   52,
   "Edit",
   "Snap Type: Shuffle"
  ],
  [
   53,
   "Edit",
   "Snap Type: Magnetic Cursor"
  ],
  [
   54,
   "Edit",
   "Snap Type: Grid + Cursor"
  ],
  [
   55,
   "Edit",
   "Snap Type: Events + Cursor"
  ],
  [
   56,
   "Edit",
   "Snap Type: Events + Grid + Cursor"
  ],
  [
   57,
   "Edit",
   "Ruler Display Format"
  ],
  [
   58,
   "Edit",
   "Ruler Mode: Time Linear"
  ],
  [
   59,
   "Edit",
   "Ruler Mode: Bars+Beats Linear"
  ],
  [
   60,
   "Edit",
   "Toggle Link Project and Lower Zone Editor Cursors"
  ],
  [
   61,
   "Edit",
   "Rename First Selected Track"
  ],
  [
   62,
   "Edit",
   "Expand\/Reduce"
  ],
  [
   63,
   "Edit",
   "Activate\/Deactivate"
  ],
  [
   64,
   "Edit",
   "Flip\/Invert"
  ],
  [
   65,
   "Edit",
   "Paste Time at Origin"
  ],
  [
   66,
   "Edit",
   "Cut Head"
  ],
  [
   67,
   "Edit",
   "Cut Tail"
  ],
  [
   68,
   "Edit",
   "Select Equal Pitch"
  ],
  [
   69,
   "Edit",
   "Select Same Pitch"
  ],
  [
   70,
   "Edit",
   "Select Controllers in Note Range"
  ],
  [
   71,
   "Edit",
   "Range to Next Event"
  ],
  [
   72,
   "Edit",
   "Range to Previous Event"
  ],
  [
   73,
   "Edit",
   "Enlarge Range to Next Event"
  ],
  [
   74,
   "Edit",
   "Enlarge Range to Previous Event"
  ],
  [
   75,
   "Edit",
   "Range to Next Hitpoint"
  ],
  [
   76,
   "Edit",
   "Range to Previous Hitpoint"
  ],
  [
   77,
   "Edit",
   "Enlarge Range to Next Hitpoint"
  ],
  [
   78,
   "Edit",
   "Enlarge Range to Previous Hitpoint"
  ],
  [
   79,
   "Edit",
   "Automation follows Events"
  ],
  [
   80,
   "Edit",
   "Auto Select Events under Cursor"
  ],
  [
   81,
   "Edit",
   "Enlarge Selected Track"
  ],
  [
   82,
   "Edit",
   "ProfileManager"
  ],
  [
   83,
   "Edit",
   "Copy Click Pattern"
  ],
  [
   84,
   "Edit",
   "Paste Click Pattern to similar Selected"
  ],
  [
   85,
   "Edit",
   "Click Pattern Copy"
  ],
  [
   86,
   "Edit",
   "Click Pattern Visible"
  ],
  [
   87,
   "Edit",
   "Create MIDI Click Track"
  ],
  [
   88,
   "Edit",
   "Create Audio Click Track"
  ],
  [
   89,
   "MIDI Quantize",
   "Set Quantize to 1th"
  ],
  [
   90,
   "MIDI Quantize",
   "Set Quantize to 2th"
  ],
  [
   91,
   "MIDI Quantize",
   "Set Quantize to 4th"
  ],
  [
   92,
   "MIDI Quantize",
   "Set Quantize to 8th"
  ],
  [
   93,
   "MIDI Quantize",
   "Set Quantize to 16th"
  ],
  [
   94,
   "MIDI Quantize",
   "Set Quantize to 32th"
  ],
  [
   95,
   "MIDI Quantize",
   "Set Quantize to 64th"
  ],
  [
   96,
   "MIDI Quantize",
   "Set Quantize to 128th"
  ],
  [
   97,
   "MIDI Quantize",
   "Toggle Quantize Triplet"
  ],
  [
   98,
   "MIDI Quantize",
   "Toggle Quantize Dotted"
  ],
  [
   99,
   "MIDI Quantize",
   "Select Next Quantize"
  ],
  [
   100,
   "MIDI Quantize",
   "Select Prev Quantize"
  ],
  [
   101,
   "MIDI Quantize",
   "Auto Quantize On\/Off"
  ],
  [
   102,
   "Quantize Category",
   "AudioWarp Quantize On\/Off"
  ],
  [
   103,
   "Quantize Category",
   "Create Groove Quantize Preset"
  ],
  [
   104,
   "Set Insert Length",
   "T"
  ],
  [
   105,
   "Set Insert Length",
   "."
  ],
  [
   106,
   "Set Insert Length",
   "1"
  ],
  [
   107,
   "Set Insert Length",
   "2"
  ],
  [
   108,
   "Set Insert Length",
   "4"
  ],
  [
   109,
   "Set Insert Length",
   "8"
  ],
  [
   110,
   "Set Insert Length",
   "16"
  ],
  [
   111,
   "Set Insert Length",
   "32"
  ],
  [
   112,
   "Set Insert Length",
   "64"
  ],
  [
   113,
   "Set Insert Length",
   "128"
  ],
  [
   114,
   "Devices",
   "Virtual Keyboard"
  ],
  [
   115,
   "Devices",
   "Plug-in Manager"
  ],
  [
   116,
   "Devices",
   "Mixer"
  ],
  [
   117,
   "Devices",
   "MixConsole Lower Zone"
  ],
  [
   118,
   "Devices",
   "VST Performance"
  ],
  [
   119,
   "Devices",
   "VST Connections"
  ],
  [
   120,
   "Devices",
   "Video"
  ],
  [
   121,
   "Devices",
   "Setup"
  ],
  [
   122,
   "Devices",
   "Show Panel"
  ],
  [
   123,
   "Devices",
   "VST Instruments"
  ],
  [
   124,
   "Devices",
   "MMC Master"
  ],
  [
   125,
   "Devices",
   "MIDI Remote Manager"
  ],
  [
   126,
   "Devices",
   "Time Display"
  ],
  [
   127,
   "Devices",
   "Record Time Max"
  ]
 ],
 "02,126": [
  [
   1,
   "Devices",
   "Plug-in Information"
  ],
  [
   2,
   "Devices",
   "Control Room Mixer"
  ],
  [
   3,
   "Devices",
   "MIDI Device Manager"
  ],
  [
   4,
   "Devices",
   "Mixer 2"
  ],
  [
   5,
   "Devices",
   "Mixer 3"
  ],
  [
   6,
   "Devices",
   "Mixer 4"
  ],
  [
   7,
   "Devices",
   "Generic Remote"
  ],
  [
   8,
   "Devices",
   "Generic Remote 2"
  ],
  [
   9,
   "Devices",
   "Generic Remote 3"
  ],
  [
   10,
   "Beat Designer",
   "Insert Pattern at Cursor"
  ],
  [
   11,
   "Beat Designer",
   "Insert Subbank at Cursor"
  ],
  [
   12,
   "Beat Designer",
   "Insert Pattern at Left Locator"
  ],
  [
   13,
   "Beat Designer",
   "Insert Subbank at Left Locator"
  ],
  [
   14,
   "Beat Designer",
   "Fill Loop with Pattern"
  ],
  [
   15,
   "Mixer",
   "Pre\/Post"
  ],
  [
   16,
   "Mixer",
   "Arm All Audio Tracks"
  ],
  [
   17,
   "Mixer",
   "Disarm All Audio Tracks"
  ],
  [
   18,
   "Mixer",
   "Add Track To Selected: Group Channel"
  ],
  [
   19,
   "Mixer",
   "Show\/Hide Meter Bridge"
  ],
  [
   20,
   "Mixer",
   "Show\/Hide Channel Name"
  ],
  [
   21,
   "Mixer",
   "Show\/Hide Equalizer Curve"
  ],
  [
   22,
   "Mixer",
   "Show\/Hide Pictures"
  ],
  [
   23,
   "Mixer",
   "Show\/Hide Notepad"
  ],
  [
   24,
   "Mixer",
   "Show\/Hide Latency"
  ],
  [
   25,
   "Mixer",
   "Show\/Hide Channel Overview"
  ],
  [
   26,
   "Mixer",
   "Bypass: Inserts"
  ],
  [
   27,
   "Mixer",
   "Bypass: EQs"
  ],
  [
   28,
   "Mixer",
   "Bypass: Sends"
  ],
  [
   29,
   "Mixer",
   "Bypass: Channel Strip"
  ],
  [
   30,
   "Mixer",
   "Meters: Hold Peaks"
  ],
  [
   31,
   "Mixer",
   "Meters: Hold Forever"
  ],
  [
   32,
   "Mixer",
   "Meters: Input"
  ],
  [
   33,
   "Mixer",
   "Meters: Post Fader"
  ],
  [
   34,
   "Mixer",
   "Meters: Post Panner"
  ],
  [
   35,
   "Mixer",
   "Meters: Reset"
  ],
  [
   36,
   "Mixer",
   "Loudness: Enable"
  ],
  [
   37,
   "Mixer",
   "Loudness: Reset"
  ],
  [
   38,
   "Mixer",
   "Loudness: Switch between LU and LUFS"
  ],
  [
   39,
   "Mixer",
   "Loudness: Switch between +9dB and +18dB Scale"
  ],
  [
   40,
   "Mixer",
   "Master Meter: AES17 (+3dB)"
  ],
  [
   41,
   "Mixer",
   "Hide: Audio"
  ],
  [
   42,
   "Mixer",
   "Hide: Groups"
  ],
  [
   43,
   "Mixer",
   "Hide: MIDI"
  ],
  [
   44,
   "Mixer",
   "Hide: Instruments"
  ],
  [
   45,
   "Mixer",
   "Hide: Returns"
  ],
  [
   46,
   "Mixer",
   "Hide: Outputs"
  ],
  [
   47,
   "Mixer",
   "Hide: Reveal All"
  ],
  [
   48,
   "Mixer",
   "Hide: Hide All"
  ],
  [
   49,
   "Mixer",
   "Views: Routing"
  ],
  [
   50,
   "Mixer",
   "Views: Inserts"
  ],
  [
   51,
   "Mixer",
   "Views: EQs"
  ],
  [
   52,
   "Mixer",
   "Views: Sends"
  ],
  [
   53,
   "Mixer",
   "Views: Channel Strip"
  ],
  [
   54,
   "Mixer",
   "Expand: Routing"
  ],
  [
   55,
   "Mixer",
   "Expand: Inserts"
  ],
  [
   56,
   "Mixer",
   "Expand: EQs"
  ],
  [
   57,
   "Mixer",
   "Expand: Sends"
  ],
  [
   58,
   "Mixer",
   "Expand: Channel Strip"
  ],
  [
   59,
   "Mixer",
   "File: Save Selected Channels"
  ],
  [
   60,
   "Mixer",
   "File: Load Selected Channels"
  ],
  [
   61,
   "Mixer",
   "Bypass: Inserts on Main Mix"
  ],
  [
   62,
   "Mixer",
   "Bypass: EQs on Main Mix"
  ],
  [
   63,
   "Mixer",
   "Bypass: Channel Strip on Main Mix"
  ],
  [
   64,
   "Mixer",
   "Settings: Open\/Close Selected"
  ],
  [
   65,
   "Mixer",
   "Windows: Close All Plug-Ins"
  ],
  [
   66,
   "Mixer",
   "Panner: Open\/Close Selected"
  ],
  [
   67,
   "Mixer",
   "Q-Link"
  ],
  [
   68,
   "Mixer",
   "Link Channels"
  ],
  [
   69,
   "Mixer",
   "Unlink Channels"
  ],
  [
   70,
   "Mixer",
   "Zoom In"
  ],
  [
   71,
   "Mixer",
   "Zoom Out"
  ],
  [
   72,
   "Mixer",
   "Zoom In Vertically"
  ],
  [
   73,
   "Mixer",
   "Zoom Out Vertically"
  ],
  [
   74,
   "Mixer",
   "EQ\/Filter Transition: Soft"
  ],
  [
   75,
   "Mixer",
   "EQ\/Filter Transition: Quick"
  ],
  [
   76,
   "Mixer",
   "Add Track To Selected: FX Channel"
  ],
  [
   77,
   "Mixer",
   "Views: Cue Sends"
  ],
  [
   78,
   "Mixer",
   "Expand: Cue Sends"
  ],
  [
   79,
   "Mixer",
   "Channels: Listen On\/Off"
  ],
  [
   80,
   "Mixer",
   "Views: Quick Controls"
  ],
  [
   81,
   "Mixer",
   "Expand: Quick Controls"
  ],
  [
   82,
   "Mixer",
   "Views: Device Panels"
  ],
  [
   83,
   "Mixer",
   "Expand: Device Panels"
  ],
  [
   84,
   "Mixer",
   "Views: Filters\/Gain"
  ],
  [
   85,
   "Mixer",
   "Expand: Filters\/Gain"
  ],
  [
   86,
   "Mixer",
   "Views: Direct Routing"
  ],
  [
   87,
   "Mixer",
   "Expand: Direct Routing"
  ],
  [
   88,
   "Mixer",
   "Direct Routing: Summing Mode On\/Off"
  ],
  [
   89,
   "Mixer",
   "Hide: Inputs"
  ],
  [
   90,
   "Mixer",
   "Control Link: Edit Control Link Settings"
  ],
  [
   91,
   "Mixer",
   "Control Link: Next Control Link Group"
  ],
  [
   92,
   "Mixer",
   "Control Link: Previous Control Link Group"
  ],
  [
   93,
   "Mixer",
   "Add Track To Selected: VCA Fader"
  ],
  [
   94,
   "Mixer",
   "Hide: VCAs"
  ],
  [
   95,
   "Mixer",
   "Expand: VCA"
  ],
  [
   96,
   "Mixer",
   "Views: VCA"
  ],
  [
   97,
   "Mixer",
   "Hide: Samplers"
  ],
  [
   98,
   "Mixer",
   "ShowAll"
  ],
  [
   99,
   "Mixer",
   "ShowSelected"
  ],
  [
   100,
   "Mixer",
   "HideSelected"
  ],
  [
   101,
   "Mixer",
   "ShowUsed"
  ],
  [
   102,
   "Mixer",
   "ShowPlaying"
  ],
  [
   103,
   "Mixer",
   "ShowCycle"
  ],
  [
   104,
   "Mixer",
   "ShowConnected"
  ],
  [
   105,
   "Mixer",
   "channelOrganizerUndo"
  ],
  [
   106,
   "Mixer",
   "channelOrganizerRedo"
  ],
  [
   107,
   "Mixer",
   "Channel and Rack Configuration 1"
  ],
  [
   108,
   "Mixer",
   "Channel and Rack Configuration 2"
  ],
  [
   109,
   "Mixer",
   "Channel and Rack Configuration 3"
  ],
  [
   110,
   "Mixer",
   "Channel and Rack Configuration 4"
  ],
  [
   111,
   "Mixer",
   "Channel and Rack Configuration 5"
  ],
  [
   112,
   "Mixer",
   "Channel and Rack Configuration 6"
  ],
  [
   113,
   "Mixer",
   "Channel and Rack Configuration 7"
  ],
  [
   114,
   "Mixer",
   "Channel and Rack Configuration 8"
  ],
  [
   115,
   "Crossfade Editor",
   "Play Fade Out"
  ],
  [
   116,
   "Crossfade Editor",
   "Play Fade In"
  ],
  [
   117,
   "Crossfade Editor",
   "Play Crossfade"
  ],
  [
   118,
   "Media",
   "Import Medium"
  ],
  [
   119,
   "Media",
   "Converter"
  ],
  [
   120,
   "Media",
   "New Version"
  ],
  [
   121,
   "Media",
   "Write Attributes to File"
  ],
  [
   122,
   "Media",
   "Check Files"
  ],
  [
   123,
   "Media",
   "Remove Missing Files"
  ],
  [
   124,
   "Media",
   "Create Folder"
  ],
  [
   125,
   "Media",
   "Empty Trash"
  ],
  [
   126,
   "Media",
   "Remove Unused Media"
  ],
  [
   127,
   "Media",
   "Prepare Archive"
  ]
 ],
 "02,127": [
  [
   1,
   "Media",
   "Insert into Project at Origin"
  ],
  [
   2,
   "Media",
   "Insert into Project at Cursor"
  ],
  [
   3,
   "Media",
   "Select In Project"
  ],
  [
   4,
   "Media",
   "Set Record Folder"
  ],
  [
   5,
   "Media",
   "Reconstruct"
  ],
  [
   6,
   "Media",
   "Generate Thumbnail Cache"
  ],
  [
   7,
   "Media",
   "Import from Audio CD"
  ],
  [
   8,
   "Media",
   "Preview Start"
  ],
  [
   9,
   "Media",
   "Preview Stop"
  ],
  [
   10,
   "Media",
   "Preview Cycle On\/Off"
  ],
  [
   11,
   "Media",
   "Insert into Project at Left Locator"
  ],
  [
   12,
   "Media",
   "Open MediaBay"
  ],
  [
   13,
   "Media",
   "Search MediaBay"
  ],
  [
   14,
   "Media",
   "Select Media Types"
  ],
  [
   15,
   "Media",
   "Open\/Close Attribute Inspector"
  ],
  [
   16,
   "Media",
   "Open\/Close File Browser"
  ],
  [
   17,
   "Media",
   "Open\/Close Previewer"
  ],
  [
   18,
   "Media",
   "Open\/Close Filters"
  ],
  [
   19,
   "Media",
   "Open\/Close Favorites"
  ],
  [
   20,
   "Media",
   "Preview Active On\/Off"
  ],
  [
   21,
   "Media",
   "Preview AutoPlay On\/Off"
  ],
  [
   22,
   "Media",
   "Preview Pause On\/Off"
  ],
  [
   23,
   "Media",
   "Preview in Context On\/Off"
  ],
  [
   24,
   "Media",
   "Preview Sync On\/Off"
  ],
  [
   25,
   "Media",
   "Refresh Views"
  ],
  [
   26,
   "Media",
   "Rescan Disk"
  ],
  [
   27,
   "Media",
   "Update Results"
  ],
  [
   28,
   "Media",
   "Stop Updating Results"
  ],
  [
   29,
   "Media",
   "Add Favorite"
  ],
  [
   30,
   "Media",
   "Remove Favorite"
  ],
  [
   31,
   "Media",
   "Browse: Back"
  ],
  [
   32,
   "Media",
   "Browse: Forward"
  ],
  [
   33,
   "Media",
   "Browse: Up"
  ],
  [
   34,
   "Media",
   "Hide Folders That Are Not Scanned"
  ],
  [
   35,
   "Media",
   "Show Only Selected Folder"
  ],
  [
   36,
   "Media",
   "Create New Folder"
  ],
  [
   37,
   "Media",
   "Results: Include Folders and Subfolders"
  ],
  [
   38,
   "Media",
   "Shuffle Results"
  ],
  [
   39,
   "Media",
   "Reset Result Filters"
  ],
  [
   40,
   "Media",
   "Reset All Filters"
  ],
  [
   41,
   "Media",
   "Reset Search"
  ],
  [
   42,
   "Media",
   "Revert"
  ],
  [
   43,
   "Media",
   "Open Loop Browser"
  ],
  [
   44,
   "Media",
   "Open Sound Browser"
  ],
  [
   45,
   "Media",
   "OpenInExplorer"
  ],
  [
   46,
   "Media",
   "Create Sampler Track"
  ],
  [
   47,
   "Audio Export",
   "Perform Audio Export"
  ],
  [
   48,
   "Audio Export",
   "Sync Channel Selection with Mixer"
  ],
  [
   49,
   "Audio Export",
   "Increase Counter Start Value"
  ],
  [
   50,
   "Audio Export",
   "Reset Counter Start Value"
  ],
  [
   51,
   "Marker",
   "Activate Marker Track"
  ],
  [
   52,
   "Marker",
   "Add Position Marker on Selected Track"
  ],
  [
   53,
   "Marker",
   "Add Cycle Marker on Selected Track"
  ],
  [
   54,
   "Marker",
   "Add and Edit Position Marker on Selected Track"
  ],
  [
   55,
   "Marker",
   "Add and Edit Cycle Marker on Selected Track"
  ],
  [
   56,
   "Marker",
   "Add and Edit Position Marker"
  ],
  [
   57,
   "Marker",
   "Add and Edit Cycle Marker"
  ],
  [
   58,
   "Transport",
   "Insert Marker"
  ],
  [
   59,
   "Transport",
   "Insert Cycle Marker"
  ],
  [
   60,
   "Transport",
   "Panel"
  ],
  [
   61,
   "Transport",
   "Play from Selection Start"
  ],
  [
   62,
   "Transport",
   "Play from Selection End"
  ],
  [
   63,
   "Transport",
   "Play until Selection Start"
  ],
  [
   64,
   "Transport",
   "Play until Selection End"
  ],
  [
   65,
   "Transport",
   "Post-roll from Selection Start"
  ],
  [
   66,
   "Transport",
   "Post-roll from Selection End"
  ],
  [
   67,
   "Transport",
   "Pre-roll to Selection Start"
  ],
  [
   68,
   "Transport",
   "Pre-roll to Selection End"
  ],
  [
   69,
   "Transport",
   "Play Selection Range"
  ],
  [
   70,
   "Transport",
   "Locate Next Event"
  ],
  [
   71,
   "Transport",
   "Locate Previous Event"
  ],
  [
   72,
   "Transport",
   "Locate Next Hitpoint"
  ],
  [
   73,
   "Transport",
   "Locate Previous Hitpoint"
  ],
  [
   74,
   "Transport",
   "Use Pre-\/Post-Roll"
  ],
  [
   75,
   "Transport",
   "Locators to Selection"
  ],
  [
   76,
   "Transport",
   "Start"
  ],
  [
   77,
   "Transport",
   "Stop"
  ],
  [
   78,
   "Transport",
   "StartStop"
  ],
  [
   79,
   "Transport",
   "StartStop Preview"
  ],
  [
   80,
   "Transport",
   "Record"
  ],
  [
   81,
   "Transport",
   "Global Retrospective Record"
  ],
  [
   82,
   "Transport",
   "MIDI Retrospective Record: Insert from Track Input as Linear Recording"
  ],
  [
   83,
   "Transport",
   "MIDI Retrospective Record: Insert from Track Input as Cycle Recording"
  ],
  [
   84,
   "Transport",
   "MIDI Retrospective Record: Empty All Buffers"
  ],
  [
   85,
   "Transport",
   "Rewind"
  ],
  [
   86,
   "Transport",
   "Forward"
  ],
  [
   87,
   "Transport",
   "Fast Rewind"
  ],
  [
   88,
   "Transport",
   "Fast Forward"
  ],
  [
   89,
   "Transport",
   "Goto End"
  ],
  [
   90,
   "Transport",
   "Cycle"
  ],
  [
   91,
   "Transport",
   "Auto Punch In"
  ],
  [
   92,
   "Transport",
   "Auto Punch Out"
  ],
  [
   93,
   "Transport",
   "To Punch In Position"
  ],
  [
   94,
   "Transport",
   "To Punch Out Position"
  ],
  [
   95,
   "Transport",
   "Set Punch In Position"
  ],
  [
   96,
   "Transport",
   "Set Punch Out Position"
  ],
  [
   97,
   "Transport",
   "Sync Punch To Cycle"
  ],
  [
   98,
   "Transport",
   "Set Punch Points To Selection"
  ],
  [
   99,
   "Transport",
   "Nudge Cursor Right"
  ],
  [
   100,
   "Transport",
   "Nudge Cursor Left"
  ],
  [
   101,
   "Transport",
   "Nudge Cursor -5 Seconds"
  ],
  [
   102,
   "Transport",
   "Nudge Cursor -10 Seconds"
  ],
  [
   103,
   "Transport",
   "Nudge Cursor -20 Seconds"
  ],
  [
   104,
   "Transport",
   "Nudge Cursor +5 Seconds"
  ],
  [
   105,
   "Transport",
   "Nudge Cursor +10 Seconds"
  ],
  [
   106,
   "Transport",
   "Nudge Cursor +20 Seconds"
  ],
  [
   107,
   "Transport",
   "Nudge +1 Frame"
  ],
  [
   108,
   "Transport",
   "Nudge -1 Frame"
  ],
  [
   109,
   "Transport",
   "Step Bar"
  ],
  [
   110,
   "Transport",
   "Step Back Bar"
  ],
  [
   111,
   "Transport",
   "Restart"
  ],
  [
   112,
   "Transport",
   "Shuttle Play 1x"
  ],
  [
   113,
   "Transport",
   "Shuttle Play Reverse 1x"
  ],
  [
   114,
   "Transport",
   "Shuttle Play 2x"
  ],
  [
   115,
   "Transport",
   "Shuttle Play Reverse 2x"
  ],
  [
   116,
   "Transport",
   "Shuttle Play 4x"
  ],
  [
   117,
   "Transport",
   "Shuttle Play Reverse 4x"
  ],
  [
   118,
   "Transport",
   "Shuttle Play 8x"
  ],
  [
   119,
   "Transport",
   "Shuttle Play Reverse 8x"
  ],
  [
   120,
   "Transport",
   "Shuttle Play 1\/2x"
  ],
  [
   121,
   "Transport",
   "Shuttle Play Reverse 1\/2x"
  ],
  [
   122,
   "Transport",
   "Shuttle Play 1\/4x"
  ],
  [
   123,
   "Transport",
   "Shuttle Play Reverse 1\/4x"
  ],
  [
   124,
   "Transport",
   "Shuttle Play 1\/8x"
  ],
  [
   125,
   "Transport",
   "Shuttle Play Reverse 1\/8x"
  ],
  [
   126,
   "Transport",
   "Jog Left"
  ],
  [
   127,
   "Transport",
   "Jog Right"
  ]
 ],
 "03,119": [
  [
   1,
   "Transport",
   "To Left Locator"
  ],
  [
   2,
   "Transport",
   "To Right Locator"
  ],
  [
   3,
   "Transport",
   "To Marker 3"
  ],
  [
   4,
   "Transport",
   "To Marker 4"
  ],
  [
   5,
   "Transport",
   "To Marker 5"
  ],
  [
   6,
   "Transport",
   "To Marker 6"
  ],
  [
   7,
   "Transport",
   "To Marker 7"
  ],
  [
   8,
   "Transport",
   "To Marker 8"
  ],
  [
   9,
   "Transport",
   "To Marker 9"
  ],
  [
   10,
   "Transport",
   "To Marker 1"
  ],
  [
   11,
   "Transport",
   "To Marker 2"
  ],
  [
   12,
   "Transport",
   "To Marker X"
  ],
  [
   13,
   "Transport",
   "Recall Cycle Marker 1"
  ],
  [
   14,
   "Transport",
   "Recall Cycle Marker 2"
  ],
  [
   15,
   "Transport",
   "Recall Cycle Marker 3"
  ],
  [
   16,
   "Transport",
   "Recall Cycle Marker 4"
  ],
  [
   17,
   "Transport",
   "Recall Cycle Marker 5"
  ],
  [
   18,
   "Transport",
   "Recall Cycle Marker 6"
  ],
  [
   19,
   "Transport",
   "Recall Cycle Marker 7"
  ],
  [
   20,
   "Transport",
   "Recall Cycle Marker 8"
  ],
  [
   21,
   "Transport",
   "Recall Cycle Marker 9"
  ],
  [
   22,
   "Transport",
   "Recall Cycle Marker X"
  ],
  [
   23,
   "Transport",
   "To Cycle Marker 1"
  ],
  [
   24,
   "Transport",
   "To Cycle Marker 2"
  ],
  [
   25,
   "Transport",
   "To Cycle Marker 3"
  ],
  [
   26,
   "Transport",
   "To Cycle Marker 4"
  ],
  [
   27,
   "Transport",
   "To Cycle Marker 5"
  ],
  [
   28,
   "Transport",
   "To Cycle Marker 6"
  ],
  [
   29,
   "Transport",
   "To Cycle Marker 7"
  ],
  [
   30,
   "Transport",
   "To Cycle Marker 8"
  ],
  [
   31,
   "Transport",
   "To Cycle Marker 9"
  ],
  [
   32,
   "Transport",
   "To Cycle Marker X"
  ],
  [
   33,
   "Transport",
   "Exchange Locator Positions"
  ],
  [
   34,
   "Transport",
   "Set Left Locator"
  ],
  [
   35,
   "Transport",
   "Set Right Locator"
  ],
  [
   36,
   "Transport",
   "Set Marker 3"
  ],
  [
   37,
   "Transport",
   "Set Marker 4"
  ],
  [
   38,
   "Transport",
   "Set Marker 5"
  ],
  [
   39,
   "Transport",
   "Set Marker 6"
  ],
  [
   40,
   "Transport",
   "Set Marker 7"
  ],
  [
   41,
   "Transport",
   "Set Marker 8"
  ],
  [
   42,
   "Transport",
   "Set Marker 9"
  ],
  [
   43,
   "Transport",
   "Set Marker 1"
  ],
  [
   44,
   "Transport",
   "Set Marker 2"
  ],
  [
   45,
   "Transport",
   "Locate Next Marker"
  ],
  [
   46,
   "Transport",
   "Locate Previous Marker"
  ],
  [
   47,
   "Transport",
   "Toggle: Cycle follows when locating to Markers"
  ],
  [
   48,
   "Transport",
   "Play until Next Marker"
  ],
  [
   49,
   "Transport",
   "Input Position"
  ],
  [
   50,
   "Transport",
   "Input Left Locator"
  ],
  [
   51,
   "Transport",
   "Input Right Locator"
  ],
  [
   52,
   "Transport",
   "Input Locator Duration"
  ],
  [
   53,
   "Transport",
   "Input Punch In Position"
  ],
  [
   54,
   "Transport",
   "Input Punch Out Position"
  ],
  [
   55,
   "Transport",
   "Input Tempo"
  ],
  [
   56,
   "Transport",
   "Input Time Signature"
  ],
  [
   57,
   "Transport",
   "Use Pre-roll"
  ],
  [
   58,
   "Transport",
   "Use Post-roll"
  ],
  [
   59,
   "Transport",
   "Metronome Setup"
  ],
  [
   60,
   "Transport",
   "Metronome On"
  ],
  [
   61,
   "Transport",
   "Precount On"
  ],
  [
   62,
   "Transport",
   "Use External Sync"
  ],
  [
   63,
   "Transport",
   "Project Synchronization Setup"
  ],
  [
   64,
   "Transport",
   "Tempo Track Rehearsal Mode On\/Off"
  ],
  [
   65,
   "Transport",
   "Start Record at Left Locator"
  ],
  [
   66,
   "Transport",
   "Exchange Time Formats"
  ],
  [
   67,
   "Transport",
   "Return to Start Position"
  ],
  [
   68,
   "Transport",
   "Re-Record on\/off"
  ],
  [
   69,
   "Transport",
   "Audio Record Mode"
  ],
  [
   70,
   "Transport",
   "MIDI Record Mode"
  ],
  [
   71,
   "Transport",
   "MIDI Cycle Record Mode"
  ],
  [
   72,
   "Transport",
   "MIDI Record Auto Quantize"
  ],
  [
   73,
   "Transport",
   "Start Mode"
  ],
  [
   74,
   "Transport",
   "Lock Record"
  ],
  [
   75,
   "Transport",
   "Unlock Record"
  ],
  [
   76,
   "Transport",
   "Locate Selection"
  ],
  [
   77,
   "Transport",
   "Locate Selection End"
  ],
  [
   78,
   "Transport",
   "Loop Selection"
  ],
  [
   79,
   "Transport",
   "Activate Return to Start Position"
  ],
  [
   80,
   "Transport",
   "Edit Mode"
  ],
  [
   81,
   "Arranger",
   "Previous Chain Step"
  ],
  [
   82,
   "Arranger",
   "Next Chain Step"
  ],
  [
   83,
   "Arranger",
   "First Chain Step"
  ],
  [
   84,
   "Arranger",
   "Last Chain Step"
  ],
  [
   85,
   "Arranger",
   "First Repeat"
  ],
  [
   86,
   "Arranger",
   "Last Repeat"
  ],
  [
   87,
   "Arranger",
   "Activate"
  ],
  [
   88,
   "Arranger",
   "Trigger Arranger Event 1"
  ],
  [
   89,
   "Arranger",
   "Trigger Arranger Event 2"
  ],
  [
   90,
   "Arranger",
   "Trigger Arranger Event 3"
  ],
  [
   91,
   "Arranger",
   "Trigger Arranger Event 4"
  ],
  [
   92,
   "Arranger",
   "Trigger Arranger Event 5"
  ],
  [
   93,
   "Arranger",
   "Trigger Arranger Event 6"
  ],
  [
   94,
   "Arranger",
   "Trigger Arranger Event 7"
  ],
  [
   95,
   "Arranger",
   "Trigger Arranger Event 8"
  ],
  [
   96,
   "Arranger",
   "Trigger Arranger Event 9"
  ],
  [
   97,
   "Arranger",
   "Trigger Arranger Event 10"
  ],
  [
   98,
   "Arranger",
   "Trigger Arranger Event 11"
  ],
  [
   99,
   "Arranger",
   "Trigger Arranger Event 12"
  ],
  [
   100,
   "Arranger",
   "Trigger Arranger Event 13"
  ],
  [
   101,
   "Arranger",
   "Trigger Arranger Event 14"
  ],
  [
   102,
   "Arranger",
   "Trigger Arranger Event 15"
  ],
  [
   103,
   "Arranger",
   "Trigger Arranger Event 16"
  ],
  [
   104,
   "Arranger",
   "Trigger Arranger Event 17"
  ],
  [
   105,
   "Arranger",
   "Trigger Arranger Event 18"
  ],
  [
   106,
   "Arranger",
   "Trigger Arranger Event 19"
  ],
  [
   107,
   "Arranger",
   "Trigger Arranger Event 20"
  ],
  [
   108,
   "File",
   "New"
  ],
  [
   109,
   "File",
   "Open"
  ],
  [
   110,
   "File",
   "Close"
  ],
  [
   111,
   "File",
   "Save"
  ],
  [
   112,
   "File",
   "Save New Version"
  ],
  [
   113,
   "File",
   "Save As"
  ],
  [
   114,
   "File",
   "Revert"
  ],
  [
   115,
   "File",
   "Quit"
  ],
  [
   116,
   "File",
   "Import Audio File"
  ],
  [
   117,
   "File",
   "Back up Project"
  ],
  [
   118,
   "File",
   "Import Video File"
  ],
  [
   119,
   "File",
   "Import Audio from Video"
  ],
  [
   120,
   "File",
   "Import MIDI File"
  ],
  [
   121,
   "File",
   "Export MIDI File"
  ],
  [
   122,
   "File",
   "Write MIDI File to Project Folder"
  ],
  [
   123,
   "File",
   "Export MIDI Loop"
  ],
  [
   124,
   "File",
   "Import from Audio CD"
  ],
  [
   125,
   "File",
   "Export Audio Mixdown"
  ],
  [
   126,
   "File",
   "Save as Template"
  ],
  [
   127,
   "File",
   "Import MusicXML"
  ]
 ],
 "03,120": [
  [
   1,
   "File",
   "Export MusicXML"
  ],
  [
   2,
   "File",
   "Export Key Command Assignments"
  ],
  [
   3,
   "File",
   "Print"
  ],
  [
   4,
   "File",
   "Export Notepad Data"
  ],
  [
   5,
   "File",
   "New Library"
  ],
  [
   6,
   "File",
   "Open Library"
  ],
  [
   7,
   "File",
   "Import Pool"
  ],
  [
   8,
   "File",
   "Export Pool"
  ],
  [
   9,
   "File",
   "Export Selected Tracks"
  ],
  [
   10,
   "File",
   "Import Track Archive"
  ],
  [
   11,
   "File",
   "Export Master Track"
  ],
  [
   12,
   "File",
   "Import Master Track"
  ],
  [
   13,
   "File",
   "Import Tracks from Project"
  ],
  [
   14,
   "File",
   "Export Selected Events"
  ],
  [
   15,
   "File",
   "Perform Export Selected Events"
  ],
  [
   16,
   "File",
   "Save Pool"
  ],
  [
   17,
   "File",
   "Export Scores"
  ],
  [
   18,
   "File",
   "PageSetup"
  ],
  [
   19,
   "File",
   "Export Video"
  ],
  [
   20,
   "Navigate",
   "Left"
  ],
  [
   21,
   "Navigate",
   "Right"
  ],
  [
   22,
   "Navigate",
   "Up"
  ],
  [
   23,
   "Navigate",
   "Down"
  ],
  [
   24,
   "Navigate",
   "Add Left"
  ],
  [
   25,
   "Navigate",
   "Add Right"
  ],
  [
   26,
   "Navigate",
   "Add Up"
  ],
  [
   27,
   "Navigate",
   "Add Down"
  ],
  [
   28,
   "Navigate",
   "Top"
  ],
  [
   29,
   "Navigate",
   "Bottom"
  ],
  [
   30,
   "Navigate",
   "More"
  ],
  [
   31,
   "Navigate",
   "Less"
  ],
  [
   32,
   "Navigate",
   "Fore"
  ],
  [
   33,
   "Navigate",
   "Back"
  ],
  [
   34,
   "Navigate",
   "Toggle Selection"
  ],
  [
   35,
   "Navigate",
   "Focus Previous Plug-in"
  ],
  [
   36,
   "Navigate",
   "Focus Next Plug-in"
  ],
  [
   37,
   "Focus",
   "Hit"
  ],
  [
   38,
   "Focus",
   "Fore"
  ],
  [
   39,
   "Focus",
   "Back"
  ],
  [
   40,
   "Focus",
   "Escape"
  ],
  [
   41,
   "Preset",
   "Next"
  ],
  [
   42,
   "Preset",
   "Previous"
  ],
  [
   43,
   "Preset",
   "Open Browser"
  ],
  [
   44,
   "Preset",
   "Track Preset: Next"
  ],
  [
   45,
   "Preset",
   "Track Preset: Previous"
  ],
  [
   46,
   "Preset",
   "Track Preset: Open Browser"
  ],
  [
   47,
   "Sample Editor",
   "Zoom Mode: Global"
  ],
  [
   48,
   "Sample Editor",
   "Zoom Mode: Clip-Based"
  ],
  [
   49,
   "Sample Editor",
   "Bypass Warping"
  ],
  [
   50,
   "Sample Editor",
   "VariAudio - Toggle Smart Control Mode"
  ],
  [
   51,
   "Sample Editor",
   "VariAudio - Toggle Pitch Snap Mode"
  ],
  [
   52,
   "Sample Editor",
   "VariAudio - Show MIDI Reference Track"
  ],
  [
   53,
   "Sample Editor",
   "VariAudio - Bypass Pitching"
  ],
  [
   54,
   "Sample Editor",
   "VariAudio - Quantize Pitch"
  ],
  [
   55,
   "Sample Editor",
   "VariAudio - Reset Pitch Changes"
  ],
  [
   56,
   "Sample Editor",
   "VariAudio - Reset Pitch Curve Changes"
  ],
  [
   57,
   "Sample Editor",
   "VariAudio - Reset Formant Shift Changes"
  ],
  [
   58,
   "Sample Editor",
   "VariAudio - Reset Volume Changes"
  ],
  [
   59,
   "Sample Editor",
   "VariAudio - Reset Warp Changes"
  ],
  [
   60,
   "Sample Editor",
   "VariAudio - Reset Pitch + Warp Changes"
  ],
  [
   61,
   "Sample Editor",
   "VariAudio - Extract MIDI (no Dialog)"
  ],
  [
   62,
   "Sample Editor",
   "VariAudio - Extract MIDI..."
  ],
  [
   63,
   "Sample Editor",
   "VariAudio - Reanalyze"
  ],
  [
   64,
   "Zoom",
   "Zoom to Selection"
  ],
  [
   65,
   "Zoom",
   "Zoom to Selection Horizontally"
  ],
  [
   66,
   "Zoom",
   "Zoom to Event"
  ],
  [
   67,
   "Zoom",
   "Zoom Full"
  ],
  [
   68,
   "Zoom",
   "Zoom to Locators"
  ],
  [
   69,
   "Zoom",
   "Zoom In Vertically"
  ],
  [
   70,
   "Zoom",
   "Zoom Out Vertically"
  ],
  [
   71,
   "Zoom",
   "Zoom In On Waveform Vertically"
  ],
  [
   72,
   "Zoom",
   "Zoom Out Of Waveform Vertically"
  ],
  [
   73,
   "Zoom",
   "Zoom In Tracks"
  ],
  [
   74,
   "Zoom",
   "Zoom Out Tracks"
  ],
  [
   75,
   "Zoom",
   "Zoom Tracks Exclusive"
  ],
  [
   76,
   "Zoom",
   "Undo Zoom"
  ],
  [
   77,
   "Zoom",
   "Redo Zoom"
  ],
  [
   78,
   "Zoom",
   "Zoom Tracks 1 Row"
  ],
  [
   79,
   "Zoom",
   "Zoom Tracks 2 Rows"
  ],
  [
   80,
   "Zoom",
   "Zoom Tracks 3 Rows"
  ],
  [
   81,
   "Zoom",
   "Zoom Tracks 4 Rows"
  ],
  [
   82,
   "Zoom",
   "Zoom Tracks N Rows"
  ],
  [
   83,
   "Zoom",
   "Zoom Tracks Minimal"
  ],
  [
   84,
   "Zoom",
   "Zoom Tracks Full"
  ],
  [
   85,
   "Zoom",
   "Zoom 4 Tracks"
  ],
  [
   86,
   "Zoom",
   "Zoom 8 Tracks"
  ],
  [
   87,
   "Zoom",
   "Zoom N Tracks"
  ],
  [
   88,
   "Zoom",
   "Zoom Preset 1"
  ],
  [
   89,
   "Zoom",
   "Zoom Preset 2"
  ],
  [
   90,
   "Zoom",
   "Zoom Preset 3"
  ],
  [
   91,
   "Zoom",
   "Zoom Preset 4"
  ],
  [
   92,
   "Zoom",
   "Zoom Preset 5"
  ],
  [
   93,
   "Zoom",
   "Zoom Cycle Marker 1"
  ],
  [
   94,
   "Zoom",
   "Zoom Cycle Marker 2"
  ],
  [
   95,
   "Zoom",
   "Zoom Cycle Marker 3"
  ],
  [
   96,
   "Zoom",
   "Zoom Cycle Marker 4"
  ],
  [
   97,
   "Zoom",
   "Zoom Cycle Marker 5"
  ],
  [
   98,
   "Zoom",
   "Zoom Cycle Marker 6"
  ],
  [
   99,
   "Zoom",
   "Zoom Cycle Marker 7"
  ],
  [
   100,
   "Zoom",
   "Zoom Cycle Marker 8"
  ],
  [
   101,
   "Zoom",
   "Zoom Cycle Marker 9"
  ],
  [
   102,
   "Zoom",
   "Zoom In"
  ],
  [
   103,
   "Zoom",
   "Zoom Out"
  ],
  [
   104,
   "Zoom",
   "Zoom MEM"
  ],
  [
   105,
   "Zoom",
   "Zoom ZAP"
  ],
  [
   106,
   "Project",
   "Remove Selected Tracks"
  ],
  [
   107,
   "Project",
   "Remove Empty Tracks"
  ],
  [
   108,
   "Project",
   "Open Pool"
  ],
  [
   109,
   "Project",
   "Open Markers"
  ],
  [
   110,
   "Project",
   "Open Tempo Track"
  ],
  [
   111,
   "Project",
   "Colors"
  ],
  [
   112,
   "Project",
   "Setup"
  ],
  [
   113,
   "Project",
   "Tap Tempo"
  ],
  [
   114,
   "Project",
   "Set Timecode"
  ],
  [
   115,
   "Project",
   "Notepad"
  ],
  [
   116,
   "Project",
   "Auto Fades Settings"
  ],
  [
   117,
   "Project",
   "Bring To Front"
  ],
  [
   118,
   "Project",
   "Track Controls Settings"
  ],
  [
   119,
   "Project",
   "Select Track: Next"
  ],
  [
   120,
   "Project",
   "Select Track: Prev"
  ],
  [
   121,
   "Project",
   "Select Track: Add Next"
  ],
  [
   122,
   "Project",
   "Select Track: Add Prev"
  ],
  [
   123,
   "Project",
   "Duplicate Tracks"
  ],
  [
   124,
   "Project",
   "Folding: Toggle Selected Track"
  ],
  [
   125,
   "Project",
   "Folding: Fold Tracks"
  ],
  [
   126,
   "Project",
   "Folding: Unfold Tracks"
  ],
  [
   127,
   "Project",
   "Folding: Toggle Tracks"
  ]
 ],
 "03,121": [
  [
   1,
   "Project",
   "Set Track\/Event Color"
  ],
  [
   2,
   "Project",
   "Folding: Tracks To Folder"
  ],
  [
   3,
   "Project",
   "Divide Track List"
  ],
  [
   4,
   "Project",
   "Tempo Detection"
  ],
  [
   5,
   "Project",
   "Open Score Layout"
  ],
  [
   6,
   "AddTrack",
   "Audio Mono"
  ],
  [
   7,
   "AddTrack",
   "Audio"
  ],
  [
   8,
   "AddTrack",
   "Instrument"
  ],
  [
   9,
   "AddTrack",
   "Sampler"
  ],
  [
   10,
   "AddTrack",
   "MIDI"
  ],
  [
   11,
   "AddTrack",
   "Group Channel"
  ],
  [
   12,
   "AddTrack",
   "FX Channel"
  ],
  [
   13,
   "AddTrack",
   "VCA Fader"
  ],
  [
   14,
   "AddTrack",
   "Marker"
  ],
  [
   15,
   "AddTrack",
   "Ruler"
  ],
  [
   16,
   "AddTrack",
   "Folder"
  ],
  [
   17,
   "AddTrack",
   "Tempo"
  ],
  [
   18,
   "AddTrack",
   "Signature"
  ],
  [
   19,
   "AddTrack",
   "Arranger"
  ],
  [
   20,
   "AddTrack",
   "TransposeTrack"
  ],
  [
   21,
   "AddTrack",
   "Chord"
  ],
  [
   22,
   "AddTrack",
   "Video"
  ],
  [
   23,
   "AddTrack",
   "OpenDialog"
  ],
  [
   24,
   "AddTrack",
   "From Track Presets"
  ],
  [
   25,
   "Window Zones",
   "Show\/Hide Channel Left Zone"
  ],
  [
   26,
   "Window Zones",
   "Show\/Hide Extended Left Zone"
  ],
  [
   27,
   "Window Zones",
   "Show\/Hide Right Zone"
  ],
  [
   28,
   "Window Zones",
   "Show\/Hide Transport Zone"
  ],
  [
   29,
   "Window Zones",
   "Show Previous Tab"
  ],
  [
   30,
   "Window Zones",
   "Show Next Tab"
  ],
  [
   31,
   "Window Zones",
   "Show Previous Page"
  ],
  [
   32,
   "Window Zones",
   "Show Next Page"
  ],
  [
   33,
   "Window Zones",
   "Show\/Hide Editor Visibility"
  ],
  [
   34,
   "Inspector",
   "Toggle Standard Section"
  ],
  [
   35,
   "Inspector",
   "Toggle MIDI Modifiers Section"
  ],
  [
   36,
   "Inspector",
   "Toggle Inserts Section"
  ],
  [
   37,
   "Inspector",
   "Toggle Sends Section"
  ],
  [
   38,
   "Inspector",
   "Toggle EQs Section"
  ],
  [
   39,
   "Inspector",
   "Toggle Channel Section"
  ],
  [
   40,
   "Inspector",
   "Toggle Routing Section"
  ],
  [
   41,
   "Inspector",
   "Toggle Filters Section"
  ],
  [
   42,
   "Inspector",
   "Toggle Strip Section"
  ],
  [
   43,
   "Inspector",
   "Toggle MIDI Fader Section"
  ],
  [
   44,
   "Inspector",
   "Toggle Notepad Section"
  ],
  [
   45,
   "Inspector",
   "Toggle Quick Controls Section"
  ],
  [
   46,
   "Inspector",
   "Toggle Direct Routing Section"
  ],
  [
   47,
   "Inspector",
   "Toggle Chords Section"
  ],
  [
   48,
   "Inspector",
   "Toggle Track Variations Section"
  ],
  [
   49,
   "Inspector",
   "Toggle Cue Sends Section"
  ],
  [
   50,
   "Inspector",
   "Toggle User Panel Section"
  ],
  [
   51,
   "Inspector",
   "Toggle Expression Map Section"
  ],
  [
   52,
   "Inspector",
   "Toggle Note Expression Section"
  ],
  [
   53,
   "Inspector",
   "Toggle MIDI Inserts Section"
  ],
  [
   54,
   "Inspector",
   "Toggle MIDI Sends Section"
  ],
  [
   55,
   "Inspector",
   "Toggle Surround Pan Section"
  ],
  [
   56,
   "Audio",
   "Detect Silence"
  ],
  [
   57,
   "Audio",
   "Crossfade"
  ],
  [
   58,
   "Audio",
   "Remove Fades"
  ],
  [
   59,
   "Audio",
   "Remove Fade In"
  ],
  [
   60,
   "Audio",
   "Remove Fade Out"
  ],
  [
   61,
   "Audio",
   "Remove Volume Curve"
  ],
  [
   62,
   "Audio",
   "Invert Phase On\/Off"
  ],
  [
   63,
   "Audio",
   "Open Fade Editors"
  ],
  [
   64,
   "Audio",
   "Bounce"
  ],
  [
   65,
   "Audio",
   "Minimize File"
  ],
  [
   66,
   "Audio",
   "Find Selected in Pool"
  ],
  [
   67,
   "Audio",
   "Set Tempo From Event"
  ],
  [
   68,
   "Audio",
   "Set Definition From Tempo"
  ],
  [
   69,
   "Audio",
   "Stretch to Project Tempo"
  ],
  [
   70,
   "Audio",
   "Close Gaps"
  ],
  [
   71,
   "Audio",
   "Auto-Grid"
  ],
  [
   72,
   "Audio",
   "Event or Range as Region"
  ],
  [
   73,
   "Audio",
   "Events from Regions"
  ],
  [
   74,
   "Audio",
   "Events to Part"
  ],
  [
   75,
   "Audio",
   "Delete Overlaps"
  ],
  [
   76,
   "Audio",
   "Dissolve Part"
  ],
  [
   77,
   "Audio",
   "To Origin"
  ],
  [
   78,
   "Audio",
   "Adjust Fades to Range"
  ],
  [
   79,
   "Audio",
   "Fade In to Range Start"
  ],
  [
   80,
   "Audio",
   "Fade Out from Range End"
  ],
  [
   81,
   "Audio",
   "Apply Standard Fade In"
  ],
  [
   82,
   "Audio",
   "Apply Standard Fade Out"
  ],
  [
   83,
   "Audio",
   "Increment Event Volume"
  ],
  [
   84,
   "Audio",
   "Decrement Event Volume"
  ],
  [
   85,
   "Audio",
   "Increment Fade In Length"
  ],
  [
   86,
   "Audio",
   "Decrement Fade In Length"
  ],
  [
   87,
   "Audio",
   "Increment Fade Out Length"
  ],
  [
   88,
   "Audio",
   "Decrement Fade Out Length"
  ],
  [
   89,
   "Audio",
   "Copy Warp Markers from Selected Event"
  ],
  [
   90,
   "Audio",
   "Paste Warp Markers to Selected Events"
  ],
  [
   91,
   "Audio",
   "Convert Tracks: Multi-Channel to Mono"
  ],
  [
   92,
   "Audio",
   "Convert Tracks: Mono to Multi-Channel"
  ],
  [
   93,
   "Audio",
   "Fade In to Cursor"
  ],
  [
   94,
   "Audio",
   "Fade Out to Cursor"
  ],
  [
   95,
   "Audio",
   "Snap Point to Cursor"
  ],
  [
   96,
   "Audio",
   "Disable\/Enable Track"
  ],
  [
   97,
   "Audio",
   "Constrain Delay Compensation"
  ],
  [
   98,
   "Audio",
   "Update Origin"
  ],
  [
   99,
   "Audio",
   "Close Gaps (Crossfade)"
  ],
  [
   100,
   "Audio",
   "Generate Harmony Voices"
  ],
  [
   101,
   "Audio",
   "Create Sampler Track"
  ],
  [
   102,
   "Audio",
   "Make Extension from Selected Events Permanent"
  ],
  [
   103,
   "Audio",
   "Remove Extension from Selected Events"
  ],
  [
   104,
   "Hitpoints",
   "Calculate"
  ],
  [
   105,
   "Hitpoints",
   "Create Audio Slices from Hitpoints"
  ],
  [
   106,
   "Hitpoints",
   "Create Markers from Hitpoints"
  ],
  [
   107,
   "Hitpoints",
   "Divide Audio Events at Hitpoints"
  ],
  [
   108,
   "Hitpoints",
   "Remove Hitpoints"
  ],
  [
   109,
   "Audio Realtime Processing",
   "Create Warp Tabs from Hitpoints"
  ],
  [
   110,
   "Audio Realtime Processing",
   "Unstretch Audio"
  ],
  [
   111,
   "Audio Realtime Processing",
   "Flatten Realtime Processing"
  ],
  [
   112,
   "Direct Offline Processing",
   "Direct Offline Processing"
  ],
  [
   113,
   "Direct Offline Processing",
   "Add Process"
  ],
  [
   114,
   "Direct Offline Processing",
   "Bypass Selected Process"
  ],
  [
   115,
   "Direct Offline Processing",
   "Apply"
  ],
  [
   116,
   "Direct Offline Processing",
   "Discard"
  ],
  [
   117,
   "Direct Offline Processing",
   "Make All Permanent"
  ],
  [
   118,
   "Direct Offline Processing",
   "Add Plug-in"
  ],
  [
   119,
   "Direct Offline Processing",
   "Favorite 1"
  ],
  [
   120,
   "Direct Offline Processing",
   "Favorite 2"
  ],
  [
   121,
   "Direct Offline Processing",
   "Favorite 3"
  ],
  [
   122,
   "Direct Offline Processing",
   "Favorite 4"
  ],
  [
   123,
   "Direct Offline Processing",
   "Favorite 5"
  ],
  [
   124,
   "Direct Offline Processing",
   "Favorite 6"
  ],
  [
   125,
   "Direct Offline Processing",
   "Favorite 7"
  ],
  [
   126,
   "Direct Offline Processing",
   "Favorite 8"
  ],
  [
   127,
   "Direct Offline Processing",
   "Favorite 9"
  ]
 ],
 "03,122": [
  [
   1,
   "Direct Offline Processing",
   "Bank 1"
  ],
  [
   2,
   "Direct Offline Processing",
   "Bank 2"
  ],
  [
   3,
   "Direct Offline Processing",
   "Bank 3"
  ],
  [
   4,
   "Direct Offline Processing",
   "Bank 4"
  ],
  [
   5,
   "Direct Offline Processing",
   "Toggle Auto Apply"
  ],
  [
   6,
   "Tool",
   "Next Tool"
  ],
  [
   7,
   "Tool",
   "Previous Tool"
  ],
  [
   8,
   "Tool",
   "Select Tool"
  ],
  [
   9,
   "Tool",
   "Object Selection Tool: Normal Sizing"
  ],
  [
   10,
   "Tool",
   "Object Selection Tool: Sizing Moves Content"
  ],
  [
   11,
   "Tool",
   "Object Selection Tool: Sizing Applies Time Stretch"
  ],
  [
   12,
   "Tool",
   "Range Tool"
  ],
  [
   13,
   "Tool",
   "Split Tool"
  ],
  [
   14,
   "Tool",
   "Glue Tool"
  ],
  [
   15,
   "Tool",
   "Delete Tool"
  ],
  [
   16,
   "Tool",
   "Zoom Tool"
  ],
  [
   17,
   "Tool",
   "Mute Tool"
  ],
  [
   18,
   "Tool",
   "Draw Tool"
  ],
  [
   19,
   "Tool",
   "Play Tool"
  ],
  [
   20,
   "Tool",
   "Drumstick Tool"
  ],
  [
   21,
   "Tool",
   "Scrub Tool"
  ],
  [
   22,
   "Tool",
   "Trim Tool"
  ],
  [
   23,
   "Tool",
   "Color Tool"
  ],
  [
   24,
   "Tool",
   "Comp Tool"
  ],
  [
   25,
   "Tool",
   "Free Warp Tool"
  ],
  [
   26,
   "Tool",
   "Audio Tempo Definition Tool"
  ],
  [
   27,
   "Tool",
   "Hitpoint Tool"
  ],
  [
   28,
   "Tool",
   "Curve Tool"
  ],
  [
   29,
   "Tool",
   "Tool 1"
  ],
  [
   30,
   "Tool",
   "Tool 2"
  ],
  [
   31,
   "Tool",
   "Tool 3"
  ],
  [
   32,
   "Tool",
   "Tool 4"
  ],
  [
   33,
   "Tool",
   "Tool 5"
  ],
  [
   34,
   "Tool",
   "Tool 6"
  ],
  [
   35,
   "Tool",
   "Tool 7"
  ],
  [
   36,
   "Tool",
   "Tool 8"
  ],
  [
   37,
   "Tool",
   "Tool 9"
  ],
  [
   38,
   "Tool",
   "Tool 10"
  ],
  [
   39,
   "Tool",
   "Popup Tools"
  ],
  [
   40,
   "Tool",
   "Insert Note Tool"
  ],
  [
   41,
   "Tool",
   "Layout Tool"
  ],
  [
   42,
   "Tool",
   "Cut Tool"
  ],
  [
   43,
   "Tool",
   "Display Quantize Tool"
  ],
  [
   44,
   "Tool",
   "Score Zoom Tool"
  ],
  [
   45,
   "Tool",
   "Export Range Tool"
  ],
  [
   46,
   "Tool",
   "TimeWarp Tool"
  ],
  [
   47,
   "Tool",
   "Edit Pitch\/Warp Tool"
  ],
  [
   48,
   "Tool",
   "Combine Selection Tools On\/Off"
  ],
  [
   49,
   "Automation",
   "Toggle Read Enable All Tracks"
  ],
  [
   50,
   "Automation",
   "Toggle Write Enable All Tracks"
  ],
  [
   51,
   "Automation",
   "Show All Used Automation"
  ],
  [
   52,
   "Automation",
   "Hide All Automation"
  ],
  [
   53,
   "Automation",
   "Toggle Read Enable Selected Tracks"
  ],
  [
   54,
   "Automation",
   "Toggle Write Enable Selected Tracks"
  ],
  [
   55,
   "Automation",
   "Show Used Automation (Selected Tracks)"
  ],
  [
   56,
   "Automation",
   "Show Automation"
  ],
  [
   57,
   "Automation",
   "Hide Automation"
  ],
  [
   58,
   "Automation",
   "Automation Mode - Touch"
  ],
  [
   59,
   "Automation",
   "Automation Mode - Auto-Latch"
  ],
  [
   60,
   "Automation",
   "Automation Mode - Cross-Over"
  ],
  [
   61,
   "Automation",
   "Punch Out of Latch Automation"
  ],
  [
   62,
   "Automation",
   "Open Panel"
  ],
  [
   63,
   "Automation",
   "Automation Mode - Trim"
  ],
  [
   64,
   "Automation",
   "Freeze All Trim Automation in Project"
  ],
  [
   65,
   "Automation",
   "Freeze Trim Automation of Selected Tracks"
  ],
  [
   66,
   "Automation",
   "Show All Volume Automation"
  ],
  [
   67,
   "Automation",
   "Show All Pan Automation"
  ],
  [
   68,
   "Automation",
   "Show All Send Automation"
  ],
  [
   69,
   "Automation",
   "Show All Insert Automation"
  ],
  [
   70,
   "Automation",
   "Show All EQ Automation"
  ],
  [
   71,
   "Automation",
   "Show All - Used Only"
  ],
  [
   72,
   "Automation",
   "Delete All Automation in Project"
  ],
  [
   73,
   "Automation",
   "Delete Automation of Selected Tracks"
  ],
  [
   74,
   "Automation",
   "Delete Automation in Range"
  ],
  [
   75,
   "Automation",
   "Next Automation Mode"
  ],
  [
   76,
   "Automation",
   "Suspend Reading All"
  ],
  [
   77,
   "Automation",
   "Suspend Writing All"
  ],
  [
   78,
   "Automation",
   "Suspend Reading\/Writing All"
  ],
  [
   79,
   "Automation",
   "Suspend Reading Volume"
  ],
  [
   80,
   "Automation",
   "Suspend Writing Volume"
  ],
  [
   81,
   "Automation",
   "Suspend Reading Pan"
  ],
  [
   82,
   "Automation",
   "Suspend Writing Pan"
  ],
  [
   83,
   "Automation",
   "Suspend Reading Mute"
  ],
  [
   84,
   "Automation",
   "Suspend Writing Mute"
  ],
  [
   85,
   "Automation",
   "Suspend Reading EQ"
  ],
  [
   86,
   "Automation",
   "Suspend Writing EQ"
  ],
  [
   87,
   "Automation",
   "Suspend Reading Sends"
  ],
  [
   88,
   "Automation",
   "Suspend Writing Sends"
  ],
  [
   89,
   "Automation",
   "Suspend Reading Inserts"
  ],
  [
   90,
   "Automation",
   "Suspend Writing Inserts"
  ],
  [
   91,
   "Automation",
   "Suspend Reading Dynamics"
  ],
  [
   92,
   "Automation",
   "Suspend Writing Dynamics"
  ],
  [
   93,
   "Automation",
   "Suspend Reading Others"
  ],
  [
   94,
   "Automation",
   "Suspend Writing Others"
  ],
  [
   95,
   "Automation",
   "Fill To Punch"
  ],
  [
   96,
   "Automation",
   "Fill To Start"
  ],
  [
   97,
   "Automation",
   "Fill To End"
  ],
  [
   98,
   "Automation",
   "Fill Loop"
  ],
  [
   99,
   "Automation",
   "Fill Gaps"
  ],
  [
   100,
   "Automation",
   "Fill Gaps on Selected Tracks"
  ],
  [
   101,
   "Automation",
   "Fill Gaps with Current Value (Selected Tracks)"
  ],
  [
   102,
   "Automation",
   "Use Virgin Territories"
  ],
  [
   103,
   "MediaList",
   "RemoveWriteProtection"
  ],
  [
   104,
   "MediaList",
   "SetWriteProtection"
  ],
  [
   105,
   "MediaList",
   "CommitTags"
  ],
  [
   106,
   "MediaInspector",
   "RemoveAttribute"
  ],
  [
   107,
   "Note Expression",
   "Convert to Note Expression"
  ],
  [
   108,
   "Note Expression",
   "Dissolve Note Expression"
  ],
  [
   109,
   "Note Expression",
   "Remove Note Expression"
  ],
  [
   110,
   "Note Expression",
   "Trim Note Expression to Note Length"
  ],
  [
   111,
   "Note Expression",
   "Consolidate Note Expression Overlaps"
  ],
  [
   112,
   "Note Expression",
   "Resolve Note Expression"
  ],
  [
   113,
   "Note Expression",
   "Note Expression MIDI Setup"
  ],
  [
   114,
   "Note Expression",
   "Record MIDI as Note Expression"
  ],
  [
   115,
   "Note Expression",
   "Edit Next Parameter"
  ],
  [
   116,
   "Note Expression",
   "Edit Previous Parameter"
  ],
  [
   117,
   "Note Expression",
   "Editor Size: Increase"
  ],
  [
   118,
   "Note Expression",
   "Editor Size: Decrease"
  ],
  [
   119,
   "Note Expression",
   "Open\/Close Editor"
  ],
  [
   120,
   "Note Expression",
   "Paste Note Expression"
  ],
  [
   121,
   "Note Expression",
   "Show\/Hide Note Expression Data"
  ],
  [
   122,
   "Note Expression",
   "Double-Click opens Note Expression Editor On\/Off"
  ],
  [
   123,
   "Chords",
   "Chord Editing - Inversions: Move Up"
  ],
  [
   124,
   "Chords",
   "Chord Editing - Inversions: Move Down"
  ],
  [
   125,
   "Chords",
   "Chord Editing - Drop 2"
  ],
  [
   126,
   "Chords",
   "Chord Editing - Drop 3"
  ],
  [
   127,
   "Chords",
   "Chord Editing - Drop 2 + 4"
  ]
 ],
 "03,123": [
  [
   1,
   "Chords",
   "Chord Editing - Add to Chord Track"
  ],
  [
   2,
   "Chords",
   "Chord Editing - Match with Chord Track"
  ],
  [
   3,
   "Chords",
   "Make Chords"
  ],
  [
   4,
   "Chords",
   "Notes To Voices"
  ],
  [
   5,
   "Chords",
   "Map to Chord Track"
  ],
  [
   6,
   "Chords",
   "Chords to MIDI"
  ],
  [
   7,
   "Chords",
   "Set up Scales"
  ],
  [
   8,
   "Chords",
   "ChordPad"
  ],
  [
   9,
   "Chords",
   "Chord Pads - Show\/Hide Editor\/Assistant"
  ],
  [
   10,
   "Chords",
   "ChordPadSetup"
  ],
  [
   11,
   "Chords",
   "Chord Pads - Transpose Down"
  ],
  [
   12,
   "Chords",
   "Chord Pads - Transpose Up"
  ],
  [
   13,
   "Chords",
   "Chord Pads - Fewer Tensions"
  ],
  [
   14,
   "Chords",
   "Chord Pads - More Tensions"
  ],
  [
   15,
   "Chords",
   "Chord Pads - Previous Voicing"
  ],
  [
   16,
   "Chords",
   "Chord Pads - Next Voicing"
  ],
  [
   17,
   "Chords",
   "Chord Pads - Latch Chords On\/Off"
  ],
  [
   18,
   "TrackVersions",
   "New Version"
  ],
  [
   19,
   "TrackVersions",
   "Duplicate Version"
  ],
  [
   20,
   "TrackVersions",
   "Delete Version"
  ],
  [
   21,
   "TrackVersions",
   "Rename Version"
  ],
  [
   22,
   "TrackVersions",
   "Next Version"
  ],
  [
   23,
   "TrackVersions",
   "Previous Version"
  ],
  [
   24,
   "TrackVersions",
   "Create Versions from Lanes"
  ],
  [
   25,
   "TrackVersions",
   "Create Lanes from Versions"
  ],
  [
   26,
   "TrackVersions",
   "Select Tracks with Same Version ID"
  ],
  [
   27,
   "TrackVersions",
   "Assign Common Version ID"
  ],
  [
   28,
   "TrackVersions",
   "Delete Inactive Versions of Selected Tracks"
  ],
  [
   29,
   "TrackVersions",
   "Delete Inactive Versions of All Tracks"
  ],
  [
   30,
   "Channel & Track Visibility",
   "ShowMarked"
  ],
  [
   31,
   "Channel & Track Visibility",
   "HideMuted"
  ],
  [
   32,
   "Channel & Track Visibility",
   "Create Track Visibility Configuration"
  ],
  [
   33,
   "Channel & Track Visibility",
   "Update Track Visibility Configuration"
  ],
  [
   34,
   "Channel & Track Visibility",
   "Sync Visibility of Project and MixConsole: On\/Off"
  ],
  [
   35,
   "Hub",
   "Steinberg Hub"
  ],
  [
   36,
   "Game Audio Connect",
   "Trigger Export to Game Audio Engine"
  ],
  [
   37,
   "Export",
   "AAF"
  ],
  [
   38,
   "Export",
   "OMF"
  ],
  [
   39,
   "Macro",
   "Selected Tracks to new Folder and Add Group Channel"
  ],
  [
   40,
   "Macro",
   "Zoom to Project"
  ],
  [
   41,
   "Macro",
   "Zoom to Project 2"
  ],
  [
   42,
   "Macro",
   "Export Audio Mixdown Whole Song"
  ],
  [
   43,
   "Macro",
   "Move Selection to New TrackVersion"
  ],
  [
   44,
   "Macro",
   "Switch Mutes Down"
  ],
  [
   45,
   "Macro",
   "Switch Mutes Up"
  ],
  [
   46,
   "Macro",
   "CSS LEGATO OFFSET"
  ],
  [
   47,
   "Macro",
   "Fill CC Gap"
  ],
  [
   48,
   "Macro",
   "CC55 (127)"
  ],
  [
   49,
   "Macro",
   "Change Tempo"
  ],
  [
   50,
   "Macro",
   "Save + Retrospective MIDI"
  ],
  [
   51,
   "Macro",
   "CSW LEGATO OFFSET"
  ],
  [
   52,
   "Macro",
   "CSB LEGATO OFFSET"
  ],
  [
   53,
   "Macro",
   "Select between selected notes"
  ],
  [
   54,
   "Macro",
   "Slijm4_Routing"
  ],
  [
   55,
   "Macro",
   "Slijm4_Reverb_Routing"
  ],
  [
   56,
   "Macro",
   "Create Cycle marker for selected clip"
  ],
  [
   57,
   "Macro",
   "Copy Track name"
  ],
  [
   58,
   "Macro",
   "Move clips"
  ],
  [
   59,
   "Macro",
   "Copy Selection to Next Part"
  ],
  [
   60,
   "Macro",
   "Copy Selection to Previous Part"
  ],
  [
   61,
   "Macro",
   "Copy CC11 from main window"
  ],
  [
   62,
   "Macro",
   "Replace CC1"
  ],
  [
   63,
   "Macro",
   "Resize Clip"
  ],
  [
   64,
   "MIDI Remote",
   "Scripting Tools: Reload Scripts"
  ],
  [
   65,
   "MIDI Remote",
   "Scripting Tools: Open Console"
  ],
  [
   66,
   "MIDI Remote",
   "Scripting Tools: Open Script Folder"
  ],
  [
   67,
   "MIDI Remote",
   "Scripting Tools: Open ReadMe"
  ],
  [
   68,
   "MIDI Remote",
   "Scripting Tools: Highlight Bounding Rects"
  ],
  [
   69,
   "MIDI Remote",
   "Open MIDI Remote Mapping Assistant"
  ],
  [
   70,
   "MIDI Remote",
   "Show\/Hide Functions Browser in MIDI Remote Mapping Assistant"
  ],
  [
   71,
   "Channel Settings",
   "Show\/Hide Direct Routing"
  ],
  [
   72,
   "Channel Settings",
   "Show\/Hide Output Chain"
  ],
  [
   73,
   "Video",
   "Mute all video tracks"
  ],
  [
   74,
   "Audio Performance",
   "Reset Processing Overload Indicator"
  ],
  [
   75,
   "MixConsole History",
   "Undo MixConsole Step"
  ],
  [
   76,
   "MixConsole History",
   "Redo MixConsole Step"
  ],
  [
   77,
   "MixConsole Snapshots",
   "Save MixConsole Snapshot"
  ],
  [
   78,
   "Nudge",
   "Start Left"
  ],
  [
   79,
   "Nudge",
   "Start Right"
  ],
  [
   80,
   "Nudge",
   "End Left"
  ],
  [
   81,
   "Nudge",
   "End Right"
  ],
  [
   82,
   "Nudge",
   "Top Up"
  ],
  [
   83,
   "Nudge",
   "Top Down"
  ],
  [
   84,
   "Nudge",
   "Bottom Up"
  ],
  [
   85,
   "Nudge",
   "Bottom Down"
  ],
  [
   86,
   "Nudge",
   "Left"
  ],
  [
   87,
   "Nudge",
   "Right"
  ],
  [
   88,
   "Nudge",
   "Up"
  ],
  [
   89,
   "Nudge",
   "Down"
  ],
  [
   90,
   "Nudge",
   "Up More"
  ],
  [
   91,
   "Nudge",
   "Down More"
  ],
  [
   92,
   "Nudge",
   "Link to Grid On\/Off"
  ],
  [
   93,
   "Nudge",
   "Select Next Grid Type Value"
  ],
  [
   94,
   "Nudge",
   "Select Prev Grid Type Value"
  ],
  [
   95,
   "Nudge",
   "Select Next Time Format"
  ],
  [
   96,
   "Nudge",
   "Select Prev Time Format"
  ],
  [
   97,
   "Nudge",
   "Loop Range Left"
  ],
  [
   98,
   "Nudge",
   "Loop Range Right"
  ],
  [
   99,
   "Nudge",
   "Graphical Left"
  ],
  [
   100,
   "Nudge",
   "Graphical Right"
  ],
  [
   101,
   "Nudge",
   "Graphical Top"
  ],
  [
   102,
   "Nudge",
   "Graphical Bottom"
  ],
  [
   103,
   "Scores Statusbar",
   "barhandles"
  ],
  [
   104,
   "Scores Statusbar",
   "hidden notes"
  ],
  [
   105,
   "Scores Statusbar",
   "hide"
  ],
  [
   106,
   "Scores Statusbar",
   "quant"
  ],
  [
   107,
   "Scores Statusbar",
   "layout"
  ],
  [
   108,
   "Scores Statusbar",
   "group"
  ],
  [
   109,
   "Scores Statusbar",
   "cut"
  ],
  [
   110,
   "Scores Statusbar",
   "splitrest"
  ],
  [
   111,
   "Scores Statusbar",
   "stems"
  ],
  [
   112,
   "Score Functions",
   "Enharm Shift bb"
  ],
  [
   113,
   "Score Functions",
   "Enharm Shift b"
  ],
  [
   114,
   "Score Functions",
   "Enharm Shift off"
  ],
  [
   115,
   "Score Functions",
   "Enharm Shift no"
  ],
  [
   116,
   "Score Functions",
   "Enharm Shift #"
  ],
  [
   117,
   "Score Functions",
   "Enharm Shift ##"
  ],
  [
   118,
   "Score Functions",
   "Enharm Shift ?"
  ],
  [
   119,
   "Score Functions",
   "Enharm Shift ()"
  ],
  [
   120,
   "Score Functions",
   "get info"
  ],
  [
   121,
   "Score Functions",
   "flip"
  ],
  [
   122,
   "Score Functions",
   "group"
  ],
  [
   123,
   "Score Functions",
   "auto dialog"
  ],
  [
   124,
   "Score Functions",
   "hide"
  ],
  [
   125,
   "Score Functions",
   "show pos"
  ],
  [
   126,
   "Score Functions",
   "make chords"
  ],
  [
   127,
   "Score Functions",
   "force update"
  ]
 ],
 "03,124": [
  [
   1,
   "Score Functions",
   "- move one"
  ],
  [
   2,
   "Score Functions",
   "+ move one"
  ],
  [
   3,
   "Score Functions",
   "- move insert"
  ],
  [
   4,
   "Score Functions",
   "+ move insert"
  ],
  [
   5,
   "Score Functions",
   "1 set insert"
  ],
  [
   6,
   "Score Functions",
   "2 set insert"
  ],
  [
   7,
   "Score Functions",
   "3 set insert"
  ],
  [
   8,
   "Score Functions",
   "4 set insert"
  ],
  [
   9,
   "Score Functions",
   "grace note"
  ],
  [
   10,
   "Score Functions",
   "tuplet dialog"
  ],
  [
   11,
   "Score Functions",
   "insert slur"
  ],
  [
   12,
   "Score Functions",
   "merge staves"
  ],
  [
   13,
   "Score Functions",
   "extract voices"
  ],
  [
   14,
   "Score Functions",
   "xplode"
  ],
  [
   15,
   "Score Functions",
   "freeze scores"
  ],
  [
   16,
   "Score Functions",
   "CB-ShowRhythm"
  ],
  [
   17,
   "Score Functions",
   "CB-ShowRepeat"
  ],
  [
   18,
   "Score Functions",
   "CB-EmptyBar"
  ],
  [
   19,
   "Score Functions",
   "CB-RemoveRhythm"
  ],
  [
   20,
   "Score Functions",
   "clean layout"
  ],
  [
   21,
   "Score Functions",
   "open numbars"
  ],
  [
   22,
   "Score Functions",
   "show marker"
  ],
  [
   23,
   "Score Functions",
   "show chordtrack"
  ],
  [
   24,
   "Score Functions",
   "marker to form"
  ],
  [
   25,
   "Score Functions",
   "1 to verse"
  ],
  [
   26,
   "Score Functions",
   "2 to verse"
  ],
  [
   27,
   "Score Functions",
   "3 to verse"
  ],
  [
   28,
   "Score Functions",
   "4 to verse"
  ],
  [
   29,
   "Score Functions",
   "5 to verse"
  ],
  [
   30,
   "Score Functions",
   "6 to verse"
  ],
  [
   31,
   "Score Functions",
   "1 to voice"
  ],
  [
   32,
   "Score Functions",
   "2 to voice"
  ],
  [
   33,
   "Score Functions",
   "3 to voice"
  ],
  [
   34,
   "Score Functions",
   "4 to voice"
  ],
  [
   35,
   "Score Functions",
   "5 to voice"
  ],
  [
   36,
   "Score Functions",
   "6 to voice"
  ],
  [
   37,
   "Score Functions",
   "7 to voice"
  ],
  [
   38,
   "Score Functions",
   "8 to voice"
  ],
  [
   39,
   "Score Functions",
   "1 to string"
  ],
  [
   40,
   "Score Functions",
   "2 to string"
  ],
  [
   41,
   "Score Functions",
   "3 to string"
  ],
  [
   42,
   "Score Functions",
   "4 to string"
  ],
  [
   43,
   "Score Functions",
   "5 to string"
  ],
  [
   44,
   "Score Functions",
   "6 to string"
  ],
  [
   45,
   "Score Functions",
   "7 to string"
  ],
  [
   46,
   "Score Functions",
   "8 to string"
  ],
  [
   47,
   "Score Functions",
   "9 to string"
  ],
  [
   48,
   "Score Functions",
   "10 to string"
  ],
  [
   49,
   "Score Functions",
   "11 to string"
  ],
  [
   50,
   "Score Functions",
   "12 to string"
  ],
  [
   51,
   "Score Functions",
   "1 pagemode zoom"
  ],
  [
   52,
   "Score Functions",
   "2 pagemode zoom"
  ],
  [
   53,
   "Score Functions",
   "3 pagemode zoom"
  ],
  [
   54,
   "Score Functions",
   "4 pagemode zoom"
  ],
  [
   55,
   "Score Functions",
   "5 pagemode zoom"
  ],
  [
   56,
   "Score Functions",
   "6 pagemode zoom"
  ],
  [
   57,
   "Score Functions",
   "7 pagemode zoom"
  ],
  [
   58,
   "Score Functions",
   "8 pagemode zoom"
  ],
  [
   59,
   "Score Functions",
   "make trill"
  ],
  [
   60,
   "Score Functions",
   "make accel"
  ],
  [
   61,
   "Score Functions",
   "make repeat"
  ],
  [
   62,
   "Score Functions",
   "0 auto layout"
  ],
  [
   63,
   "Score Functions",
   "1 auto layout"
  ],
  [
   64,
   "Score Functions",
   "2 auto layout"
  ],
  [
   65,
   "Score Functions",
   "3 auto layout"
  ],
  [
   66,
   "Score Functions",
   "4 auto layout"
  ],
  [
   67,
   "Score Functions",
   "5 auto layout"
  ],
  [
   68,
   "Score Functions",
   "6 auto layout"
  ],
  [
   69,
   "Score Functions",
   "7 auto layout"
  ],
  [
   70,
   "Score Functions",
   "8 auto layout"
  ],
  [
   71,
   "Score Functions",
   "9 auto layout"
  ],
  [
   72,
   "Score Functions",
   "spacer to layout"
  ],
  [
   73,
   "Score Functions",
   "paste attr"
  ],
  [
   74,
   "Score Functions",
   "1 set font set"
  ],
  [
   75,
   "Score Functions",
   "2 set font set"
  ],
  [
   76,
   "Score Functions",
   "3 set font set"
  ],
  [
   77,
   "Score Functions",
   "4 set font set"
  ],
  [
   78,
   "Score Functions",
   "5 set font set"
  ],
  [
   79,
   "Score Functions",
   "6 set font set"
  ],
  [
   80,
   "Score Functions",
   "7 set font set"
  ],
  [
   81,
   "Score Functions",
   "8 set font set"
  ],
  [
   82,
   "Score Functions",
   "9 set font set"
  ],
  [
   83,
   "Score Functions",
   "10 set font set"
  ],
  [
   84,
   "Score Functions",
   "11 set font set"
  ],
  [
   85,
   "Score Functions",
   "12 set font set"
  ],
  [
   86,
   "Score Functions",
   "13 set font set"
  ],
  [
   87,
   "Score Functions",
   "14 set font set"
  ],
  [
   88,
   "Score Functions",
   "15 set font set"
  ],
  [
   89,
   "Score Functions",
   "16 set font set"
  ],
  [
   90,
   "Score Symbol Editor",
   "mirror horizontal"
  ],
  [
   91,
   "Score Symbol Editor",
   "mirror vertical"
  ],
  [
   92,
   "Score Symbol Editor",
   "mirror 90 +"
  ],
  [
   93,
   "Score Symbol Editor",
   "mirror 90 -"
  ],
  [
   94,
   "Score Symbol Editor",
   "group"
  ],
  [
   95,
   "Score Symbol Editor",
   "ungroup"
  ],
  [
   96,
   "Score Symbol Editor",
   "move front"
  ],
  [
   97,
   "Score Symbol Editor",
   "move behind"
  ],
  [
   98,
   "Score Symbol Editor",
   "align left"
  ],
  [
   99,
   "Score Symbol Editor",
   "align right"
  ],
  [
   100,
   "Score Symbol Editor",
   "align top"
  ],
  [
   101,
   "Score Symbol Editor",
   "align bottom"
  ],
  [
   102,
   "Score Symbol Editor",
   "align vertical"
  ],
  [
   103,
   "Score Symbol Editor",
   "align horizontal"
  ],
  [
   104,
   "Score Symbol Editor",
   "100%"
  ],
  [
   105,
   "Score Symbol Editor",
   "200%"
  ],
  [
   106,
   "Score Symbol Editor",
   "400%"
  ],
  [
   107,
   "Score Symbol Editor",
   "600%"
  ],
  [
   108,
   "Score Symbol Editor",
   "800%"
  ],
  [
   109,
   "Score Symbol Palettes",
   "palette clef"
  ],
  [
   110,
   "Score Symbol Palettes",
   "palette notesyms"
  ],
  [
   111,
   "Score Symbol Palettes",
   "palette dyn"
  ],
  [
   112,
   "Score Symbol Palettes",
   "palette linetr"
  ],
  [
   113,
   "Score Symbol Palettes",
   "palette other"
  ],
  [
   114,
   "Score Symbol Palettes",
   "palette user"
  ],
  [
   115,
   "Score Symbol Palettes",
   "palette text"
  ],
  [
   116,
   "Score Symbol Palettes",
   "palette picts"
  ],
  [
   117,
   "Score Symbol Palettes",
   "palette keys"
  ],
  [
   118,
   "Score Symbol Palettes",
   "palette clefs"
  ],
  [
   119,
   "Score Symbol Palettes",
   "palette sign"
  ],
  [
   120,
   "Score Symbol Palettes",
   "palette chord"
  ],
  [
   121,
   "Score Symbol Palettes",
   "palette guitar"
  ],
  [
   122,
   "Score Symbol Palettes",
   "palette expressionmap"
  ],
  [
   123,
   "Score Symbol Palettes",
   "dynamic mapping"
  ],
  [
   124,
   "Score Symbol Palettes",
   "form symbols"
  ],
  [
   125,
   "Control Room",
   "Switch: Source Select"
  ],
  [
   126,
   "Control Room",
   "Switch: Folddown Select"
  ],
  [
   127,
   "Control Room",
   "Switch: Folddown Select 1"
  ]
 ],
 "03,125": [
  [
   1,
   "Control Room",
   "Switch: Folddown Select 2"
  ],
  [
   2,
   "Control Room",
   "Switch: Folddown Select 3"
  ],
  [
   3,
   "Control Room",
   "Switch: Folddown Select 4"
  ],
  [
   4,
   "Control Room",
   "Switch: Speakers Select"
  ],
  [
   5,
   "Control Room",
   "Switch: Click Active"
  ],
  [
   6,
   "Control Room",
   "Switch: Listen Enable"
  ],
  [
   7,
   "Control Room",
   "Switch: Listen Cancel"
  ],
  [
   8,
   "Control Room",
   "Switch: AFL\/PFL"
  ],
  [
   9,
   "Control Room",
   "Switch: Speakers Select 1"
  ],
  [
   10,
   "Control Room",
   "Switch: Speakers Select 2"
  ],
  [
   11,
   "Control Room",
   "Switch: Speakers Select 3"
  ],
  [
   12,
   "Control Room",
   "Switch: Speakers Select 4"
  ],
  [
   13,
   "Control Room",
   "Switch: Reference Level Active"
  ],
  [
   14,
   "Control Room",
   "Switch: Dim Active"
  ],
  [
   15,
   "Control Room",
   "Switch: Talkback Active"
  ],
  [
   16,
   "Control Room",
   "Speaker Solo: Cancel"
  ],
  [
   17,
   "Control Room",
   "Speaker Solo: Front"
  ],
  [
   18,
   "Control Room",
   "Speaker Solo: Rear"
  ],
  [
   19,
   "Control Room",
   "Speaker Solo: Left-Right"
  ],
  [
   20,
   "Control Room",
   "Speaker Solo: Side"
  ],
  [
   21,
   "Control Room",
   "Speaker Solo: Solo to Center"
  ],
  [
   22,
   "Control Room",
   "Speaker Solo: Rear to Front"
  ],
  [
   23,
   "Control Room",
   "Speaker Solo: Left"
  ],
  [
   24,
   "Control Room",
   "Speaker Solo: Center"
  ],
  [
   25,
   "Control Room",
   "Speaker Solo: Right"
  ],
  [
   26,
   "Control Room",
   "Speaker Solo: Surround Left"
  ],
  [
   27,
   "Control Room",
   "Speaker Solo: Surround Right"
  ],
  [
   28,
   "Control Room",
   "Speaker Solo: LFE"
  ],
  [
   29,
   "Control Room",
   "Speaker Solo: Left of Center"
  ],
  [
   30,
   "Control Room",
   "Speaker Solo: Right of Center"
  ],
  [
   31,
   "Control Room",
   "Speaker Solo: Side Left"
  ],
  [
   32,
   "Control Room",
   "Speaker Solo: Side Right"
  ],
  [
   33,
   "Control Room",
   "Speaker Solo: Top Front Left"
  ],
  [
   34,
   "Control Room",
   "Speaker Solo: Top Front Center"
  ],
  [
   35,
   "Control Room",
   "Speaker Solo: Top Front Right"
  ],
  [
   36,
   "Control Room",
   "Speaker Solo: Top Side Left"
  ],
  [
   37,
   "Control Room",
   "Speaker Solo: Top Center"
  ],
  [
   38,
   "Control Room",
   "Speaker Solo: Top Side Right"
  ],
  [
   39,
   "Control Room",
   "Speaker Solo: Top Back Left"
  ],
  [
   40,
   "Control Room",
   "Speaker Solo: Top Back Center"
  ],
  [
   41,
   "Control Room",
   "Speaker Solo: Top Back Right"
  ],
  [
   42,
   "Control Room",
   "Speaker Solo: Bottom Front Left"
  ],
  [
   43,
   "Control Room",
   "Speaker Solo: Bottom Front Center"
  ],
  [
   44,
   "Control Room",
   "Speaker Solo: Bottom Front Right"
  ],
  [
   45,
   "Control Room",
   "Speaker Solo: Left Wide"
  ],
  [
   46,
   "Control Room",
   "Speaker Solo: Right Wide"
  ],
  [
   47,
   "Control Room",
   "Switch: Activate Speakers"
  ],
  [
   48,
   "Control Room",
   "Switch: Activate Studio 1"
  ],
  [
   49,
   "Control Room",
   "Switch: Activate Studio 2"
  ],
  [
   50,
   "Control Room",
   "Switch: Activate Studio 3"
  ],
  [
   51,
   "Control Room",
   "Switch: Activate Studio 4"
  ],
  [
   52,
   "Control Room",
   "Switch: Activate Phones"
  ],
  [
   53,
   "Import",
   "AAF"
  ],
  [
   54,
   "Import",
   "OMF"
  ],
  [
   55,
   "Render in Place",
   "Render"
  ],
  [
   56,
   "Render in Place",
   "Render Setup..."
  ],
  [
   57,
   "Process",
   "Envelope"
  ],
  [
   58,
   "Process",
   "Fade In"
  ],
  [
   59,
   "Process",
   "Fade Out"
  ],
  [
   60,
   "Process",
   "Gain"
  ],
  [
   61,
   "Process",
   "Invert Phase"
  ],
  [
   62,
   "Process",
   "Normalize"
  ],
  [
   63,
   "Process",
   "Pitch Shift"
  ],
  [
   64,
   "Process",
   "Remove DC Offset"
  ],
  [
   65,
   "Process",
   "Resample"
  ],
  [
   66,
   "Process",
   "Reverse"
  ],
  [
   67,
   "Process",
   "Silence"
  ],
  [
   68,
   "Process",
   "Stereo Flip"
  ],
  [
   69,
   "Process",
   "Time Stretch"
  ],
  [
   70,
   "Analyze",
   "Spectrum Analyzer"
  ],
  [
   71,
   "Analyze",
   "Statistics"
  ],
  [
   72,
   "Scores",
   "Toggle Mode"
  ],
  [
   73,
   "Scores",
   "global"
  ],
  [
   74,
   "Scores",
   "lyrics from clip"
  ],
  [
   75,
   "Scores",
   "text from clip"
  ],
  [
   76,
   "Scores",
   "find replace"
  ],
  [
   77,
   "Scores",
   "user symbols"
  ],
  [
   78,
   "Scores",
   "Show\/Hide Length"
  ],
  [
   79,
   "Scores",
   "Show\/Hide Computer Keyboard Input"
  ],
  [
   80,
   "Scores",
   "staff set"
  ],
  [
   81,
   "Scores",
   "move next page"
  ],
  [
   82,
   "Scores",
   "move prev page"
  ],
  [
   83,
   "Scores",
   "auto group"
  ],
  [
   84,
   "Scores",
   "toggle inpector"
  ],
  [
   85,
   "Score Align Elements",
   "left"
  ],
  [
   86,
   "Score Align Elements",
   "right"
  ],
  [
   87,
   "Score Align Elements",
   "top"
  ],
  [
   88,
   "Score Align Elements",
   "bottom"
  ],
  [
   89,
   "Score Align Elements",
   "vertical"
  ],
  [
   90,
   "Score Align Elements",
   "horizontal"
  ],
  [
   91,
   "Score Align Elements",
   "dynamics"
  ],
  [
   92,
   "Score Meter Scale",
   "rulerOFF"
  ],
  [
   93,
   "Score Meter Scale",
   "rulerPT"
  ],
  [
   94,
   "Score Meter Scale",
   "rulerIN"
  ],
  [
   95,
   "Score Meter Scale",
   "rulerCM"
  ],
  [
   96,
   "Score Meter Scale",
   "fitWidth"
  ],
  [
   97,
   "Score Meter Scale",
   "fitPage"
  ],
  [
   98,
   "Score Meter Scale",
   "8 pagemode zoom"
  ],
  [
   99,
   "Score Meter Scale",
   "7 pagemode zoom"
  ],
  [
   100,
   "Score Meter Scale",
   "6 pagemode zoom"
  ],
  [
   101,
   "Score Meter Scale",
   "5 pagemode zoom"
  ],
  [
   102,
   "Score Meter Scale",
   "4 pagemode zoom"
  ],
  [
   103,
   "Score Meter Scale",
   "3 pagemode zoom"
  ],
  [
   104,
   "Score Meter Scale",
   "2 pagemode zoom"
  ],
  [
   105,
   "Score Meter Scale",
   "1 pagemode zoom"
  ],
  [
   106,
   "Score Meter Scale",
   "200 edmode zoom"
  ],
  [
   107,
   "Score Meter Scale",
   "150 edmode zoom"
  ],
  [
   108,
   "Score Meter Scale",
   "100 edmode zoom"
  ],
  [
   109,
   "Score Meter Scale",
   "80 edmode zoom"
  ],
  [
   110,
   "Score Meter Scale",
   "50 edmode zoom"
  ],
  [
   111,
   "Score Meter Scale",
   "edmode hide"
  ],
  [
   112,
   "Workspaces",
   "New"
  ],
  [
   113,
   "Workspaces",
   "Organize"
  ],
  [
   114,
   "Workspaces",
   "Update Workspace"
  ],
  [
   115,
   "Workspaces",
   "No Workspace"
  ],
  [
   116,
   "Workspaces",
   "Workspace 1"
  ],
  [
   117,
   "Workspaces",
   "Workspace 2"
  ],
  [
   118,
   "Workspaces",
   "Workspace 3"
  ],
  [
   119,
   "Workspaces",
   "Workspace 4"
  ],
  [
   120,
   "Workspaces",
   "Workspace 5"
  ],
  [
   121,
   "Workspaces",
   "Workspace 6"
  ],
  [
   122,
   "Workspaces",
   "Workspace 7"
  ],
  [
   123,
   "Workspaces",
   "Workspace 8"
  ],
  [
   124,
   "Workspaces",
   "Workspace 9"
  ],
  [
   125,
   "Workspaces",
   "Workspace X"
  ],
  [
   126,
   "Windows",
   "Minimize"
  ],
  [
   127,
   "Windows",
   "Maximize"
  ]
 ],
 "03,126": [
  [
   1,
   "Windows",
   "Close All"
  ],
  [
   2,
   "Windows",
   "Minimize All"
  ],
  [
   3,
   "Windows",
   "Restore All"
  ],
  [
   4,
   "Windows",
   "Show\/Hide Desktop"
  ],
  [
   5,
   "Windows",
   "Show\/Hide Plug-ins"
  ],
  [
   6,
   "Windows",
   "Select Next Plug-in Window"
  ],
  [
   7,
   "Windows",
   "Close All Plug-in Windows"
  ],
  [
   8,
   "ADM Editor",
   "ADM Editor..."
  ],
  [
   9,
   "ADM Editor",
   "Open Group Editor"
  ],
  [
   10,
   "ADM Editor",
   "Add Object"
  ],
  [
   11,
   "ADM Editor",
   "Add Bed"
  ],
  [
   12,
   "ADM Editor",
   "Remove Selected Audio Object"
  ],
  [
   13,
   "ADM Editor",
   "Open Trim and Downmix Editor"
  ],
  [
   14,
   "ADM Editor",
   "Create objects from selected tracks"
  ],
  [
   15,
   "ADM Editor",
   "Apply Source Track Name"
  ],
  [
   16,
   "Audio Alignment",
   "Open Audio Alignment Panel"
  ],
  [
   17,
   "Audio Alignment",
   "Add Selection as Alignment Reference"
  ],
  [
   18,
   "Audio Alignment",
   "Add Selection as Alignment Target"
  ],
  [
   19,
   "Audio Alignment",
   "Remove Alignment Reference"
  ],
  [
   20,
   "Audio Alignment",
   "Remove All Alignment Targets"
  ],
  [
   21,
   "Audio Alignment",
   "Align Audio"
  ],
  [
   22,
   "HeadTracking",
   "Show Dialog"
  ],
  [
   23,
   "VRPlayerRemote",
   "Show Dialog"
  ],
  [
   24,
   "VST Connect SE",
   "Create VST Connect"
  ],
  [
   25,
   "VST Connect SE",
   "Remove VST Connect"
  ],
  [
   26,
   "VST Connect SE",
   "Open VST Connect editor"
  ],
  [
   27,
   "VST Connect SE",
   "Add Talkback Channel"
  ],
  [
   28,
   "VST Connect SE",
   "Create Performer Track"
  ],
  [
   29,
   "VST Connect SE",
   "Check And Repair Configuration"
  ],
  [
   30,
   "Process Plug-in",
   "565354796C776F6D6978636865636B65"
  ],
  [
   31,
   "Process Plug-in",
   "56535441567235616C74697665726220"
  ],
  [
   32,
   "Process Plug-in",
   "565354695A4444695A6F746F70652044"
  ],
  [
   33,
   "Process Plug-in",
   "27994C1910A04BA991A20C402B922E35"
  ],
  [
   34,
   "Process Plug-in",
   "42A36F8AEE394B98BB2E8B63CB68E3E7"
  ],
  [
   35,
   "Process Plug-in",
   "9B646D06D6154F859591E3E87A5C5D0A"
  ],
  [
   36,
   "Process Plug-in",
   "37A3AA84E3A24D069C39030EC68768E1"
  ],
  [
   37,
   "Process Plug-in",
   "5653544E6924437265706C696B612078"
  ],
  [
   38,
   "Process Plug-in",
   "001DCD3345D14A13B59DAECF75A37536"
  ],
  [
   39,
   "Process Plug-in",
   "E45B65335E7D4E28B4CA15D7940A3A6D"
  ],
  [
   40,
   "Process Plug-in",
   "565354644C617976616C68616C6C6164"
  ],
  [
   41,
   "Process Plug-in",
   "5653544671456876616C68616C6C6166"
  ],
  [
   42,
   "Process Plug-in",
   "E4B91D8420B74C48A8B10F2DB9CB707E"
  ],
  [
   43,
   "Process Plug-in",
   "56535441483930626974637275736865"
  ],
  [
   44,
   "Process Plug-in",
   "5653544E69244D626974650000000000"
  ],
  [
   45,
   "Process Plug-in",
   "56535444615475646174756265000000"
  ],
  [
   46,
   "Process Plug-in",
   "5653544E69244C646972740000000000"
  ],
  [
   47,
   "Process Plug-in",
   "A990C1062CDE43839ECEF8FE91743DA5"
  ],
  [
   48,
   "Process Plug-in",
   "C786544E675348D683EF9436D63EBD29"
  ],
  [
   49,
   "Process Plug-in",
   "5460882AC2AA486188CCF15B4ACC25C6"
  ],
  [
   50,
   "Process Plug-in",
   "5653545450335867687A207475706520"
  ],
  [
   51,
   "Process Plug-in",
   "565354477275676772756E67656C697A"
  ],
  [
   52,
   "Process Plug-in",
   "565354695A566E695A6F746F70652056"
  ],
  [
   53,
   "Process Plug-in",
   "B8874B5BFF884A93A524C74D7FFB1D54"
  ],
  [
   54,
   "Process Plug-in",
   "5653545A4F38584F7A6F6E6520382045"
  ],
  [
   55,
   "Process Plug-in",
   "5653545A4F38544F7A6F6E6520382056"
  ],
  [
   56,
   "Process Plug-in",
   "D849FEF360204F3EA7D907CFBD2D5631"
  ],
  [
   57,
   "Process Plug-in",
   "8D067533D8A0491DBAA36C064C6ABBFB"
  ],
  [
   58,
   "Process Plug-in",
   "4995618FDDB0459E9CECF6D9A6C9A51F"
  ],
  [
   59,
   "Process Plug-in",
   "5653545350545473706C207477696E74"
  ],
  [
   60,
   "Process Plug-in",
   "04F35DB10F0C47B9965EA7D63B0CCE67"
  ],
  [
   61,
   "Process Plug-in",
   "406FF539A747435DAB4353448219ADC7"
  ],
  [
   62,
   "Process Plug-in",
   "D6694C37423E4F829DFAF6259B7F5879"
  ],
  [
   63,
   "Process Plug-in",
   "94DEB7BF378041EE9E2FEDA24E19EF60"
  ],
  [
   64,
   "Process Plug-in",
   "5653544C41324D636C612D3261206D6F"
  ],
  [
   65,
   "Process Plug-in",
   "5653544C413253636C612D3261207374"
  ],
  [
   66,
   "Process Plug-in",
   "5B38F28281144FFE80285FF7CCF20483"
  ],
  [
   67,
   "Process Plug-in",
   "75FD13A528D24880982197D541BC582A"
  ],
  [
   68,
   "Process Plug-in",
   "C3D60417A5BB4FB288CB1A75FA641EDF"
  ],
  [
   69,
   "Process Plug-in",
   "2A4C06FF24F14078868891D184CEFB73"
  ],
  [
   70,
   "Process Plug-in",
   "5AF2703AE65F11DEB8047C9C56D89593"
  ],
  [
   71,
   "Process Plug-in",
   "3B660266B3CA4B57BBD487AE1E6C0D2A"
  ],
  [
   72,
   "Process Plug-in",
   "565354464C335867687A206661726164"
  ],
  [
   73,
   "Process Plug-in",
   "5653545643335867687A2076756C6620"
  ],
  [
   74,
   "Process Plug-in",
   "B94789B3C4C944EFB0058694DAB8704E"
  ],
  [
   75,
   "Process Plug-in",
   "44A0C349905B45D0B97C72D2C6F5B565"
  ],
  [
   76,
   "Process Plug-in",
   "565354614774656D6964696761746500"
  ],
  [
   77,
   "Process Plug-in",
   "5653544D4A556A6D6A75636A72000000"
  ],
  [
   78,
   "Process Plug-in",
   "86DFC3F5415C40388D3AA69030C380B1"
  ],
  [
   79,
   "Process Plug-in",
   "F7E6BFADFCD947BEB0A726EF32CBFC70"
  ],
  [
   80,
   "Process Plug-in",
   "B2FBFB2A097C40CFBAE7F15A8DAB9D2E"
  ],
  [
   81,
   "Process Plug-in",
   "565354586654546F7474000000000000"
  ],
  [
   82,
   "Process Plug-in",
   "5653545A6E59384F7A6F6E6520382044"
  ],
  [
   83,
   "Process Plug-in",
   "5653545A6E44384F7A6F6E6520382044"
  ],
  [
   84,
   "Process Plug-in",
   "5653545A4F384D4F7A6F6E652038204D"
  ],
  [
   85,
   "Process Plug-in",
   "5653545A4F38534F7A6F6E6520382053"
  ],
  [
   86,
   "Process Plug-in",
   "5653545A4F38434F7A6F6E6520382056"
  ],
  [
   87,
   "Process Plug-in",
   "5653545A4F38564F7A6F6E6520382056"
  ],
  [
   88,
   "Process Plug-in",
   "79F415E3C8E74807AD5DA3CF7024F618"
  ],
  [
   89,
   "Process Plug-in",
   "59E324D08EE811E1B8578101BBE59B18"
  ],
  [
   90,
   "Process Plug-in",
   "9D1DCCF7918A436FA3CDD7115D8B193B"
  ],
  [
   91,
   "Process Plug-in",
   "AFD92F729A0447B7B5E8D1D568DEA985"
  ],
  [
   92,
   "Process Plug-in",
   "C3B68142C79846F282B73CABDF139076"
  ],
  [
   93,
   "Process Plug-in",
   "49F6532768C34809BA5723477A34A653"
  ],
  [
   94,
   "Process Plug-in",
   "5653544E692436736F6C696420627573"
  ],
  [
   95,
   "Process Plug-in",
   "5653544E692437736F6C69642064796E"
  ],
  [
   96,
   "Process Plug-in",
   "ABCDEF019182FAEB4F656B5353706641"
  ],
  [
   97,
   "Process Plug-in",
   "5653545350415473706C206174746163"
  ],
  [
   98,
   "Process Plug-in",
   "5653545350415073706C206174746163"
  ],
  [
   99,
   "Process Plug-in",
   "5653545350443173706C2064652D6573"
  ],
  [
   100,
   "Process Plug-in",
   "5653545350443273706C2064652D6573"
  ],
  [
   101,
   "Process Plug-in",
   "5653545350445073706C2064652D7665"
  ],
  [
   102,
   "Process Plug-in",
   "5653545350445873706C206472756D78"
  ],
  [
   103,
   "Process Plug-in",
   "5653545350495273706C2069726F6E00"
  ],
  [
   104,
   "Process Plug-in",
   "56535453504D5073706C206D6F2D7665"
  ],
  [
   105,
   "Process Plug-in",
   "5653545350545073706C207472616E73"
  ],
  [
   106,
   "Process Plug-in",
   "8F59FE35CCF444FDA34C97F7B76312BB"
  ],
  [
   107,
   "Process Plug-in",
   "5653544E692440737570657263686172"
  ],
  [
   108,
   "Process Plug-in",
   "5653544E692441737570657263686172"
  ],
  [
   109,
   "Process Plug-in",
   "5653544E6924357472616E7369656E74"
  ],
  [
   110,
   "Process Plug-in",
   "80BD4930EC72450BB6481AD7B1217C66"
  ],
  [
   111,
   "Process Plug-in",
   "5653544E69243B7661726920636F6D70"
  ],
  [
   112,
   "Process Plug-in",
   "5653544E692432766320313630000000"
  ],
  [
   113,
   "Process Plug-in",
   "5653544E692433766320326100000000"
  ],
  [
   114,
   "Process Plug-in",
   "5653544E692434766320373600000000"
  ],
  [
   115,
   "Process Plug-in",
   "E0E5F5FC9F854334B69096445A7B2FA8"
  ],
  [
   116,
   "Process Plug-in",
   "E95BC1784BF74D3DB765098BBB2D5CB4"
  ],
  [
   117,
   "Process Plug-in",
   "A920B15DBBF04B359CB8A471C58E3B91"
  ],
  [
   118,
   "Process Plug-in",
   "ABCDEF019182FAEB4D61746D4D614261"
  ],
  [
   119,
   "Process Plug-in",
   "F4BA65B4AEC64C23851019475CDC8EB1"
  ],
  [
   120,
   "Process Plug-in",
   "B023870608424FABBCF5516BB15FF0EE"
  ],
  [
   121,
   "Process Plug-in",
   "5653544E69243A656E68616E63656420"
  ],
  [
   122,
   "Process Plug-in",
   "61461EEA238E47A0BEC74ED5A3AD452E"
  ],
  [
   123,
   "Process Plug-in",
   "FF1104702CCB4099A9B8D1B7AF0D2C02"
  ],
  [
   124,
   "Process Plug-in",
   "55FD08E6C00B44A697DA68F61C6FD576"
  ],
  [
   125,
   "Process Plug-in",
   "01F6CCC94CAE4668B7C6EC85E681E419"
  ],
  [
   126,
   "Process Plug-in",
   "7C215D9E31E2419E9925056D19310ACD"
  ],
  [
   127,
   "Process Plug-in",
   "A491EAC9793A4A8790C4AC862DA1272E"
  ]
 ],
 "03,127": [
  [
   1,
   "Process Plug-in",
   "5653545453335867687A2074696C7473"
  ],
  [
   2,
   "Process Plug-in",
   "5653545443335867687A20746F6E6520"
  ],
  [
   3,
   "Process Plug-in",
   "ABCDEF019182FAEB4D61746D4D614D69"
  ],
  [
   4,
   "Process Plug-in",
   "5653545A6E45384F7A6F6E6520382045"
  ],
  [
   5,
   "Process Plug-in",
   "5653545A4F38514F7A6F6E6520382056"
  ],
  [
   6,
   "Process Plug-in",
   "5653544E692439706173736976652065"
  ],
  [
   7,
   "Process Plug-in",
   "72C4DB717A4D459AB97E51745D84B39D"
  ],
  [
   8,
   "Process Plug-in",
   "ABCDEF019182FAEB4D61746D4D61526F"
  ],
  [
   9,
   "Process Plug-in",
   "5653544E692438736F6C696420657100"
  ],
  [
   10,
   "Process Plug-in",
   "5653545350525073706C206571207261"
  ],
  [
   11,
   "Process Plug-in",
   "5653545350464573706C206672656520"
  ],
  [
   12,
   "Process Plug-in",
   "5653545350503273706C207061737365"
  ],
  [
   13,
   "Process Plug-in",
   "5653545350503173706C207061737365"
  ],
  [
   14,
   "Process Plug-in",
   "5653545350565473706C20766974616C"
  ],
  [
   15,
   "Process Plug-in",
   "946051208E29496E804F64A825C8A047"
  ],
  [
   16,
   "Process Plug-in",
   "5653545A424D32546F6E616C2042616C"
  ],
  [
   17,
   "Process Plug-in",
   "56535432325352323031362073746572"
  ],
  [
   18,
   "Process Plug-in",
   "565354484F4C45626C61636B686F6C65"
  ],
  [
   19,
   "Process Plug-in",
   "565354464D696366616266696C746572"
  ],
  [
   20,
   "Process Plug-in",
   "565354464D693266616266696C746572"
  ],
  [
   21,
   "Process Plug-in",
   "5653544643327066616266696C746572"
  ],
  [
   22,
   "Process Plug-in",
   "5653544643323266616266696C746572"
  ],
  [
   23,
   "Process Plug-in",
   "5653544650537266616266696C746572"
  ],
  [
   24,
   "Process Plug-in",
   "5653544650533266616266696C746572"
  ],
  [
   25,
   "Process Plug-in",
   "5653544650477266616266696C746572"
  ],
  [
   26,
   "Process Plug-in",
   "5653544650473266616266696C746572"
  ],
  [
   27,
   "Process Plug-in",
   "56535446504C7266616266696C746572"
  ],
  [
   28,
   "Process Plug-in",
   "56535446504C3266616266696C746572"
  ],
  [
   29,
   "Process Plug-in",
   "565354464C327066616266696C746572"
  ],
  [
   30,
   "Process Plug-in",
   "56535446504D6266616266696C746572"
  ],
  [
   31,
   "Process Plug-in",
   "56535446504D3266616266696C746572"
  ],
  [
   32,
   "Process Plug-in",
   "5653544651327066616266696C746572"
  ],
  [
   33,
   "Process Plug-in",
   "5653544651323266616266696C746572"
  ],
  [
   34,
   "Process Plug-in",
   "5653544651337066616266696C746572"
  ],
  [
   35,
   "Process Plug-in",
   "5653544650527266616266696C746572"
  ],
  [
   36,
   "Process Plug-in",
   "5653544650523266616266696C746572"
  ],
  [
   37,
   "Process Plug-in",
   "5653544653617466616266696C746572"
  ],
  [
   38,
   "Process Plug-in",
   "5653544653613266616266696C746572"
  ],
  [
   39,
   "Process Plug-in",
   "5653544653326166616266696C746572"
  ],
  [
   40,
   "Process Plug-in",
   "5653544653696D66616266696C746572"
  ],
  [
   41,
   "Process Plug-in",
   "56535446546D7366616266696C746572"
  ],
  [
   42,
   "Process Plug-in",
   "56535446546D3466616266696C746572"
  ],
  [
   43,
   "Process Plug-in",
   "5653544656326C66616266696C746572"
  ],
  [
   44,
   "Process Plug-in",
   "5653544656323366616266696C746572"
  ],
  [
   45,
   "Process Plug-in",
   "5653544656323266616266696C746572"
  ],
  [
   46,
   "Process Plug-in",
   "5653544656323466616266696C746572"
  ],
  [
   47,
   "Process Plug-in",
   "5653544E69243D647269766572000000"
  ],
  [
   48,
   "Process Plug-in",
   "6143DAECD6184AE2A570FE9F35065E24"
  ],
  [
   49,
   "Process Plug-in",
   "5653544C48335867687A206C6F686920"
  ],
  [
   50,
   "Process Plug-in",
   "751AFC3415434CBCAA73672A109BE0FF"
  ],
  [
   51,
   "Process Plug-in",
   "25B0872DB12B44B89E32ABBC1D0B3D8A"
  ],
  [
   52,
   "Process Plug-in",
   "3317F47055E847E4896B59C21B843FAE"
  ],
  [
   53,
   "Process Plug-in",
   "565354535446497374657066696C7465"
  ],
  [
   54,
   "Process Plug-in",
   "4D2F8E2D443844F8A12666EB2398A103"
  ],
  [
   55,
   "Process Plug-in",
   "5D923348ADF743B59F86EC29572B103E"
  ],
  [
   56,
   "Process Plug-in",
   "F3092FD69524484CB663EE37D14197D2"
  ],
  [
   57,
   "Process Plug-in",
   "565354695A4444697A6F746F70652064"
  ],
  [
   58,
   "Process Plug-in",
   "565354695A566E697A6F746F70652076"
  ],
  [
   59,
   "Process Plug-in",
   "5653545A6E4F386F7A6F6E6520380000"
  ],
  [
   60,
   "Process Plug-in",
   "5653545A6E59386F7A6F6E6520382064"
  ],
  [
   61,
   "Process Plug-in",
   "5653545A6E44386F7A6F6E6520382064"
  ],
  [
   62,
   "Process Plug-in",
   "5653545A6E45386F7A6F6E6520382065"
  ],
  [
   63,
   "Process Plug-in",
   "5653545A4F38586F7A6F6E6520382065"
  ],
  [
   64,
   "Process Plug-in",
   "5653545A6E49386F7A6F6E6520382069"
  ],
  [
   65,
   "Process Plug-in",
   "5653545A4F384D6F7A6F6E652038206D"
  ],
  [
   66,
   "Process Plug-in",
   "5653545A4F38536F7A6F6E6520382073"
  ],
  [
   67,
   "Process Plug-in",
   "5653545A4F38436F7A6F6E6520382076"
  ],
  [
   68,
   "Process Plug-in",
   "5653545A4F38516F7A6F6E6520382076"
  ],
  [
   69,
   "Process Plug-in",
   "5653545A4F38566F7A6F6E6520382076"
  ],
  [
   70,
   "Process Plug-in",
   "5653545A4F38546F7A6F6E6520382076"
  ],
  [
   71,
   "Process Plug-in",
   "5653545A424D32746F6E616C2062616C"
  ],
  [
   72,
   "Process Plug-in",
   "5653544454335867687A20676F6F6420"
  ],
  [
   73,
   "Process Plug-in",
   "56535455564852757632326872000000"
  ],
  [
   74,
   "Process Plug-in",
   "5653545A6E4F384F7A6F6E6520380000"
  ],
  [
   75,
   "Process Plug-in",
   "1CA6E894E4624F73ADEB29CD01DDE9EE"
  ],
  [
   76,
   "Process Plug-in",
   "56535443686F3363686F707065720000"
  ],
  [
   77,
   "Process Plug-in",
   "5653544E69244963686F72616C000000"
  ],
  [
   78,
   "Process Plug-in",
   "341FC589831D46A7A506BC0799E882AE"
  ],
  [
   79,
   "Process Plug-in",
   "FE9EFEF6C7624335AA9799140ACE88C4"
  ],
  [
   80,
   "Process Plug-in",
   "5653545744324D646F75626C65723220"
  ],
  [
   81,
   "Process Plug-in",
   "56535457443258646F75626C65723220"
  ],
  [
   82,
   "Process Plug-in",
   "56535457443253646F75626C65723220"
  ],
  [
   83,
   "Process Plug-in",
   "5653545744344D646F75626C65723420"
  ],
  [
   84,
   "Process Plug-in",
   "56535457443458646F75626C65723420"
  ],
  [
   85,
   "Process Plug-in",
   "56535457443453646F75626C65723420"
  ],
  [
   86,
   "Process Plug-in",
   "5653544E69244B666C61697200000000"
  ],
  [
   87,
   "Process Plug-in",
   "FDD7243578EF434A833705ECC4E4CE46"
  ],
  [
   88,
   "Process Plug-in",
   "5653544E69244E667265616B00000000"
  ],
  [
   89,
   "Process Plug-in",
   "AF37E12D3C774AC2A74E9CA918EB3E87"
  ],
  [
   90,
   "Process Plug-in",
   "5653545452335867687A207472656D20"
  ],
  [
   91,
   "Process Plug-in",
   "5653545743335867687A20776F772063"
  ],
  [
   92,
   "Process Plug-in",
   "5653544D6574336D6574616C697A6572"
  ],
  [
   93,
   "Process Plug-in",
   "DDE3D98C0F22423AA2B32486ABEB2846"
  ],
  [
   94,
   "Process Plug-in",
   "5653544E69244A706861736973000000"
  ],
  [
   95,
   "Process Plug-in",
   "56535452494D4F72696E676D6F64756C"
  ],
  [
   96,
   "Process Plug-in",
   "54B0BB1DD40B4222BE4E876A87430F64"
  ],
  [
   97,
   "Process Plug-in",
   "8545543739404DEB84F4E6CF0DC687B5"
  ],
  [
   98,
   "Process Plug-in",
   "565354547266337472616E6365666F72"
  ],
  [
   99,
   "Process Plug-in",
   "E97A6873690F40E986F3EE1007B5C8FC"
  ],
  [
   100,
   "Process Plug-in",
   "56535453704D6476616C68616C6C6173"
  ],
  [
   101,
   "Process Plug-in",
   "B11C7FF1D1C04E1CB83892F669540710"
  ],
  [
   102,
   "Process Plug-in",
   "02968B4A891D48E88E16BC22ACFC11D8"
  ],
  [
   103,
   "Process Plug-in",
   "EBB43DF53F93450DA77BB4229E190E57"
  ],
  [
   104,
   "Process Plug-in",
   "0C4DFC02D57111E18CD81AB36188709B"
  ],
  [
   105,
   "Process Plug-in",
   "5653545370664173706966665F783634"
  ],
  [
   106,
   "Process Plug-in",
   "5653544D61416E616E696D6174650000"
  ],
  [
   107,
   "Process Plug-in",
   "5653544073323261756275726E20736F"
  ],
  [
   108,
   "Process Plug-in",
   "5653544E692452677569746172207269"
  ],
  [
   109,
   "Process Plug-in",
   "F2AEE70D00DE4F4E536E6454474C4653"
  ],
  [
   110,
   "Process Plug-in",
   "F2AEE70D00DE4F4E536E6454474C466C"
  ],
  [
   111,
   "Process Plug-in",
   "F2AEE70D00DE4F4E536E6454474C466D"
  ],
  [
   112,
   "Process Plug-in",
   "565354434E4B536B69636B7374617274"
  ],
  [
   113,
   "Process Plug-in",
   "56535450614C656C6576656C73000000"
  ],
  [
   114,
   "Process Plug-in",
   "5653545866664F6C666F746F6F6C5F78"
  ],
  [
   115,
   "Process Plug-in",
   "D503488792F2EDE2D26FF9CEA6F7635F"
  ],
  [
   116,
   "Process Plug-in",
   "565354586654546F74745F7836340000"
  ],
  [
   117,
   "Process Plug-in",
   "5653545A4F494D6F7A6F6E6520696D61"
  ],
  [
   118,
   "Process Plug-in",
   "5653545A4F49326F7A6F6E6520696D61"
  ],
  [
   119,
   "Process Plug-in",
   "5653545052583170726F78696D697479"
  ],
  [
   120,
   "Process Plug-in",
   "56535448616173717569636B68616173"
  ],
  [
   121,
   "Process Plug-in",
   "ABCDEF019182FAEB4D61746D4D615273"
  ],
  [
   122,
   "Process Plug-in",
   "ABCDEF019182FAEB4D61746D4D615265"
  ],
  [
   123,
   "Process Plug-in",
   "5653545A6E364C7278203620636F6E6E"
  ],
  [
   124,
   "Process Plug-in",
   "5653545A6E364B727820362064652D63"
  ],
  [
   125,
   "Process Plug-in",
   "5653545A6E3650727820362064652D63"
  ],
  [
   126,
   "Process Plug-in",
   "5653545A6E3643727820362064652D63"
  ],
  [
   127,
   "Process Plug-in",
   "5653545A6E3653727820362064652D65"
  ]
 ],
 "04,119": [
  [
   1,
   "Process Plug-in",
   "5653545A6E3648727820362064652D68"
  ],
  [
   2,
   "Process Plug-in",
   "5653545A6E3642727820362064652D70"
  ],
  [
   3,
   "Process Plug-in",
   "5653545A6E3656727820362064652D72"
  ],
  [
   4,
   "Process Plug-in",
   "5653545A6E364D72782036206D6F6E69"
  ],
  [
   5,
   "Process Plug-in",
   "5653545A6E365572782036206D6F7574"
  ],
  [
   6,
   "Process Plug-in",
   "5653545A6E364E727820362073706563"
  ],
  [
   7,
   "Process Plug-in",
   "5653545A6E36447278203620766F6963"
  ],
  [
   8,
   "Process Plug-in",
   "5653545053546A736F756E6469642072"
  ],
  [
   9,
   "Process Plug-in",
   "56535463484C3174616C2D63686F7275"
  ],
  [
   10,
   "Process Plug-in",
   "565354564F433274616C2D766F636F64"
  ],
  [
   11,
   "Process Plug-in",
   "565354706C617476616C68616C6C6170"
  ],
  [
   12,
   "Process Plug-in",
   "565354734D617376616C68616C6C6173"
  ],
  [
   13,
   "Process Plug-in",
   "5653547562657276616C68616C6C6175"
  ],
  [
   14,
   "Process Plug-in",
   "99D0F46A54064C4A9AD081722021DA61"
  ],
  [
   15,
   "Process Plug-in",
   "565354766570697669656E6E6120656E"
  ],
  [
   16,
   "Process Plug-in",
   "565354506172617669727475616C736F"
  ],
  [
   17,
   "Process Plug-in",
   "565354534D59327A6562726966792878"
  ],
  [
   18,
   "Process Plug-in",
   "565354726556307A7265762878363429"
  ],
  [
   19,
   "Process Plug-in",
   "4114D8E30C024C1DB0DE375FC53CDBED"
  ],
  [
   20,
   "Process Plug-in",
   "10F9FE4142694F1EAC21E294B42577C6"
  ],
  [
   21,
   "Process Plug-in",
   "82B96F23368746618015F1782F608A3E"
  ],
  [
   22,
   "Process Plug-in",
   "5653545A6E364C5258203620436F6E6E"
  ],
  [
   23,
   "Process Plug-in",
   "5653545A6E364B525820362044652D63"
  ],
  [
   24,
   "Process Plug-in",
   "5653545A6E3650525820362044652D63"
  ],
  [
   25,
   "Process Plug-in",
   "5653545A6E3643525820362044652D63"
  ],
  [
   26,
   "Process Plug-in",
   "5653545A6E3653525820362044652D65"
  ],
  [
   27,
   "Process Plug-in",
   "5653545A6E3648525820362044652D68"
  ],
  [
   28,
   "Process Plug-in",
   "5653545A6E3642525820362044652D70"
  ],
  [
   29,
   "Process Plug-in",
   "5653545A6E3656525820362044652D72"
  ],
  [
   30,
   "Process Plug-in",
   "5653545A6E364D52582036204D6F6E69"
  ],
  [
   31,
   "Process Plug-in",
   "5653545A6E365552582036204D6F7574"
  ],
  [
   32,
   "Process Plug-in",
   "5653545A6E364E525820362053706563"
  ],
  [
   33,
   "Process Plug-in",
   "5653545A6E36445258203620566F6963"
  ],
  [
   34,
   "Process Plug-in",
   "ABCDEF019182FAEB536D706C42737431"
  ],
  [
   35,
   "Process Plug-in",
   "5653544C53335867687A206C6F737379"
  ],
  [
   36,
   "Process Plug-in",
   "5653544D56335867687A206D65676176"
  ],
  [
   37,
   "Process Plug-in",
   "036EB5302A5911E2A28170076288709B"
  ],
  [
   38,
   "Process Plug-in",
   "5653544E6924517261756D0000000000"
  ],
  [
   39,
   "Process Plug-in",
   "5653544E69243E726320323400000000"
  ],
  [
   40,
   "Process Plug-in",
   "5653544E69243F726320343800000000"
  ],
  [
   41,
   "Process Plug-in",
   "143AE812D7E249D8B503B4A6E3EFC9F8"
  ],
  [
   42,
   "Process Plug-in",
   "ED824AB48E0846D5959682F5626D0972"
  ],
  [
   43,
   "Process Plug-in",
   "56535452655641726F6F6D776F726B73"
  ],
  [
   44,
   "Process Plug-in",
   "56535452655642726F6F6D776F726B73"
  ],
  [
   45,
   "Process Plug-in",
   "5653545275756D76616C68616C6C6172"
  ],
  [
   46,
   "Process Plug-in",
   "56535473686D7276616C68616C6C6173"
  ],
  [
   47,
   "Process Plug-in",
   "5653547665653376616C68616C6C6176"
  ],
  [
   48,
   "Process Plug-in",
   "78118CEC99514687A3139ECBCE33E697"
  ],
  [
   49,
   "Process Plug-in",
   "565354616A6F6B776173746564207370"
  ],
  [
   50,
   "Process Plug-in",
   "565354474C465367756C6C666F737300"
  ],
  [
   51,
   "Process Plug-in",
   "565354474C466C67756C6C666F737320"
  ],
  [
   52,
   "Process Plug-in",
   "565354474C466D67756C6C666F737320"
  ],
  [
   53,
   "Process Plug-in",
   "565354537443526372797374616C6C69"
  ],
  [
   54,
   "Process Plug-in",
   "56535453744463646563617069746174"
  ],
  [
   55,
   "Process Plug-in",
   "56535444564C20646576696C6C6F6300"
  ],
  [
   56,
   "Process Plug-in",
   "565354444C4420646576696C6C6F6364"
  ],
  [
   57,
   "Process Plug-in",
   "565354537445426563686F626F790000"
  ],
  [
   58,
   "Process Plug-in",
   "56535453744678656666656374726163"
  ],
  [
   59,
   "Process Plug-in",
   "5653545374463166696C746572667265"
  ],
  [
   60,
   "Process Plug-in",
   "5653545374463266696C746572667265"
  ],
  [
   61,
   "Process Plug-in",
   "56535453744C616C6974746C65616C74"
  ],
  [
   62,
   "Process Plug-in",
   "56535453744C6D6C6974746C656D6963"
  ],
  [
   63,
   "Process Plug-in",
   "56535453744C706C6974746C65707269"
  ],
  [
   64,
   "Process Plug-in",
   "56535453744C726C6974746C65726164"
  ],
  [
   65,
   "Process Plug-in",
   "56535453744D736D6963726F73686966"
  ],
  [
   66,
   "Process Plug-in",
   "5653545374506E70616E6D616E000000"
  ],
  [
   67,
   "Process Plug-in",
   "5653545374504D70686173656D697374"
  ],
  [
   68,
   "Process Plug-in",
   "565354537450747072696D616C746170"
  ],
  [
   69,
   "Process Plug-in",
   "565354537452647261646961746F7200"
  ],
  [
   70,
   "Process Plug-in",
   "5653545374546D7472656D6F6C61746F"
  ],
  [
   71,
   "Process Plug-in",
   "ABCDEF019182FAEB4A646663526D7764"
  ],
  [
   72,
   "Process Plug-in",
   "5653544353335867687A2063616E6F70"
  ],
  [
   73,
   "Process Plug-in",
   "5653544D53335867687A206D69647369"
  ],
  [
   74,
   "Process Plug-in",
   "5653544D4D335867687A206D69647369"
  ],
  [
   75,
   "Process Plug-in",
   "5653545050335867687A2070616E706F"
  ],
  [
   76,
   "Process Plug-in",
   "71EDAB139B8740F78CC418BB21980B08"
  ],
  [
   77,
   "Process Plug-in",
   "4A18B5A88A6B44D4B78F6E2FCC4746A2"
  ],
  [
   78,
   "Process Plug-in",
   "1AF350AC983B46CAB104990A0726EAD6"
  ],
  [
   79,
   "Process Plug-in",
   "5653545A6E49384F7A6F6E6520382049"
  ],
  [
   80,
   "Process Plug-in",
   "5653545A4F494D4F7A6F6E6520496D61"
  ],
  [
   81,
   "Process Plug-in",
   "5653545A4F49324F7A6F6E6520496D61"
  ],
  [
   82,
   "Process Plug-in",
   "0B20BA920CE0B1456E62754132327340"
  ],
  [
   83,
   "Process Plug-in",
   "E82963BD3E80F249A07EF90FBE55AC04"
  ],
  [
   84,
   "Process Plug-in",
   "77BBA7CA90F14C9BB298BA9010D6DD78"
  ],
  [
   85,
   "Process Plug-in",
   "0CDBB66985D548A9BFD8371909D24BB4"
  ],
  [
   86,
   "Process Plug-in",
   "A3CA1186A3A241FEA552717108932238"
  ],
  [
   87,
   "Process Plug-in",
   "5653544D6936326D697836746F320000"
  ],
  [
   88,
   "Process Plug-in",
   "5653544D6938326D697838746F320000"
  ],
  [
   89,
   "Process Plug-in",
   "56535453444D436D6978657264656C61"
  ],
  [
   90,
   "Process Plug-in",
   "99725BEA837B4BDFB778CC6848C61F5A"
  ],
  [
   91,
   "Process Plug-in",
   "52656988CE9D4F50820D93BAB099C9AE"
  ],
  [
   92,
   "Process Plug-in",
   "5653545463476E736D70746567656E65"
  ],
  [
   93,
   "Process Plug-in",
   "56535447656E327465737467656E6572"
  ],
  [
   94,
   "Process Plug-in",
   "6B9B08D2CA294270BF092A62865521BF"
  ],
  [
   95,
   "Process Plug-in",
   "918A209EFE684F8D8826FE00278A33C1"
  ],
  [
   96,
   "Process Plug-in",
   "D39D5B69D6AF42FA12345678534D5932"
  ],
  [
   97,
   "Process Plug-in",
   "D39D5B69D6AF42FA1234567872655630"
  ],
  [
   98,
   "Process Plug-in",
   "59568F7CA7914E8B8476B0062D24DCCF"
  ]
 ]
}
// END_JSONDATA

var surface=deviceDriver.mSurface

var page = deviceDriver.mMapping.makePage("Default")

function createCustomValueBindings(){
  
    Object.keys(jsonData).forEach(function(channelAndCC){

        var channelAndCcSplit=channelAndCC.split(",")
        var channel = +channelAndCcSplit[0] - 1 // channel needs to be offset by one, because channel 1 needs to be passed as 0 etc...
        var cc = +channelAndCcSplit[1]
        var mainElement = surface.makeCustomValueVariable("ch" + channel + "cc" + cc)
        mainElement.mMidiBinding.setInputPort(midiInput).bindToControlChange(channel, cc)

        var mainElementsArrOfValues=[]
        var customProcesses=[]

        var bindings=jsonData[channelAndCC]
        
        bindings.forEach(function(binding){

            var ccValue=+binding[0]

            if(mainElementsArrOfValues.indexOf(ccValue)==-1){

                var commandCategory=binding[1]
                var commandName=binding[2]

                var customProcess=surface.makeCustomValueVariable("ch"+channel+"cc"+cc+"val"+ccValue)
                customProcesses.push(customProcess)
                
                page.makeCommandBinding(customProcess,commandCategory,commandName)
                
                mainElementsArrOfValues.push(ccValue)

            }
            
        })

        mainElement.mOnProcessValueChange=function(activeDevice,value,diff){

            var value127=Math.round(127*value)
            var index=mainElementsArrOfValues.indexOf(value127)
        
            if(index>-1){
        
                customProcesses[index].setProcessValue(activeDevice,1)
        
            }
        
        }
        
    })

}

createCustomValueBindings()