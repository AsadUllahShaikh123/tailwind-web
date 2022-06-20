import React from "react";
let data = [
  {
    value: "App Store",
    icon: "fa-brands fa-app-store",
    color: "linear-gradient(rgb(95, 201, 248), rgb(20, 126, 251))",
  },
  {
    value: "ArtStation",
    icon: "fa-brands fa-artstation",
    color: "rgb(23, 23, 23)",
  },
  {
    value: "Behance",
    icon: "fa-brands fa-behance",
    color: "rgb(23, 105, 255)",
  },
  {
    value: "Buy me a coffee",
    icon: "fa-solid fa-mug-hot",
    color: "rgb(255, 221, 0)",
  },
  {
    value: "Cash App",
    icon: "fa-solid fa-dollar-sign",
    color: "rgb(255,255,255)",
  },
  {
    value: "Codeberg",
    icon: "fa-brands fa-centercode",
    color: "rgb(33, 133, 208)",
  },
  {
    value: "Diaspora",
    icon: "fa-brands fa-diaspora",
    color: "rgb(0,0,0)",
  },
  {
    value: "Discord",
    icon: "fa-brands fa-discord",
    color: "rgb(114, 137, 218)",
  },
  {
    value: "Dribble",
    icon: "fa-brands fa-dribbble",
    color: "rgb(234, 76, 137)",
  },
  {
    value: "Facebook",
    icon: "fa-brands fa-facebook",
    color: "rgb(24, 119, 242)",
  },
  {
    value: "Freindica",
    icon: "fa-solid fa-franc-sign",
    color: "rgb(29, 110, 154)",
  },
  {
    value: "FunkWhale",
    icon: "fa fa-funkwhale",
    color: "rgb(255,255,255)",
  },
  {
    value: "GitHub",
    icon: "fa-brands fa-github",
    color: "rgb(51, 51, 51)",
  },
  {
    value: "GitLab",
    icon: "fa-brands fa-gitlab",
    color: "rgb(23, 19, 33)",
  },
  {
    value: "Instagram",
    icon: "fa-brands fa-instagram",
    color: "rgb(0,0,0)",
  },
  {
    value: "Linkedin",
    icon: "fa-brands fa-linkedin",
    color: "rgb(0, 119, 181)",
  },
  {
    value: "Mastodon",
    icon: "fa-brands fa-mastodon",
    color: "rgb(43, 144, 217)",
  },
  {
    value: "Medium",
    icon: "fa-brands fa-medium",
    color: "rgb(0,0,0)",
  },
  {
    value: "Open-Collective",
    icon: "fa-brands fa-opera",
    color: "rgb(255,255,255)",
  },
  {
    value: "Patreon",
    icon: "fa-brands fa-patreon",
    color: "rgb(255, 66, 77)",
  },
  {
    value: "PayPal",
    icon: "fa-brands fa-patreon",
    color: "rgb(0, 48, 135)",
  },
  {
    value: "Peertube",
    icon: "fa fa-peertube",
    color: "rgb(255,255,255)",
  },
  {
    value: "pinterest",
    icon: "fa-brands fa-pinterest",
    color: "rgb(189, 8, 28)",
  },
  {
    value: "Pixelfed",
    icon: "fa-solid fa-p",
    color: "rgb(141, 89, 168)",
  },
  {
    value: "Play Store",
    icon: "fa-brands fa-google-play",
    color: "rgb(255,255,255)",
  },
  {
    value: "Quora",
    icon: "fa-brands fa-quora",
    color: "rgb(168, 36, 0)",
  },
  {
    value: "Reddit",
    icon: "fa-brands fa-reddit",
    color: "rgb(255, 87, 0)",
  },
  {
    value: "Siiilo",
    icon: "fa-solid fa-s",
    color: "rgb(23, 35, 59)",
  },
  {
    value: "Snapchat",
    icon: "fa-brands fa-snapchat-square",
    color: "rgb(255, 252, 0)",
  },
  {
    value: "Soundcloud",
    icon: "fa-brands fa-soundcloud",
    color: "rgb(255, 51, 0)",
  },
  {
    value: "Spotify",
    icon: "fa-brands fa-spotify",
    color: "rgb(30, 215, 96)",
  },
  {
    value: "TikTok",
    icon: "fa-brands fa-tiktok",
    color: "rgb(255,255,255)",
  },
  {
    value: "Tumblr",
    icon: "fa-brands fa-tumblr",
    color: "rgb(44, 71, 98)",
  },
  {
    value: "Twitch",
    icon: "fa-brands fa-twitch",
    color: "rgb(145, 70, 255)",
  },
  {
    value: "Twitter",
    icon: "fa-brands fa-twitter",
    color: "rgb(29, 161, 242)",
  },
  {
    value: "Vimeo",
    icon: "fa-brands fa-vimeo-v",
    color: "rgb(26, 183, 234)",
  },
  {
    value: "VK",
    icon: "fa-brands fa-vk",
    color: "rgb(74, 118, 168)",
  },
  {
    value: "Yelp",
    icon: "fa-brands fa-yelp",
    color: "rgb(255,255,255)",
  },
  {
    value: "YouTube",
    icon: "fa-brands fa-youtube",
    color: "rgb(255,0,0)",
  },
];
const SecondaryActions = () => {
  return (
    <>
      <h1
        style={{
          color: "rgb(243, 244, 246)",
          fontSize: "1.5rem",
          marginTop: "2rem",
        }}
      >
        Secondary actions
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
              background:`${values.color}`,
              color: `${
                values.color === "rgb(255,255,255)" ? "black" : "white"
              }`,
              cursor:'pointer'
            }}
          >
            <div className="logo" style={{ marginRight: "1rem" }}>
              <i class={values.icon}></i>
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

export default SecondaryActions;
