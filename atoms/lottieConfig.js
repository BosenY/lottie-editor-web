import { atom } from "recoil";

export const lottieConfigState = atom({
  key: "lottieConfigStateKey", // unique ID (with respect to other atoms/selectors)
  default: {
    json: null
  }, // default value (aka initial value)
});
