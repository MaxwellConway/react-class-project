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
    <div className="task-table">
      <h1 className="header">Hello</h1>
      <div className="overflow-x-auto">
        <table className="w-full bg-white border divide-y divide-gray-200">
          <thead className="bg-gray-50">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
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
                    className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
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
