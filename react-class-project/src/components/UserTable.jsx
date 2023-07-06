import React from "react";

const UserTable = ({ user }) => {
  return (
    <div className="w-1/3">
      <div>{user.name}</div>
      <div>{user.title}</div>
    </div>
  );
};

export default UserTable;
