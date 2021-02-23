import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [red, setRed] = useState(0);
  const [rPlus, setRPlus] = useState(true);
  const [blue, setBlue] = useState(0);
  const [bPlus, setBPlus] = useState(true);
  const [green, setGreen] = useState(0);
  const [gPlus, setGPlus] = useState(true);

  useEffect(() => {
    console.log(red, green, blue);

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
      <img src={logo} className="App-logo" alt="logo" />
      <h1 style={{ marginLeft: '2rem' }}>
        We can modify background to simulate the synesthesia experience based on
        podcast and musical sounds.
      </h1>
    </div>
  );
}

export default App;
