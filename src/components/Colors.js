import React from "react";

let data = [
  {
    value: "Header background",
    color: "rgb(5 150 105)",
  },
  {
    value: "Main background",
    color: "rgb(221, 221, 221)",
  },
  {
    value: "Button background",
    color: "rgb(5 150 105)",
  },
  {
    value: "Featured content background",
    color: "rgb(255,255,255)",
  },
];

const Colors = () => {
  return (
    <>
      <h1
        style={{
          color: "rgb(243, 244, 246)",
          fontSize: "1.5rem",
          marginTop: "4rem",
        }}
      >
        Colours
      </h1>
      {data.map((values) => (
        <div
          className="stepC"
          style={{
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
            marginTop: "1.5rem",
          }}
        >
          <button
            style={{
              color: "white",
              fontSize: "1.5rem",
              marginRight: "1rem",
              padding: "0.4rem 1rem",
              backgroundColor: values.color,
              borderRadius: "4px",
              width: "50px",
              height: "50px",
            }}
          ></button>
          <div className="text">
            <p style={{ color: "rgb(243, 244, 246)" }}>{values.value}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Colors;
