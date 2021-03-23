import React, { useState, useEffect } from 'react';
import logo from '../logo.svg';

const StarScreen = () => {
  const [red, setRed] = useState(0);
  const [rPlus, setRPlus] = useState(true);
  const [blue, setBlue] = useState(0);
  const [bPlus, setBPlus] = useState(true);
  const [green, setGreen] = useState(0);
  const [gPlus, setGPlus] = useState(true);
  const [starH, setStarH] = useState(0);
  const [starV, setStarV] = useState(0);
  const [starO, setStarO] = useState(0.5);
  const [starOUp, setStarOUp] = useState(false);

  useEffect(() => {
    // console.log(red, green, blue);

    setTimeout(() => {
      if (red >= 255) {
        setRPlus(!rPlus);
      } else if (rPlus) {
        setRed(red + 0.09);
      } else {
        setRed(red - 0.09);
      }

      if (green >= 255) {
        setGPlus(!gPlus);
      } else if (gPlus) {
        setGreen(green + 0.5);
      } else {
        setGreen(green - 0.5);
      }

      if (blue >= 255) {
        setBPlus(!bPlus);
      } else if (bPlus) {
        setBlue(blue + 1);
      } else {
        setBlue(blue - 1);
      }
    }, 100);
  }, [red, green, blue]);

  useEffect(() => {
    console.log(starO, starH, starV);
    setTimeout(() => {
      if (starO <= 0 && !starOUp) {
        setStarH(Math.random() * window.screen.width);
        setStarV(Math.random() * window.screen.height);
        setStarOUp(true);
      } else if (starO >= 1 && starOUp) {
        setStarOUp(false);
      } else if (starOUp && starO < 1) {
        setStarO(starO + 0.01);
      } else if (!starOUp && starO > 0) {
        setStarO(starO - 0.01);
      }
    }, 10);
  }, [starO, starOUp]);

  return (
    <div
      style={{
        backgroundColor: `rgb(${red}, ${green}, ${blue}`,
        height: '100%',
        width: '100%',
        position: 'absolute',
        padding: 'auto',
      }}
    >
      <img
        src={logo}
        className="App-logo"
        alt="logo"
        style={{ position: 'absolute', left: starH, up: starV, opacity: starO }}
      />
      <h1 style={{ marginLeft: '2rem' }}>
        We can modify background to simulate the synesthesia experience based on
        podcast and musical sounds.
      </h1>
    </div>
  );
};

export default StarScreen;
