import { useState } from "react";
import Nav from "./components/Nav";
import Dashboard from "./components/Dashboard";
import viewIcon from "./assets/icons/icons8-eye-50.png";
import salesIcon from "./assets/icons/icons8-shopping-cart-50.png";
import commentsIcon from "./assets/icons/icons8-messages-50.png";
import earningIcon from "./assets/icons/icons8-stack-of-money-50.png";

function App() {
  const statsArray = [
    { name: "Daily Views", icon: viewIcon, statValue: 1504 },
    { name: "Sales", icon: salesIcon, statValue: 80 },
    { name: "Comments", icon: commentsIcon, statValue: 284 },
    { name: "Earning", icon: earningIcon, statValue: 7842 },
  ];

  const [stats, setStats] = useState(statsArray);

  return (
    <>
      <div className="flex w-fit h-100vh">
        <div>
          <Nav />
        </div>
        <div className="w-full">
          <Dashboard stats={stats} />
        </div>
      </div>
    </>
  );
}

export default App;
