//react
import React from "react";

const EmployeeStats = (props) => {
  return (
    <div className="">
      <div className="p-3 sm:p-5  rounded-lg bg-white">
        <h2 className="text-center text-xl ">{props?.statsData?.heading}</h2>
        <h1 className="text-center  mt-2 text-[#5f66e1]">
          <span className="text-3xl font-medium ">
            {props?.statsData?.total_value}
          </span>
          {props?.statsData?.unit && (
            <span className="ml-1 text-xs ">{props?.statsData?.unit}</span>
          )}
        </h1>

        <div className="flex justify-between items-center mt-10">
          {props?.statsData?.sub_data?.map((data, index) => {
            return (
              <div key={index} className="flex-1 text-center">
                <h3 className="font-medium">
                  <span>{data?.sub_value}</span>
                  {data?.sub_out_of && (
                    <span>
                      /<span>{data?.sub_out_of}</span>
                    </span>
                  )}

                  {data?.sub_unit && (
                    <span>
                      <span className="ml-1">{data?.sub_unit}</span>
                    </span>
                  )}
                </h3>
                <h4 className="text-sm text-gray-600">{data?.sub_heading}</h4>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default EmployeeStats;
