import React, { useState } from "react";
import Suggestion from "./Suggestion";

let suggestion =
  "Extract the downloaded ZIP file and follow the Hosting Guide to get your digital business card online.If you find this service valuable to you or your business, please consider donating.";



const Download = () => {
  let [click, setClick] = useState({
    btn1: false,
    btn2: false,
    btn3: false,
  });
  let handleEvent = (e) => {
    setClick({ ...click, [e.target.name]: !click[e.target.name] });
  };
  return (
    <>
      <h1
        style={{
          color: "rgb(243, 244, 246)",
          fontSize: "1.5rem",
          marginTop: "2rem",
        }}
      >
        Download
      </h1>
      <p style={{ color: "white", marginTop: "1rem" }}>
        Please complete the checklist to proceed,
      </p>

      <div className="boxes px-2 ">
        
        {/* First Button  */}

        <div
          className="stepC"
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: "1.5rem",
          }}
        >
          <button
            name="btn1"
            onClick={handleEvent}
            style={{
              color: "white",
              fontSize: "1.5rem",
              marginRight: "1rem",
              padding: "0.4rem 1rem",
              backgroundColor: "rgb(0,0,0)",
              borderRadius: "4px",
              width: "50px",
              height: "50px",
            }}
          >
            {click.btn1 ? <i class="fa-solid fa-check"></i>: " " }
          </button>

          <p style={{ color: "rgb(243, 244, 246)" }}>
            'I did not attach any link or file that will cause any risk to the
            user',
          </p>
        </div>

        {/* Second Button */}
        <div
          className="stepC"
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: "1.5rem",
          }}
        >
          <button
            name="btn2"
            onClick={handleEvent}
            style={{
              color: "white",
              fontSize: "1.5rem",
              marginRight: "1rem",
              padding: "0.4rem 1rem",
              backgroundColor: "rgb(0,0,0)",
              borderRadius: "4px",
              width: "50px",
              height: "50px",
            }}
          >
            {click.btn2 ? <i class="fa-solid fa-check"></i>: " " }
          </button>

          <p style={{ color: "rgb(243, 244, 246)" }}>
          I have verified that all the links are working correctly
          </p>
        </div>

          {/* Third Button */}

          <div
          className="stepC"
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: "1.5rem",
          }}
        >
          <button
            name="btn3"
            onClick={handleEvent}
            style={{
              color: "white",
              fontSize: "1.5rem",
              marginRight: "1rem",
              padding: "0.4rem 1rem",
              backgroundColor: "rgb(0,0,0)",
              borderRadius: "4px",
              width: "50px",
              height: "50px",
            }}
          >
            
            {click.btn3 ? <i class="fa-solid fa-check"></i>: " " }
          </button>

          <p style={{ color: "rgb(243, 244, 246)" }}>
          I have removed all unused fields and sections
          </p>
        </div>


      </div>

      <button
        disabled 
        style={{
          cursor: `${(click.btn1 && click.btn2 && click.btn3) ? 'pointer':'not-allowed'}`,
          padding: "1.2rem 2.5rem",
          marginTop: "2rem",
          borderRadius: "4px",
          fontSize: "1.5rem",
          backgroundColor: "rgb(55 65 81)",
          fontWeight: "bold",
        }}
      >
        Download as ZIP
      </button>

      <Suggestion suggestion={suggestion} />

      <h1
        style={{
          color: "rgb(243, 244, 246)",
          fontSize: "1.5rem",
          marginTop: "2rem",
        }}
      >
        Having issues, suggestion and feedback?
      </h1>

      <button
        style={{
          padding: "1rem",
          color: "white",
          borderRadius: "4px",
          marginTop: "2rem",
          fontSize: "1.2rem",
          backgroundColor: "rgb(55 65 81)",
        }}
      >
        Join the Telegram group
      </button>
    </>
  );
};

export default Download;
