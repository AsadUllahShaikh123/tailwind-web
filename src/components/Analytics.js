import React from "react";
import Suggestion from "./Suggestion";

let suggestion = 'Supports services such as Clicky, Matomo, Google Analytics etc.'

const Analytics = () => {
  return (
    <>
      <h1
        style={{
          color: "rgb(243, 244, 246)",
          fontSize: "1.5rem",
          marginTop: "2rem",
        }}
      >
        Analytics
      </h1>

      <div className="text-area" style={{ marginTop: "1rem" }}>
        <label
          htmlFor="address"
          style={{
            display: "block",
            color: "rgb(243,244,246)",
            padding: "0.5rem",
          }}
        >
          Tracking code
        </label>
        <textarea
          name="address"
          id="address"
          style={{
            width: "100%",
            height: "150px",
            borderRadius: "4px",
            backgroundColor: "black",
            padding: "1rem",
            caretColor: "white",
            color: "white",
          }}
          placeholder="paste tracking code here"
        ></textarea>
      </div>
      <Suggestion suggestion={suggestion}/>
    </>
  );
};

export default Analytics;
