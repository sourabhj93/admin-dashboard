import { BsSearch } from "react-icons/bs";
import AdminSideBar from "../components/AdminSideBar";
import { FaRegBell } from "react-icons/fa";
import { HiTrendingDown, HiTrendingUp } from "react-icons/hi";
import { categoryItemDetails, widgetDetails } from "../helper/dashboardHelper";
import { BarChart, DoughnutChart } from "../components/Charts";
import { BiMaleFemale } from "react-icons/bi";
import DashboardTable from "../components/DashboardTable";

interface WidgetItemProps {
  heading: string;
  value: number;
  percent: number;
  color: string;
  amount?: boolean;
}

interface CategoryItemProps {
  color: string;
  value: number;
  heading: string;
}

const CategoryItem = ({ heading, value, color }: CategoryItemProps) => (
  <div className="categoryItem">
    <h5>{heading}</h5>
    <div>
      <div style={{ backgroundColor: color, width: `${value}%` }}></div>
    </div>
    <span>{value}%</span>
  </div>
);

const data = [
  {
    id: "1",
    quantity: 200,
    discount: 3,
    amount: 2300,
    status: "Pending",
  },
  {
    id: "2",
    quantity: 390,
    discount: 8,
    amount: 5300,
    status: "Pending",
  },
  {
    id: "3",
    quantity: 600,
    discount: 36,
    amount: 300,
    status: "Pending",
  },
  {
    id: "4",
    quantity: 0,
    discount: 13,
    amount: 200,
    status: "In Transit",
  },
];

const Dashboard = () => {
  const WidgetItem = ({
    heading,
    value,
    percent,
    color,
    amount = false,
  }: WidgetItemProps) => (
    <article className="widget">
      <div className="widgetInfo">
        <p>{heading}</p>
        <h4>{amount ? `$${value}` : value}</h4>
        {percent > 0 ? (
          <span className="green">
            <HiTrendingUp /> +{percent}%
          </span>
        ) : (
          <span className="red">
            <HiTrendingDown /> {percent}%
          </span>
        )}
      </div>
      <div
        className="widgetCircle"
        style={{
          background: `conic-gradient(${color} ${
            (Math.abs(percent) / 100) * 360
          }deg, rgb(255, 255, 255) 0)`,
        }}
      >
        <span style={{ color }}>{percent}%</span>
      </div>
    </article>
  );

  return (
    <div className="adminContainer">
      {/* SideBar */}
      <AdminSideBar />
      {/* MainContent */}
      <main className="dashboard">
        <div className="bar">
          <BsSearch />
          <input type="text" placeholder="Search for user data" />
          <FaRegBell />
          <img
            src="https://www.gstatic.com/webp/gallery3/1.sm.png"
            alt="user"
          />
        </div>
        <section className="widgetContainer">
          {widgetDetails?.map((item) => (
            <WidgetItem
              key={item?.heading}
              heading={item?.heading}
              value={item?.value}
              percent={item?.percent}
              color={item?.color}
              amount={item?.amount}
            />
          ))}
        </section>
        <section className="chartInventoryContainer">
          <div className="chartContainer" style={{ width: "100%" }}>
            <h2 className="chartContainerHeading">Revenue & Transaction</h2>
            <BarChart
              data1={[200, 400, 330, 444, 192, 401, 477]}
              data2={[420, 402, 250, 144, 102, 341, 267]}
              title1={"Revenue"}
              title2={"Transaction"}
              bgColor1={"lightblue"}
              bgColor2={"blue"}
            />
          </div>
          <div className="inventoryContainer">
            <h2 className="inventoryContainerHeading">Inventory</h2>
            {categoryItemDetails?.map((item) => (
              <CategoryItem
                key={item?.heading}
                color={item?.color}
                value={item?.value}
                heading={item?.heading}
              />
            ))}
          </div>
        </section>
        <section className="transactionContainer">
          <div className="genderChart">
            <h2>Gender Ratio</h2>
            {/* Chart */}
            <DoughnutChart
              labels={["Male", "Female"]}
              data={[12, 19]}
              backgroundColor={["cyan", "purple"]}
              cutout={90}
            />
            <p>
              <BiMaleFemale />
            </p>
          </div>
          {/* Table */}
          <DashboardTable data={data} />
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
