import React, { useState } from "react";
import ReactAudioPlayer from "react-audio-player";
import interview1 from "../interviews/Serena.mp3";
import interview2 from "../interviews/Nathan.mp3";
import interview3 from "../interviews/Mira.mp3";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const options = ["Serena", "Nathan", "Mira"];
const podcastMap = new Map([
  [options[0], interview1],
  [options[1], interview2],
  [options[2], interview3],
]);

const PodcastPage = () => {
  const [podcastName, setPodcastName] = useState(options[0]);
  const [podcast, setPodcast] = useState(podcastMap.get(options[0]));
  const choosePodcast = (selected) => {
    setPodcastName(selected.value);
    setPodcast(podcastMap.get(selected.value));
    console.log("podcast name is ", podcastName);
  };
  return (
    <div style={{ padding: "5rem" }}>
      <div style={{ marginBottom: "1rem", fontWeight: "500" }}>
        Choose an interview below:
      </div>
      <Dropdown
        options={options}
        onChange={choosePodcast}
        value={podcastName}
        placeholder="Select an option"
      />
      <div style={{ marginTop: "1rem" }}>
        <ReactAudioPlayer src={podcast} controls />
      </div>
    </div>
  );
};

export default PodcastPage;
