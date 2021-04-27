import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PianoContainer from "./piano/PianoContainer";
import { mira, nathan, serena } from "../files/participants";
import ReactAudioPlayer from "react-audio-player";

const Person = () => {
  let { participant } = useParams();
  const [backgroundColor, setBackgroundColor] = useState("transparent");
  const [gMajorColors, setGMajorColors] = useState(mira.gMajorScaleCodes);
  const [eMinorColors, setEMinorColors] = useState(mira.gMajorScaleCodes);
  const [podcast, setPodcast] = useState(mira.interview);

  useEffect(() => {
    if (participant === "Mira") {
      setGMajorColors(mira.gMajorScaleCodes);
      setEMinorColors(mira.eMinorScaleCodes);
      setPodcast(mira.interview);
    } else if (participant === "Nathan") {
      setGMajorColors(nathan.gMajorScaleCodes);
      setEMinorColors(nathan.eMinorScaleCodes);
      setPodcast(nathan.interview);
    } else {
      setGMajorColors(serena.gMajorScaleCodes);
      setEMinorColors(serena.eMinorScaleCodes);
      setPodcast(serena.interview);
    }
  }, [participant]);

  const changeBGMajorColor = (midiNumber) => {
    if (midiNumber - 55 < gMajorColors.length) {
      console.log("color is ", gMajorColors[midiNumber - 55]);
      setBackgroundColor(gMajorColors[midiNumber - 55]);
    }
  };

  const changeBGMinorColor = (midiNumber) => {
    if (midiNumber - 52 < eMinorColors.length) {
      console.log("color is ", eMinorColors[midiNumber - 52]);
      setBackgroundColor(eMinorColors[midiNumber - 52]);
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
          overflow: "scroll",
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
          Major
          <PianoContainer
            firstKey={"g3"}
            lastKey={"g4"}
            person={participant}
            changeBGColor={changeBGMajorColor}
            setBackgroundColor={setBackgroundColor}
          />
          <div style={{ width: 1000, height: "15rem", position: "relative" }}>
            {gMajorColors.map((color, index) => {
              if (
                index === 1 ||
                index === 3 ||
                index === 6 ||
                index === 8 ||
                index === 11
              ) {
                return (
                  <div
                    style={{
                      width: 75,
                      position: "absolute",
                      left: index * 72 + 20,
                      backgroundColor: color,
                      height: "75%",
                      top: "0rem",
                    }}
                  ></div>
                );
              } else {
                return (
                  <div
                    style={{
                      width: 125,
                      backgroundColor: color,
                      height: "100%",
                      display: "inline-block",
                    }}
                  ></div>
                );
              }
            })}
          </div>
          Minor
          <PianoContainer
            firstKey={"e3"}
            lastKey={"e4"}
            person={participant}
            changeBGColor={changeBGMinorColor}
            setBackgroundColor={setBackgroundColor}
          />
          <div style={{ width: 1000, height: "15rem", position: "relative" }}>
            {eMinorColors.map((color, index) => {
              if (
                index === 2 ||
                index === 4 ||
                index === 6 ||
                index === 9 ||
                index === 11
              ) {
                return (
                  <div
                    style={{
                      width: 75,
                      position: "absolute",
                      left: index * 73 + 50,
                      backgroundColor: color,
                      height: "75%",
                      top: "0rem",
                    }}
                  ></div>
                );
              } else {
                return (
                  <div
                    style={{
                      width: 125,
                      backgroundColor: color,
                      height: "100%",
                      display: "inline-block",
                    }}
                  ></div>
                );
              }
            })}
          </div>
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
