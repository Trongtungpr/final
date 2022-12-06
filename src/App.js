import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import { ROUTERS } from "./const";
import HomePage from "./frontend/page/home/HomePage";
import { LoginPage } from "../src/frontend/page/account/auth/login/LoginPage.jsx";
import RegisterPage from "../src/frontend/page/account/auth/register/RegisterPage.jsx";
import { ProtectedRoute } from "./router/ProtectedRoute";
import ProductList from "./components/productlist/ProductList";
import ViewDetail from "./frontend/viewdetial/Viewdetail";
import DashBoard from "./frontend/page/dashboard/DashBoard";
import CartPage from "./frontend/page/cart/CartPage";

// This is a components
const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* Customer Router */}
          <Route path={"/cart"} element={<CartPage />} />
          <Route path={ROUTERS.home} element={<HomePage />} />
          <Route
            path={ROUTERS.product}
            element={<HomePage content={<ProductList />} />}
          />
          <Route
            path={ROUTERS.detail + "/:productid"}
            element={<ViewDetail />}
          />
          <Route path={ROUTERS.login} element={<LoginPage />} />
          <Route path={ROUTERS.register} element={<RegisterPage />} />
          Protected Router
          <Route
            path={ROUTERS.cart}
            element={
              <HomePage
                content={<ProtectedRoute>{/* <CartPage /> */}</ProtectedRoute>}
              />
            }
          />
          <Route
            path={ROUTERS.dashboard}
            element={
              <ProtectedRoute>
                <DashBoard />
              </ProtectedRoute>
            }
          />
          {/* Staff Router */}
          {/* <Route
            path={"/staff/product"}
            element={
              <HomeLayout
                content={
                  <ProtectedRoute>
                    <CartPage />
                  </ProtectedRoute>
                }
              />
            }
          /> */}
          {/* <Route
            path={"/staff/order"}
            element={
              <HomeLayout
                content={
                  <ProtectedRoute>
                    <CartPage />
                  </ProtectedRoute>
                }
              />
            }
          /> */}
          {/* Admin */}
          {/* <Route
            path={"/admin/dashboard"}
            element={
              <ProtectedRoute>
                <DashboardPage />
              </ProtectedRoute>
            }
          /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
