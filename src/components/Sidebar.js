import React from "react";
import More from "./More";
import List from "./List";
import "./Sidebar.css";
//Sidebar
const Sidebar = () => {
  return (
    <div className="sidebar">
      <More />
      <div className="line"></div>
      <List />
    </div>
  );
};

export default Sidebar;
