import { PartialWithType } from "../../util";

const getValueInternal = <T>(object: T, path: string[]): any | undefined => {
  const [currentPart, ...restParts] = path;

  if (path.length == 1) {
    return object[currentPart];
  }

  if (!object[currentPart]) {
    return undefined;
  }

  return getValueInternal(object[currentPart], restParts);
};

export const getValue = <T, U>(
  object: PartialWithType<T, U>,
  path: string
): U | undefined => {
  const parts = path.split(".");
  return getValueInternal(object, parts);
};
