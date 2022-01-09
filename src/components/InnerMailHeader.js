import React from "react";
import CachedIcon from "@material-ui/icons/Cached";
import VisibilityIcon from "@material-ui/icons/Visibility";
import PriorityHighIcon from "@material-ui/icons/PriorityHigh";
import DeleteIcon from "@material-ui/icons/Delete";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import './InnerMailHeader.css'

const InnerMailHeader = () => {
  return (
    <div className="innerMail__header">
      <div className="innerMail__left">
        <h2>Inbox(16)</h2>
        <div className="header__buttons">
          <button>
            <CachedIcon />
            Refresh
          </button >
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
        <input placeholder="search email"></input>
        <button>search</button>
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
