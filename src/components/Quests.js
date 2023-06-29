import React from "react";
import "./Quests.css";
const Quests = () => {
  return (
    <div className="questBox">
      <div className="quest">Quests(23)</div>
      <div className="search">
        <div className="searchSymbol">
          <img src="../../search.png" alt="" />
        </div>
        <div className="searchBox">
          <input
            type="text"
            placeholder="Search quest or Project"
            className="placeholder"
          />
        </div>
      </div>
    </div>
  );
};

export default Quests;
