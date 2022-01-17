import React from "react";
import EmailList from "./EmailList";
import InnerMailHeader from "./InnerMailHeader";
import "./MailBody.css";
import MailSideBar from "./MailSideBar";
import SentMailsList from "./SentMailsList";
import { useState, createContext } from "react";

const mailDetails = createContext();

const MailBody = (props) => {
  const [buttonState, setButtonState] = useState(false);
  let trigger = props.trig;
  return (
    <div className="mail__body">
      <MailSideBar />
      <div className="mail__head__body">
        <InnerMailHeader isTrigger={buttonState} />
        {trigger ? (
          <SentMailsList />
        ) : (
          <EmailList passChildData={setButtonState} />
        )}
      </div>
    </div>
  );
};

export default MailBody;
export { mailDetails };
