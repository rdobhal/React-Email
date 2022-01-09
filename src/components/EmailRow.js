import React from "react";
import "./EmailRow.css";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import { useNavigate } from "react-router-dom";

const EmailRow = ({ id, title, description, time }) => {
  const navigate = useNavigate();
  return (
    <div
      className="emailRow"
      onClick={() => {
        navigate("/mail");
      }}
    >
      <div className="emailRow__options">
        <CheckBoxOutlineBlankIcon />
      </div>
      <div className="emailRow__title">{title}</div>
      <div className="emailRow__message">{description}</div>
      <div className="emailRow__time">{time}</div>
    </div>
  );
};

export default EmailRow;
