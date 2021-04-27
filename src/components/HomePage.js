import React from "react";
import { Link } from "react-router-dom";
import stick from "../images/stick.png";
import { mira, nathan, serena } from "../files/participants";

const HomePage = () => {
  return (
    <div
      style={{
        margin: "5%",
        // marginTop: "2%",
        position: "absolute",
        width: "86%",
        height: "78%",
        zIndex: 100,
        backgroundColor: "rgba(255, 255, 255, 0.35)",
        padding: "2%",
        borderRadius: "1rem",
      }}
    >
      <div style={{ fontSize: "4rem" }}>Synesthesia Group 2021</div>
      <div style={{ fontSize: "2rem" }}>
        Group members: Arielle Summitt, Matthew Liu, Jiayu Shao, Jia Yi Lee
      </div>
      <div style={{ fontSize: "1rem", marginTop: "2rem" }}>
        <p>
          Synesthesia describes a rare neurological phenomenon in which a
          specific stimulus, which may be sensory, like a sound or flavor, or
          cognitive, such as a word or number, arouses a non-externally
          stimulated sensation. For instance, in a person with grapheme-colour
          synesthesia, seeing the letter <b style={{ color: "red" }}>A</b> may
          always evoke the color red, so that they always see the letter{" "}
          <b style={{ color: "red" }}>A</b> in red regardless of its actual
          printed color. The inducing stimulus is aptly called the inductor, and
          the resulting synesthetic sensation is termed the concurrent.
        </p>
        <p>
          A type of synesthesia in which which a nonvisual stimulus causes the
          individual to perceive color. Color hearing is a form of
          chromesthesia. In color hearing a musical tone elicits a color. One
          well-studied case involved an art teacher who had a range of
          consistent linkages between tone and color. For her, high octaves
          tended to evoke a lighter color value, while lower octaves evoked a
          darker color value. And rapid major chord tone sequences elicited
          rapid flashes of colors, "somewhat like fireworks exploding."
        </p>
      </div>
      <div style={{ fontSize: "1rem", marginTop: "2rem", color: "white" }}>
        Read more <Link to="/background">here.</Link>
      </div>
      <div style={{ fontSize: "1rem", marginTop: "2rem", color: "white" }}>
        Or
      </div>
      <div style={{ fontSize: "1rem", marginTop: "2rem" }}>
        Check out the participants we interviewed below!
      </div>
      <div style={{ fontSize: "1.75rem" }}>
        <div style={{}}>
          <Link className="btn btn-primary header-btn" to="/participants/Mira">
            <a href={window.location.href + "/participants/Mira"}>
              {mira.name.split("").map((letter, index) => (
                <div
                  style={{
                    color: mira.gMajorScaleCodes[index],
                    display: "inline-block",
                    textShadow: "0px 0px 0.5rem rgba(255, 255, 255, 1)",
                  }}
                >
                  {letter}
                </div>
              ))}
            </a>
          </Link>
        </div>
        <div>
          <Link
            className="btn btn-primary header-btn"
            to="/participants/Nathan"
          >
            <a href={window.location.href + "/participants/Nathan"}>
              {nathan.name.split("").map((letter, index) => (
                <div
                  style={{
                    color: nathan.gMajorScaleCodes[index],
                    display: "inline-block",
                    textShadow: "0px 0px 0.5rem rgba(255, 255, 255, 1)",
                  }}
                >
                  {letter}
                </div>
              ))}
            </a>
          </Link>
        </div>
        <div style={{}}>
          <Link
            className="btn btn-primary header-btn"
            to="/participants/Serena"
          >
            <a href={window.location.href + "/participants/Serena"}>
              {serena.name.split("").map((letter, index) => (
                <div
                  style={{
                    color: serena.gMajorScaleCodes[index],
                    display: "inline-block",
                    textShadow: "0px 0px 0.5rem rgba(255, 255, 255, 1)",
                  }}
                >
                  {letter}
                </div>
              ))}
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
