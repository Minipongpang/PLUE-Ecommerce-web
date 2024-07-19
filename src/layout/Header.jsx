import { Link } from "react-router-dom";
import logo from "../../images/header/PLUE_Header.png";
import shoppingCart from "../../images/logo/shopping-cart-logo.png";
import { useContext, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import Dropdown from "./Dropdown";
export default function Header({ userData }) {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartProducts } = useContext(ShopContext);

  const checkAccessToken = () => {
    return localStorage.getItem("ACCESS_TOKEN");
  };

  const checkForAdmin = () => {
    const token = checkAccessToken();
    if (!token) return false;

    try {
      const payload = JSON.parse(atob(token.split(".")[1]));
      return payload.isAdmin || false;
    } catch (err) {
      console.log(err);
      return false;
    }
  };

  const token = checkAccessToken();
  const admin = checkForAdmin();

  const firstName = token
    ? JSON.parse(atob(token.split(".")[1])).firstName
    : "";

  return (
    <div className=" bg-white h-[81px] shadow-lg flex justify-between items-center px-10">
      <div className=" flex gap-8 font-light text-sm ">
        <a
          onClick={() => {
            setMenu("shops");
          }}
        >
          <Link to="/shops">SHOP</Link>
        </a>
        <a
          onClick={() => {
            setMenu("mens");
          }}
        >
          <Link to="mens">MEN</Link>
        </a>

        <a
          onClick={() => {
            setMenu("womens");
          }}
        >
          <Link to="womens">WOMEN</Link>
        </a>

        <a
          onClick={() => {
            setMenu("kids");
          }}
        >
          <Link to="kids">KIDS</Link>
        </a>
      </div>
      <div>
        <Link to="/">
          <img src={logo} alt="" className=" w-[195px] pl-[70px]" />
        </Link>
      </div>
      <div className="flex justify-center items-center gap-8 font-light text-sm relative">
        <a href="" className="flex">
          <Link to="/cart">
            <img src={shoppingCart} alt="" className=" w-[20px] mt-3" />
            <div className=" absolute top-1 left-[18px] bg-green-200 text-[12px] w-[16px] h-[16px] flex justify-center items-center rounded-full">
              {getTotalCartProducts()}
            </div>
          </Link>
        </a>

        {token ? (
          <Dropdown admin={admin} firstName={firstName} />
        ) : (
          <>
            <Link to="/login">
              <a href="">Sign in</a>
            </Link>
            <Link to="/register">
              <button className=" w-[142px] h-[52px] bg-[#1A4242] text-white rounded-lg shadow-xl hover:bg-[#CAFFDC] hover:text-black">
                Sign up
              </button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
