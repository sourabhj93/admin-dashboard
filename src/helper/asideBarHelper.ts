import { RiDashboardFill } from "react-Icons/ri";
import { AiFillCustomerService } from "react-icons/ai";
import { IoIosPeople } from "react-icons/io";
import { RxIconjarLogo } from "react-icons/rx";

export const sideBarContent = [
  {
    headerId: 1,
    headerBodyName: "Dashboard",
    headerContentProps: [
      {
        Icon: RiDashboardFill,
        url: "/admin/dashboard",
        text: "Dashboard",
      },
      {
        Icon: RxIconjarLogo,
        url: "/admin/product",
        text: "Product",
      },
      {
        Icon: AiFillCustomerService,
        url: "/admin/customer",
        text: "Customer",
      },
      {
        Icon: IoIosPeople,
        url: "/admin/transaction",
        text: "Transaction",
      },
    ],
  },
  {
    headerId: 2,
    headerBodyName: "Dashboard",
    headerContentProps: [
      {
        Icon: "",
        url: "",
        text: "",
        location: "",
      },
      {
        Icon: "",
        url: "",
        text: "",
        location: "",
      },
      {
        Icon: "",
        url: "",
        text: "",
        location: "",
      },
    ],
  },
  {
    headerId: 3,
    headerBodyName: "Dashboard",
    headerContentProps: [
      {
        Icon: "",
        url: "",
        text: "",
        location: "",
      },
      {
        Icon: "",
        url: "",
        text: "",
        location: "",
      },
      {
        Icon: "",
        url: "",
        text: "",
        location: "",
      },
    ],
  },
];
