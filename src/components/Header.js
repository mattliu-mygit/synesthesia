import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import DropList from "./DropList";

const headerButton = {
  padding: "0.2rem",
  borderRadius: "0px",
  border: "none",
  outline: "none",
  boxShadow: "none",
  marginBottom: "0.1rem",
  color: "white",
};

function Header() {
  const activeStyle = {
    color: "#89cff0",
    backgroundColor: "transparent",
  };
  const [activeDropList, setActiveDropList] = useState(0);
  const [headerActive, setHeaderActive] = useState(false);
  const intervieweeList = [
    {
      name: "Mira",
      path: "/participants/Mira",
    },
    {
      name: "Nathan",
      path: "/participants/Nathan",
    },
    {
      name: "Serena",
      path: "/participants/Serena",
    },
  ];

  useEffect(() => {
    if (window.innerWidth > 840) {
      setHeaderActive(true);
    }
  }, [window.innerWidth]);
  return (
    <>
      <nav
        style={{
          position: "absolute",
          top: "0rem",
          color: "white",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          width: "100%",
          zIndex: 100,
          padding: "0.5rem",
        }}
        onMouseLeave={() => {
          if (window.innerWidth < 840) {
            setHeaderActive(false);
            setActiveDropList(0);
          }
        }}
      >
        {headerActive || window.innerWidth > 840 ? (
          <div>
            <NavLink
              className="btn btn-primary header-btn first-btn"
              style={headerButton}
              activeStyle={activeStyle}
              to="/"
              exact
              onMouseEnter={() => {
                setActiveDropList(0);
              }}
            >
              Home
            </NavLink>
            {"|"}
            <NavLink
              className="btn btn-primary header-btn"
              style={headerButton}
              activeStyle={activeStyle}
              to="/background"
              onMouseEnter={() => {
                setActiveDropList(0);
              }}
            >
              Background
            </NavLink>
            {"|"}
            <NavLink
              className="btn btn-primary header-btn"
              style={headerButton}
              activeStyle={activeStyle}
              to="/participants/Mira"
              onMouseEnter={() => {
                setActiveDropList(1);
              }}
            >
              Experience Playground
            </NavLink>
            {"|"}
            <NavLink
              className="btn btn-primary header-btn"
              style={headerButton}
              activeStyle={activeStyle}
              to="/policy-memo"
              onMouseEnter={() => {
                setActiveDropList(0);
              }}
            >
              Policy Memo
            </NavLink>
            {"|"}
            <NavLink
              className="btn btn-primary header-btn"
              style={headerButton}
              activeStyle={activeStyle}
              to="/about"
              onMouseEnter={() => {
                setActiveDropList(0);
              }}
            >
              About
            </NavLink>
          </div>
        ) : null}
        {headerActive && activeDropList === 1 ? (
          <div
            onMouseLeave={() => {
              setActiveDropList(0);
            }}
            style={{
              paddingBottom: "0.1rem",
              backgroundColor: "rgba(7, 66, 122, 0.5)",
              width: "100%",
            }}
          >
            <DropList content={intervieweeList} />
          </div>
        ) : null}
        {window.innerWidth < 840 ? (
          <div
            style={{
              textAlign: "center",
              color: "white",
              margin: "0.65rem",
            }}
            onMouseOver={() => {
              setHeaderActive(true);
            }}
          >
            ☰
          </div>
        ) : null}
      </nav>
    </>
  );
}

export default Header;
