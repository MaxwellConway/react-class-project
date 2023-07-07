import Stats from "./Stats";
import TaskTable from "./TaskTable";
import UserTable from "./UserTable";
import avi from "../assets/icons/avi.png";

// eslint-disable-next-line react/prop-types
const Dashboard = ({ stats, users, tasks }) => {
  console.log(stats);

  return (
    <>
      <div className="flex items-center justify-between px-4 py-2">
        <div className="flex items-center pl-96">
          <input
            type="text"
            placeholder="Search here"
            className="border-gray-400 border rounded-3xl px-3 py-1 text-gray-500 leading-tight"
            style={{ width: "200px" }}
          />
        </div>
        <div className="flex items-center">
          <img
            src={avi}
            alt="Avatar"
            className="h-8 w-8 rounded-full object-cover"
          />
        </div>
      </div>
      <div className="flex justify-center space-x-7 pl-5 pr-5 pt-2">
        {stats.map((stat) => (
          <Stats stat={stat} />
        ))}
      </div>
      <div className="p-10 flex gap-5">
        <div className="mb-10 max-h-full">
          <TaskTable tasks={tasks} />
        </div>
        <div className="flex flex-col border-solid border-2 rounded-lg shadow-lg">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-left text-yellow-400 pl-5">
              Users
            </h1>
          </div>
          {users.map((user) => (
            <UserTable user={user} key={user.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
