import { atom } from "recoil";

export const themeState = atom({
  key: "themeStateKey", // unique ID (with respect to other atoms/selectors)
  default: "dark", // default value (aka initial value)
});
