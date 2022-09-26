// react
import React, { useEffect, useState } from "react";

// helper functions/variables
import { dayList } from "../../../utils/calendar/day_and_month_list";
import { monthList } from "../../../utils/calendar/day_and_month_list";

// State Management(Recoil JS)
import { useRecoilState } from "recoil";
import employeeOverlayCalendarSelectedDate from "../../../recoil/employeePostRequests/employeeOverlayCalendar/employeeOverlayCalendarSelectedDate";
import employeeTasksCalendarStatusAtom from "../../../recoil/employee_overlay/employeeTasksCalendarStatusAtom";

// Media files
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";

// npm packages
import { useDetectClickOutside } from "react-detect-click-outside";

const OverlayEmployeeTaskCalendar = () => {
  // Global variables
  const [currentSelectedDate, setCurrentSelectedDate] = useRecoilState(
    employeeOverlayCalendarSelectedDate
  );
  const [showCalendar, setShowCalendar] = useRecoilState(
    employeeTasksCalendarStatusAtom
  );

  // Local variables
  const [currentSelectedYear, setCurrentSelectedYear] = useState(
    new Date().getFullYear()
  );
  const [currentSelectedMonth, setCurrentSelectedMonth] = useState(
    new Date().getMonth()
  );

  const [displayedDates, setDisplayedDates] = useState([]);
  const [displayedYearList, setDisplayedYearList] = useState([]);
  const [showMonthList, setShowMonthList] = useState(false);
  const [showYearList, setShowYearList] = useState(false);
  let displayedDateArray = [];
  let displayedYearArray = [];

  //   function to get first day of a given month and year
  const getFirstDay = (year, month) => {
    return new Date(year, month, 1).getDay();
  };

  //   function to get last day of a given month and year
  const getLastDay = (year, month) => {
    return new Date(year, month + 1, 0).getDay();
  };

  //   function to get last date of a given month and year
  const getLastDate = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  // test date according to inputs

  useEffect(() => {
    getFirstDay(currentSelectedYear, currentSelectedMonth);
    getLastDay(currentSelectedYear, currentSelectedMonth);
    getLastDate(currentSelectedYear, currentSelectedMonth);
  }, [currentSelectedDate]);

  //   Displayed dates craetion
  const createDisplayedDaterray = () => {
    let firstDay = getFirstDay(currentSelectedYear, currentSelectedMonth);
    let lastDate = getLastDate(currentSelectedYear, currentSelectedMonth);

    for (let i = 1; i <= lastDate + firstDay; i++) {
      if (i < firstDay) {
        displayedDateArray?.push({ date: 0, month: currentSelectedMonth });
      } else {
        displayedDateArray?.push({
          date: i - firstDay,
          month: currentSelectedMonth,
          year: currentSelectedYear,
        });
      }
    }

    setDisplayedDates(displayedDateArray);
  };

  // Year select list creation
  const createYearList = () => {
    let currentYear = new Date().getFullYear();

    for (let i = 2010; i <= currentYear; i++) {
      displayedYearArray.push(i);
    }
    setDisplayedYearList(displayedYearArray.reverse());
  };

  useEffect(() => {
    createDisplayedDaterray();
    createYearList();
  }, [currentSelectedYear, currentSelectedMonth]);

  // Outside click detector
  const closeCalendar = () => {
    setShowCalendar(false);
  };

  const ref = useDetectClickOutside({ onTriggered: closeCalendar });

  return (
    <div ref={ref} className="absolute shadow-2xl rounded-xl w-[300px]">
      <div className=" w-full p-5  bg-white  rounded-lg">
        <div className="flex justify-between  items-center  gap-1 text-xl">
          <h1 className=" relative">
            <span
              className="cursor-pointer"
              onClick={() => setShowMonthList(!showMonthList)}
            >
              {monthList[currentSelectedMonth]?.longName}
              <span
                className={` inline-block  ${
                  showMonthList
                    ? "-rotate-180 transition "
                    : "rotate-0 transition "
                }  `}
              >
                <KeyboardArrowDownRoundedIcon fontSize="small" />
              </span>
            </span>
            <div
              className={` ${
                showMonthList ? "block" : "hidden"
              } absolute top-[100%]  py-2 w-max `}
            >
              <div className="bg-gray-50 grid grid-cols-4 gap-4 p-2  shadow-lg shadow-[#0000002f]    rounded">
                {monthList?.map((data, index) => {
                  return (
                    <div
                      key={index}
                      className={` transition cursor-pointer ${
                        currentSelectedMonth === index
                          ? "text-[#5f66e1]"
                          : "text-gray-700 hover:text-black"
                      } p-1 `}
                      onClick={() => setCurrentSelectedMonth(index)}
                    >
                      <h2 className="text-sm">{data?.shortName}</h2>
                    </div>
                  );
                })}
              </div>
            </div>
          </h1>
          <h1 className="relative">
            {" "}
            <span
              className="cursor-pointer"
              onClick={() => setShowYearList(!showYearList)}
            >
              {currentSelectedYear}
              <span
                className={` inline-block  ${
                  showYearList
                    ? "-rotate-180 transition "
                    : "rotate-0 transition "
                }  `}
              >
                <KeyboardArrowDownRoundedIcon fontSize="small" />
              </span>
            </span>
            <div
              className={` ${
                showYearList ? "block" : "hidden"
              } absolute top-[100%] left-0 right-0  py-2 w-max `}
            >
              <div className="bg-gray-50  gap-4 p-3 shadow-lg shadow-[#0000002f]    rounded max-h-[200px] overflow-y-scroll">
                {displayedYearList?.map((data, index) => {
                  return (
                    <div
                      key={index}
                      className={` text-sm transition cursor-pointer p-3  mb-2 ${
                        currentSelectedYear === data
                          ? "text-[#5f66e1]"
                          : "text-gray-700 hover:text-black"
                      } p-1  `}
                      onClick={() => setCurrentSelectedYear(data)}
                    >
                      {data}
                    </div>
                  );
                })}
              </div>
            </div>
          </h1>
        </div>

        <div className="grid grid-cols-7 justify-items-center mt-2">
          {dayList?.map((dayName, dayIndex) => {
            return (
              <div key={dayIndex} className=" w-[50px] text-center  ">
                <h2 className="text-gray-500 text-sm">{dayName}</h2>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-7 gap-4 justify-items-center mt-2 ">
          {displayedDates?.map((data, dateIndex) => {
            return (
              <div
                key={dateIndex}
                className={` ${!data?.date && "invisible"} ${
                  currentSelectedDate?.date === data?.date &&
                  currentSelectedDate?.month === data?.month &&
                  currentSelectedDate?.year === data?.year
                    ? "bg-[#5f66e1] text-white"
                    : "text-gray-800 hover:bg-[#5f65e12d]"
                }
              ${
                new Date().getDate() === data?.date &&
                new Date().getMonth() === data?.month &&
                new Date().getFullYear() === data?.year
                  ? " border border-[#5f66e1]"
                  : ""
              }
              w-full text-center p-1 rounded-lg cursor-pointer  transition min-w-[25px]`}
                onClick={() =>
                  setCurrentSelectedDate({
                    date: data?.date,
                    month: data?.month,
                    year: data?.year,
                  })
                }
              >
                <h2 className=" text-sm">{data?.date}</h2>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OverlayEmployeeTaskCalendar;
