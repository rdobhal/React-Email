import React from "react";
import "./SideBarOption.css";

const SideBarOption = ({ Icon, title, number }) => {
  return (
    <div className="sidebaroption">
      <Icon />
      <h3>{title}</h3>
      <p className="number__mailsidebar">{number}</p>
    </div>
  );
};

export default SideBarOption;
