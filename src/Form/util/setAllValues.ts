import { DeepPartialWithValueType } from "../../util";

export const setAllValues = <T extends object, U>(
  object: DeepPartialWithValueType<T, U>,
  value: U
): DeepPartialWithValueType<T, U> => {
  if (!object) {
    return object;
  }

  const keys = Object.keys(object);

  keys.forEach((key) => {
    if (typeof object[key] === "object") {
      object[key] = setAllValues(object[key], value);
    } else {
      object[key] = value;
    }
  });

  return object;
};
