import React, { useState } from "react";
import avatar from "../../images/avatar/blank.png";
import useAuthContext from "../hooks/useAuthContext";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Dropdown = ({ admin, firstName }) => {
  const [open, setOpen] = useState(false);
  const { logout } = useAuthContext();
  const navigate = useNavigate();

  const handleClickLogout = () => {
    logout();
    navigate("/login");
    toast.success("logout successfully");
  };

  const handleLinkClick = (path) => {
    navigate(path);
    setOpen(false); // ปิด dropdown
  };

  return (
    <div className=" mr-32 ml-2">
      <div
        role="button"
        className="w-[40px] "
        onClick={() => setOpen((prev) => !prev)}
      >
        <img src={avatar} alt="" className="rounded-full" />
      </div>

      {open && (
        <div className=" absolute right-32 translate-y-1.5 z-50">
          <div className="w-[240px] p-3 bg-white rounded-lg shadow-[0_0_6px_rgba(0,0,0,0.2)]">
            <div className="w-[100%] flex items-center gap-4 text-teal-90 ">
              <img src={avatar} alt="" className="rounded-full w-[30px]" />

              <p>{firstName}</p>
            </div>

            <hr className=" my-2  border-gray-300" />

            <div
              className="font-semibold cursor-pointer text-teal-900"
              onClick={() => handleLinkClick("/editProfile")}
            >
              My Profile / Edit
            </div>

            <hr className=" my-2  border-gray-300" />
            <Link
              to="/orderHistory"
              onClick={() => handleLinkClick("/orderHistory")}
            >
              <div className="font-semibold text-teal-900">
                My Order History
              </div>
            </Link>

            {admin && (
              <>
                <hr className=" my-2  border-gray-300" />

                <div
                  className="font-semibold text-red-900 cursor-pointer"
                  onClick={() => handleLinkClick("/createPost")}
                >
                  Create Product
                </div>

                <hr className=" my-2  border-gray-300" />

                <div
                  className="font-semibold text-red-900 cursor-pointer"
                  onClick={() => handleLinkClick("/allHistory")}
                >
                  All Order History
                </div>
              </>
            )}

            <hr className=" my-2  border-gray-300" />
            <div className="flex justify-center mt-10 mb-2">
              <button
                className=" w-[90%] h-[36px] bg-[#1A4242] text-white rounded-lg shadow-lg shadow-green-200 hover:bg-[#CAFFDC] hover:text-black"
                onClick={handleClickLogout}
              >
                LOGOUT
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
