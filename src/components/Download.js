import React from 'react'
import Suggestion from './Suggestion'

let suggestion = "Extract the downloaded ZIP file and follow the Hosting Guide to get your digital business card online.If you find this service valuable to you or your business, please consider donating."

let data =[
  {
    value:'I did not attach any link or file that will cause any risk to the user'
  },
  {
    value:'I have verified that all the links are working correctly'
  },
  {
    value:'I have removed all unused fields and sections'
  }
]

const Download = () => {
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
      <p style={{color:'white',marginTop:'1rem'}}>Please complete the checklist to proceed,</p>

      <div className="boxes px-2 ">
      {data.map(values => (
        <div
          className="stepC"
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: "1.5rem",
          }}
        >
          <button
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
          > <i class="fa-solid fa-check"></i></button>
          
            <p style={{  color: "rgb(243, 244, 246)"}}>{values.value}</p>
        </div>
      ))}
      </div>

      <button disabled  style={{padding:'1.2rem 2.5rem',marginTop:'2rem',borderRadius:'4px',cursor:'not-allowed',fontSize:'1.5rem',backgroundColor:'rgb(55 65 81)',fontWeight:'bold'}}>Download as  ZIP</button>

      <Suggestion suggestion={suggestion}/>

      <h1
        style={{
          color: "rgb(243, 244, 246)",
          fontSize: "1.5rem",
          marginTop: "2rem",
        }}
      >
        Having issues, suggestion and feedback? 
      </h1>

      <button style={{padding:'1rem',color:'white',borderRadius:'4px',marginTop:'2rem',fontSize:'1.2rem',backgroundColor:"rgb(55 65 81)"}}>Join the Telegram group</button>
    </>
  )
}

export default Download