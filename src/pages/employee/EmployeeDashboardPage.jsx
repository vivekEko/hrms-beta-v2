// react
import React from "react";

// Component
import Employee_ClockInOut from "../../components/employee/Employee_ClockInOut";
import Employee_header from "../../components/employee/Employee_header";
import Employee_stats from "../../components/employee/Employee_stats.jsx";
import Employee_task_log from "../../components/employee/Employee_task_log";
// Icons
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";

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

  const leave_data = [
    {
      time_period: "Half Day Application",
      start_day: "Wed",
      start_date: 16,
      start_month: "Dec",
      end_day: "",
      end_month: "",
      end_date: "",
      type: "Casual",
      type_color: "#ffb90e",
      status: "Awaiting",
      status_color: "#d2a73b",
      status_bg_color: "#ffefc5",
    },
    {
      time_period: "Full Day Application",
      start_day: "Mon",
      start_date: 28,
      start_month: "Nov",
      end_day: "",
      end_month: "",
      end_date: "",
      type: "Sick",
      type_color: "#8b92f8",
      status: "Approved",
      status_color: "#4ea664",
      status_bg_color: "#b4f5d0",
    },
    {
      time_period: "3 Days Application",
      start_day: "Mon",
      start_date: 28,
      start_month: "Nov",
      end_day: "Fri",
      end_month: "25",
      end_date: "Nov",
      type: "Casual",
      type_color: "#ffb90e",
      status: "Declined",
      status_color: "#ff7d7d",
      status_bg_color: "#fff0ef",
    },
    {
      time_period: "Half Day Application",
      start_day: "Wed",
      start_date: 16,
      start_month: "Dec",
      end_day: "",
      end_month: "",
      end_date: "",
      type: "Casual",
      type_color: "#ffb90e",
      status: "Awaiting",
      status_color: "#d2a73b",
      status_bg_color: "#ffefc5",
    },
    {
      time_period: "Full Day Application",
      start_day: "Mon",
      start_date: 28,
      start_month: "Nov",
      end_day: "",
      end_month: "",
      end_date: "",
      type: "Sick",
      type_color: "#8b92f8",
      status: "Approved",
      status_color: "#4ea664",
      status_bg_color: "#b4f5d0",
    },
    {
      time_period: "3 Days Application",
      start_day: "Mon",
      start_date: 28,
      start_month: "Nov",
      end_day: "Fri",
      end_month: "25",
      end_date: "Nov",
      type: "Casual",
      type_color: "#ffb90e",
      status: "Declined",
      status_color: "#ff7d7d",
      status_bg_color: "#fff0ef",
    },
    {
      time_period: "Half Day Application",
      start_day: "Wed",
      start_date: 16,
      start_month: "Dec",
      end_day: "",
      end_month: "",
      end_date: "",
      type: "Casual",
      type_color: "#ffb90e",
      status: "Awaiting",
      status_color: "#d2a73b",
      status_bg_color: "#ffefc5",
    },
    {
      time_period: "Full Day Application",
      start_day: "Mon",
      start_date: 28,
      start_month: "Nov",
      end_day: "",
      end_month: "",
      end_date: "",
      type: "Sick",
      type_color: "#8b92f8",
      status: "Approved",
      status_color: "#4ea664",
      status_bg_color: "#b4f5d0",
    },
    {
      time_period: "3 Days Application",
      start_day: "Mon",
      start_date: 28,
      start_month: "Nov",
      end_day: "Fri",
      end_month: "25",
      end_date: "Nov",
      type: "Casual",
      type_color: "#ffb90e",
      status: "Declined",
      status_color: "#ff7d7d",
      status_bg_color: "#fff0ef",
    },
  ];

  return (
    <div className="w-[90%] sm:w-[85%] mx-auto py-5">
      <Employee_header />
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
        <Employee_stats statsData={stats_data[0]} />
        <Employee_stats statsData={stats_data[1]} />
        <Employee_stats statsData={stats_data[2]} />
        <Employee_ClockInOut />
      </div>
      <div className="flex gap-5 justify-between mt-5">
        <Employee_task_log />

        <div className="w-full flex gap-5">
          <div className="border w-full rounded-lg p-5 pt-0 relative overflow-y-scroll max-h-[600px]">
            <div className=" text-xl pt-5 bg-white sticky top-0 flex justify-between items-center">
              <h1>Leaves</h1>
              <button className="w-[40px] flex justify-center items-center aspect-square rounded-lg bg-[#5f66e1]">
                <AddRoundedIcon className="text-white" />
              </button>
            </div>

            <div className="mt-5">
              {leave_data?.map((data, index) => {
                return (
                  <div key={index} className="mb-5  pb-5 border-b">
                    <div className="flex justify-between items-center">
                      <h3 className="text-gray-500 text-xs">
                        {data?.time_period}
                      </h3>

                      <h2
                        className="text-sm p-[2px] rounded-lg  text-center w-[90px]"
                        style={{
                          color: data?.status_color,
                          backgroundColor: data?.status_bg_color,
                        }}
                      >
                        {data?.status}
                      </h2>
                    </div>
                    <div>
                      <h1 className="text-xl font-semibold">
                        <span>{data?.start_day}</span>
                        <span className="mx-1">{data?.start_date}</span>
                        <span>{data?.start_month}</span>

                        {data?.end_day && (
                          <span>
                            <span className="mx-1">-</span>
                            <span>{data?.end_day}</span>
                            <span className="mx-1">{data?.end_date}</span>
                            <span>{data?.end_month}</span>
                          </span>
                        )}
                      </h1>
                    </div>
                    <div className="flex justify-between items-center">
                      <h3
                        className="text-sm"
                        style={{ color: data?.type_color }}
                      >
                        {data?.type}
                      </h3>
                      <button>
                        <KeyboardArrowRightRoundedIcon
                          fontSize="large"
                          className="text-gray-500 p-1 rounded-lg bg-gray-100"
                        />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* calendar */}
          <div className="border w-full rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDashboardPage;
