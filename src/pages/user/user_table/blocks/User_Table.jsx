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

const User_Table = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch user data from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        // const token =
        //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiUHJvZml0Rm9saW8iLCJpYXQiOjE3Mzc0NDkzMjUsImV4cCI6MTczOTE3NzMyNSwiYXVkIjoiNzZiNDBmYzItMGFkYi00OGMxLWFjZWUtZGI2Mzg4MGUzYzgzIiwiaXNzIjoiUHJvZml0Rm9saW8ifQ.An8qrAmHLPDo0aFDh4tlI5wwNFAYcYnSXBN1TuvhQX8";
        // console.log("Fetching users...", token);
        // const response = await axios.get(
        //   "http://localhost:3000/api/user/get_users?adminId=a40e2048-14d9-5264-b328-5dead3197c38",
        //   {
        //     headers: {
        //       Authorization: `Bearer ${token}`,
        //     },
        //     withCredentials: true,
        //   }
        // );
        // setData(response.data.users);
        // setLoading(false);
        const response = await axios.get(
          "http://6790de96af8442fd737817be.mockapi.io/users"
        );
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching user data:", error);
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
        accessorKey: "id",
        header: () => <DataGridRowSelectAll />,
        cell: ({ row }) => <DataGridRowSelect row={row} />,
        enableSorting: false,
        enableHiding: false,
        meta: {
          headerClassName: "w-0",
        },
      },
      {
        accessorKey: "name",
        header: ({ column }) => (
          <DataGridColumnHeader
            title="Name"
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
        accessorKey: "exchange",
        header: ({ column }) => (
          <DataGridColumnHeader
            title="Exchange"
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
        accessorKey: "phone",
        header: ({ column }) => (
          <DataGridColumnHeader
            title="Phone"
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
        id: "edit",
        header: () => "",
        enableSorting: false,
        cell: ({ row }) => (
          <button
            className="btn btn-sm btn-icon btn-clear btn-primary"
            onClick={() => alert(`Clicked on edit for ${row.original.name}`)}
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
            onClick={() => alert(`Clicked on delete for ${row.original.name}`)}
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
        <h3 className="card-title">All Users</h3>
        <div className="flex flex-wrap items-center gap-2.5">
          <div className="flex gap-6">
            <div className="relative">
              <KeenIcon
                icon="magnifier"
                className="leading-none text-md text-gray-500 absolute top-1/2 start-0 -translate-y-1/2 ms-3"
              />
              <input
                type="text"
                placeholder="Search Users"
                className="input input-sm ps-8"
                value={table.getColumn("name")?.getFilterValue() ?? ""}
                onChange={(event) =>
                  table.getColumn("name")?.setFilterValue(event.target.value)
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
          id: "name",
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

export { User_Table };
