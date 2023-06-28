import Stats from "./Stats";
import viewIcon from "../assets/icons/icons8-eye-50.png";
import salesIcon from "../assets/icons/icons8-shopping-cart-50.png";
import commentsIcon from "../assets/icons/icons8-messages-50.png";
import earningIcon from "../assets/icons/icons8-stack-of-money-50.png";

const Dashboard = () => {
  const stats = [
    { name: "Daily Views", icon: viewIcon, statValue: 1504 },
    { name: "Sales", icon: salesIcon, statValue: 80 },
    { name: "Comments", icon: commentsIcon, statValue: 284 },
    { name: "Earning", icon: earningIcon, statValue: 7842 },
  ];
  return (
    <>
      <div className="flex justify-center">
        <div>
          <input type="text" placeholder="Search..." /> {/* Search bar */}
        </div>
        <div>
          <img src="avi.jpg" alt="Avatar" /> {/* Image */}
        </div>
      </div>
      <div className="flex justify-center space-x-7 pl-5 pr-5 pt-5">
        {stats.map((stat) => (
          <Stats stat={stat} />
        ))}
      </div>
    </>
  );
};

export default Dashboard;

// import React from "react";

// const Dashboard = () => {
//   return (
//     <>
//       <div className="flex justify-center">
//         <input
//           type="text"
//           placeholder="Search..."
//           className="p-2 border border-gray-300 rounded-md"
//         />{" "}
//         {/* Search bar */}
//       </div>
//       <div>
//         <img src="avi.jpg" alt="Avatar" className="mx-auto" /> {/* Image */}
//       </div>
//     </>
//   );
// };

// export default Dashboard;
