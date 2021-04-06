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
    <div
      style={{
        position: "absolute",
        top: 0,
        backgroundColor: backgroundColor,
        height: "100%",
        padding: "5rem",
      }}
    >
      <div style={{ marginBottom: "1rem" }}>
        Test it out yourself! Choose a person and see the colors they see when
        this piano is played! (If the piano breaks, refresh this page)
      </div>
      <div id={backgroundColor}>
        <PianoContainer
          changeBGColor={changeBGColor}
          setBackgroundColor={setBackgroundColor}
        />
      </div>
    </div>
  );
};

export default PianoPage;