// React
import axios from "axios";
import React, { useEffect, useState } from "react";

// State Management (Recoil JS)
import { useRecoilState } from "recoil";
import employeeApiDataAtom from "../../recoil/employeeDashboard/employeeApiDataAtom";

const EmployeeClockInOut = () => {
  // Global variables
  const [employeeApiData, setEmployeeApiData] =
    useRecoilState(employeeApiDataAtom);

  //   local variables
  const [clockInTime, setClockInTime] = useState();
  const [clockOutTime, setClockOutTime] = useState();

  useEffect(() => {
    setClockInTime(employeeApiData?.clockInOut?.clock_in);
    setClockOutTime(employeeApiData?.clockInOut?.clock_out);
  }, [employeeApiData]);

  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const d = new Date();

  const clockInOutHandler = async () => {
    const clockInOut = await axios({
      method: "post",
      url: process.env.REACT_APP_BASE_LINK + "/clockInOut",
      data: {
        emp_id: localStorage.getItem("emp_id"),
        r_type: "P",
        t_type: clockInTime ? "CO" : "CI",
      },
    });

    setEmployeeApiData({
      ...employeeApiData,
      clockInOut: clockInOut?.data,
    });
  };
  return (
    <div className="p-5  rounded-lg bg-white">
      <h1 className=" text-xl ">
        <span>{month[d.getMonth()]}</span>
        <span className="ml-1">{d.getDate()}</span>
      </h1>

      <div className=" mt-5 w-full   mb-2">
        <div className="flex justify-between items-end gap-2 w-full">
          <div className="min-h-[50px] ">
            <h3 className="mb-1 text-xs text-center  w-full">Clocked in</h3>
            <h1 className="text-center font-semibold ">
              {clockInTime ? clockInTime : "-- : --"}
            </h1>
          </div>

          <div className=" min-h-[50px] ">
            <h3 className="mb-1 text-xs text-center  w-full">Clocked out</h3>
            <h1 className="text-center font-semibold ">
              {clockOutTime ? clockOutTime : " -- : --"}
            </h1>
          </div>
        </div>
      </div>

      <div>
        <button
          className={` ${
            clockOutTime
              ? "bg-gray-500 cursor-not-allowed"
              : "bg-[#5f66e1] active:scale-95"
          } w-full p-3  rounded-lg text-white transition `}
          onClick={clockInOutHandler}
        >
          {clockInTime ? "Clock Out" : "Clock In"}
        </button>
      </div>
    </div>
  );
};

export default EmployeeClockInOut;
