import React from "react";
import { Link } from "react-router-dom";
import img from "../images/chroma.jpg";
import { mira, nathan, serena } from "../files/participants";

const HomePage = () => {
  return (
    <>
      <div
        style={{
          // marginTop: "5%",
          marginLeft: "5%",
          marginRight: "5%",
          // marginTop: "2%",
          position: "absolute",
          top: "10%",
          width: "86%",
          height: "85%",
          zIndex: 100,
          justifyContent: "center",
          borderRadius: "1rem",
          backgroundColor: "rgba(255, 255, 255, 0.35)",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            padding: "2%",
            overflow: "auto",
            flexGrow: "1",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "3rem" }}>
              Insight into the Intricacies of Chromesthesia
            </div>

            <div style={{ fontSize: "1.5rem" }}>
              Group members: Arielle Summitt, Matthew Liu, Jiayu Shao, Jia Yi
              Lee
            </div>
          </div>
          <div
            style={{
              width: "100%",
              justifyContent: "center",
              marginTop: "1.5rem",
            }}
          >
            <img
              src={img}
              alt="img"
              style={{
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                width: "50%",
              }}
            ></img>
          </div>
          <div
            style={{
              width: "95%",
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <div style={{ fontSize: "1rem", marginTop: "1.5rem" }}>
              <p>
                Synesthesia describes a rare neurological phenomenon in which a
                specific stimulus, which may be sensory, like a sound or flavor,
                or cognitive, such as a word or number, arouses a non-externally
                stimulated sensation. For instance, in a person with
                grapheme-colour synesthesia, seeing the letter{" "}
                <b style={{ color: "red" }}>A</b> may always evoke the color
                red, so that they always see the letter{" "}
                <b style={{ color: "red" }}>A</b> in red regardless of its
                actual printed color. The inducing stimulus is aptly called the
                inductor, and the resulting synesthetic sensation is termed the
                concurrent.
              </p>
              <p>
                A type of synesthesia in which which a nonvisual stimulus causes
                the individual to perceive color. Color hearing is a form of
                chromesthesia. In color hearing a musical tone elicits a color.
                One well-studied case involved an art teacher who had a range of
                consistent linkages between tone and color. For her, high
                octaves tended to evoke a lighter color value, while lower
                octaves evoked a darker color value. And rapid major chord tone
                sequences elicited rapid flashes of colors, "somewhat like
                fireworks exploding."
              </p>
            </div>
          </div>
        </div>
        <div
          style={{
            padding: "2%",
            paddingTop: "1%",
            paddingBottom: "1%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            borderBottomLeftRadius: "1rem",
            borderBottomRightRadius: "1rem",
          }}
        >
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div
              style={{ fontSize: "1rem", marginTop: "0rem", color: "white" }}
            >
              Read <b>more</b>{" "}
              <Link style={{ color: "white" }} to="/background">
                here
              </Link>{" "}
              or check out our <b>5-part podcast</b>{" "}
              <Link style={{ color: "white" }} to="/podcasts">
                here
              </Link>{" "}
              or...
            </div>
          </div>
          <div style={{ fontSize: "1rem", marginTop: "0rem" }}>
            <b>Explore</b> the colors our interviewees would see when playing a
            short piece.
          </div>
          <div style={{ fontSize: "1.75rem", display: "flex" }}>
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

            <div style={{ marginLeft: "2rem" }}>
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
            <div style={{ marginLeft: "2rem" }}>
              <Link
                className="btn btn-primary header-btn"
                to="/participants/Mira"
              >
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
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
