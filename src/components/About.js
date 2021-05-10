import React from "react";

const About = () => {
  return (
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
          margin: "5%",
          // marginTop: "2.5%",
          position: "absolute",
          width: "86%",
          height: "80%",
          zIndex: 100,
          backgroundColor: "rgba(255, 255, 255, 0.35)",
          padding: "2%",
          paddingTop: "0%",
          borderRadius: "1rem",
          overflow: "auto",
        }}
      >
        <h1>About</h1>
        <h2>Arriele</h2>
        <p></p>
        <h2>Jiayu Shao</h2>
        <p></p>
        <h2>Jia-Yi </h2>
        <p></p>
        <h2>Matthew Liu</h2>
        <p></p>
      </div>
    </div>
  );
};

export default About;
