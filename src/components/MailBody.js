import React from "react";
import EmailList from "./EmailList";
import MailSideBar from "./MailSideBar";
import './MailBody.css'

const MailBody = () => {
  return (
    <div className="mail__body">
      <MailSideBar />
      <EmailList />
    </div>
  );
};

export default MailBody;
