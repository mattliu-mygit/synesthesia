import React from "react";
import Matt from "../images/Matt.JPG";
import defaultPfp from "../images/defaultPfp.png";

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
        <h3>Arriele Summitt</h3>
        <div
          style={{
            width: "10rem",
            height: "10rem",
            borderRadius: "50%",
            backgroundImage: `url(${defaultPfp})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></div>
        <p></p>
        <h3>Jiayu Shao</h3>
        <div
          style={{
            width: "10rem",
            height: "10rem",
            borderRadius: "50%",
            backgroundImage: `url(${defaultPfp})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></div>
        <p></p>
        <h3>Jia-Yi Lee</h3>
        <div
          style={{
            width: "10rem",
            height: "10rem",
            borderRadius: "50%",
            backgroundImage: `url(${defaultPfp})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></div>
        <p></p>
        <h3>Matthew Liu</h3>
        <div
          style={{
            width: "10rem",
            height: "10rem",
            borderRadius: "50%",
            backgroundImage: `url(${Matt})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></div>
        <p>
          A sophomore at Johns Hopkins University studying Computer Science and
          Coginitive Science.{" "}
        </p>
      </div>
    </div>
  );
};

export default About;
