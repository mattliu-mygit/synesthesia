import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Menu = (props) => {
  const [hide, setHide] = useState(false);
  return (
    <div
      style={{
        position: "absolute",
        left: 0,
        top: "25%",
        zIndex: "10000000",
        display: "flex",
        flexDirection: "column",
      }}
      onMouseEnter={() => {
        setHide(true);
      }}
      onMouseLeave={() => {
        setHide(false);
      }}
    >
      {hide ? (
        <>
          <NavLink
            className="btn btn-primary header-btn first-btn"
            style={menuButton}
            activeStyle={activeStyle}
            to="/"
            exact
          >
            Home
          </NavLink>
          <NavLink
            className="btn btn-primary header-btn"
            style={menuButton}
            activeStyle={activeStyle}
            to="/background"
          >
            Background
          </NavLink>
          <NavLink
            className="btn btn-primary header-btn"
            style={menuButton}
            activeStyle={activeStyle}
            to="/sounds"
          >
            Sounds
          </NavLink>

          <NavLink
            className="btn btn-primary header-btn"
            style={menuButton}
            activeStyle={activeStyle}
            to="/participants/Mira"
          >
            Mira
          </NavLink>
          <NavLink
            className="btn btn-primary header-btn"
            style={menuButton}
            activeStyle={activeStyle}
            to="/participants/Nathan"
          >
            Nathan
          </NavLink>
          <NavLink
            className="btn btn-primary header-btn"
            style={menuButton}
            activeStyle={activeStyle}
            to="/participants/Serena"
          >
            Serena
          </NavLink>
        </>
      ) : (
        <b
          style={{
            backgroundColor: "rgba(200, 200, 200, 0.5)",
            border: "solid",
            borderColor: "rgba(200, 200, 200,1)",
            position: "absolute",
            width: "0.75rem",
            right: "-3rem",
            color: "white",
            fontSize: "150%",
            padding: "1rem",
            top: "4.5rem",
          }}
        >
          {"}"}
        </b>
      )}
    </div>
  );
};

const menuButton = {
  backgroundColor: "rgba(200, 200, 200, 0.5)",
  border: "solid",
  borderColor: "rgba(200, 200, 200,1)",
  padding: "1rem",
  fontSize: "150%",
  color: "white",
};
const activeStyle = {
  backgroundColor: "rgba(200, 200, 200, 0.8)",
  border: "solid",
  borderColor: "rgba(200, 200, 200,1)",
  padding: "1rem",
  fontSize: "150%",
  color: "white",
};
export default Menu;
