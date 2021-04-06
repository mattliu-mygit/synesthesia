import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

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
  return (
    <>
      <nav
        style={{
          position: "absolute",
          top: "0rem",
          color: "white",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          width: "100%",
        }}
      >
        <div style={{ padding: "0.5rem" }}>
          <NavLink
            className="btn btn-primary header-btn first-btn"
            style={headerButton}
            activeStyle={activeStyle}
            to="/"
            exact
          >
            Home
          </NavLink>
          {"|"}
          <NavLink
            className="btn btn-primary header-btn"
            style={headerButton}
            activeStyle={activeStyle}
            to="/piano"
          >
            Piano
          </NavLink>
          {"|"}
          <NavLink
            className="btn btn-primary header-btn"
            style={headerButton}
            activeStyle={activeStyle}
            to="/sounds"
          >
            Sounds
          </NavLink>
          {"|"}
          <NavLink
            className="btn btn-primary header-btn"
            style={headerButton}
            activeStyle={activeStyle}
            to="/podcasts"
          >
            Podcasts
          </NavLink>
        </div>
      </nav>
    </>
  );
}

export default Header;
