import React from "react";

const Stats = ({ stat }) => {
  return (
    <div className="h-1/4 transition ease-in-out delay-400 shadow-xl hover:bg-hover-yellow hover:cursor-pointer border-solid border- rounded-lg w-1/4 columns-2">
      <div className="p-6">
        <div>
          <h1 className="text-3xl font-semibold	text-yellow-400">
            {stat.statValue}
          </h1>

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
