import chocolateCake from "./index";

const createTest = ([number, text]) => {
  test(`returns ${text} from ${number}`, () => {
    expect(chocolateCake(number)).toBe(text);
  });
};

describe("single digit values", () => {
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

describe("standard double digit values", () => {
  [
    [20, "twenty"],
    [29, "twenty nine"],
    [30, "thirty"],
    [39, "thirty nine"],
    [49, "forty nine"],
    [40, "forty"],
    [50, "fifty"],
    [59, "fifty nine"],
    [60, "sixty"],
    [69, "sixty nine"],
    [70, "seventy"],
    [79, "seventy nine"],
    [80, "eighty"],
    [89, "eighty nine"],
    [90, "ninety"],
    [99, "ninety nine"]
  ].forEach(createTest);
});
