import { IconButton } from "@material-ui/core";
import React from "react";
import "./MailHeader.css";
import MenuIcon from "@material-ui/icons/Menu";
import EmailIcon from "@material-ui/icons/Email";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { Link } from "react-router-dom";

const MailHeader = () => {
  return (
    <div className="header">
      <div className="header__left">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <input type="text" placeholder="search for something..."></input>
      </div>
      <div className="header__right">
        <EmailIcon />
        <NotificationsIcon />
        <ExitToAppIcon />
        <Link to="/logout" style={{ textDecoration: "none", color: "black" }}>
          <span>Log out</span>
        </Link>
      </div>
    </div>
  );
};

export default MailHeader;
