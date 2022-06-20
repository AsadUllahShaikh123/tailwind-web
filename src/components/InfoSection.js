import React from "react";
import { useState } from "react";
import Suggestion from "./Suggestion";

let suggestion =
  "Recommended cover photo size is 960 x 640 pixels, with an aspect ratio of 3:2;";


const InfoSection = () => {
  let [image,setImage] = useState({
    file1:'',
    file2:''
  });
  let handleClick = (e) => {
    document.getElementById(e.target.name).click();
    
  };
  let handleChange =(e)=>{
    let {name} = e.target;
    let preview = URL.createObjectURL(e.target.files[0])
    setImage({...image , [name]:preview});
  }
  return (
    <>
      <h1 style={{ color: "rgb(243, 244, 246)", fontSize: "1.5rem" }}>
        Header attachements
      </h1>

      <div
        className="stepC"
        style={{ display: "flex", flexWrap: "wrap", marginTop: "1.5rem" }}
      >
        <img src={image.file1} alt="" srcset="" style={{width:'100px',height:'100px'}}/>
        <div className="button">
          <input type="file" name="file1" id="file1" accept="image/*" onChange={handleChange} style={{ display: "none" }} />
          <button
           name="file1"
            onClick={handleClick}
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
        </div>
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
        <img src={image.file2} alt="" srcset="" style={{width:'100px',height:'100px'}} />
        <div className="button">
          <input type="file" name="file2" id="file2" accept="image/*" onChange={handleChange} style={{display:'none'}}/>
          <button
            name="file2"
            onClick={handleClick}
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
        </div>
        <div className="text">
          <p style={{ color: "rgb(243, 244, 246)", fontWeight: "400" }}>
            Add Logo
          </p>
          <p style={{ fontFamily: "400", color: "rgb(156, 163, 175)" }}>
            suggested format: svg,png or gif
          </p>
        </div>
        <Suggestion suggestion={suggestion} />
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
      <Suggestion suggestion={suggestion} />
    </>
  );
};

export default InfoSection;
