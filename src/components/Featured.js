import React, { useState } from "react";
import Footer from "./Footer";
import Suggestion from "./Suggestion";

let suggestion = "Supported media formats: jpeg, png, mp3, mp4, webm and pdf"


let data = [
  {
    value: "Add media",
    icon: "fa-solid fa-file",
  },
  {
    value: "Embed media",
    icon: "fa fa-paperclip",
  },
  {
    value: "Add product",
    icon: "fa-solid fa-star",
  },
  {
    value: "Add Text",
    icon: "fa fa-text-height",
  },
];
const Featured = ({footerClick,setFooterClick,theme,setTheme}) => {
  
  return (
    <>
      <div className="feature">
        <h1
          style={{
            color: "rgb(243, 244, 246)",
            fontSize: "1.5rem",
            marginTop: "2rem",
          }}
        >
          Featured Content
        </h1>
        <div
          className="section"
          style={{
            background: "rgb(31, 41, 55)",
            borderRadius: "4px",
            padding: "0.5rem",
            marginTop: "2rem",
          }}
        >
          <div
            className="input-field"
            style={{
              marginTop: "1rem",
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <input
              type="text"
              style={{
                width: "80%",
                height: "45px",
                backgroundColor: "transparent",
                caretColor: "white",
                padding: "0 1rem",
                color: "white",
                outline: "0",
                borderWidth: "0 0 2px",
                borderColor: "black",
              }}
              placeholder="Section title"
            />
            <div
              className="symbol"
              style={{
                color: "white",
                fontWeight: "bold",
                fontSize: "1.5rem",
                cursor: "pointer",
                alignSelf: "flex-end",
              }}
            >
              X
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              marginTop: "1rem",
            }}
          >
            {data.map((values) => (
              <button
                className="box"
                key={values.value}
                style={{
                  width: "49%",
                  marginTop: "0.4rem",
                  display: "flex",
                  alignItems: "center",
                  padding: "0.8rem 1rem",
                  borderRadius: "4px",
                  fontSize: "1rem",
                  fontWeight: "normal",
                  background: "rgb(75 85 99)",
                  color: "rgb(243, 244, 246)",
                  cursor: "pointer",
                }}
              >
                <div className="logo" style={{ marginRight: "1rem" }}>
                  <i class={values.icon} style={{ color: "white" }}></i>
                </div>
                <div className="value">
                  <p>{values.value}</p>
                </div>
              </button>
            ))}
          </div>
          
        </div>
        <div
            className="stepC"
            style={{ display: "flex",alignItems:'center', flexWrap: "wrap", marginTop: "1.5rem" }}
          >
            <button
              style={{
                color: "white",
                fontSize: "1.5rem",
                marginRight: "1rem",
                padding: "0.4rem 1rem",
                backgroundColor: "rgb(75 85 99)",
                borderRadius: "4px",
                fontWeight: "800",
              }}
            >
              +
            </button>
            <div className="text">
              <p style={{ color: "rgb(243, 244, 246)", fontWeight: "400" }}>
                Add Section
              </p>
            </div>
          </div>
          <Suggestion suggestion={suggestion}/>

          <Footer footerClick={footerClick} setFooterClick={setFooterClick} theme={theme} setTheme={setTheme}/>
      </div>
    </>
  );
};

export default Featured;
