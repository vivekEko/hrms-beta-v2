// react
import React from "react";
import PowerSettingsNewRoundedIcon from "@mui/icons-material/PowerSettingsNewRounded";

const Employee_header = () => {
  return (
    <div>
      <div className=" flex justify-between items-center ">
        <div>
          <h1 className="text-2xl font-semibold">
            Hello <span className="text-[#5f66e1]">Vivek</span>
          </h1>
          <h3 className="text-base text-gray-500">Jr Frontend Developer</h3>
        </div>

        <button>
          <PowerSettingsNewRoundedIcon
            className="text-[#5f66e1] rotate-90"
            fontSize="large"
          />
        </button>
      </div>
    </div>
  );
};

export default Employee_header;
