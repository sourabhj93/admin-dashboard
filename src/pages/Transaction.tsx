import { ReactElement, useCallback, useState } from "react";
import AdminSideBar from "../components/AdminSideBar";
import { Column } from "react-table";
import { FaTrash } from "react-icons/fa";
import TableHOC from "../components/TableHOC";
import { Link } from "react-router-dom";

interface DataType {
  user: string;
  amount: number;
  discount: number;
  quantity: number;
  status: ReactElement;
  action: ReactElement;
}

const columns: Column<DataType>[] = [
  {
    Header: "User",
    accessor: "user",
  },
  {
    Header: "Amount",
    accessor: "amount",
  },
  {
    Header: "Discount",
    accessor: "discount",
  },
  {
    Header: "Quantity",
    accessor: "quantity",
  },
  {
    Header: "Status",
    accessor: "status",
  },
  {
    Header: "Action",
    accessor: "action",
  },
];

const arr = [
  {
    user: "Macbook Image",
    amount: 233214,
    discount: 13,
    quantity: 14,
    status: <span>Processing</span>,
    action: <Link to={"/admin/transaction/sjad"}>Manage</Link>,
  },
  {
    user: "iwatch Image",
    amount: 23214,
    discount: 17,
    quantity: 214,
    status: <span>Shipped</span>,
    action: <Link to={"/admin/transaction/sjad"}>Manage</Link>,
  },
  {
    user: "iphone Image",
    amount: 63214,
    discount: 93,
    quantity: 214,
    status: <span>Dispatched</span>,
    action: <Link to={"/admin/transaction/sjad"}>Manage</Link>,
  },
];

const Transaction = () => {
  const [data] = useState<DataType[]>(arr);
  const Table = useCallback(
    TableHOC<DataType>(
      columns,
      data,
      "dashboardProductBox",
      "Transactions",
      true
    ),
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

export default Transaction;
