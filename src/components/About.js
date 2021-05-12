import React from "react";
import Matt from "../images/Matt.JPG";
import Jiayi from "../images/Jiayi.jpg";
import Jiayu from "../images/Jiayu.png";
import Arielle from "../images/Arielle.jpg";
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
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <div
        style={{
          margin: "5%",
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
        <div
          style={{
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            width: "75%",
          }}
        >
          <h3
            style={{
              width: "100%",
              textAlign: "center",
            }}
          >
            Arriele Summitt
          </h3>
          <div
            style={{
              width: "15rem",
              height: "15rem",
              borderRadius: "50%",
              backgroundImage: `url(${Arielle})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          ></div>
          <p>
            Hi! My name is Arielle Summitt and I am a junior neuroscience and
            pre-medicine major/music minor at Johns Hopkins University. “Insight
            into the Intricacies of Chromesthesia” is the perfect mix of my two
            favorite subjects, neuroscience and music, and I loved working on
            this project. In my free time, I sing and run steeplechase on the
            Hopkins track & field team. Thank you for reading and listening!
          </p>
        </div>
        <div
          style={{
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            width: "75%",
          }}
        >
          <h3
            style={{
              width: "100%",
              textAlign: "center",
              marginTop: "5rem",
            }}
          >
            Jiayu Shao
          </h3>
          <div
            style={{
              width: "15rem",
              height: "15rem",
              borderRadius: "50%",
              backgroundImage: `url(${Jiayu})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          ></div>
          <p>
            Currently a Senior Neuroscience major at Johns Hopkins, likes
            animals and music. Particularly likes music with animals.
          </p>
        </div>

        <div
          style={{
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            width: "75%",
          }}
        >
          <h3
            style={{
              width: "100%",
              textAlign: "center",
              marginTop: "5rem",
            }}
          >
            Jia-Yi Lee
          </h3>
          <div
            style={{
              width: "15rem",
              height: "15rem",
              borderRadius: "50%",
              backgroundImage: `url(${Jiayi})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          ></div>
          <p>
            Jia Yi Lee is a Singaporean composer whose music explores
            combinations of instrumental timbre, colour and gesture. She plays
            the trumpet and is also passionate about music education. Jia Yi is
            currently pursuing her Master of Music in Composition at Peabody
            Conservatory of The Johns Hopkins University, where she also serves
            as a Graduate Assistant in Music Theory. In her free time, she likes
            to travel as much as she can and enjoys a good cup of coffee.
          </p>
        </div>
        <div
          style={{
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            width: "75%",
          }}
        >
          <h3
            style={{
              width: "100%",
              textAlign: "center",
              marginTop: "5rem",
            }}
          >
            Matthew Liu
          </h3>
          <div
            style={{
              width: "15rem",
              height: "15rem",
              borderRadius: "50%",
              backgroundImage: `url(${Matt})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          ></div>
          <p>
            A sophomore at Johns Hopkins University studying Computer Science
            and Coginitive Science. Interested in the psychology of human
            cognition as well as passionate about designing solutions to
            problems with code.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
