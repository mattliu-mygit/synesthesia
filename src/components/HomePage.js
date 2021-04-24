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
        Synesthesia is... "description"
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
                    color: mira.gScaleCodes[index],
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
                    color: nathan.gScaleCodes[index],
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
                    color: serena.gScaleCodes[index],
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
