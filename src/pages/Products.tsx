import { ReactElement, useCallback, useState } from "react";
import AdminSideBar from "../components/AdminSideBar";
import { Column } from "react-table";
import TableHOC from "../components/TableHOC";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

interface DataType {
  photo: string;
  name: string;
  price: number;
  stock: number;
  action: ReactElement;
}

const columns: Column<DataType>[] = [
  {
    Header: "Photo",
    accessor: "photo",
  },
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Price",
    accessor: "price",
  },
  {
    Header: "Stock",
    accessor: "stock",
  },
  {
    Header: "Action",
    accessor: "action",
  },
];

const arr = [
  {
    photo: "Macbook Image",
    name: "Macbook",
    price: 233214,
    stock: 32,
    action: <Link to={"/admin/product/sjad"}>Manage</Link>,
  },
  {
    photo: "iwatch Image",
    name: "iwatch",
    price: 23214,
    stock: 132,
    action: <Link to={"/admin/product/sjad"}>Manage</Link>,
  },
  {
    photo: "iphone Image",
    name: "iphone",
    price: 63214,
    stock: 12,
    action: <Link to={"/admin/product/sjad"}>Manage</Link>,
  },
];

const Products = () => {
  const [data] = useState<DataType[]>(arr);
  const Table = useCallback(
    TableHOC<DataType>(columns, data, "dashboardProductBox", "Products", true),
    []
  );

  return (
    <div className="adminContainer">
      {/* SideBar */}
      <AdminSideBar />
      {/* MainContent */}
      <main>{Table()}</main>
      <Link className="createProductBtn" to={"/admin/product/new"}>
        <FaPlus />
      </Link>
    </div>
  );
};

export default Products;
