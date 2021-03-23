import React, { useEffect } from 'react';
import { Piano, KeyboardShortcuts, MidiNumbers } from 'react-piano';
import 'react-piano/dist/styles.css';
import AudioPlayer from '../files/AudioPlayer';

const PianoPage = () => {
  const firstNote = MidiNumbers.fromNote('c3');
  const lastNote = MidiNumbers.fromNote('f5');
  const audioPlayer = AudioPlayer();
  useEffect(() => {
    audioPlayer.setInstrument('acoustic_grand_piano');
  }, [audioPlayer]);
  const keyboardShortcuts = KeyboardShortcuts.create({
    firstNote: firstNote,
    lastNote: lastNote,
    keyboardConfig: KeyboardShortcuts.HOME_ROW,
  });

  return (
    <Piano
      noteRange={{ first: firstNote, last: lastNote }}
      playNote={(midiNumber) => {
        // Play a given note - see notes below
        audioPlayer.playNote(midiNumber);
      }}
      stopNote={(midiNumber) => {
        // Stop playing a given note - see notes below
        // audioPlayer.playNote(midiNumber);
      }}
      width={1000}
      keyboardShortcuts={keyboardShortcuts}
    />
  );
};

export default PianoPage;
