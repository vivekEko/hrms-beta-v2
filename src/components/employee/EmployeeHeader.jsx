// react
import React, { useEffect } from "react";
// Routing
import { useNavigate } from "react-router-dom";
// Media Assets
import PowerSettingsNewRoundedIcon from "@mui/icons-material/PowerSettingsNewRounded";

const EmployeeHeader = (props) => {
  // Local variables
  const navigate = useNavigate();
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

        <button
          onClick={() => {
            localStorage.clear();
            navigate("/");
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
