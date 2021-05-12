import React, { useState } from "react";
import ReactAudioPlayer from "react-audio-player";
import podcast2 from "../files/podcast 2.mp3";
import podcast3 from "../files/podcast 3.mp3";
import podcast4 from "../files/podcast 4.mp3";
import podcast5 from "../files/podcast 5.mp3";
import initial from "../files/podcast 1.mp3";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const options = [
  "Initial Discussion on Synesthesia",
  "Mira",
  "Nathan",
  "Serena",
  "Ending Remarks",
];
const musicMap = new Map([
  [options[0], initial],
  [options[1], podcast2],
  [options[2], podcast3],
  [options[3], podcast4],
  [options[4], podcast5],
]);

const Podcasts = () => {
  const [musicName, setMusicName] = useState(options[0]);
  const [music, setMusic] = useState(musicMap.get(options[0]));
  const chooseMusic = (selected) => {
    setMusicName(selected.value);
    setMusic(musicMap.get(selected.value));
  };
  return (
    <div
      style={{
        position: "absolute",
        zIndex: 100,
        justifyContent: "center",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div style={{ marginBottom: "1rem", fontWeight: "500" }}>
        Check out a podcast!
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

export default Podcasts;
