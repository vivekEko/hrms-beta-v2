import { atom } from "recoil";

const employeeTasksCalendarStatusAtom = atom({
  key: "employeeTasksCalendarStatusAtom", // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});

export default employeeTasksCalendarStatusAtom;
