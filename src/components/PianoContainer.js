import React, { useEffect, useState } from "react";
import { Piano, KeyboardShortcuts, MidiNumbers } from "react-piano";
import "react-piano/dist/styles.css";
import AudioPlayer from "../files/AudioPlayer";
import SoundFontPlayer from "soundfont-player";
import AudioContext from "../files/AudioContext";
const audioPlayer = AudioPlayer();

const PianoContainer = (props) => {
  const firstNote = MidiNumbers.fromNote("c3");
  const lastNote = MidiNumbers.fromNote("f5");
  const keyboardShortcuts = KeyboardShortcuts.create({
    firstNote: firstNote,
    lastNote: lastNote,
    keyboardConfig: KeyboardShortcuts.HOME_ROW,
  });
  const [activeNotes, setActiveNotes] = useState([]);

  // const NullSoundFontPlayerNoteAudio = {
  //   stop() {},
  // };
  // const NullSoundFontPlayer = {
  //   play() {
  //     return NullSoundFontPlayerNoteAudio;
  //   },
  // };
  // const AudioPlayer = () => {
  //   //Audio Context
  //   const audioContext = AudioContext && new AudioContext();
  //   //soundPlayer
  //   let soundPlayer = NullSoundFontPlayer;
  //   //setInstrument
  //   const Player = {
  //     setInstrument(instrumentName) {
  //       SoundFontPlayer.instrument(audioContext, instrumentName)
  //         .then((soundfontPlayer) => {
  //           soundPlayer = soundfontPlayer;
  //         })
  //         .catch((e) => {
  //           soundPlayer = NullSoundFontPlayer;
  //         });
  //     },
  //     playNote(note) {
  //       soundPlayer.play(note);
  //       // console.log("note", note);
  //       props.setBackgroundColor("red");
  //       // props.changeBGColor(note);
  //     },
  //   };
  //   return Player;
  // };
  useEffect(() => {
    audioPlayer.setInstrument("acoustic_grand_piano");
  }, [audioPlayer]);

  return (
    <div>
      <Piano
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
        activeNotes={activeNotes}
      />
    </div>
  );
};

export default PianoContainer;
