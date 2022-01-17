import React, { useState } from "react";
import EmailRow from "./EmailRow";
import "./SentMailsList.css";
import data from "../LoginScreen/data";

const SentMailsList = () => {
  const LocalStorageData = JSON.parse(window.localStorage.getItem("mails"));
  let time = new Date().toLocaleTimeString();
  let user = JSON.parse(window.localStorage.getItem("user"));
  if (data.users.filter((val) => val.email === user).length !== 0) {
    data.users
      .filter((val) => val.email === user)
      .map((val) => {
        return (val.sentMails = LocalStorageData);
      });
  }
  console.log(data);

  return (
    <div className="sentMailList email_card">
      {LocalStorageData.length < 1
        ? "No mail sent"
        : LocalStorageData.map((val, key) => (
            <EmailRow
              key={key}
              title={val.to}
              description={val.subject}
              time={time}
            />
          ))}
    </div>
  );
};
export default SentMailsList;
