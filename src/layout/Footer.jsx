import React from "react";
import logo from "../../images/footer/whiteLogo.png";
import fb from "../../images/footer/facebook.png";
import ig from "../../images/footer/instagram.png";
import wa from "../../images/footer/whatsapp.png";
import tw from "../../images/footer/twitter.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className=" bg-teal-950 ">
      <div className=" mx-40 h-[383px] flex justify-between items-center text-white font-thin">
        <div>
          <img src={logo} alt="" className=" w-[200px] ] fill-white" />
        </div>
        <div className=" flex gap-20">
          <div className=" flex flex-col ">
            <p className="mb-6">Shopping</p>

            <Link to="/cart">
              <small>Your cart</small>
            </Link>
            <Link to="/cart">
              <small>Your orders</small>
            </Link>
          </div>
          <div className=" flex flex-col ">
            <p className="mb-6">More links</p>
            <Link to="/login">
              <small>Sign in</small>
            </Link>
            <Link to="/register">
              <small>Sign up</small>
            </Link>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-5">
          <p>Social Media</p>
          <div className="flex gap-5 ">
            <img src={fb} alt="" className=" w-[22px]  fill-white" />
            <img src={ig} alt="" className=" w-[22px]  fill-white" />
            <img src={tw} alt="" className=" w-[22px]  fill-white" />
            <img src={wa} alt="" className=" w-[22px]  fill-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
