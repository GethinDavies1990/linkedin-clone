import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import GroupIcon from "@mui/icons-material/Group";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import HeaderOption from "./HeaderOption";

function Header() {
  return (
    <div className='header'>
      <div className='header__left'>
        <img src='https://img.icons8.com/color/48/linkedin.png' alt='' />
        <div className='header__search'>
          <SearchIcon />
          <input type='text' />
        </div>
      </div>
      <div className='header__right'>
        <HeaderOption Icon={HomeIcon} title='Home' />
        <HeaderOption Icon={GroupIcon} title='My Network' />
        <HeaderOption Icon={BusinessCenterIcon} title='Jobs' />
        <HeaderOption Icon={ChatIcon} title='Messaging' />
        <HeaderOption Icon={NotificationsIcon} title='Notifications' />
        <HeaderOption avatar='src/elon.jpeg' title='me' />
      </div>
    </div>
  );
}

export default Header;
