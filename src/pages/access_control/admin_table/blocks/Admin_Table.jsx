/* eslint-disable prettier/prettier */
import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  DataGrid,
  DataGridColumnHeader,
  DataGridColumnVisibility,
  DataGridRowSelect,
  DataGridRowSelectAll,
  KeenIcon,
  useDataGrid,
} from "@/components";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";

const Admin_Table = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch admin data from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await axios.get(
        //   "http://localhost:3000/api/auth/get_admins"
        // );
        // setData(response.data.admins); // Assuming the response contains an 'admins' field
        // setLoading(false);
        const response = await axios.get(
          "https://6790de96af8442fd737817be.mockapi.io/admin"
        );
        setData(response.data); // Assuming the response contains an 'admins' field
        setLoading(false);
      } catch (error) {
        console.error("Error fetching admin data:", error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const ColumnInputFilter = ({ column }) => {
    return (
      <Input
        placeholder="Filter..."
        value={column.getFilterValue() ?? ""}
        onChange={(event) => column.setFilterValue(event.target.value)}
        className="h-9 w-full max-w-40"
      />
    );
  };

  const columns = useMemo(
    () => [
      {
        accessorKey: "username",
        header: ({ column }) => (
          <DataGridColumnHeader
            title="Username"
            filter={<ColumnInputFilter column={column} />}
            column={column}
          />
        ),
        cell: (info) => info.getValue(),
        meta: {
          headerClassName: "min-w-[150px]",
          cellClassName: "text-gray-700 font-normal",
        },
      },
      {
        accessorKey: "email",
        header: ({ column }) => (
          <DataGridColumnHeader
            title="Email"
            filter={<ColumnInputFilter column={column} />}
            column={column}
          />
        ),
        cell: (info) => info.getValue(),
        meta: {
          headerClassName: "min-w-[200px]",
          cellClassName: "text-gray-700 font-normal",
        },
      },
      {
        accessorKey: "role",
        header: ({ column }) => (
          <DataGridColumnHeader
            title="Role"
            filter={<ColumnInputFilter column={column} />}
            column={column}
          />
        ),
        cell: (info) => {
          let color;
          if (info.row.original.role === "ProfitFolio") {
            color = "primary";
          } else if (info.row.original.role === "Employee") {
            color = "success";
          } else if (info.row.original.role === "DataEdge") {
            color = "warning";
          } else {
            color = "danger";
          }
          return (
            <span
              className={`badge badge-${color} shrink-0 badge-outline rounded-[30px]`}
            >
              {info.row.original.role}
            </span>
          );
        },
        meta: {
          headerClassName: "min-w-[150px]",
          cellClassName: "text-gray-700 font-normal",
        },
      },
      {
        accessorKey: "createdAt",
        header: ({ column }) => (
          <DataGridColumnHeader
            title="Created At"
            filter={<ColumnInputFilter column={column} />}
            column={column}
          />
        ),
        cell: (info) => new Date(info.getValue()).toLocaleString(),
        meta: {
          headerClassName: "min-w-[200px]",
          cellClassName: "text-gray-700 font-normal",
        },
      },
      {
        id: "edit",
        header: () => "",
        enableSorting: false,
        cell: ({ row }) => (
          <button
            className="btn btn-sm btn-icon btn-clear btn-primary"
            onClick={() => alert(`Clicked on edit for ${row.original.adminId}`)}
          >
            <KeenIcon icon="notepad-edit" />
          </button>
        ),
        meta: {
          headerClassName: "w-[60px]",
        },
      },
      {
        id: "delete",
        header: () => "",
        enableSorting: false,
        cell: ({ row }) => (
          <button
            className="btn btn-sm btn-icon btn-clear btn-danger"
            onClick={() =>
              alert(`Clicked on delete for ${row.original.adminId}`)
            }
          >
            <KeenIcon icon="trash" />
          </button>
        ),
        meta: {
          headerClassName: "w-[60px]",
        },
      },
    ],
    []
  );

  const Toolbar = () => {
    const { table } = useDataGrid();
    return (
      <div className="card-header flex-wrap px-5 py-5 border-b-0">
        <h3 className="card-title">All Admins</h3>
        <div className="flex flex-wrap items-center gap-2.5">
          <div className="flex gap-6">
            <div className="relative">
              <KeenIcon
                icon="magnifier"
                className="leading-none text-md text-gray-500 absolute top-1/2 start-0 -translate-y-1/2 ms-3"
              />
              <input
                type="text"
                placeholder="Search Admins"
                className="input input-sm ps-8"
                value={table.getColumn("username")?.getFilterValue() ?? ""}
                onChange={(event) =>
                  table
                    .getColumn("username")
                    ?.setFilterValue(event.target.value)
                }
              />
            </div>
          </div>
          <DataGridColumnVisibility table={table} />
        </div>
      </div>
    );
  };

  return (
    <DataGrid
      columns={columns}
      data={data}
      loading={loading}
      rowSelection={true}
      pagination={{
        size: 10,
      }}
      sorting={[
        {
          id: "username",
          desc: false,
        },
      ]}
      toolbar={<Toolbar />}
      layout={{
        card: true,
      }}
    />
  );
};

export { Admin_Table };
