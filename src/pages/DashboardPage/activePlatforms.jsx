import React from "react";
import timer from "../../assets/svg/dashboard/timer.svg";

const ActivePlatforms = ({ image, platform }) => {
  return (
    <div className="border p-3">
      <div className="d-flex align-items-center gap-2">
        <img src={image} alt="" style={{ height: "3vh" }} />
        <h5>{platform}</h5>
      </div>
      <div className="d-flex align-items-baseline gap-1">
        <img src={timer} alt="" style={{ width: "1vw" }} className="mt-1" />
        <p>338 Total monthly hours spent</p>
      </div>
    </div>
  );
};

export default ActivePlatforms;
