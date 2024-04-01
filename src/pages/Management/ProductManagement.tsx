import AdminSideBar from "../../components/AdminSideBar";

const ProductManagement = () => {
  return (
    <div className="adminContainer">
      {/* SideBar */}
      <AdminSideBar />
      {/* MainContent */}
      <main className="newProduct">Product Management</main>
    </div>
  );
};

export default ProductManagement;
