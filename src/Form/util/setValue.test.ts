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

describe("setValue", () => {
  it("should set value with single node in path", () => {
    const sample: SampleObject = JSON.parse(JSON.stringify(emptySample));

    setValue(sample, "firstProp", "changed");

    expect(sample.firstProp).toBe("changed");
    expect(sample.level1.secondProp).toBe("");
    expect(sample.level1.level2.thirdProp).toBe("");
    expect(sample.level1.level2.level3.fourthProp).toBe("");
  });

  it("should set value with multiple nodes (2) in path", () => {
    const sample: SampleObject = JSON.parse(JSON.stringify(emptySample));

    setValue(sample, "level1.secondProp", "changed");

    expect(sample.firstProp).toBe("");
    expect(sample.level1.secondProp).toBe("changed");
    expect(sample.level1.level2.thirdProp).toBe("");
    expect(sample.level1.level2.level3.fourthProp).toBe("");
  });

  it("should set value with multiple nodes (3) in path", () => {
    const sample: SampleObject = JSON.parse(JSON.stringify(emptySample));

    setValue(sample, "level1.level2.thirdProp", "changed");

    expect(sample.firstProp).toBe("");
    expect(sample.level1.secondProp).toBe("");
    expect(sample.level1.level2.thirdProp).toBe("changed");
    expect(sample.level1.level2.level3.fourthProp).toBe("");
  });

  it("should set value with multiple nodes (4) in path", () => {
    const sample: SampleObject = JSON.parse(JSON.stringify(emptySample));

    setValue(sample, "level1.level2.level3.fourthProp", "changed");

    expect(sample.firstProp).toBe("");
    expect(sample.level1.secondProp).toBe("");
    expect(sample.level1.level2.thirdProp).toBe("");
    expect(sample.level1.level2.level3.fourthProp).toBe("changed");
  });
});
