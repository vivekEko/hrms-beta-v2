import React from "react";
// Media files
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";

const Employee_task_overlay_container = () => {
  return (
    <div className="bg-white p-5 rounded-xl absolute top-[30%] right-[40%]">
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

      <div className="flex justify-center items-center gap-10">
        <div className=" py-5">
          <h2 className="text-gray-500 text-sm">Date</h2>
          <button className="py-2">
            <span>22 Sept 2022</span>

            <KeyboardArrowDownRoundedIcon className="text-gray-500" />
          </button>
        </div>

        <div className=" py-5">
          <h2 className="text-gray-500 text-sm">Remark</h2>
          <input type="text" className="outline-none border-b py-2" />
        </div>
      </div>

      <div className="grid grid-cols-[0.7fr_0.3fr] w-full  justify-center place-items-end items-center gap-5">
        <div className=" py-5 w-full">
          <h2 className="text-gray-500 text-sm">Task</h2>
          <input type="text" className="outline-none border-b py-2 w-full" />
        </div>
        <div className=" py-5">
          <h2 className="text-gray-500 text-sm">Select project</h2>
          <button className="py-2 ">
            <span>Everside</span>

            <KeyboardArrowDownRoundedIcon className="text-gray-500" />
          </button>
        </div>

        <div className=" py-5 w-full">
          <input type="text" className="outline-none border-b py-2 w-full" />
        </div>
        <div className=" py-5">
          <button className="py-2 ">
            <span>Everside</span>

            <KeyboardArrowDownRoundedIcon className="text-gray-500" />
          </button>
        </div>
      </div>

      <div className="w-fit mx-auto flex justify-center items-center flex-col">
        <AddCircleOutlineRoundedIcon
          className="text-gray-300"
          fontSize="large"
        />
        <h1 className="text-gray-300  text-sm">Add tasks</h1>
      </div>
      <div className="flex justify-end mt-5">
        <button className=" p-3 rounded-xl text-center w-[100px] bg-[#5f66e1] text-white active:scale-95 transition">
          Save
        </button>
      </div>
    </div>
  );
};

export default Employee_task_overlay_container;
