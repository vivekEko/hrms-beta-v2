// react
import React from "react";

// Icons
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import BorderColorRoundedIcon from "@mui/icons-material/BorderColorRounded";

// helper functions
import rgbaToHex from "../../utils/taskLog/rgbaToHex";

const EmployeeTaskLog = (props) => {
  const DailyTask = [
    {
      date: "01 Sept 2022",
      projects: [
        { project: "Everside", color: "#00ac69", bgColor: "#00ac6a10" },
        { project: "EKO", color: "#445eed", bgColor: "#445ded11" },
        {
          project: "Vannamamalai",
          color: "#eda144",
          bgColor: "#eda14410",
        },
      ],
      task_list: [
        {
          project: "Everside",
          color: "#00ac69",
          bgColor: "#00ac6a10",
          task: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam, quaerat?",
        },
        {
          project: "Everside",
          color: "#00ac69",
          bgColor: "#00ac6a10",
          task: "Lorem ipsum dolor sit amet, consectetur ",
        },

        {
          project: "EKO",
          color: "#445eed",
          bgColor: "#445ded11",

          task: "Lorem ipsum dolor sit amet, Ut aliquam molestias quos beatae natus, illum modi temporibus.",
        },

        {
          project: "Vannamamalai",
          color: "#eda144",
          bgColor: "#eda14410",

          task: "Ut aliquam molestias quos beatae natus, illum modi temporibus.",
        },
      ],
      remarks: "Completed",
    },

    {
      date: "02 Sept 2022",
      projects: [
        { project: "Everside", color: "#00ac69", bgColor: "#00ac6a10" },
        { project: "EKO", color: "#445eed", bgColor: "#445ded11" },
        {
          project: "Vannamamalai",
          color: "#eda144",
          bgColor: "#eda14410",
        },
      ],
      task_list: [
        {
          project: "Everside",
          color: "#00ac69",
          bgColor: "#00ac6a10",
          color: "green",
          task: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam, quaerat?",
        },
        {
          project: "Everside",
          color: "#00ac69",
          bgColor: "#00ac6a10",
          color: "green",
          task: "Lorem ipsum dolor sit amet, consectetur ",
        },

        {
          project: "EKO",
          color: "#445eed",
          bgColor: "#445ded11",

          task: "Lorem ipsum dolor sit amet, Ut aliquam molestias quos beatae natus, illum modi temporibus.",
        },

        {
          project: "Vannamamalai",
          color: "#eda144",
          bgColor: "#eda14410",

          task: "Ut aliquam molestias quos beatae natus, illum modi temporibus.",
        },
      ],
      remarks: "Completed",
    },

    {
      date: "03 Sept 2022",
      projects: [
        { project: "Everside", color: "#00ac69", bgColor: "#00ac6a10" },
        { project: "EKO", color: "#445eed", bgColor: "#445ded11" },
        {
          project: "Vannamamalai",
          color: "#eda144",
          bgColor: "#eda14410",
        },
      ],
      task_list: [
        {
          project: "Everside",
          color: "#00ac69",
          bgColor: "#00ac6a10",
          task: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam, quaerat?",
        },
        {
          project: "Everside",
          color: "#00ac69",
          bgColor: "#00ac6a10",
          task: "Lorem ipsum dolor sit amet, consectetur ",
        },

        {
          project: "EKO",
          color: "#445eed",
          bgColor: "#445ded11",
          task: "Lorem ipsum dolor sit amet, Ut aliquam molestias quos beatae natus, illum modi temporibus.",
        },

        {
          project: "Vannamamalai",
          color: "#eda144",
          bgColor: "#eda14410",

          task: "Ut aliquam molestias quos beatae natus, illum modi temporibus.",
        },
      ],
      remarks: "Completed",
    },

    {
      date: "04 Sept 2022",
      projects: [
        { project: "Everside", color: "#00ac69", bgColor: "#00ac6a10" },
        { project: "EKO", color: "#445eed", bgColor: "#445ded11" },
        {
          project: "Vannamamalai",
          color: "#eda144",
          bgColor: "#eda14410",
        },
      ],
      task_list: [
        {
          project: "Everside",
          color: "#00ac69",
          bgColor: "#00ac6a10",
          task: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam, quaerat?",
        },
        {
          project: "Everside",
          color: "#00ac69",
          bgColor: "#00ac6a10",
          task: "Lorem ipsum dolor sit amet, consectetur ",
        },

        {
          project: "EKO",
          color: "#445eed",
          bgColor: "#445ded11",

          task: "Lorem ipsum dolor sit amet, Ut aliquam molestias quos beatae natus, illum modi temporibus.",
        },

        {
          project: "Vannamamalai",
          color: "#eda144",
          bgColor: "#eda14410",

          task: "Ut aliquam molestias quos beatae natus, illum modi temporibus.",
        },
      ],
      remarks: "Completed",
    },

    {
      date: "05 Sept 2022",
      projects: [
        { project: "Everside", color: "#00ac69", bgColor: "#00ac6a10" },
        { project: "EKO", color: "#445eed", bgColor: "#445ded11" },
        {
          project: "Vannamamalai",
          color: "#eda144",
          bgColor: "#eda14410",
        },
      ],
      task_list: [
        {
          project: "Everside",
          color: "#00ac69",
          bgColor: "#00ac6a10",
          task: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam, quaerat?",
        },
        {
          project: "Everside",
          color: "#00ac69",
          bgColor: "#00ac6a10",
          task: "Lorem ipsum dolor sit amet, consectetur ",
        },

        {
          project: "EKO",
          color: "#445eed",
          bgColor: "#445ded11",
          task: "Lorem ipsum dolor sit amet, Ut aliquam molestias quos beatae natus, illum modi temporibus.",
        },

        {
          project: "Vannamamalai",
          color: "#eda144",
          bgColor: "#eda14410",

          task: "Ut aliquam molestias quos beatae natus, illum modi temporibus.",
        },
      ],
      remarks: "Completed",
    },
    {
      date: "06 Sept 2022",
      projects: [],
      task_list: [],
      remarks: "Electricity Issue",
    },

    {
      date: "07 Sept 2022",
      projects: [
        { project: "Everside", color: "#00ac69", bgColor: "#00ac6a10" },
        { project: "EKO", color: "#445eed", bgColor: "#445ded11" },
        {
          project: "Vannamamalai",
          color: "#eda144",
          bgColor: "#eda14410",
        },
      ],
      task_list: [
        {
          project: "Everside",
          color: "#00ac69",
          bgColor: "#00ac6a10",
          task: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam, quaerat?",
        },
        {
          project: "Everside",
          color: "#00ac69",
          bgColor: "#00ac6a10",
          task: "Lorem ipsum dolor sit amet, consectetur ",
        },

        {
          project: "EKO",
          color: "#445eed",
          bgColor: "#445ded11",
          task: "Lorem ipsum dolor sit amet, Ut aliquam molestias quos beatae natus, illum modi temporibus.",
        },

        {
          project: "Vannamamalai",
          color: "#eda144",
          bgColor: "#eda14410",

          task: "Ut aliquam molestias quos beatae natus, illum modi temporibus.",
        },
      ],
      remarks: "Completed",
    },
  ];

  return (
    <div className="p-5 pt-0  rounded-lg    overflow-x-scroll w-full 2xl:w-[98%] relative bg-white">
      <div className="sticky top-0 z-50 ">
        <div className="pt-5 bg-white flex justify-between items-center">
          <h1 className=" text-xl ">Task Log</h1>
          <div className="flex gap-2">
            <button>
              <SearchRoundedIcon fontSize="large" className="text-[#5f66e1] " />
            </button>
            <button>
              <BorderColorRoundedIcon
                fontSize="medium"
                className="text-[#5f66e1]"
              />
            </button>
          </div>
        </div>
      </div>

      <div className="max-h-[500px] overflow-y-scroll relative">
        <div className="grid grid-cols-[120px_1fr_200px_100px] min-w-[600px] text-sm text-gray-500  bg-white py-5  sticky top-0  z-50">
          <div>Date</div>
          <div>Task</div>
          <div>Project</div>
          <div>Remarks</div>
        </div>
        {props?.apiData?.map((data, index) => {
          return (
            <div
              key={index}
              className="grid grid-cols-[120px_1fr_200px_100px] min-w-[600px] py-5 border-b text-sm"
            >
              <div className="">{data?.date}</div>
              <div className="">
                {data?.tasks?.split("|")?.map((tasks, taskIndex) => {
                  return (
                    <div
                      key={taskIndex}
                      className="flex gap-2 justify-start items-start mb-5"
                    >
                      <div className="w-[10px] flex justify-center items-start translate-y-1">
                        <div
                          style={{
                            // backgroundColor: projectName?.bgColor,
                            backgroundColor: data?.color?.split("|")[taskIndex],
                          }}
                          className="w-[8px] h-[8px] rounded-full"
                        ></div>
                      </div>

                      <h3 className="">{tasks}</h3>
                    </div>
                  );
                })}
              </div>
              <div className="  ">
                {data?.projects
                  ?.split("|")
                  ?.map((projectName, projectIndex) => {
                    return (
                      <div
                        key={projectIndex}
                        className="inline-block mr-2 mb-2  "
                      >
                        <h2
                          style={{
                            backgroundColor: rgbaToHex(
                              data?.color?.split("|")[projectIndex],
                              0.1
                            ),
                            color: data?.color?.split("|")[projectIndex],
                          }}
                          className={`  p-2 rounded-lg  `}
                        >
                          {projectName}
                        </h2>
                      </div>
                    );
                  })}
              </div>

              <div className="">{data?.remark}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EmployeeTaskLog;
