import { Suspense, lazy } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Loader from "./components/Loader";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const Products = lazy(() => import("./pages/Products"));
const Transaction = lazy(() => import("./pages/Transaction"));
const Customer = lazy(() => import("./pages/Customer"));
const NewProduct = lazy(() => import("./pages/Management/NewProduct"));
const ProductManagement = lazy(
  () => import("./pages/Management/ProductManagement")
);
const TransactionManagement = lazy(
  () => import("./pages/Management/TransactionManagement")
);

const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/Product" element={<Products />} />
          <Route path="/admin/Transaction" element={<Transaction />} />
          <Route path="/admin/Customer" element={<Customer />} />

          {/* Charts */}

          {/* Apps */}
          <Route path="/admin/product/new" element={<NewProduct />} />
          <Route path="/admin/product/:id" element={<ProductManagement />} />
          <Route
            path="/admin/transaction/:id"
            element={<TransactionManagement />}
          />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
