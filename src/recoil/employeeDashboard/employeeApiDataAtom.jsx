import { atom } from "recoil";

const employeeApiDataAtom = atom({
  key: "employeeApiDataAtom", // unique ID (with respect to other atoms/selectors)
  default: {}, // default value (aka initial value)
});

export default employeeApiDataAtom;
