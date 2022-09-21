// react
import React, { useEffect } from "react";
import { useState } from "react";

// Routing
import { useNavigate } from "react-router-dom";
// Media Assets
import PowerSettingsNewRoundedIcon from "@mui/icons-material/PowerSettingsNewRounded";
import userInfoAtom from "../../recoil/auth/userInfoAtom";
import { useRecoilState } from "recoil";

const EmployeeHeader = (props) => {
  // Global variables
  const [userInfo, setUserInfo] = useRecoilState(userInfoAtom);

  // Local variables
  const [currentTime, setCurrentTime] = useState();
  const navigate = useNavigate();

  // timer
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleString());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <div className=" flex justify-between items-center ">
        <div>
          <h1
            className={` text-2xl font-semibold relative  ${
              props?.apiData?.name
                ? ""
                : "h-[35px] w-[200px] overflow-hidden rounded-md bg-[#ffffff] mb-2"
            }`}
          >
            {props?.apiData?.name && (
              <>
                <span>Hello</span>
                <span className="text-[#5f66e1]">
                  {" "}
                  {props?.apiData?.name?.split(" ")?.[0]}
                </span>
              </>
            )}

            {/* Skeleton */}
            <div
              className={`absolute left-0 top-0 bottom-0 bg-gradient-to-r from-[#ffffff] via-[#f5f5f586] to-[#ffffff]    w-[40px] skeleton-animation  ${
                props?.apiData?.name ? "hidden" : "block"
              }`}
            ></div>
          </h1>
          <h3
            className={`text-base text-gray-500 ${
              props?.apiData?.role
                ? ""
                : "h-[25px] w-[200px] relative overflow-hidden rounded-md bg-[#ffffff]"
            } `}
          >
            <span> {props?.apiData?.role} </span>
            {/* Skeleton */}
            <div
              className={`absolute left-0 top-0 bottom-0 bg-gradient-to-r from-[#ffffff] via-[#f5f5f586] to-[#ffffff]    w-[40px] skeleton-animation  ${
                props?.apiData?.role ? "hidden" : "block"
              }`}
            ></div>
          </h3>
        </div>

        <div>
          {currentTime?.split(",")?.[1]?.includes("2:06:00 PM")
            ? "got it"
            : currentTime?.split(",")?.[1]}
        </div>

        <div>
          {/* <h1>emp: {userInfo?.emp_id}</h1>
          <h1>token: {userInfo?.token}</h1>
          <h1>userType: {userInfo?.user_type}</h1> */}
          <button onClick={() => console.log(userInfo)}>click me</button>
        </div>
        <button
          onClick={() => {
            localStorage.clear();
            setUserInfo({});
            navigate("/login");
          }}
        >
          <PowerSettingsNewRoundedIcon
            className="text-[#5f66e1] rotate-90"
            fontSize="large"
          />
        </button>
      </div>
    </div>
  );
};

export default EmployeeHeader;
