import React from "react";

const Stats = ({ stat }) => {
  return (
    <div className="transition ease-in-out delay-400 hover:bg-hover-yellow hover:cursor-pointer border-solid border-2 border-sky-500 rounded-lg w-1/4 columns-2">
      <div className="p-6">
        <div>
          <h1 className="text-3xl font-semibold	">{stat.statValue}</h1>

          <p className="text-sm">{stat.name}</p>
        </div>
        <div>
          <img src={stat.icon} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Stats;
