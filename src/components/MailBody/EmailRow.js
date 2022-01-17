import React from "react";
import "./EmailRow.css";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const EmailRow = ({ id, title, description, time }) => {
  const navigate = useNavigate();
  const [state, setState] = useState(false);

  const clickHandler = () => {
    setState((prev) => !prev);
  };
  return (
    <div className="emailRow">
      <div className="emailRow__options" onClick={clickHandler}>
        {state ? <CheckBoxIcon /> : <CheckBoxOutlineBlankIcon />}
      </div>
      <div className="emailRow__title">{title}</div>
      <div className="emailRow__message">{description}</div>
      <div className="emailRow__time">{time}</div>
    </div>
  );
};

export default EmailRow;
