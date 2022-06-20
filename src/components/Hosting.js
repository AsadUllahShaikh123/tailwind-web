import React from "react";
import Suggestion from "./Suggestion";

let suggestion ="Only paste your hosting URL if you've already decided where you want to host this digital business card. If you haven't decided yet, please skip this step."

const Hosting = () => {
  return (
    <>
      <h1
        style={{
          color: "rgb(243, 244, 246)",
          fontSize: "1.5rem",
          marginTop: "3rem",
        }}
      >
        Hosting
      </h1>
      <div className="lastName" style={{}}>
        <label
          htmlFor="lastName"
          style={{
            display: "block",
            color: "rgb(243, 244, 246)",
            padding: "0.5rem",
            marginTop:'1rem'
          }}
        >
          Hosted card Url
        </label>
        <input
          type="text"
          placeholder="https://yoursite/vcard/username"
          style={{
            width: "100%",
            height: "45px",
            borderRadius: "4px",
            backgroundColor: "black",
            caretColor: "white",
            padding: "0 1rem",
            color: "white",
          }}
        />
      </div>
      <Suggestion suggestion={suggestion}/>
    </>
  );
};

export default Hosting;
