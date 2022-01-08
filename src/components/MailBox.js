import React from "react";
import SideBar from "./SideBar";
import "./MailBox.css";
import MainPage from "./MainPage";

const MailBox = () => {
  return (
    <div className="app-body">
      <SideBar />
      <MainPage/>
    </div>
  );
};

export default MailBox;
