import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PianoContainer from "./piano/PianoContainer";
import { mira, nathan, serena } from "../files/participants";
import ReactAudioPlayer from "react-audio-player";

const Person = () => {
  let { participant } = useParams();
  const [backgroundColor, setBackgroundColor] = useState("transparent");
  const [colors, setColors] = useState(mira.gScaleCodes);
  const [podcast, setPodcast] = useState(mira.interview);

  useEffect(() => {
    if (participant === "Mira") {
      setColors(mira.gScaleCodes);
      setPodcast(mira.interview);
    } else if (participant === "Nathan") {
      setColors(nathan.gScaleCodes);
      setPodcast(nathan.interview);
    } else {
      setColors(serena.gScaleCodes);
      setPodcast(serena.interview);
    }
  }, [participant]);

  const changeBGColor = (midiNumber) => {
    if (midiNumber - 55 < colors.length) {
      console.log("color is ", colors[midiNumber - 55]);
      setBackgroundColor(colors[midiNumber - 55]);
    }
  };

  return (
    <>
      <div
        style={{
          position: "absolute",
          top: 0,
          backgroundColor: backgroundColor,
          height: "100%",
          width: "100%",
          opacity: 0.6,
          zIndex: 99,
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          top: 0,
          height: "100%",
          width: "100%",
          zIndex: 100,
        }}
      >
        <div
          style={{
            padding: "5rem",
          }}
        >
          <div style={{ marginBottom: "1rem" }}>
            Test out {participant}'s G scale for yourself!
          </div>
          <PianoContainer
            person={participant}
            changeBGColor={changeBGColor}
            setBackgroundColor={setBackgroundColor}
          />
          <div style={{ marginTop: "1rem" }}>
            <div style={{ marginBottom: "1rem" }}>Podcast:</div>
            <ReactAudioPlayer src={podcast} controls />
          </div>
        </div>
      </div>
    </>
  );
};

export default Person;
