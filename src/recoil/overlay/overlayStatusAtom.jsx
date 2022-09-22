import { atom } from "recoil";

const overlayStatusAtom = atom({
  key: "overlayStatusAtom", // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});

export default overlayStatusAtom;
