import React, { useEffect, useState } from "react";
import { Piano, KeyboardShortcuts, MidiNumbers } from "react-piano";
import "react-piano/dist/styles.css";
import AudioPlayer from "../../files/AudioPlayer";
const audioPlayer = AudioPlayer();

const PianoContainer = (props) => {
  const firstNote = MidiNumbers.fromNote("g3");
  const lastNote = MidiNumbers.fromNote("g4");
  const keyboardShortcuts = KeyboardShortcuts.create({
    firstNote: firstNote,
    lastNote: lastNote,
    keyboardConfig: KeyboardShortcuts.HOME_ROW,
  });

  useEffect(() => {
    audioPlayer.setInstrument("acoustic_grand_piano");
  }, [audioPlayer]);

  return (
    <div>
      <Piano
        keyboardShortcuts={keyboardShortcuts}
        noteRange={{ first: firstNote, last: lastNote }}
        playNote={(midiNumber) => {
          // Play a given note - see notes below
          console.log(midiNumber);
          // setBackgroundColor(testColors[midiNumber - 48]);
          // props.changeBGColor(midiNumber);
          props.changeBGColor(midiNumber);
          audioPlayer.playNote(midiNumber);
        }}
        stopNote={(midiNumber) => {
          // Stop playing a given note - see notes below
          setTimeout(() => props.setBackgroundColor("transparent"), 750);
        }}
        onPlayNoteInput={(midiNumber, { prevActiveNotes }) => {
          // props.changeBGColor(midiNumber);
        }}
        width={1000}
      />
    </div>
  );
};

export default PianoContainer;
