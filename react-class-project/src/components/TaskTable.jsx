import React from "react";
import TaskColumn from "./TaskColumn";
// import { useTable } from "react-table";

const TaskTable = ({ tasks }) => {
  //   const data = React.useMemo(() => tasks, []);
  // const columns = React
  return (
    <div>
      <div className="flex justify-evenly">
        <h1>Tasks</h1>
        <h1>View All</h1>
      </div>
      <div className="flex">
        <div className="border-solid border-2 border-green-700">
          <h2>Title</h2>
          {tasks.map((task) => (
            <TaskColumn task={task.title} />
          ))}
        </div>
        <div className="border-solid border-2 border-green-700">
          <h2>State</h2>
          {tasks.map((task) => (
            <TaskColumn task={task.state} />
          ))}
        </div>
        <div className="border-solid border-2 border-green-700">
          <h2>Description</h2>
          {tasks.map((task) => (
            <TaskColumn task={task.description} />
          ))}
        </div>
        <div className="border-solid border-2 border-green-700">
          <h2>Assignee</h2>
          {tasks.map((task) => (
            <TaskColumn task={task.assignee} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskTable;

//    <div className="flex justify-evenly">
//         <h1>Tasks</h1>
//         <h1>View All</h1>
//       </div>
//       <div className="flex">
//         <div className="border-solid border-2 border-green-700">
//           <h2>Title</h2>
//           {tasks.map((task) => (
//             <TaskColumn task={task.title} />
//           ))}
//         </div>
//         <div className="border-solid border-2 border-green-700">
//           <h2>State</h2>
//           {tasks.map((task) => (
//             <TaskColumn task={task.state} />
//           ))}
//         </div>
//         <div className="border-solid border-2 border-green-700">
//           <h2>Description</h2>
//           {tasks.map((task) => (
//             <TaskColumn task={task.description} />
//           ))}
//         </div>
//         <div className="border-solid border-2 border-green-700">
//           <h2>Assignee</h2>
//           {tasks.map((task) => (
//             <TaskColumn task={task.assignee} />
//           ))}
//         </div>
//       </div>
