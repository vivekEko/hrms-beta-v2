import { atom } from "recoil";

const employeeOverlayCalendarSelectedDate = atom({
  key: "employeeOverlayCalendarSelectedDate", // unique ID (with respect to other atoms/selectors)
  default: {
    date: new Date().getDate(),
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
  }, // default value (aka initial value)
});

export default employeeOverlayCalendarSelectedDate;
