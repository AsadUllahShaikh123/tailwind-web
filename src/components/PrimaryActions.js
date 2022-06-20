import React from "react";

const PrimaryActions = ({ data }) => {
  return (
    <>
      <h1
        style={{
          color: "rgb(243, 244, 246)",
          fontSize: "1.5rem",
          marginTop: "2rem",
        }}
      >
        Primary actions
      </h1>

      <div className="input-field" style={{ marginTop: "1rem" }}>
        <input
          type="text"
          style={{
            width: "100%",
            height: "45px",
            backgroundColor: "black",
            caretColor: "white",
            padding: "0 1rem",
            color: "white",
            borderRadius: "4px",
            
          }}
          placeholder="search an action"
        />
      </div>

      <div
        className="boxes"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          marginTop: "1rem",
        }}
      >
        {data.map((values) => (
          <div
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
              backgroundColor: "rgb(55 65 81 )",
              color: "white",
              cursor:'pointer'
            }}
          >
            <div className="logo" style={{ marginRight: "1rem" }}>
              <values.icon style={{ fontSize: "2rem", color: "white" }} />
            </div>
            <div className="value">
              <p>{values.value}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default PrimaryActions;
