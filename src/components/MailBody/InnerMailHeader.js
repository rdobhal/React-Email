import React, { useState } from "react";
import CachedIcon from "@material-ui/icons/Cached";
import VisibilityIcon from "@material-ui/icons/Visibility";
import PriorityHighIcon from "@material-ui/icons/PriorityHigh";
import DeleteIcon from "@material-ui/icons/Delete";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import "./InnerMailHeader.css";

const InnerMailHeader = () => {
  const [searchInput, setSearchInput] = useState("");
  const [value, setValue] = useState("");
  const data = JSON.parse(window.localStorage.getItem("mails"));
  const inputHandler = (e) => {
    setSearchInput(e.target.value);
  };
  const clickHandler = () => {
    //   data.filter((val) => {
    //     if (searchInput === "") setValue("");
    //     else if (
    //       val.to === searchInput ||
    //       val.subject === searchInput ||
    //       val.body === searchInput
    //     )
    //       setValue(val);
    //   });
  };
  return (
    <div className="innerMail__header">
      <div className="innerMail__left">
        <h2>Inbox(1)</h2>
        <div className="header__buttons">
          <button>
            <CachedIcon />
            Refresh
          </button>
          <button>
            <VisibilityIcon />
          </button>
          <button>
            <PriorityHighIcon />
          </button>
          <button>
            <DeleteIcon />
          </button>
        </div>
      </div>
      <div className="innerMail__right">
        <input placeholder="search email" onChange={inputHandler}></input>
        <button onClick={clickHandler}>search</button>
        <div className="left__right__arrows">
          <button>
            <ArrowBackIcon />
          </button>
          <button>
            <ArrowForwardIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default InnerMailHeader;
