import React from "react";
import { NavLink } from "react-router-dom";

const activeStyle = {
  color: "#89cff0",
  backgroundColor: "transparent",
};

const headerButton = {
  padding: "0.2rem",
  borderRadius: "0px",
  border: "none",
  outline: "none",
  boxShadow: "none",
  marginBottom: "0.1rem",
  color: "white",
};

const DropList = (props) => {
  return (
    <div
      style={{
        width: "75%",
        paddingTop: "0.5rem",
      }}
    >
      {props.content.map((item) => (
        <>
          <NavLink
            activeStyle={activeStyle}
            to={item.path}
            className="btn btn-primary header-btn first-btn"
            style={headerButton}
          >
            {" "}
            {item.name}
          </NavLink>{" "}
        </>
      ))}
    </div>
  );
};

export default DropList;
