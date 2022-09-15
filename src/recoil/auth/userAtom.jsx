import { atom } from "recoil";

const userAtom = atom({
  key: "userAtom", // unique ID (with respect to other atoms/selectors)
  default: { token: false, isAdmin: false }, // default value (aka initial value)
});

export default userAtom;
