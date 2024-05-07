import React from "react";
import { Avatar } from "@mui/material";
import "./Sidebar.css";

function Sidebar() {
      return (
            <div className="sidebar">
                  <div className="sidebar_top">
                        <img src="" alt="" />
                        <Avatar className="sidebar__avatar" />
                        <h2>Gethin Davies</h2>
                        <h4>gethindavies1990@gmail.com</h4>
                  </div>
                  <div className="sidebar__stats">
                        <div className="sidebar__stat">
                              <p>Who viewed you</p>
                              <p className="sidebar_statNumber">2,534</p>
                        </div>
                        <div className="sidebar__stat">
                              <p>Views on my Post</p>
                              <p className="sidebar_statNumber">234</p>
                        </div>
                  </div>
                  <div className="sidebar__bottom">
                        <p>Recent</p>
                  </div>
            </div>
      );
}

export default Sidebar;
