import React, { useState } from "react";
import ReactAudioPlayer from "react-audio-player";
import test1 from "../music/test1.mp3";
import test2 from "../music/test2.mp3";
import test3 from "../music/test3.mp3";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const options = ["test1", "test2", "test3"];
const musicMap = new Map([
  [options[0], test1],
  [options[1], test2],
  [options[2], test3],
]);

const Sounds = () => {
  const [musicName, setMusicName] = useState(options[0]);
  const [music, setMusic] = useState(musicMap.get(options[0]));
  const chooseMusic = (selected) => {
    setMusicName(selected.value);
    setMusic(musicMap.get(selected.value));
    console.log("music name is ", musicName);
  };
  return (
    <div style={{ padding: "5rem", position: "absolute", zIndex: 100 }}>
      <div style={{ marginBottom: "1rem", fontWeight: "500" }}>
        Choose a music below to play:
      </div>
      <Dropdown
        options={options}
        onChange={chooseMusic}
        value={musicName}
        placeholder="Select an option"
      />
      <div style={{ marginTop: "1rem" }}>
        <ReactAudioPlayer src={music} controls />
      </div>
    </div>
  );
};

export default Sounds;
