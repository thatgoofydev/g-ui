import { FormErrors } from "../types";

export const hasError = <T>(object: FormErrors<T>): boolean => {
  for (const key in object) {
    if (typeof object[key] === "object") {
      if (hasError(object[key])) {
        return true;
      }
    } else if (object[key]) {
      // console.log(
      //   `key: ${key}, value: ${typeof object[key]}, bool ${!!object[key]}`
      // );
      return true;
    }
  }

  return false;
};
