import React, { useEffect, useState } from "react";
// Media files
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";

// helper functions
import { monthList } from "../../../utils/calendar/day_and_month_list";

// Component
import OverlayCalendar from "../overlay_calendar/OverlayCalendar";

// State management (Recoil JS)
import { useRecoilState } from "recoil";
import employeeApiDataAtom from "../../../recoil/employeeDashboard/employeeApiDataAtom";
import employeeOverlayCalendarSelectedDate from "../../../recoil/employeePostRequests/employeeOverlayCalendar/employeeOverlayCalendarSelectedDate";

// Api call
import axios from "axios";
import { useRef } from "react";

const Employee_task_overlay_container = () => {
  // Global variables
  const [employeeApiData, setEmployeeApiData] =
    useRecoilState(employeeApiDataAtom);
  const [currentSelectedDate, setCurrentSelectedDate] = useRecoilState(
    employeeOverlayCalendarSelectedDate
  );
  // local variables
  const [activeTab, setAtiveTab] = useState("tasks");
  const [apiData, setApiData] = useState();
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedTaskIndex, setSelectedTaskIndex] = useState();

  const [tasksList, setTasksList] = useState([]);
  let string = "";

  // project Tab
  const projectNameRef = useRef();
  const projectColorRef = useRef();
  const [randomColor, setRandomColor] = useState(
    "#" + Math.floor(Math.random() * 16777215).toString(16)
  );
  const [selectedProject, setSelectedProject] = useState();
  const [selectedStatus, setSelectedStatus] = useState();
  const [currentProjectArray, setCurrentProjectArray] = useState([]);

  useEffect(() => {
    if (activeTab === "projects") {
      async function apiCall() {
        const projectGet = await axios({
          method: "post",
          url: process.env.REACT_APP_BASE_LINK + "/projectGet",
          data: {
            emp_id: localStorage.getItem("emp_id"),
          },
        });
        console.log("project get response:");
        console.log(projectGet?.data);
        setEmployeeApiData({
          ...employeeApiData,
          currentProjects: projectGet?.data?.project_list,
        });
      }
      apiCall();
    }
  }, [activeTab]);

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
        },
      });
    }
    apiCall();
  };

  useEffect(() => {
    setApiData(employeeApiData?.taskLogUpdation);
    setTasksList(employeeApiData?.taskLogUpdation?.task_array);
    setCurrentProjectArray(employeeApiData?.currentProjects);
  }, [employeeApiData]);

  useEffect(() => {
    tasksList?.map((data, index) => {
      string = string + tasksList[index]?.task + "|";

      return console.log(string);
    });

    setApiData({ ...apiData, task_array: tasksList });
  }, [tasksList]);

  const onSaveHandler = () => {
    // console.log("onSaveHandler: ", string);

    async function apiCall() {
      const tasklogUpdation = await axios({
        method: "post",
        url: process.env.REACT_APP_BASE_LINK + "/taskLogUpdation",
        data: {
          emp_id: localStorage.getItem("emp_id"),
          r_type: "P",
          date:
            currentSelectedDate?.date +
            "-" +
            (currentSelectedDate?.month + 1) +
            "-" +
            currentSelectedDate?.year,
          remark: apiData?.remark,
          task_array: apiData?.task_array,
        },
      });
      console.log("task update response:");
      console.log(tasklogUpdation?.data);
    }
    apiCall();
  };

  useEffect(() => {
    console.log("currentProjectArray:");
    console.log(currentProjectArray);
  }, [currentProjectArray]);

  return (
    <div className="bg-white py-5 rounded-xl absolute top-[30%] right-[40%] min-w-[500px] min-h-[575px]">
      {/* task edit Tab */}
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

      {activeTab === "tasks" && (
        <div>
          <div className="flex justify-center items-center gap-10 px-5">
            <div className=" py-5 relative">
              <h2 className="text-gray-500 text-sm">Date</h2>
              <button
                className="py-2"
                onClick={() => setShowCalendar(!showCalendar)}
              >
                <span>
                  {currentSelectedDate?.date +
                    " " +
                    monthList[currentSelectedDate?.month - 1]?.shortName +
                    " " +
                    currentSelectedDate?.year}
                </span>

                <KeyboardArrowDownRoundedIcon className="text-gray-500" />
              </button>

              {showCalendar && (
                <div className="absolute shadow-2xl rounded-xl w-[300px] ">
                  <OverlayCalendar />
                </div>
              )}
            </div>

            <div className=" py-5">
              <h2 className="text-gray-500 text-sm">Remark</h2>
              <input
                type="text"
                className="outline-none border-b py-2"
                value={apiData?.remark}
                onChange={(e) =>
                  setApiData({ ...apiData, remark: e?.target?.value })
                }
              />
            </div>
          </div>
          <div className="h-[300px] overflow-y-scroll px-5">
            {tasksList?.map((data, index) => {
              return (
                <div
                  key={data?.project}
                  className="grid grid-cols-2 w-full  justify-center place-items-end items-center gap-5  my-2 px-5"
                >
                  <div className=" py-5 ">
                    <h2 className="text-gray-500 text-sm">Task</h2>
                    <input
                      type="text"
                      className="outline-none border-b py-2 w-full"
                      onClick={() => setSelectedTaskIndex(data?.project)}
                      onChange={(e) => {
                        setTasksList(
                          tasksList?.map((obj) => {
                            // 👇️ if id equals 2, update country property
                            if (obj.project === selectedTaskIndex) {
                              return { ...obj, task: e?.target?.value };
                            }

                            // 👇️ otherwise return object as is
                            return obj;
                          })
                        );
                      }}
                      value={tasksList?.[index]?.task}
                    />
                  </div>
                  <div className="w-[100px] py-5">
                    <h2 className="text-gray-500 text-sm"> Project</h2>
                    <h3 className="py-2   text-sm">{data?.project}</h3>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex justify-end mt-5 px-5">
            <button
              className=" p-3 rounded-xl text-center w-[100px] bg-[#5f66e1] text-white active:scale-95 transition"
              onClick={onSaveHandler}
            >
              Save
            </button>
          </div>
        </div>
      )}

      {activeTab === "projects" && (
        <div>
          <form
            onSubmit={newProjectSubmit}
            className="p-5 flex items-center gap-3"
          >
            <input
              ref={projectNameRef}
              type="text"
              placeholder="New project name"
              className="outline-none border text-sm p-3 rounded-lg flex-1 "
            />
            <input
              ref={projectColorRef}
              type="color"
              defaultValue={randomColor}
              className="cursor-pointer"
            />
            <button
              type="submit"
              className="bg-[#5f66e1] text-white p-3 rounded-lg text-sm active:scale-95"
            >
              Add Project
            </button>
          </form>

          <div>
            {currentProjectArray?.map((data, index) => {
              return (
                <form
                  key={data?.project_name}
                  onSubmit={(e) => e.preventDefault()}
                  className="p-5 flex items-center gap-3"
                >
                  <input
                    type="text"
                    placeholder="New project name"
                    className="outline-none border text-sm p-3 rounded-lg flex-1 "
                    defaultValue={data?.project_name}
                    onChange={(e) =>
                      setCurrentProjectArray({
                        ...currentProjectArray,
                        project_name: e?.target?.value,
                        // project_color: data?.project_color,
                        // id: data?.id,
                        // status: data?.status
                      })
                    }
                  />

                  <div className="relative">
                    <h1
                      onClick={() => {
                        if (selectedProject === data?.project_name) {
                          setSelectedProject(null);
                        } else setSelectedProject(data?.project_name);
                      }}
                    ></h1>

                    <div>
                      <h1
                        onClick={(e) =>
                          setSelectedStatus(
                            data?.status === "I"
                              ? "In Progress"
                              : data?.status === "O"
                              ? "On Hold"
                              : data?.status === "C"
                              ? "Completed"
                              : ""
                          )
                        }
                      >
                        {data?.status === "I"
                          ? "In Progress"
                          : data?.status === "O"
                          ? "On Hold"
                          : data?.status === "C"
                          ? "Completed"
                          : ""}
                      </h1>
                      <h1
                        onClick={(e) => setSelectedStatus("In Progress")}
                        className="text-sm text-gray-500"
                      >
                        In Progress
                      </h1>
                      <h1
                        onClick={(e) => setSelectedStatus("On Hold")}
                        className="text-sm text-gray-500"
                      >
                        On Hold
                      </h1>
                      <h1
                        onClick={(e) => setSelectedStatus("Completed")}
                        className="text-sm text-gray-500"
                      >
                        Completed
                      </h1>
                    </div>
                    {/* <div
                      className={` ${
                        selectedProject === data?.project_name
                          ? "block"
                          : "hidden"
                      } absolute top-[100%] border bg-white shadow-xl rounded-xl p-2 text-sm text-gray-800 `}
                    >
                      <h1 className="py-2">In Progress</h1>
                      <h1 className="py-2">On Hold</h1>
                      <h1 className="py-2">Completed</h1>
                    </div> */}
                  </div>

                  <input
                    type="color"
                    defaultValue={data?.project_color}
                    className="cursor-pointer"
                  />
                  <button
                    type="submit"
                    className="bg-[#5f66e1] text-white p-3 rounded-lg text-sm active:scale-95"
                  >
                    Update
                  </button>
                </form>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Employee_task_overlay_container;
