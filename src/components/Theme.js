import React from "react";

const Theme = ({theme,setTheme}) => {
  let handleClick=(e)=>{
    let {name} = e.target;
    if(name === 'btn1')
    setTheme({'btn2':false,'btn3':false,[name]:true})
    else if(name === 'btn2')
    setTheme({'btn1':false,'btn3':false,[name]:true})
    else if(name === 'btn3')
    setTheme({'btn1':false,'btn2':false,[name]:true})
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
        Themes
      </h1>

      <div
        className="boxes"
        style={{ width: "100%", display: "flex", marginTop: "1rem" }}
      >
        <button
          className="box"
          name='btn1'
          onClick={handleClick}
          style={{
            width: "15%",
            textAlign: "center",
            color: "white",
            marginRight: "1rem",
            padding: "0.5rem 1rem",
            borderRadius: "4px",
            fontSize: "1.5rem",
            backgroundColor: `${theme.btn1 ? "rgb(5 150 105)" : "rgb(75 85 99)"}`,
          }}
        >
          A
        </button>
        <button
          className="box"
          name="btn2"
          onClick={handleClick}
          style={{
            width: "15%",
            textAlign: "center",
            color: "white",
            marginRight: "1rem",
            padding: "0.5rem 1rem",
            borderRadius: "4px",
            fontSize: "1.5rem",
            backgroundColor: `${theme.btn2 ? "rgb(5 150 105)" : 'rgb(55 65 81)'}`,
          }}
        >
          B
        </button>
        <button
          name="btn3"
          className="box"
          onClick={handleClick}
          style={{
            width: "15%",
            textAlign: "center",
            color: "white",
            marginRight: "1rem",
            padding: "0.5rem 1rem",
            borderRadius: "4px",
            fontSize: "1.5rem",
            backgroundColor: `${theme.btn3 ? "rgb(5 150 105)" : 'rgb(55 65 81)'}`,
          }}
        >
          C
        </button>
      </div>
    </>
  );
};

export default Theme;
