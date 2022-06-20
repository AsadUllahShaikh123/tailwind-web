import React from 'react'
import Suggestion from './Suggestion'

let suggestion = 'Recommended cover photo size is 960 x 640 pixels, with an aspect ratio of 3:2;'
const InfoSection = () => {
  return (
    <>
      <h1 style={{ color: "rgb(243, 244, 246)", fontSize: "1.5rem" }}>
            Header attachements
          </h1>

          <div
            className="stepC"
            style={{ display: "flex", flexWrap: "wrap", marginTop: "1.5rem" }}
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
                Add Logo
              </p>
              <p style={{ fontFamily: "400", color: "rgb(156, 163, 175)" }}>
                suggested format: svg,png or gif
              </p>
            </div>
          </div>
          <div
            className="stepC"
            style={{ display: "flex", flexWrap: "wrap", marginTop: "1.5rem" }}
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
                Add Logo
              </p>
              <p style={{ fontFamily: "400", color: "rgb(156, 163, 175)" }}>
                suggested format: svg,png or gif
              </p>
            </div>
            <Suggestion suggestion={suggestion}/>
          </div>
          <h1
            style={{
              color: "rgb(243, 244, 246)",
              fontSize: "1.5rem",
              marginTop: "2rem",
            }}
          >
            Contact Information
          </h1>

          <div
            className="stepC"
            style={{ display: "flex", flexWrap: "wrap", marginTop: "1.5rem" }}
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
                Add Logo
              </p>
              <p style={{ fontFamily: "400", color: "rgb(156, 163, 175)" }}>
                suggested format: svg,png or gif
              </p>
            </div>
          </div>
          <Suggestion suggestion={suggestion}/>
 
    </>
  )
}

export default InfoSection