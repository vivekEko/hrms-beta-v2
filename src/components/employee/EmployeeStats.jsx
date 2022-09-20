//react
import React from "react";

const EmployeeStats = (props) => {
  return (
    <div className="">
      <div className="p-3 sm:p-5  rounded-lg bg-white min-h-[200px]">
        <h2
          className={` ${
            props?.apiData?.heading
              ? ""
              : "min-h-[30px] bg-[#f5f5f5] w-[150px] mx-auto relative overflow-hidden rounded-md"
          } text-center text-xl`}
        >
          {props?.apiData?.heading}

          {/* Skeleton */}
          <div
            className={`absolute left-0 top-0 bottom-0 bg-gradient-to-r from-[#f5f5f5] via-[#ffffff] to-[#f5f5f5]    w-[40px] skeleton-animation ${
              props?.apiData?.heading ? "hidden" : "block"
            } `}
          ></div>
        </h2>
        <h1
          className={`text-center  mt-2 text-[#5f66e1] ${
            props?.apiData?.total_value
              ? ""
              : "bg-[#f5f5f5] w-[150px] mx-auto min-h-[50px] relative overflow-hidden rounded-md"
          } `}
        >
          <span className="text-3xl font-medium ">
            {props?.apiData?.total_value}
          </span>
          {props?.apiData?.unit && (
            <span className="ml-1 text-xs ">{props?.apiData?.unit}</span>
          )}

          {/* Skeleton */}
          <div
            className={`absolute left-0 top-0 bottom-0 bg-gradient-to-r from-[#f5f5f5] via-[#ffffff] to-[#f5f5f5]    w-[40px] skeleton-animation ${
              props?.apiData?.total_value ? "hidden" : "block"
            } `}
          ></div>
        </h1>

        <div
          className={`flex justify-between items-center  ${
            props?.apiData?.sub_data
              ? "mt-10"
              : "bg-[#f5f5f5] min-h-[50px] relative overflow-hidden rounded-md mt-5 w-[80%] mx-auto"
          }`}
        >
          {props?.apiData?.sub_data?.map((data, index) => {
            return (
              <div key={index} className="flex-1 text-center">
                <h3 className="font-medium">
                  <span>{data?.sub_value}</span>
                  {data?.sub_out_of && (
                    <span>
                      /<span>{data?.sub_out_of}</span>
                    </span>
                  )}

                  {data?.sub_unit && props?.apiData?.heading !== "Leaves" && (
                    <span>
                      <span className="ml-1  text-xs">{data?.sub_unit}</span>
                    </span>
                  )}
                </h3>
                <h4 className="text-sm text-gray-600">{data?.sub_heading}</h4>
              </div>
            );
          })}

          {/* Skeleton */}
          <div
            className={`absolute left-0 top-0 bottom-0 bg-gradient-to-r from-[#f5f5f5] via-[#ffffff] to-[#f5f5f5]    w-[40px] skeleton-animation ${
              props?.apiData?.sub_data ? "hidden" : "block"
            } `}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeStats;
