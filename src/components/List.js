import React from "react";
import "./List.css";
const List = () => {
  return (
    <div className="list">
      <div className="proof">
        <div className="shield">
          <img src="../../Shield.svg" alt="" className="image" />
        </div>

        <div className="proofTextBox">
          <div className="proofText"> Proof</div>
        </div>
      </div>

      <div className="waitlist">
        <div className="giftbox">
          <img src="../../Giftbox.svg" alt="" />
        </div>

        <div className="waitlistBox">
          <div className="waitlistText"> Waitlist</div>
        </div>
      </div>

      <div className="nft">
        <div className="hexagon">
          <img src="../../hexagon.svg" alt="" className="image" />
        </div>

        <div className="nftTextbox">
          <div className="nftText"> NFT</div>
        </div>
      </div>
    </div>
  );
};

export default List;
