import { Link, useLocation } from "react-router-dom";
import { RxDashboard, RxIconjarLogo } from "react-icons/rx";
import { AiOutlineTransaction } from "react-icons/ai";
import { IoIosPeople } from "react-icons/io";
import { BiCoin, BiLandscape, BiSolidCoupon } from "react-icons/bi";
import { IoBarChart, IoPieChart, IoStatsChart } from "react-icons/io5";
import {
  FaChartBar,
  FaChartLine,
  FaChartPie,
  FaStopwatch,
} from "react-icons/fa";

interface Liprops {
  url: string;
  Icon: JSX.ElementType;
  text: string;
}

const AdminSideBar = () => {
  const location = useLocation();
  const Li = ({ url, Icon, text }: Liprops) => (
    <li
      style={{
        backgroundColor: location.pathname.includes(url)
          ? "lightblue"
          : "unset",
      }}
    >
      <Link
        to={url}
        style={{
          color: location.pathname.includes(url) ? "black" : "unset",
        }}
      >
        <Icon />
        {text}
      </Link>
    </li>
  );
  const sideBarContent = [
    {
      headerId: 1,
      headerBodyName: "Dashboard",
      headerContentProps: [
        {
          Icon: RxDashboard,
          url: "/admin/dashboard",
          text: "Dashboard",
        },
        {
          Icon: RxIconjarLogo,
          url: "/admin/product",
          text: "Product",
        },
        {
          Icon: IoIosPeople,
          url: "/admin/customer",
          text: "Customer",
        },
        {
          Icon: AiOutlineTransaction,
          url: "/admin/transaction",
          text: "Transaction",
        },
      ],
    },
    {
      headerId: 2,
      headerBodyName: "Charts",
      headerContentProps: [
        {
          Icon: FaChartBar,
          url: "/admin/chart/bar",
          text: "Bar",
        },
        {
          Icon: FaChartPie,
          url: "/admin/chart/pie",
          text: "Pie",
        },
        {
          Icon: FaChartLine,
          url: "/admin/chart/line",
          text: "Line",
        },
      ],
    },
    {
      headerId: 3,
      headerBodyName: "Apps",
      headerContentProps: [
        {
          Icon: FaStopwatch,
          url: "/admin/app/stopwatch",
          text: "Stopwatch",
        },
        {
          Icon: BiSolidCoupon,
          url: "/admin/app/coupon",
          text: "Coupon",
        },
        {
          Icon: BiCoin,
          url: "/admin/app/toss",
          text: "Toss",
        },
      ],
    },
  ];
  return (
    <aside>
      <h2>
        <BiLandscape />
      </h2>
      {sideBarContent?.map((item) => (
        <div key={item?.headerId}>
          <h5>{item?.headerBodyName}</h5>
          {item?.headerContentProps?.map(({ Icon, text, url }) => (
            <ul key={text}>
              <Li url={url} Icon={Icon} text={text} />
            </ul>
          ))}
        </div>
      ))}
    </aside>
  );
};

export default AdminSideBar;
