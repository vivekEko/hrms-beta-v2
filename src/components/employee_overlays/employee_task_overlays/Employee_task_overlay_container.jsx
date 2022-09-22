import React from "react";

const Employee_task_overlay_container = () => {
  return (
    <div className="bg-white p-5 rounded-xl">
      {/* task edit Tab */}
      <div className=" flex gap-2 ">
        <h1
          className={`p-3 bg-[#5f66e1] text-white min-w-[100px] text-center rounded-xl`}
        >
          Tasks
        </h1>
        <h1
          className={`p-3 bg-gray-100 text-gray-500 min-w-[100px] text-center rounded-xl `}
        >
          Projects
        </h1>
        <div className="border-b w-full flex-1"></div>
      </div>

      <div>
        <div>
          <h2>Date</h2>
          <div>22 Sept 2022</div>
        </div>
      </div>
    </div>
  );
};

export default Employee_task_overlay_container;
