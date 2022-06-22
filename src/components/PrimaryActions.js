import React, { useState } from "react";

const PrimaryActions = ({ data,showData,setShowData }) => {
  let [showButtons,setShowButtons] = useState(data);
  let handleChange = (values,indexFound) => {
    setShowData([...showData,values]);
    setShowButtons(showButtons.filter((_,index)=> index !== indexFound))
  };
  let handleRemove =(values,indexFound)=>{
    console.log(values);
    setShowData(showData.filter((_,index) => index !== indexFound ))
    setShowButtons([...showButtons,values])
  }
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

      {showData.length > 0 ? (
        showData.map((values,index) => (
          <div
            className="logo-input"
            style={{ display: "flex", alignItems: "center", marginTop: "1rem" }}
          >
            <div className="logo" style={{ padding:'0.2rem 1rem',borderRadius:'4px',backgroundColor:'rgb(5, 150, 105)'}}>
              <values.icon style={{ fontSize: "2rem", color: "white" }} />
            </div>
            <div className="input">
              <input
                type="text"
                placeholder="+XX XXXX XXXXXX"
                style={{
                  width: "95%",
                  padding: "0.4rem 1rem",
                  backgroundColor: "black",
                  caretColor: "white",
                  color: "white",
                }}
              />
            </div>
            <button className="cross" style={{color:'white',fontSize:'1.5rem'}} onClick={()=> handleRemove(values,index)}>X</button>
          </div>
        ))
      ) : (
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
      )}

      <div
        className="boxes"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          marginTop: "1rem",
        }}
      >
        {showButtons.map((values,index) => (
          <div
            className="box"
            key={values.value}
            onClick={() => handleChange(values,index)}
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
              cursor: "pointer",
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
