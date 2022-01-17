import React, { useState } from "react";
import { SideBarData } from "./SideBarData";
import "./SideBar.css";
import data from "../LoginScreen/data";

const SideBar = () => {
  let d = new Date();
  let time = d.getHours();
  let showTime = d.toLocaleTimeString();
  let showDate = d.toLocaleDateString();
  const [ctime, setCTime] = useState(showTime);

  setInterval(() => {
    let t = new Date().toLocaleTimeString();
    setCTime(t);
  }, 1000);

  return (
    <div className="side_bar_main">
      <div className="Sidebar">
        <ul className="SidebarList">
          {SideBarData.map((val, key) => {
            return (
              <li
                className="row"
                key={key}
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
        <div className="avatar">
          <img src="" alt="img" />
        </div>
        <div className="avatar__text">
          <div>
            {time < 12 ? (
              <b>Good morning! </b>
            ) : time > 12 ? (
              <b>Good afternoon! </b>
            ) : (
              <b>Good Noon! </b>
            )}
            {data.users[0].email}
          </div>
          <div>{ctime}</div>
          <div>{showDate}</div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
