import React from "react";
import "./EmailList.css";
import EmailRow from "./EmailRow";

const EmailList = () => {
  return (
    <div className="emailList email_card">
      <div className="emailList__section">
        <EmailRow
          title="Anna Smith"
          description="This is my mail"
          time="10.00 PM"
        />
      </div>
    </div>
  );
};

export default EmailList;
