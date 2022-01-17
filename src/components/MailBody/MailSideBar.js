import React from "react";
import SideBarOption from "./SideBarOption";
import InboxIcon from "@material-ui/icons/Inbox";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import DraftsIcon from "@material-ui/icons/Drafts";
import DeleteIcon from "@material-ui/icons/Delete";
import "./MailSideBar.css";
import { Button } from "@material-ui/core";
import SendMail from "./SendMail";
import { useState } from "react";
import { Link } from "react-router-dom";

const MailSideBar = (props) => {
  const [buttonPopup, setButtonPopup] = useState(false);
  return (
    <div className="mailsidebar">
      <Button
        className="compose__button"
        onClick={() => {
          setButtonPopup(true);
        }}
      >
        Compose Mail
      </Button>
      <SendMail
        trigger={buttonPopup}
        setTrigger={setButtonPopup}
        childData={props.passChildData}
      />
      <Link to="/mailBox" style={{ textDecoration: "none", color: "black" }}>
        <SideBarOption Icon={InboxIcon} title="Inbox" number={1} />
      </Link>
      <Link to="/sent" style={{ textDecoration: "none", color: "black" }}>
        <SideBarOption Icon={MailOutlineIcon} title="Sent Mails" />
      </Link>
      <SideBarOption Icon={LabelImportantIcon} title="Important" />
      <SideBarOption Icon={DraftsIcon} title="Drafts" number={1} />
      <SideBarOption Icon={DeleteIcon} title="Trash" />
      <div className="categories">
        <h5>CATEGORIES</h5>
        <ul>
          <li>Work</li>
          <li>Documents</li>
          <li>Social</li>
          <li>Advertising</li>
          <li>Clients</li>
        </ul>
      </div>
      <div className="labels"></div>
    </div>
  );
};

export default MailSideBar;
