import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import GroupIcon from "@mui/icons-material/Group";
import HeaderOption from "./HeaderOption";

function Header() {
      return (
            <div className="header">
                  <div className="header__left">
                        <img
                              src="https://img.icons8.com/color/48/linkedin.png"
                              alt=""
                        />
                        <div className="header__search">
                              <SearchIcon />
                              <input type="text" />
                        </div>
                  </div>
                  <div className="header__right">
                        <HeaderOption Icon={HomeIcon} title="Home" />
                        <HeaderOption Icon={GroupIcon} title="My Network" />
                  </div>
            </div>
      );
}

export default Header;
