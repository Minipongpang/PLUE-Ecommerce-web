import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "../layout/Header";
import LoginForm from "../Pages/LoginForm";
import RegisterForm from "../Pages/RegisterForm";
import Homepage from "../Pages/Homepage";
import Shop from "../Pages/Shop";
import ShopCategory from "../Pages/ShopCategory";
import Product from "../Pages/Product";
import Cart from "../Pages/Cart";
import Footer from "../layout/Footer";

import menBanner from "../../images/shop/menBanner.png";
import womenBanner from "../../images/shop/womenBanner.png";
import kidsBanner from "../../images/shop/kidsBanner.png";
import CreatePost from "../Pages/CreatePost";
import EditProfile from "../Pages/EditProfile";
import OrderHistory from "../Pages/OrderHistory";
import AdminOrderHistory from "../Pages/AdminOrderHistory";
import MainContainer from "../layout/MainContainer";
import ProtectedRoute from "../features/authentication/component/ProtectedRoute";

const guestRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        {/* ทุกหน้ามี Header */}

        <MainContainer />
      </>
    ),
    children: [
      { index: true, element: <Homepage /> },
      { path: "/shops", element: <Shop /> },
      {
        path: "/mens",
        element: <ShopCategory banner={menBanner} category="MEN" />,
      },
      {
        path: "/womens",
        element: <ShopCategory banner={womenBanner} category="WOMEN" />,
      },
      {
        path: "/kids",
        element: <ShopCategory banner={kidsBanner} category="KIDS" />,
      },
      { path: "/product", element: <Product /> },
      { path: "product/:productId", element: <Product /> },
      {
        path: "/cart",
        element: (
          <>
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          </>
        ),
      },
      { path: "/createPost", element: <CreatePost /> },
      {
        path: "/orderHistory",
        element: (
          <>
            <ProtectedRoute>
              <OrderHistory />
            </ProtectedRoute>
          </>
        ),
      },
      {
        path: "/orderHistory/all",
        element: (
          <>
            <ProtectedRoute>
              <OrderHistory />
            </ProtectedRoute>
          </>
        ),
      },
      {
        path: "/allHistory",
        element: (
          <>
            <ProtectedRoute>
              <AdminOrderHistory />
            </ProtectedRoute>
          </>
        ),
      },

      // เส้นทางอื่นๆ ที่มี Header
    ],
  },
  {
    path: "/login",
    element: <LoginForm />,
  },
  {
    path: "/register",
    element: <RegisterForm />,
  },
  {
    path: "/editProfile",
    element: <EditProfile />,
  },
]);
export default function AppRouter() {
  return <RouterProvider router={guestRouter} />;
}
