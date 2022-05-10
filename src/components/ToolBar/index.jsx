import { Language, NotificationsNone, Settings } from "@mui/icons-material";
import { Avatar, IconButton } from "@mui/material";
import React from "react";
import "./index.scss";
import image from "../chair.jpg";
const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbar__wrapper">
        <div className="topLeft">
          <span className="logo">Prateek</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <IconButton>
              <NotificationsNone />
            </IconButton>
            <span className="Notificationno">3</span>
          </div>
          <div className="topbarIconContainer">
            <IconButton>
              <Language />
            </IconButton>
            <span className="Notificationno">3</span>
          </div>{" "}
          <div className="topbarIconContainer">
            <IconButton>
              <Settings />
            </IconButton>
          </div>
          <Avatar className="topAvtart">
          <img src={image}></img>
        </Avatar>
        </div>
        
      </div>
    </div>
  );
};

export default Topbar;
