import Suggestion from "./Suggestion";

let suggestion =
  "Recommended cover photo size is 960 x 640 pixels, with an aspect ratio of 3:2;";

const InfoSection = ({
  image,
  setImage,
  handleClick,
  handleImageChange,
  click,
  setClick,
  footerClick,
  setFooterClick
}) => {
  let handleRemoveImage = (e) => {
    setClick({ ...click, [e.target.name]: true });
    setImage({ ...image, [e.target.name]: "" });
  };
  return (
    <>
      <h1 style={{ color: "rgb(243, 244, 246)", fontSize: "1.5rem" }}>
        Header attachements
      </h1>

      {click.file1 ? (
        <div
          className="stepC"
          style={{ display: "flex", flexWrap: "wrap", marginTop: "1.5rem" }}
        >
          <div className="button">
            <input
              type="file"
              name="file1"
              id="file1"
              accept="image/*"
              onChange={handleImageChange}
              style={{ display: "none" }}
            />
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
              Add Cover
            </p>
            <p style={{ fontFamily: "400", color: "rgb(156, 163, 175)" }}>
              suggested format: svg,png or gif
            </p>
          </div>
        </div>
      ) : (
        <div className="image" style={{ display: "flex", marginTop: "2rem" }}>
          <img
            src={image.file1}
            alt=""
            srcset=""
            style={{
              width: "20%",
              height: "100px",
              backgroundPosition: "50% 50%",
              borderRadius: "8px",
              marginRight: "2rem",
            }}
          />
          <button
            name="file1"
            onClick={handleRemoveImage}
            style={{ fontSize: "2rem", color: "white" }}
          >
            X
          </button>
        </div>
      )}

      {click.file2 ? (
        <div
          className="stepC"
          style={{ display: "flex", flexWrap: "wrap", marginTop: "1.5rem" }}
        >
          <div className="button">
            <input
              type="file"
              name="file2"
              id="file2"
              accept="image/*"
              onChange={handleImageChange}
              style={{ display: "none" }}
            />
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
              Add Profile
            </p>
            <p style={{ fontFamily: "400", color: "rgb(156, 163, 175)" }}>
              suggested format: svg,png or gif
            </p>
          </div>
        </div>
      ) : (
        <div className="image" style={{ display: "flex", marginTop: "2rem" }}>
          <img
            src={image.file2}
            alt=""
            srcset=""
            style={{
              width: "20%",
              height: "100px",
              backgroundPosition: "50% 50%",
              borderRadius: "8px",
              marginRight: "2rem",
            }}
          />
          <button
            name="file2"
            onClick={handleRemoveImage}
            style={{ fontSize: "2rem", color: "white" }}
          >
            X
          </button>
        </div>
      )}

      <Suggestion suggestion={suggestion} />
      <h1
        style={{
          color: "rgb(243, 244, 246)",
          fontSize: "1.5rem",
          marginTop: "2rem",
        }}
      >
        Contact Information
      </h1>

      {click.file3 ? (
        <div
          className="stepC"
          style={{ display: "flex", flexWrap: "wrap", marginTop: "1.5rem" }}
        >
          <div className="button">
            <input
              type="file"
              name="file3"
              id="file3"
              accept="image/*"
              onChange={handleImageChange}
              style={{ display: "none" }}
            />
            <button
              name="file3"
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
      ) : (
        <div className="image" style={{ display: "flex", marginTop: "2rem" }}>
          <img
            src={image.file3}
            alt=""
            srcset=""
            style={{
              width: "20%",
              height: "100px",
              backgroundPosition: "50% 50%",
              borderRadius: "8px",
              marginRight: "2rem",
            }}
          />
          <button
            name="file3"
            onClick={handleRemoveImage}
            style={{ fontSize: "2rem", color: "white" }}
          >
            X
          </button>
        </div>
      )}
      <Suggestion suggestion={suggestion} />
    </>
  );
};

export default InfoSection;
