import Analytics from "./Analytics";
import Colors from "./Colors";
import Download from "./Download";
import Fonts from "./Fonts";
import Hosting from "./Hosting";
import Suggestion from "./Suggestion";
import Theme from "./Theme";

let suggestion =
  "By enabling the footer credit, you can help this project reach more people.";
const Footer = ({footerClick,setFooterClick,theme,setTheme}) => {
  return (
    <>
      <h1
        style={{
          color: "rgb(243, 244, 246)",
          fontSize: "1.5rem",
          marginTop: "2rem",
        }}
      >
        Footer Credit
      </h1>

      <div
        className="footer-section"
        style={{ display: "flex", alignItems: "center", marginTop: "2rem" }}
      >
        <button
          className="green"
          style={{
            width: "120px",
            borderRadius: "4px",
            height: "50px",
            backgroundColor: `${footerClick ? "rgb(5 150 105)" :'rgb(55 65 81)'}`,
            padding: "0.3rem",
            display: "flex",
            justifyContent: `${footerClick ? 'flex-end' : 'flex-start' }`,
            marginRight: "2rem",
          }}
          onClick={()=> setFooterClick(!footerClick)}
        >
          <div
            className="white"
            style={{
              width: "40%",
              borderRadius: "4px",
              height: "100%",
              backgroundColor: "white",
            }}
          ></div>
        </button>
        <p style={{ color: "white", fontSize: "1.2rem" }}>
          {
             footerClick ? "Enabled" : 'Disabled'
          }
        </p>
      </div>
      <Suggestion suggestion={suggestion} />

      <Theme theme={theme} setTheme={setTheme}/>

      {/* <Colors/> */}
      <Fonts/>
      <Analytics/>
      <Hosting/>
      <Download/>
    </>
  );
};

export default Footer;
