// react
import React, { useEffect, useRef, useState } from "react";
// State Management (Recoil JS)
import { useRecoilState } from "recoil";
import userAtom from "../../recoil/auth/userAtom";
import userLoginResponseAtom from "../../recoil/auth/userLoginResponseAtom";

// Assets
import logo from "../../assets/logo/eko_logo.svg";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import VisibilityOffRoundedIcon from "@mui/icons-material/VisibilityOffRounded";

// NPM packages
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  // Global variables
  const [userCredentials, setUserCredentials] = useRecoilState(userAtom);

  // Local variables
  const [showPassword, setShowPassword] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  //   Login functionality
  useEffect(() => {
    if (
      emailRef?.current?.value?.length > 0 &&
      passwordRef?.current?.value?.length > 0
    ) {
      axios({
        method: "post",
        url: process.env.REACT_APP_BASE_LINK + "/login",
        data: userCredentials,
      })
        .then(function (response) {
          localStorage.setItem("status", response?.data?.status);
          localStorage.setItem("user_type", response?.data?.user_type);
          localStorage.setItem("token", response?.data?.token);
          localStorage.setItem("emp_id", response?.data?.emp_id);
          navigate("/");
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }, [userCredentials]);

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-tr from-[#e5e5f8] to-[#b8bcff]">
      <div className="shadow-2xl bg-white p-5 rounded-xl w-[80%] min-w-[280px] max-w-[350px]">
        <div>
          <img src={logo} alt="eko infomatics" className="mx-auto w-[100px]" />
          {/* {process.env.REACT_APP_BASE_LINK} */}
        </div>
        <form
          onSubmit={(e) => {
            // Preventing default refresh
            e.preventDefault();
            // Storing user credentials
            setUserCredentials({
              username: emailRef.current.value,
              password: passwordRef.current.value,
            });
            // Clearling input fileds after form submission
            // e.target.reset();
          }}
          className="mt-10"
        >
          <div className="mb-5">
            <input
              ref={emailRef}
              type="email"
              name="email"
              className="border p-3 block rounded-lg w-full text-sm outline-1 outline-[#5f66e1] transition"
              placeholder="Email"
            />
            <p className="text-xs text-red-500 py-2 font-medium hidden">
              Something went wrong! please try again.
            </p>
          </div>
          <div className="mb-5 relative ">
            <input
              ref={passwordRef}
              type={showPassword ? "text" : "password"}
              name="password"
              //   value={userCredentials?.password}
              className="border p-3 block rounded-lg w-full text-sm outline-1 outline-[#5f66e1] transition"
              placeholder="Password"
            />
            <p className="text-xs text-red-500 py-2 font-medium hidden">
              Something went wrong! please try again.
            </p>

            <div
              className=" absolute right-0 top-0 bottom-0 rounded-r-lg p-2 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <VisibilityRoundedIcon
                  fontSize="small"
                  className="text-[#5f66e1]"
                />
              ) : (
                <VisibilityOffRoundedIcon
                  fontSize="small"
                  className="text-[#b8bcff]"
                />
              )}
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="rounded-lg bg-gradient-to-tr from-[#5f66e1] to-[#b8bcff] text-white w-full p-3 font-medium active:scale-95 transition mb-1"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
