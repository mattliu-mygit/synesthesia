import React from "react";

const Background = () => {
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
          position: "absolute",
          width: "86%",
          height: "78%",
          zIndex: 100,
          backgroundColor: "rgba(255, 255, 255, 0.35)",
          padding: "2%",
          borderRadius: "1rem",
        }}
      >
        Background info here
      </div>
    </div>
  );
};

export default Background;
