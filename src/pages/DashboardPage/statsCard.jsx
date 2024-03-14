import React from "react";

const StatsCard = ({ icon, value, fontSize, iconWidth, text, cardWidth }) => {
  return (
    <div
      className="border rounded-3 mb-1"
      style={{ paddingLeft: "1rem", width: cardWidth ? cardWidth : "" }}
    >
      <div className="d-flex align-items-center gap-3">
        <img
          src={icon}
          alt=""
          style={{ width: iconWidth ? iconWidth : "2vw" }}
        />
        <strong
          style={{
            color: "rgba(235, 124, 73, 1) rgba(240, 79, 82, 1)",
            fontSize: fontSize ? fontSize : " xx-large",
          }}
        >
          {value}
        </strong>
      </div>
      <p>{text}</p>
    </div>
  );
};

export default StatsCard;
