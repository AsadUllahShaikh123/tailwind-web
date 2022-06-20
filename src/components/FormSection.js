import React from "react";

const FormSection = ({inputs,setInputs,handleChange}) => {
 
  return (
    <>
      <div className="fields" style={{ marginTop: "2rem" }}>
        <div className="nameFields" style={{ display: "flex" }}>
          <div className="firstName" style={{ marginRight: "1.5rem" }}>
            <label
              htmlFor="firstName"
              style={{
                display: "block",
                color: "rgb(243, 244, 246)",
                padding: "0.5rem",
              }}
            >
              First name
            </label>
            <input
              type="text"
              className="w-full"
              name ="firstName"
              value={inputs.firstName}
              onChange={handleChange}
              style={{
                height: "45px",
                borderRadius: "4px",
                backgroundColor: "black",
                caretColor: "white",
                padding: "0 1rem",
                color: "white",
              }}
            />
          </div>
          <div className="lastName" style={{}}>
            <label
              htmlFor="lastName"
              style={{
                display: "block",
                color: "rgb(243, 244, 246)",
                padding: "0.5rem",
              }}
            >
              Last name
            </label>
            <input
              type="text"
              name="lastName"
              value={inputs.lastName}
              onChange={handleChange}
              style={{
                width: "220px",
                height: "45px",
                borderRadius: "4px",
                backgroundColor: "black",
                caretColor: "white",
                padding: "0 1rem",
                color: "white",
              }}
            />
          </div>
        </div>

        <div className="gender" style={{ marginTop: "1rem" }}>
          <label
            htmlFor="gender"
            style={{
              display: "block",
              color: "rgb(243,244,246)",
              padding: "0.5rem",
            }}
          >
            Gender Pronouns
          </label>
          <input
            type="text"
            name="gender"
            value={inputs.gender}
            onChange={handleChange}
            style={{
              width: "100%",
              height: "45px",
              borderRadius: "4px",
              backgroundColor: "black",
              caretColor: "white",
              padding: "0 1rem",
              color: "white",
            }}
          />
        </div>

        <div className="job" style={{ marginTop: "1rem" }}>
          <label
            htmlFor="job"
            
            style={{
              display: "block",
              color: "rgb(243,244,246)",
              padding: "0.5rem",
            }}
          >
            Job title
          </label>
          <input
            type="text"
            name="job"
            value={inputs.job}
            onChange={handleChange}
            style={{
              width: "100%",
              height: "45px",
              borderRadius: "4px",
              backgroundColor: "black",
              caretColor: "white",
              padding: "0 1.5rem",
              color: "white",
            }}
          />
        </div>

        <div className="buisness" style={{ marginTop: "1rem" }}>
          <label
            htmlFor="buisness"
            style={{
              display: "block",
              color: "rgb(243,244,246)",
              padding: "0.5rem",
            }}
          >
            Buisness
          </label>
          <input
            type="text"
            name="buisness"
            value={inputs.business}
            onChange={handleChange}
            style={{
              width: "100%",
              height: "45px",
              borderRadius: "4px",
              backgroundColor: "black",
              caretColor: "white",
              padding: "0 1rem",
              color: "white",
            }}
          />
        </div>

        <div className="text-area" style={{ marginTop: "1rem" }}>
          <label
            htmlFor="address"
            style={{
              display: "block",
              color: "rgb(243,244,246)",
              padding: "0.5rem",
            }}
          >
            Business address
          </label>
          <textarea
            name="address"
            value={inputs.address}
            onChange={handleChange}
            id="address"
            style={{
              width: "100%",
              height: "150px",
              borderRadius: "4px",
              backgroundColor: "black",
              padding: "1rem",
              caretColor: "white",
              color: "white",
            }}
          ></textarea>
        </div>
        <div className="text-area" style={{ marginTop: "1rem" }}>
          <label
            htmlFor="description"
            style={{
              display: "block",
              color: "rgb(243,244,246)",
              padding: "0.5rem",
            }}
          >
            Business description
          </label>
          <textarea
            value={inputs.description}
            onChange={handleChange}
            name="description"
            id="description"
            style={{
              width: "100%",
              height: "150px",
              borderRadius: "4px",
              backgroundColor: "black",
              padding: "1rem",
              caretColor: "white",
              color: "white",
            }}
          ></textarea>
        </div>
        <div className="text-area" style={{ marginTop: "1rem" }}>
          <label
            htmlFor="key"
            style={{
              display: "block",
              color: "rgb(243,244,246)",
              padding: "0.5rem",
            }}
          >
            OpenPGP public key
          </label>
          <textarea
          value={inputs.key}
          onChange={handleChange}
            name="key"
            id="key"
            placeholder="Paste your public key here"
            style={{
              width: "100%",
              height: "150px",
              borderRadius: "4px",
              backgroundColor: "black",
              padding: "1rem",
              caretColor: "white",
              color: "white",
            }}
          ></textarea>
        </div>
      </div>
    </>
  );
};

export default FormSection;
