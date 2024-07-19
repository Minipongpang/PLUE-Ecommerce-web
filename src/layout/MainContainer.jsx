import { func } from "joi";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

export default function MainContainer() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
