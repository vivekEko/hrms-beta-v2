import { atom } from "recoil";

const userLoginResponseAtom = atom({
  key: "userLoginResponseAtom", // unique ID (with respect to other atoms/selectors)
  default: { token: false, isAdmin: true }, // default value (aka initial value)
});

export default userLoginResponseAtom;
