// react
import React from "react";

// Icons
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";

const Employee_leave_history = () => {
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
    <div className="border w-full rounded-lg p-5 pt-0 relative overflow-y-scroll max-h-[600px] ">
      <div className=" text-xl pt-5 pb-2 bg-white sticky top-0 flex justify-between items-center">
        <h1>Leaves</h1>
        <button className="w-[40px] flex justify-center items-center aspect-square rounded-lg bg-[#5f66e1]">
          <AddRoundedIcon className="text-white" />
        </button>
      </div>

      <div className="mt-5 ">
        {leave_data?.map((data, index) => {
          return (
            <div key={index} className="mb-5  pb-5 border-b">
              <div className="flex justify-between items-center">
                <h3 className="text-gray-500 text-xs">{data?.time_period}</h3>

                <h2
                  className="text-xs sm:text-sm p-[2px] rounded-lg  text-center w-[70px] sm:w-[90px]"
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
                <h3 className="text-sm" style={{ color: data?.type_color }}>
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
  );
};

export default Employee_leave_history;
