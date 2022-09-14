// react
import React from "react";
import EmployeeEvents from "../../components/employee/EmployeeEvents";
import Employee_calendar from "../../components/employee/Employee_calendar";

// Component
import Employee_ClockInOut from "../../components/employee/Employee_ClockInOut";
import Employee_header from "../../components/employee/Employee_header";
import Employee_leave_history from "../../components/employee/Employee_leave_history";
import Employee_stats from "../../components/employee/Employee_stats.jsx";
import Employee_task_log from "../../components/employee/Employee_task_log";

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
      <Employee_header />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 my-10">
        <Employee_stats statsData={stats_data[0]} />
        <Employee_stats statsData={stats_data[1]} />
        <Employee_stats statsData={stats_data[2]} />
        <Employee_ClockInOut />
      </div>
      <div className="flex flex-col 2xl:flex-row gap-10 2xl:gap-5 justify-between mb-10">
        <Employee_task_log />

        <div className="w-full flex flex-col md:flex-row gap-10 2xl:gap-5 ">
          <Employee_leave_history />

          {/* calendar */}
          <div className=" w-full rounded-lg flex flex-col gap-10 2xl:gap-5">
            <Employee_calendar />
            <EmployeeEvents />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDashboardPage;
