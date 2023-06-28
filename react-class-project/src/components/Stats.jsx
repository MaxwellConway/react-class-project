import React from "react";

const Stats = ({ stat }) => {
  return (
    <div className="border-solid border-2 border-sky-500 rounded-lg w-1/4 columns-2">
      <div>
        <div>{stat.name}</div>
        <div>{stat.statValue}</div>
      </div>
      <div>
        <img src={stat.icon} alt="" />
      </div>
    </div>
  );
};

export default Stats;
