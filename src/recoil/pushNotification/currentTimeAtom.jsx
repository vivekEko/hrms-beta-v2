import { atom } from "recoil";

const currentTimeAtom = atom({
  key: "currentTimeAtom", // unique ID (with respect to other atoms/selectors)
  default: null, // default value (aka initial value)
});

export default currentTimeAtom;
