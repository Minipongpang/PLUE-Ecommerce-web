import React, { useState, useEffect } from "react";
import Input from "../components/Input";
import useAuthContext from "../hooks/useAuthContext";
import { toast } from "react-toastify";
import authApi from "../apis/auth";
import logo from "../../images/header/PLUE_Header.png";
import lrCover from "../../images/SignUp/lr_Cover.png";
import { useNavigate } from "react-router-dom";

const initialInput = {
  email: "",
  password: "",
  firstName: "",
  lastName: "",
  phoneNumber: "",
  address: "",
};

const EditProfile = () => {
  const { authUser, isAuthUserLoading } = useAuthContext();
  const [userInput, setUserInput] = useState(initialInput);
  const navigate = useNavigate();

  useEffect(() => {
    if (authUser) {
      setUserInput({
        email: authUser.email,
        password: "",
        firstName: authUser.firstName,
        lastName: authUser.lastName,
        phoneNumber: authUser.phoneNumber,
        address: authUser.address,
      });
    }
  }, [authUser]);

  const handleChangeSetUserInput = (e) => {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
  };

  const handleClickSubmitForm = async (e) => {
    e.preventDefault();
    try {
      await authApi.updateProfile(userInput);
      toast.success("Profile updated successfully");
      navigate(-1);
    } catch (err) {
      toast.error("Failed to update profile");
      console.error(err);
    }
  };

  if (isAuthUserLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-screen h-screen bg-gray-600 flex items-center justify-center">
      <div className="mx-auto mt-14 bg-white w-[1200px] shadow-2xl flex justify-between">
        <div className="w-[600px] flex items-center justify-center">
          <div className="flex flex-col items-center">
            <img src={logo} alt="" className="w-[125px]" />
            <p className="text-[12px] font-light my-7">Edit Your Profile</p>
            <form
              action=""
              className="flex flex-col items-center justify-center"
              onSubmit={handleClickSubmitForm}
            >
              <Input
                htmlFor="email"
                id="email"
                type="email"
                name="email"
                inputName="Email"
                value={userInput.email}
                onChange={handleChangeSetUserInput}
                disabled
                className="flex flex-col mb-4 bg-[#7c7c7c] rounded-lg w-[350px] h-[32px] px-2 text-gray-500 cursor-not-allowed"
              />
              <Input
                htmlFor="password"
                id="password"
                type="password"
                name="password"
                inputName="Password"
                value={userInput.password}
                onChange={handleChangeSetUserInput}
                disabled
                className="flex flex-col  mb-4 bg-[#7c7c7c] rounded-lg w-[350px] h-[32px] px-2 text-gray-500 cursor-not-allowed"
              />
              <div className="flex mt-2">
                <Input
                  divClassName="flex flex-col"
                  htmlFor="firstName"
                  id="firstName"
                  type="text"
                  name="firstName"
                  inputName="First Name"
                  value={userInput.firstName}
                  onChange={handleChangeSetUserInput}
                  className="mb-4 bg-[#F3F4F6] rounded-lg w-[170px] h-[32px] px-2 text-gray-500"
                />
                <Input
                  divClassName="flex flex-col ml-2"
                  htmlFor="lastName"
                  id="lastName"
                  type="text"
                  name="lastName"
                  inputName="Last Name"
                  value={userInput.lastName}
                  onChange={handleChangeSetUserInput}
                  className="mb-4 bg-[#F3F4F6] rounded-lg w-[170px] h-[32px] px-2 text-gray-500"
                />
              </div>
              <Input
                htmlFor="phoneNumber"
                id="phoneNumber"
                type="text"
                name="phoneNumber"
                inputName="Phone Number"
                value={userInput.phoneNumber}
                onChange={handleChangeSetUserInput}
                className="flex flex-col mb-4 bg-[#F3F4F6] rounded-lg w-[350px] h-[32px] px-2 text-gray-500"
              />
              <Input
                htmlFor="address"
                id="address"
                type="text"
                name="address"
                inputName="Address"
                value={userInput.address}
                onChange={handleChangeSetUserInput}
                className="flex flex-col bg-[#F3F4F6] rounded-lg w-[350px] h-[120px] px-2 text-gray-500"
              />
              <button className="bg-[#1A4242] text-sm text-white font-light w-[350px] h-[40px] rounded-lg shadow-green-200 shadow-lg mt-4 hover:bg-[#CAFFDC] hover:text-black">
                Save Changes
              </button>
            </form>
          </div>
        </div>
        <div className="w-[600px]">
          <img src={lrCover} alt="" className="w-[600px]" />
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
