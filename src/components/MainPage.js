import React from "react";

import MailHeader from './MailHeader'
import MailBody from "./MailBody";
import './MainPage.css'

const MainPage = () => {
  return (
      <div className="main__page">
      <MailHeader/>
    <MailBody/>
    </div>
  );
};

export default MainPage;
