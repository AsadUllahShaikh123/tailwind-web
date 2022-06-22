import React from "react";
import PhoneIcon from '@mui/icons-material/Phone';
import ChatIcon from '@mui/icons-material/Chat';
import EmailIcon from '@mui/icons-material/Email';
import LanguageIcon from '@mui/icons-material/Language';
import StorefrontIcon from '@mui/icons-material/Storefront';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import TelegramIcon from '@mui/icons-material/Telegram';
import DataArrayIcon from '@mui/icons-material/DataArray';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import MaleIcon from '@mui/icons-material/Male';
import PrimaryActions from "./PrimaryActions";
import SecondaryActions from "./SecondaryActions";

let data =[
  {
    value:'Mobile',
    icon:PhoneIcon
  },
  {
    value:'Office',
    icon:PhoneIcon
  },
  {
    value:'Home',
    icon:PhoneIcon
  },
  {
    value:'SMS',
    icon:ChatIcon
  },
  {
    value:'Email',
    icon:EmailIcon
  },
  {
    value:'Website',
    icon:LanguageIcon
  },
  {
    value:'Store',
    icon:StorefrontIcon
  },
  {
    value:'Location',
    icon:LocationOnIcon
  },
  {
    value:'Signal',
    icon:SignalCellularAltIcon
  },
  {
    value:'Telegram',
    icon:TelegramIcon
  },
  {
    value:'Matrix',
    icon:DataArrayIcon
  },
  {
    value:'WhatsApp',
    icon:WhatsAppIcon
  },
  {
    value:'Messenger',
    icon:LanguageIcon
  },
  {
    value:'Skype',
    icon:LanguageIcon
  },
  {
    value:'Line',
    icon:MaleIcon
  },
  {
    value:'Viber',
    icon:MaleIcon
  },
  {
    value:'WeChat',
    icon:LanguageIcon
  },
  {
    value:'Calendar',
    icon:CalendarTodayIcon
  },
  {
    value:'XMPP',
    icon:LanguageIcon
  }
];

// Secondary Actions Data

let data1 = [
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



const Actions = ({showData,setShowData,secondaryShowData,setSecondaryShowData}) => {
  return (
    <>
      <div className="actions" style={{ marginTop: "4rem" }}>
        <PrimaryActions data={data} showData={showData} setShowData={setShowData}/>
        <SecondaryActions data1={data1} secondaryShowData={secondaryShowData} setSecondaryShowData={setSecondaryShowData}/>
      </div>
    </>
  );
};

export default Actions;
