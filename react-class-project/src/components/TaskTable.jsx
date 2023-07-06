import React from "react";
import TaskColumn from "./TaskColumn";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import { useMemo } from "react";
import "./table.css";

const TaskTable = ({ tasks }) => {
  const data = useMemo(() => tasks, []);

  /** @type import (`@tanstack/react-table`).ColumnDef<any> */

  const columns = [
    {
      header: `Title`,
      accessorKey: `title`,
    },
    {
      header: `State`,
      accessorKey: `state`,
    },
    {
      header: `Description`,
      accessorKey: `description`,
    },
    {
      header: `Assignee`,
      accessorKey: `assignee`,
    },
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  console.log(table.getRowModel());

  return (
    <div className="shadow-xl rounded-lg">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-yellow-400 pl-5">
          Current Tasks
        </h1>
        <button className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600  pr-5">
          View All
        </button>
      </div>
      <div className="shadow-xl rounded-lg w-2/3">
        <table className="w-full bg-white border divide-y divide-gray-200">
          <thead className="bg-gray-50">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className="divide-y divide-gray-200">
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    id={`State-${row.original.state}`}
                    className="px-3 py-2 whitespace-nowrap text-sm text-gray-500"
                  >
                    <span>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </span>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TaskTable;
