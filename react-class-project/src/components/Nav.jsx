import { useState } from "react";
import NavLink from "./NavLink";

import dashboardIcon from "../assets/icons/icons8-home-50.png";
import customersIcon from "../assets/icons/icons8-users-50.png";
import messageIcon from "../assets/icons/icons8-speech-bubble-50.png";
import helpIcon from "../assets/icons/icons8-question-mark-50.png";
import settingsIcon from "../assets/icons/icons8-settings-50.png";
import passwordIcon from "../assets/icons/icons8-password-50.png";
import signoutIcon from "../assets/icons/icons8-logout-50.png";
import reactIcon from "../assets/icons/icons8-react-native-50.png";
import menuIcon from "../assets/icons/icons8-menu-50.png";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true); // State variable for menu open/close

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState); // Toggle the menu state
  };

  const menuWidth = isMenuOpen ? "w-80" : "w-16"; // Calculate the menu width based on the state

  const menuIconClass = isMenuOpen
    ? "duration-200 ease-in-out hover:cursor-pointer h-10 w-10 transform rotate-90"
    : "duration-200 ease-in-out hover:cursor-pointer h-10 w-10"; // Apply rotation class based on the state

  const links = [
    { name: "Dashboard", icon: dashboardIcon },
    { name: "Customers", icon: customersIcon },
    { name: "Message", icon: messageIcon },
    { name: "Help", icon: helpIcon },
    { name: "Settings", icon: settingsIcon },
    { name: "Password", icon: passwordIcon },
    { name: "Sign Out", icon: signoutIcon },
  ];

  return (
    <nav
      className={`duration-300 ease-in-out flex flex-col ${menuWidth} h-screen bg-light-yellow pl-3 gap-10`}
    >
      <div className="flex gap-2 pt-5">
        {isMenuOpen && (
          <>
            <img className="h-10 w-10" src={reactIcon} alt="" />

            <h1 className="text-2xl font-bold pr-10">React Native</h1>
          </>
        )}
        <img
          className={menuIconClass}
          src={menuIcon}
          alt=""
          onClick={toggleMenu}
        />
      </div>
      <div className="flex flex-col gap-5">
        {links.map((link) => (
          <NavLink link={link} isMenuOpen={isMenuOpen} />
        ))}
      </div>
    </nav>
  );
};

export default Nav;
