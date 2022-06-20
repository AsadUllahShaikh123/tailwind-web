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
]
const Actions = () => {
  return (
    <>
      <div className="actions" style={{ marginTop: "4rem" }}>
        <PrimaryActions data={data}/>
        <SecondaryActions data={data}/>
      </div>
    </>
  );
};

export default Actions;
