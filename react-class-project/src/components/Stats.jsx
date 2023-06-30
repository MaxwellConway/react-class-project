import React from "react";

const Stats = ({ stat }) => {
  return (
    <div className="shadow-xl rounded-lg w-1/4 hover:bg-yellow-200 transition duration-300 cursor-pointer">
      <div className="flex">
        <div className="flex-1">
          <div className="p-6">
            <div>
              <h1 className="text-4xl font-semibold text-yellow-400">
                {stat.statValue}
              </h1>
              <p className="text-s font-semibold text-gray-500">{stat.name}</p>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col justify-center items-center">
          <div className="mt-2">
            <img src={stat.icon} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
