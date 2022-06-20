import React from "react";
import Suggestion from "./Suggestion";

let suggestion = "Supports services such as Google Fonts, Adobe Typekit, etc. Make sure to get the embed code for both regular and bold font variants from the same font family."

const Fonts = () => {
  return (
    <>
      <h1
        style={{
          color: "rgb(243, 244, 246)",
          fontSize: "1.5rem",
          marginTop: "2rem",
        }}
      >
        Fonts
      </h1>

      <div className="text-area" style={{ marginTop: "1rem" }}>
        <label
          htmlFor="key"
          style={{
            display: "block",
            color: "rgb(243,244,246)",
            padding: "0.5rem",
          }}
        >
          Web font embed code
        </label>
        <textarea
          name="key"
          id="key"
          placeholder={`<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet">`}
          style={{
            width: "100%",
            height: "150px",
            borderRadius: "4px",
            backgroundColor: "black",
            padding: "1rem",
            caretColor: "white",
            color: "white",
          }}
        ></textarea>
      </div>
      <div className="lastName" style={{}}>
        <label
          htmlFor="lastName"
          style={{
            display: "block",
            color: "rgb(243, 244, 246)",
            padding: "0.5rem",
          }}
        >
          Web font CSS rule
        </label>
        <input
          type="text"
          style={{
            width: "100%",
            height: "45px",
            borderRadius: "4px",
            backgroundColor: "black",
            caretColor: "white",
            padding: "0 1rem",
            color: "white",            
          }}
          placeholder="font-family: 'Poppins', sans-serif;"
        />
      </div>

      <Suggestion suggestion={suggestion}/>
    </>
  );
};

export default Fonts;
