import { deepCopy } from "../../util";
import { setAllValues } from "./setAllValues";

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

const emptySample: SampleObject = {
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

const getSample = () => deepCopy(emptySample);

describe("setAllValues", () => {
  it("should set all values", () => {
    const sample = getSample();

    setAllValues(sample, "all_values");

    expect(sample.firstProp).toBe("all_values");
    expect(sample.level1.secondProp).toBe("all_values");
    expect(sample.level1.level2.thirdProp).toBe("all_values");
    expect(sample.level1.level2.level3.fourthProp).toBe("all_values");
  });
});
