import React from "react";

const PolicyMemo = () => {
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
        <h1>Policy Memo</h1>
      </div>
    </div>
  );
};

export default PolicyMemo;
