import React, { useEffect, useState } from "react";
// Media files
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";

// npm packages
import { useDetectClickOutside } from "react-detect-click-outside";

// helper functions
import { monthList } from "../../../utils/calendar/day_and_month_list";

// Component
import OverlayEmployeeTaskCalendar from "../overlay_calendar/OverlayEmployeeTaskCalendar";

// State management (Recoil JS)
import { useRecoilState } from "recoil";
import employeeApiDataAtom from "../../../recoil/employeeDashboard/employeeApiDataAtom";
import employeeOverlayCalendarSelectedDate from "../../../recoil/employeePostRequests/employeeOverlayCalendar/employeeOverlayCalendarSelectedDate";
import employeeTasksCalendarStatusAtom from "../../../recoil/employee_overlay/employeeTasksCalendarStatusAtom";

// Api call
import axios from "axios";
import { useRef } from "react";

const Employee_Task_n_Projects_edit = () => {
  // Global variables
  const [employeeApiData, setEmployeeApiData] =
    useRecoilState(employeeApiDataAtom);
  const [currentSelectedDate, setCurrentSelectedDate] = useRecoilState(
    employeeOverlayCalendarSelectedDate
  );
  const [showCalendar, setShowCalendar] = useRecoilState(
    employeeTasksCalendarStatusAtom
  );

  // local variables
  const [activeTab, setAtiveTab] = useState("tasks");
  const [apiData, setApiData] = useState();
  const [randomColor, setRandomColor] = useState(
    "#" + Math.floor(Math.random() * 16777215).toString(16)
  );
  const [currentProjectsLocal, setCurrentProjectsLocal] = useState();
  const projectNameRef = useRef();
  const projectColorRef = useRef();

  useEffect(() => {
    console.log("currentProjectsLocal:");
    console.log(currentProjectsLocal);
  }, [currentProjectsLocal]);

  useEffect(() => {
    setApiData(employeeApiData?.taskLogUpdation);
    setCurrentProjectsLocal(employeeApiData?.currentProjects);
  }, [employeeApiData]);

  //   Mock api data
  const mockTaskData = [
    {
      taskList: [
        {
          id: 1,
          task: "Lorem ipsum 1",
          project: "Everside",
        },
        {
          id: 2,
          task: "Lorem ipsum 2",
          project: "EKO",
        },
        {
          id: 3,
          task: "Lorem ipsum 3",
          project: "Vanamamalai",
        },
      ],
    },
    {
      projectList: [
        {
          projectName: "Everside",
          projectColor: "#00ac69",
          projectStatus: "In Progress",
        },

        {
          projectName: "EKO",
          projectColor: "#0062ac",
          projectStatus: "On Hold",
        },

        {
          projectName: "Vanamamalai",
          projectColor: "#ac5c00",
          projectStatus: "Completed",
        },
      ],
    },

    {
      statusList: ["In Progress", "On Hold", "Completed"],
    },
  ];

  useEffect(() => {
    async function projectGetCall() {
      const projectGet = await axios({
        method: "post",
        url: process.env.REACT_APP_BASE_LINK + "/projectGet",
        data: {
          emp_id: localStorage.getItem("emp_id"),
        },
      });

      const tasklogUpdation = await axios({
        method: "post",
        url: process.env.REACT_APP_BASE_LINK + "/taskLogUpdation",
        data: {
          emp_id: localStorage.getItem("emp_id"),
          r_type: "G",
          date:
            currentSelectedDate?.date +
            "-" +
            (currentSelectedDate?.month + 1) +
            "-" +
            currentSelectedDate?.year,
        },
      });

      setEmployeeApiData({
        ...employeeApiData,
        currentProjects: projectGet?.data?.project_list,
        taskLogUpdation: tasklogUpdation?.data,
      });
    }

    projectGetCall();
  }, []);

  useEffect(() => {
    console.log("apiData");
    console.log(apiData);
  }, [apiData]);

  useEffect(() => {
    console.log("employeeApiData:");
    console.log(employeeApiData);
  }, [employeeApiData]);

  const newProjectSubmit = (e) => {
    setRandomColor("#" + Math.floor(Math.random() * 16777215).toString(16));
    e.preventDefault();
    let projectName = projectNameRef?.current?.value;
    let projectColor = projectColorRef?.current?.value;

    async function apiCall() {
      const projectAdd = await axios({
        method: "post",
        url: process.env.REACT_APP_BASE_LINK + "/projectAdd",
        data: {
          emp_id: localStorage.getItem("emp_id"),
          project_name: projectName,
          project_color: projectColor,
          // project_list: currentProjectsLocal,
        },
      });

      console.log("project Add response:");
      console.log(projectAdd?.data);
    }
    apiCall();
  };

  return (
    <div className="bg-white py-5 rounded-xl  min-w-[500px] h-[575px]  ">
      {/* task or project tab selection */}
      <div className=" flex gap-2 justify-center items-start w-fit mx-auto border rounded-xl bg-gray-100 mb-5">
        <h1
          className={`p-3   min-w-[100px] text-center rounded-xl text-sm transition-all cursor-pointer ${
            activeTab === "tasks"
              ? "bg-[#5f66e1] text-white"
              : "text-gray-500 bg-gray-100"
          }`}
          onClick={() => setAtiveTab("tasks")}
        >
          Tasks
        </h1>
        <h1
          className={`p-3   min-w-[100px] text-center rounded-xl text-sm transition-all cursor-pointer ${
            activeTab === "projects"
              ? "bg-[#5f66e1] text-white "
              : "text-gray-500 bg-gray-100"
          } `}
          onClick={() => setAtiveTab("projects")}
        >
          Projects
        </h1>
      </div>

      {/* Task tab */}
      {activeTab === "tasks" && (
        <div>
          <div className="flex justify-between items-start gap-5 px-5">
            <div className=" py-5 relative  flex-1">
              <h2 className="text-gray-500 text-sm">Date</h2>
              <button
                className="py-2 space-x-2 flex justify-between items-center  w-full"
                onClick={() => setShowCalendar(!showCalendar)}
              >
                <span>
                  {/* {currentSelectedDate?.date +
                    " " +
                    monthList[currentSelectedDate?.month]?.shortName +
                    " " +
                    currentSelectedDate?.year} */}

                  {employeeApiData?.taskLogUpdation?.date}
                </span>

                <CalendarMonthRoundedIcon className="text-gray-400" />
              </button>

              {showCalendar && <OverlayEmployeeTaskCalendar />}
            </div>

            <div className=" py-5  flex-1">
              <h2 className="text-gray-500 text-sm mb-2">Remark</h2>
              <textarea
                cols={20}
                rows={3}
                className="outline-[#5f66e1] rounded-lg border py-2 w-full "
                value={apiData?.remark}
                onChange={(e) =>
                  setApiData({ ...apiData, remark: e?.target?.value })
                }
              />
            </div>
          </div>

          {/* task and project list */}

          <div className="flex justify-between items-center gap-5 text-gray-500 text-sm px-5">
            <h1 className="flex-1 ">Task</h1>
            <h1 className="min-w-[180px] ">Project</h1>
          </div>

          <div className="h-[220px]  overflow-y-scroll">
            {apiData?.task_array?.map((data, index) => {
              return (
                <div
                  key={data?.id}
                  className="flex justify-between items-start gap-5  px-5 my-3"
                >
                  <textarea
                    defaultValue={data?.task}
                    id=""
                    cols="20"
                    rows="3"
                    className="flex-1 border outline-[#5f66e1] rounded-lg "
                  ></textarea>
                  <h1 className="w-[180px] flex justify-between items-center ">
                    <span> {data?.project}</span>
                  </h1>
                </div>
              );
            })}
          </div>

          <div className="flex justify-end mt-5 px-5">
            <button
              className=" p-3 rounded-xl text-center w-[100px] bg-[#5f66e1] text-white active:scale-95 transition"
              //   onClick={onSaveHandler}
            >
              Save
            </button>
          </div>
        </div>
      )}

      {/* Project tab */}
      {activeTab === "projects" && (
        <div className=" relative h-full  rounded-b-xl ">
          <h1 className="px-5 text-gray-500 text-sm">New project name</h1>
          <div className="flex justify-between items-center gap-5 px-5  my-3">
            <div className="flex-1 flex justify-between items-center gap-2">
              <input
                type="text"
                ref={projectNameRef}
                defaultValue=""
                // onChange={() => setCurrentProjectsLocal()}
                className=" p-2 border outline-[#5f66e1] rounded-lg flex-1"
              ></input>
              <div className=" w-[50px] flex justify-center items-center">
                <input
                  type="color"
                  ref={projectColorRef}
                  defaultValue=""
                  className="mx-auto "
                />
              </div>
            </div>
            <div className="w-[140px] flex justify-between items-center ">
              <button
                onClick={newProjectSubmit}
                className="bg-[#5f66e1] text-white p-2 px-3 rounded-xl"
              >
                Add Project
              </button>
            </div>
          </div>

          <div className="flex justify-between items-center gap-5 px-5 text-gray-500 text-sm mt-10">
            <div className="flex-1 flex justify-between items-center gap-2">
              <h1 className=" flex-1">Project name</h1>
              <h1 className="text-center  w-[50px] ">Color</h1>
            </div>
            <h1 className="w-[140px] ">Status</h1>
          </div>

          {currentProjectsLocal?.map((data, index) => {
            return (
              <div
                key={data?.id}
                className="flex justify-between items-center gap-5 px-5  my-3"
              >
                <div className="flex-button flex justify-between items-center gap-2">
                  <input
                    type="text"
                    defaultValue={data?.project_name}
                    onChange={() => setCurrentProjectsLocal()}
                    className=" p-2 border outline-[#5f66e1] rounded-lg flex-1"
                  ></input>
                  <div className=" w-[50px] flex justify-center items-center">
                    <input
                      type="color"
                      defaultValue={
                        data?.project_color ? data?.project_color : randomColor
                      }
                      className="mx-auto "
                    />
                  </div>
                </div>
                <h1 className="w-[140px] flex justify-between items-center ">
                  <span>{data?.status}</span>
                  <span>
                    <KeyboardArrowDownRoundedIcon className="text-gray-400" />
                  </span>
                </h1>
              </div>
            );
          })}

          {/* <div className="flex  justify-center items-center w-full  text-sm text-gray-300 py-5">
            <div
              onClick={() =>
                setCurrentProjectsLocal([
                  ...currentProjectsLocal,
                  {
                    id: Math.random(),
                    project_name: "",
                    project_color: "",
                    status: "In Progress",
                  },
                ])
              }
              className="flex flex-col justify-center items-center gap-2"
            >
              <AddCircleOutlineRoundedIcon
                fontSize="large"
                className="text-gray-300"
              />
              Add Projects{" "}
            </div>
          </div> */}

          <div className="absolute bottom-0 left-0 right-0 rounded-xl  ">
            <div className="flex justify-end items-center py-5 bg-white px-5 rounded-xl ">
              <button
                className=" p-3 rounded-xl text-center w-[100px] bg-[#5f66e1] text-white active:scale-95 transition  "
                onClick={newProjectSubmit}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Employee_Task_n_Projects_edit;
