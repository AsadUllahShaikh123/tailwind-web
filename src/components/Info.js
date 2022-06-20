import React from "react";
import Actions from "./Actions";
import Featured from "./Featured";
import FormSection from "./FormSection";
import InfoSection from "./InfoSection";

const Info = ({ inputs, setInputs, handleChange }) => {
  return (
    <>
      <div
       id="preview"
        className="info-preview"
        style={{
          marginTop: "2rem",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <div
          className="info w-full md:w-1/2 px-2"
          style={{ marginTop: "7rem" }}
        >
          <InfoSection />
          <FormSection
            inputs={inputs}
            setInputs={setInputs}
            handleChange={handleChange}
          />
          <Actions />
          <Featured />
        </div>

        <div
          className="preview-sec hidden md:block"
          style={{
            width: "45%",
            alignSelf: "flex-start",
            padding: "0 0.3rem",
            top: "70px",
            position: "sticky",
            backgroundColor: "black",
            borderRadius: "8px",
            border: "2px solid black",
          }}
        >
          <h1
            style={{ textAlign: "center", color: "white", padding: "2rem 0" }}
          >
            LIVE PREVIEW
          </h1>

          {/* Input Dot Section  */}
          <div
            className="input-dot"
            style={{
              width: "100%",
              backgroundColor: "rgb(17 24 39)",
              padding: "1rem",
              borderRadius: "4px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: "90%",
                height: "45px",
                borderRadius: "4px",
                backgroundColor: "black",
                color: "white",
                padding: "0.5rem 1rem",
              }}
            >
              https://yoursite/vcard/{inputs.firstName }{inputs.lastName}
            </div>
            <i
              class="fa fa-ellipsis-v"
              aria-hidden="true"
              style={{ color: "white", size: "1.5rem" }}
            ></i>
          </div>
          {/* Green Section  */}
          <div
            className="green"
            style={{
              width: "100%",
              height: "200px",
              padding: "1rem 0",
              backgroundColor: "rgb(5 150 105)",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div className="icons" style={{ alignSelf: "flex-end" }}>
              <i
                class="fa-solid fa-share-nodes"
                style={{
                  color: "white",
                  fontSize: "2rem",
                  marginRight: "3rem",
                }}
              ></i>
              <i
                class="fa-solid fa-qrcode"
                style={{ color: "white", fontSize: "2rem" }}
              ></i>
            </div>
          </div>

          {/* White Section */}

          <div
            className="white"
            style={{
              width: "100%",
              fontWeight:'400 !important',
              minHeight:'290px',
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              backgroundColor: "rgb(251,251,251)",
              borderRadius: "0 0 8px 8px",
            }}
          >
            <div className="inputs" style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',margin:`${inputs ? '1rem 0' : '0'}`}}>
              {inputs.firstName && <p>{inputs.firstName}</p>}
              {inputs.lastName && <p>{inputs.lastName}</p>}
              {inputs.gender && <p>{inputs.gender}</p>}
              {inputs.job && <p>{inputs.job}</p>}
              {inputs.buisness && <p>{inputs.buisness}</p>}
              {inputs.address && <p>{inputs.address}</p>}
              {inputs.description && <p>{inputs.description}</p>}
              {inputs.key && <p>{inputs.key}</p>}
            </div>
            <div
              className="button"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <button
                style={{
                  width: "80%",
                  borderRadius: "2rem",
                  color: "white",
                  fontSize: "1.5rem",
                  padding: "1rem",
                  backgroundColor: "rgb(5 150 105)",
                  margin:`${inputs ? '1rem 0' : '0'}`
                }}
              >
                Save Contact
              </button>
            </div>
            <div className="title" style={{margin:`${inputs ? '1rem 0' : '0'}`}}>
              <h1 style={{ textAlign: "center", fontSize: "1.5rem" }}>
                Section title
              </h1>
            </div>
            <div>
              <p style={{ textAlign: "center" }}>created with EnBizCard</p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="footer"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "6rem",
          marginBottom: "4rem",
        }}
      >
        <div className="logo-text">
          <div className="logo">
            <img
              src="./images/icon.png"
              alt=""
              srcset=""
              style={{ width: "150px", height: "100px" }}
            />
          </div>
          <div className="text" style={{ textAlign: "center", color: "white" }}>
            EnBizCard
          </div>
        </div>
        <div
          className="made"
          style={{ color: "rgb(156 163 175)", marginTop: "1rem" }}
        >
          Made with ❤️ by{" "}
          <a href="#vishnu" style={{ color: "rgb(16 185 129)" }}>
            Vishnu Raghav
          </a>
        </div>
        <p style={{ color: "rgb(156 163 175)" }}>
          <a
            href="#view"
            style={{ color: "rgb(16 185 129)", marginTop: "2rem" }}
          >
            view source
          </a>
          |AGPLv3 License
        </p>
      </div>
    </>
  );
};

export default Info;
