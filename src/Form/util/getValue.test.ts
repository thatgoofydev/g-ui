import { getValue } from "./getValue";

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

const sample: SampleObject = {
  firstProp: "first",
  level1: {
    secondProp: "second",
    level2: {
      thirdProp: "third",
      level3: {
        fourthProp: "fourth"
      }
    }
  }
};

describe("getValue", () => {
  it("should return value with single node in path", () => {
    var value = getValue(sample, "firstProp");
    expect(value).toBe("first");
  });

  it("should return value with multiple nodes (2) in path", () => {
    var value = getValue(sample, "level1.secondProp");
    expect(value).toBe("second");
  });

  it("should return value with multiple nodes (3) in path", () => {
    var value = getValue(sample, "level1.level2.thirdProp");
    expect(value).toBe("third");
  });

  it("should return value with multiple nodes (4) in path", () => {
    var value = getValue(sample, "level1.level2.level3.fourthProp");
    expect(value).toBe("fourth");
  });
});
