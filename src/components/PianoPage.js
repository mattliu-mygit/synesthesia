import React, { useEffect, useState } from "react";
import PianoContainer from "./PianoContainer";

const PianoPage = () => {
  const testColors = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "purple",
    "indigo",
    "violet",
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "purple",
    "indigo",
    "violet",
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "purple",
    "indigo",
    "violet",
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "purple",
    "indigo",
    "violet",
  ];
  const [backgroundColor, setBackgroundColor] = useState("transparent");
  // const [midi];
  const changeBGColor = (midiNumber) => {
    if (midiNumber - 48 < testColors.length) {
      setBackgroundColor(testColors[midiNumber - 48]);
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
          opacity: 0.4,
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          top: 0,
          height: "100%",
          width: "100%",
        }}
      >
        <div
          style={{
            padding: "5rem",
          }}
        >
          <div style={{ marginBottom: "1rem" }}>
            Test it out yourself! Choose a person and see the colors they see
            when this piano is played! (If the piano breaks, refresh this page)
          </div>
          <PianoContainer
            changeBGColor={changeBGColor}
            setBackgroundColor={setBackgroundColor}
          />
        </div>
      </div>
    </>
  );
};

export default PianoPage;
