import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import test1 from '../music/test1.mp3';

const Sounds = () => {
  return (
    <div>
      Music below:
      <ReactAudioPlayer src={test1} autoPlay controls />
    </div>
  );
};

export default Sounds;
