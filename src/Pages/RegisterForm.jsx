import { useState } from "react";
import lrCover from "../../images/SignUp/lr_Cover.png";
import logo from "../../images/header/PLUE_Header.png";
import Input from "../components/Input";
import validateRegisterError from "../features/authentication/validators/validate-register";
import authApi from "../apis/auth";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";

const initialInput = {
  email: "",
  password: "",
  firstName: "",
  lastName: "",
  phoneNumber: "",
  address: "",
};

const initialInputError = {
  email: "",
  password: "",
  firstName: "",
  lastName: "",
  phoneNumber: "",
  address: "",
};

export default function RegisterForm() {
  const [userInput, setUserInput] = useState(initialInput);
  const [userInputError, setUserInputError] = useState(initialInputError);
  const navigate = useNavigate();
  const handleChangeSetUserInput = (e) => {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
  };

  const handleClickSubmitForm = async (e) => {
    e.preventDefault();
    const error = validateRegisterError(userInput);

    if (error) {
      setUserInputError(error);
      return;
    }
    setUserInputError(initialInputError);
    try {
      await authApi.register(userInput);
      toast.success("Register successfulแล้วไอน้องงงง");
      navigate("/login");
    } catch (err) {
      console.log(err); // ตรวจสอบโครงสร้างของ error
      if (err instanceof AxiosError) {
        console.log(err.response?.data); // ตรวจสอบข้อมูลใน response data
        if (err.response?.data?.field === "email") {
          setUserInputError((prev) => ({
            ...prev,
            email: "Email already in use",
          }));
        }
      }
    }
  };

  return (
    <div className=" w-screen h-screen bg-gray-600 ">
      <button></button>
      <div className=" mx-auto mt-14  bg-white w-[1200px] shadow-2xl flex justify-between ">
        {/* ฝั่งซ้้าย */}
        <div className=" w-[500px]  flex items-center justify-center">
          {/* logo */}
          <div className="flex flex-col items-center ">
            <img src={logo} alt="" className="w-[125px]" />
            <p className="text-[12px] font-light my-7"> Be our family, PLUE </p>

            {/* INPUT */}

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
                error={userInputError.email}
              />

              <Input
                htmlFor="password"
                id="password"
                type="password"
                name="password"
                inputName="Password"
                value={userInput.password}
                onChange={handleChangeSetUserInput}
                error={userInputError.password}
              />

              <div className="flex  mt-2">
                <div className=" flex flex-col">
                  <Input
                    divClassName="flex flex-col"
                    htmlFor="firstName"
                    id="firstName"
                    type="firstName"
                    name="firstName"
                    inputName="First Name"
                    value={userInput.firstName}
                    onChange={handleChangeSetUserInput}
                    error={userInputError.firstName}
                    className=" mb-4 bg-[#F3F4F6] rounded-lg w-[170px] h-[32px] px-2 text-gray-500"
                  />
                </div>
                <Input
                  divClassName="flex flex-col ml-2"
                  htmlFor="lastName"
                  id="lastName"
                  type="lastName"
                  name="lastName"
                  inputName="Last Name"
                  value={userInput.lastName}
                  onChange={handleChangeSetUserInput}
                  error={userInputError.lastName}
                  className=" mb-4 bg-[#F3F4F6] rounded-lg w-[170px] h-[32px] px-2 text-gray-500"
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
                error={userInputError.phoneNumber}
              />

              <div className=" flex flex-col">
                {" "}
                <Input
                  divClassName="flex flex-col"
                  htmlFor="address"
                  id="address"
                  type="text"
                  name="address"
                  inputName="Address"
                  value={userInput.address}
                  onChange={handleChangeSetUserInput}
                  error={userInputError.address}
                  className="bg-[#F3F4F6] rounded-lg w-[350px] h-[120px] px-2 text-gray-500"
                />
              </div>
              <div className="flex mt-5">
                <button className="bg-[#1A4242] text-sm text-white font-light w-[350px] h-[40px] rounded-lg shadow-lg shadow-[#CAFFDC] ">
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="w-[600px]">
          <img src={lrCover} alt="" className="w-[600px]" />
        </div>
      </div>
    </div>
  );
}
