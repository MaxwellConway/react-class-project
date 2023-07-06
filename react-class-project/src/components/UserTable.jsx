import React from "react";

const UserTable = ({ user }) => {
  return (
    <div className="mb-4">
      <div className="bg-white p-4 flex flex-col gap-2">
        <div className="text-xl font-bold">{user.name}</div>
        <div className="text-gray-600">{user.title}</div>
      </div>
    </div>
  );
};

export default UserTable;
