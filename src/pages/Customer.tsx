import { ReactElement, useCallback, useState } from "react";
import AdminSideBar from "../components/AdminSideBar";
import { Column } from "react-table";
import TableHOC from "../components/TableHOC";
import { FaTrash } from "react-icons/fa";

interface DataType {
  avatar: string;
  name: string;
  email: string;
  gender: number;
  role: number;
  action: ReactElement;
}

const columns: Column<DataType>[] = [
  {
    Header: "Avatar",
    accessor: "avatar",
  },
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Email",
    accessor: "email",
  },
  {
    Header: "Gender",
    accessor: "gender",
  },
  {
    Header: "Role",
    accessor: "role",
  },
  {
    Header: "Action",
    accessor: "action",
  },
];

const arr = [
  {
    avatar: "Macbook Image",
    name: "Macbook",
    email: "zyz@g.com",
    gender: 233214,
    role: 32,
    action: (
      <button>
        <FaTrash />
      </button>
    ),
  },
  {
    avatar: "iwatch Image",
    name: "iwatch",
    email: "zyz@g.com",
    gender: 23214,
    role: 132,
    action: (
      <button>
        <FaTrash />
      </button>
    ),
  },
  {
    avatar: "iphone Image",
    name: "iphone",
    email: "zyz@g.com",
    gender: 63214,
    role: 12,
    action: (
      <button>
        <FaTrash />
      </button>
    ),
  },
];

const Customer = () => {
  const [data] = useState<DataType[]>(arr);
  const Table = useCallback(
    TableHOC<DataType>(columns, data, "dashboardProductBox", "Customers", true),
    []
  );
  return (
    <div className="adminContainer">
      {/* SideBar */}
      <AdminSideBar />
      {/* MainContent */}
      <main>{Table()}</main>
    </div>
  );
};

export default Customer;
