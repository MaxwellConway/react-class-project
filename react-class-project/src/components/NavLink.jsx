import React from "react";

const NavLink = ({ link }) => {
  return (
    <div className="flex gap-5 transition ease-in-out delay-100 hover:bg-hover-yellow h-10 pl-2 rounded-l-full hover:text-black hover:cursor-pointer">
      <img class="h-5 w-5" src={link.icon} alt="" />
      {link.name}
    </div>
  );
};

export default NavLink;

{
  /* <div className="text-white hover:bg-white hover:text-regal-blue ease-in duration-200 h-10 flex items-center pl-2 rounded-l-full hover:cursor-pointer"></div>; */
}
