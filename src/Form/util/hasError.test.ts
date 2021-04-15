import { FormErrors } from "../types";
import { hasError } from "./hasError";
import { setValue } from "./setValue";

interface SampleObject {
  level1: LevelOne;
  firstProp: string;
}

interface LevelOne {
  level2: LevelTwo;
  secondProp: string;
}

interface LevelTwo {
  level3: LevelThree;
  thirdProp: string;
}

interface LevelThree {
  fourthProp: string;
}

const empty: FormErrors<SampleObject> = {
  firstProp: "",
  level1: {
    secondProp: "",
    level2: {
      thirdProp: "",
      level3: {
        fourthProp: ""
      }
    }
  }
};

describe("hasError", () => {
  it("should return false when no errors", () => {
    const errorObject: FormErrors<SampleObject> = { ...empty };
    const result = hasError(errorObject);
    expect(result).toBe(false);
  });

  it("should return true when error", () => {
    const errorObject = getErrorObject("firstProp");
    const result = hasError(errorObject);
    expect(result).toBe(true);
  });

  it("should return true when error with multiple nodes (2)", () => {
    const errorObject = getErrorObject("level1.secondProp");
    const result = hasError(errorObject);
    expect(result).toBe(true);
  });

  it("should return true when error with multiple nodes (3)", () => {
    const errorObject = getErrorObject("level1.level2.thirdProp");
    const result = hasError(errorObject);
    expect(result).toBe(true);
  });

  it("should return true when error with multiple nodes (4)", () => {
    const errorObject = getErrorObject("level1.level2.level3.fourthProp");
    const result = hasError(errorObject);
    expect(result).toBe(true);
  });
});

const getErrorObject = (path: string) => {
  const errorObject = setValue(
    { ...empty },
    path,
    "some error"
  ) as FormErrors<SampleObject>;

  // console.log(JSON.stringify(errorObject));
  return errorObject;
};
