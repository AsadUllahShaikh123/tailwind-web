import React from "react";

const Theme = () => {
  return (
    <>
      <h1
        style={{
          color: "rgb(243, 244, 246)",
          fontSize: "1.5rem",
          marginTop: "2rem",
        }}
      >
        Themes
      </h1>

      <div
        className="boxes"
        style={{ width: "100%", display: "flex", marginTop: "1rem" }}
      >
        <div
          className="box"
          style={{
            width: "15%",
            textAlign: "center",
            color: "white",
            marginRight: "1rem",
            padding: "0.5rem 1rem",
            borderRadius: "4px",
            fontSize: "1.5rem",
            backgroundColor: "rgb(5 150 105)",
          }}
        >
          A
        </div>
        <div
          className="box"
          style={{
            width: "15%",
            textAlign: "center",
            color: "white",
            marginRight: "1rem",
            padding: "0.5rem 1rem",
            borderRadius: "4px",
            fontSize: "1.5rem",
            backgroundColor: "rgb(55 65 81)",
          }}
        >
          B
        </div>
        <div
          className="box"
          style={{
            width: "15%",
            textAlign: "center",
            color: "white",
            marginRight: "1rem",
            padding: "0.5rem 1rem",
            borderRadius: "4px",
            fontSize: "1.5rem",
            backgroundColor: "rgb(55 65 81)",
          }}
        >
          C
        </div>
      </div>
    </>
  );
};

export default Theme;
