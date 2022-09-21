// React
import React, { useEffect } from "react";

// State Management (Recoil JS)
import { useRecoilState } from "recoil";
import employeeApiDataAtom from "../../recoil/employeeDashboard/employeeApiDataAtom";

// Api call
import axios from "axios";

// Components
import EmployeeClockInOut from "../../components/employee/EmployeeClockInOut";
import EmployeeHeader from "../../components/employee/EmployeeHeader";
import EmployeeLeaveHistory from "../../components/employee/EmployeeLeaveHistory";
import EmployeeStats from "../../components/employee/EmployeeStats.jsx";
import EmployeeTaskLog from "../../components/employee/EmployeeTaskLog";
import EmployeeEvents from "../../components/employee/EmployeeEvents";
import EmployeeCalendar from "../../components/employee/EmployeeCalendar";

const EmployeeDashboardPage = () => {
  // Global variables
  const [employeeApiData, setEmployeeApiData] =
    useRecoilState(employeeApiDataAtom);

  useEffect(() => {
    async function apiCall() {
      const clockInOut = await axios({
        method: "post",
        url: process.env.REACT_APP_BASE_LINK + "/clockInOut",
        data: {
          emp_id: localStorage.getItem("emp_id"),
          r_type: "G",
          t_type: "",
        },
      });

      const UserDetailsResponse = await axios({
        method: "post",
        url: process.env.REACT_APP_BASE_LINK + "/userDetails",
        data: {
          emp_id: localStorage.getItem("emp_id"),
        },
      });

      const leaveStats = await axios({
        method: "post",
        url: process.env.REACT_APP_BASE_LINK + "/leaves",
        data: {
          emp_id: localStorage.getItem("emp_id"),
        },
      });

      const onDeskApiResponse = await axios({
        method: "post",
        url: process.env.REACT_APP_BASE_LINK + "/onDesk",
        data: {
          emp_id: localStorage.getItem("emp_id"),
        },
      });

      const overtimeResponse = await axios({
        method: "post",
        url: process.env.REACT_APP_BASE_LINK + "/overtime",
        data: {
          emp_id: localStorage.getItem("emp_id"),
        },
      });

      const taskLog = await axios({
        method: "post",
        url: process.env.REACT_APP_BASE_LINK + "/taskLog",
        data: {
          emp_id: localStorage.getItem("emp_id"),
        },
      });

      setEmployeeApiData({
        ...employeeApiData,
        userDetails: UserDetailsResponse?.data?.emp_details,
        leaveStats: leaveStats?.data?.leave_stats?.leave_data[0],
        onDeskStats: onDeskApiResponse?.data?.on_desk,
        overtimeStats: overtimeResponse?.data?.overtime,
        clockInOut: clockInOut?.data,
        taskLog: taskLog?.data?.task_log,
      });
    }

    apiCall();
  }, []);

  useEffect(() => {
    console.log("employeeApiData:");
    console.log(employeeApiData);
  }, [employeeApiData]);

  return (
    <div className="w-[80%] sm:w-[85%] mx-auto py-5  ">
      <EmployeeHeader apiData={employeeApiData?.userDetails} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 my-10 xl:my-5">
        <EmployeeStats apiData={employeeApiData?.leaveStats} />
        <EmployeeStats apiData={employeeApiData?.onDeskStats} />
        <EmployeeStats apiData={employeeApiData?.overtimeStats} />
        <EmployeeClockInOut />
      </div>
      <div className="flex flex-col 2xl:flex-row gap-10 2xl:gap-5 justify-between mb-10">
        <EmployeeTaskLog apiData={employeeApiData?.taskLog} />

        <div className="w-full flex flex-col md:flex-row gap-10 2xl:gap-5 ">
          <EmployeeLeaveHistory />

          {/* calendar */}
          <div className=" w-full rounded-lg flex flex-col gap-10 2xl:gap-5">
            <EmployeeCalendar />
            <EmployeeEvents />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDashboardPage;
