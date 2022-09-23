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

const Employee_task_overlay_container = () => {
  // Global variables
  const [employeeApiData, setEmployeeApiData] =
    useRecoilState(employeeApiDataAtom);
  const [currentSelectedDate, setCurrentSelectedDate] = useRecoilState(
    employeeOverlayCalendarSelectedDate
  );
  // local variables
  const [apiData, setApiData] = useState();
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedTaskIndex, setSelectedTaskIndex] = useState();

  const [tasksList, setTasksList] = useState([]);
  let string = "";

  useEffect(() => {
    setApiData(employeeApiData?.taskLogUpdation);
    setTasksList(employeeApiData?.taskLogUpdation?.task_array);
  }, [employeeApiData]);

  useEffect(() => {
    console.log("tasksList:");
    console.log(tasksList);

    tasksList?.map((data, index) => {
      string = string + tasksList[index]?.task + "|";

      return console.log(string);
    });

    setApiData({ ...apiData, task_array: tasksList });
  }, [tasksList]);

  const onSaveHandler = () => {
    // console.log("onSaveHandler: ", string);

    console.log("apiData throgh onsave:");
    console.log(apiData);

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
      // setEmployeeApiData({
      //   ...employeeApiData,
      //   taskLogUpdation: tasklogUpdation?.data,
      // });
    }
    apiCall();
  };

  useEffect(() => {
    console.log("string:");
    console.log(string);
  }, [string]);

  useEffect(() => {
    console.log("tasksList");
    console.log(tasksList);
  }, [tasksList]);

  useEffect(() => {
    console.log("selectedTaskIndex:");
    console.log(selectedTaskIndex);
  }, [selectedTaskIndex]);

  useEffect(() => {
    console.log("apiData:");
    console.log(apiData);
  }, [apiData]);

  return (
    <div className="bg-white py-5 rounded-xl absolute top-[30%] right-[40%]">
      {/* task edit Tab */}
      <div className=" flex gap-2 justify-center items-start w-fit mx-auto border rounded-xl bg-gray-100 mb-5">
        <h1
          className={`p-3 bg-[#5f66e1] text-white min-w-[100px] text-center rounded-xl text-sm`}
        >
          Tasks
        </h1>
        <h1
          className={`p-3 bg-gray-100 text-gray-500 min-w-[100px] text-center rounded-xl text-sm `}
        >
          Projects
        </h1>
      </div>

      <div className="flex justify-center items-center gap-10 px-5">
        <div className=" py-5 relative">
          <h2 className="text-gray-500 text-sm">Date</h2>
          <button
            className="py-2"
            onClick={() => setShowCalendar(!showCalendar)}
          >
            <span>
              {/* {apiData?.date?.split("-")[0] +
                " " +
                monthList[apiData?.date?.split("-")[1]]?.shortName +
                " " +
                apiData?.date?.split("-")[2]} */}

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
                {/* <h2
                  className="text-gray-500 text-sm text-right"
                  onClick={() => {
                    console.log("id is: ", data?.id);
                    setTasksList((tasksList) =>
                      tasksList.filter(
                        (filteredData, filteredIndex) =>
                          filteredData?.project !== data?.project
                      )
                    );
                  }}
                >
                  x
                </h2> */}

                <h2 className="text-gray-500 text-sm"> Project</h2>
                <h3 className="py-2   text-sm">{data?.project}</h3>
              </div>
            </div>
          );
        })}
      </div>

      {/* <div
        className="w-fit mx-auto flex justify-center items-center flex-col cursor-pointer"
        onClick={() => {
          setTasksList([
            ...tasksList,
            {
              id: Math.random(),
            },
          ]);
        }}
      >
        <AddCircleOutlineRoundedIcon
          className="text-gray-300"
          fontSize="large"
        />
        <h1 className="text-gray-300  text-sm">Add tasks</h1>
      </div> */}
      <div className="flex justify-end mt-5">
        <button
          className=" p-3 rounded-xl text-center w-[100px] bg-[#5f66e1] text-white active:scale-95 transition"
          onClick={onSaveHandler}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default Employee_task_overlay_container;
