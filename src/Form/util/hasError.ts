import { FormErrors } from "../types";

export const hasError = <T extends object>(object: FormErrors<T>): boolean => {
  if (!object) {
    return false;
  }

  const keys = Object.keys(object);

  for (const key of keys) {
    const value = object[key];

    if (typeof value === "object") {
      if (hasError(value)) {
        return true;
      }
      continue;
    }

    if (value) {
      return true;
    }
  }

  return false;
};
