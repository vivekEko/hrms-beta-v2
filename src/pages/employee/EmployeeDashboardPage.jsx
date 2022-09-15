// react
import React from "react";

// Components
import EmployeeClockInOut from "../../components/employee/EmployeeClockInOut";
import EmployeeHeader from "../../components/employee/EmployeeHeader";
import EmployeeLeaveHistory from "../../components/employee/EmployeeLeaveHistory";
import EmployeeStats from "../../components/employee/EmployeeStats.jsx";
import EmployeeTaskLog from "../../components/employee/EmployeeTaskLog";
import EmployeeEvents from "../../components/employee/EmployeeEvents";
import EmployeeCalendar from "../../components/employee/EmployeeCalendar";

const EmployeeDashboardPage = () => {
  const stats_data = [
    // Leaves

    {
      heading: "Leaves",
      total_value: 5,
      unit: "days",

      sub_data: [
        {
          sub_heading: "Sick",
          sub_value: 2,
          sub_out_of: 6,
          //   sub_unit: "days",
        },
        {
          sub_heading: "Casual",
          sub_value: 3,
          sub_out_of: 6,
          //   sub_unit: "days",
        },
      ],
    },

    // On desk

    {
      heading: " On desk",
      total_value: 45,
      unit: "days",

      sub_data: [
        {
          sub_heading: "WFO",
          sub_value: 41,
          sub_unit: "days",
        },
        {
          sub_heading: "WFH",
          sub_value: 4,
          sub_unit: "days",
        },
      ],
    },

    // OverTime
    {
      heading: " Overtime",
      total_value: 36,
      unit: "hrs",

      sub_data: [
        {
          sub_heading: "WFO",
          sub_value: 30,
          sub_unit: "hrs",
        },
        {
          sub_heading: "WFH",
          sub_value: 6,
          sub_unit: "hrs",
        },
      ],
    },
  ];

  return (
    <div className="w-[80%] sm:w-[85%] mx-auto py-5">
      <EmployeeHeader />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 my-10 xl:my-5">
        <EmployeeStats statsData={stats_data[0]} />
        <EmployeeStats statsData={stats_data[1]} />
        <EmployeeStats statsData={stats_data[2]} />
        <EmployeeClockInOut />
      </div>
      <div className="flex flex-col 2xl:flex-row gap-10 2xl:gap-5 justify-between mb-10">
        <EmployeeTaskLog />

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
