import { Link } from "react-router-dom";
import lrCover from "../../images/SignUp/lr_Cover.png";
import logo from "../../images/header/PLUE_Header.png";
import Input from "../components/Input";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import validateLogin from "../features/authentication/validators/validate-login";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import useAuthContext from "../hooks/useAuthContext";

const initialInput = {
  email: "",
  password: "",
};

const initialInputError = {
  email: "",
  password: "",
};

export default function LoginForm() {
  //สำหรับรับค่า input
  const [userInput, setUserInput] = useState(initialInput);
  const [userInputError, setUserInputError] = useState(initialInputError);
  const { login } = useAuthContext();
  const navigate = useNavigate();

  const handleChangeInput = (e) => {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
  };
  const handleClickSubmitForm = async (e) => {
    try {
      e.preventDefault();
      const error = validateLogin(userInput);
      if (error) {
        return setUserInputError(error);
      }
      setUserInputError({ initialInputError }); // Corrected this line

      await login(userInput);
      navigate("/");
      toast.success("Login Successfully");
    } catch (err) {
      if (err instanceof AxiosError) {
        const message =
          err.response.status === 400
            ? "invalid email or mobile or password"
            : "internal server error";
        return toast.error(message);
      }
    }
  };

  return (
    <div className=" w-screen h-screen bg-gray-600 ">
      <button></button>
      <div className=" mx-auto mt-14  bg-white w-[1200px] shadow-2xl flex justify-between ">
        {/* ฝั่งซ้้าย */}
        <div className=" w-[600px]  flex items-center justify-center">
          {/* logo */}
          <div className="flex flex-col items-center ">
            <img src={logo} alt="" className="w-[125px]" />
            <p className="text-[12px] font-light my-7"> Be our family, PLUE </p>

            {/* INPUT */}

            <form action="" onSubmit={handleClickSubmitForm}>
              <Input
                htmlFor="email"
                id="email"
                type="email"
                name="email"
                inputName="Email"
                value={userInput.email}
                onChange={handleChangeInput}
                error={userInputError.email}
              />
              <Input
                htmlFor="password"
                id="password"
                type="password"
                name="password"
                inputName="Password"
                value={userInput.password}
                onChange={handleChangeInput}
                error={userInputError.password}
              />

              <div className="w-[350px] h-[90px] bg-[#CAFFDC] p-4 rounded-lg text-[10px] text-gray-600 mt-2">
                &#9888; Please login before Shopping
              </div>
              <div className="flex flex-col mt-16 ">
                <button className="bg-[#1A4242] text-sm text-white font-light w-[350px] h-[40px] rounded-lg">
                  Sign In
                </button>
              </div>
            </form>
            <Link to="/register">
              <button className="w-[350px] h-[40px] mt-2 text-gray-500 font-light text-sm hover:bg-gray-200 rounded-lg ">
                Sign Up
              </button>
            </Link>
          </div>
        </div>
        <div className="w-[600px]">
          <img src={lrCover} alt="" className="w-[600px]" />
        </div>
      </div>
    </div>
  );
}
