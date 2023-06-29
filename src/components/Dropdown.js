import React, { useState } from "react";
import "./Dropdown.css";
import { filterdata2 } from "./data";
const Dropdown = () => {
  const [isOpen, setIsopen] = useState(false);
  return (
    <div className="btn">
      <button onClick={() => setIsopen((prev) => !prev)} className="moreBtn">
        More
      </button>
      {isOpen && (
        <div className="dropdwn">
          {filterdata2.map((data) => (
            <button key={data.id} className="btn2">
              {" "}
              {data.title}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
