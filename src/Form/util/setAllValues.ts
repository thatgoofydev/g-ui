import { PartialWithType } from "../../util";

export const setAllValues = <T, U>(
  object: PartialWithType<T, U>,
  value: U
): PartialWithType<T, U> => {
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
