import React, { useState } from "react";
import ReactAudioPlayer from "react-audio-player";
import test1 from "../music/test1.mp3";
import test2 from "../music/test2.mp3";
import test3 from "../music/test3.mp3";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const options = ["test1", "test2", "test3"];
const podcastMap = new Map([
  [options[0], test1],
  [options[1], test2],
  [options[2], test3],
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
        Choose a podcast below:
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
