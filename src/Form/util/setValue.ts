import { PartialWithType } from "../../util";

const setValueInternal = <T, U>(
  object: PartialWithType<T, U>,
  path: string[],
  value: U
): PartialWithType<T, U> => {
  const [currentPart, ...restParts] = path;

  if (restParts.length == 0) {
    object[currentPart] = value;
    return object;
  }

  if (!object[currentPart]) {
    object[currentPart] = {};
  }

  object[currentPart] = setValueInternal(object[currentPart], restParts, value);
  return object;
};

export const setValue = <T, U>(
  object: PartialWithType<T, U>,
  path: string,
  value: U
): PartialWithType<T, U> => {
  const parts = path.split(".");
  return setValueInternal(object, parts, value);
};
