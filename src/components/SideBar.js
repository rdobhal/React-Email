import React from "react";
import "./SideBar.css";
import { SideBarData } from "./SideBarData";
import MailSideBar from "./MailSideBar";

const SideBar = () => {
  return (
    <div className="side_bar_main">
      <div className="Sidebar">
        <ul className="SidebarList">
          {SideBarData.map((val, key) => {
            return (
              <li
                className="row"
                key={key}
                id={window.location.pathname === val.link ? "active" : ""}
                onClick={() => {
                  window.location.pathname = val.link;
                }}
              >
                <div id="icon">{val.icon}</div>
                <div id="title">{val.title}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
