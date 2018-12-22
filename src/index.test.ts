import chocolateCake from "./index";

const createTest = ([number, text]) => {
  test(`returns ${text} from ${number}`, () => {
    expect(chocolateCake(number)).toBe(text);
  });
};

describe("single values", () => {
  [
    [0, "zero"],
    [1, "one"],
    [2, "two"],
    [3, "three"],
    [4, "four"],
    [5, "five"],
    [6, "six"],
    [7, "seven"],
    [8, "eight"],
    [9, "nine"]
  ].forEach(createTest);
});

describe("outlier values", () => {
  [[10, "ten"], [11, "eleven"], [12, "twelve"]].forEach(createTest);
});

describe("teen values", () => {
  [
    [13, "thirteen"],
    [14, "fourteen"],
    [15, "fifteen"],
    [16, "sixteen"],
    [17, "seventeen"],
    [18, "eighteen"],
    [19, "nineteen"]
  ].forEach(createTest);
});
