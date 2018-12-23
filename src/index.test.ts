import chocolateCake from "./index";

const createTest = ([number, text]) => {
  test(`returns ${text} from ${number}`, () => {
    expect(chocolateCake(number)).toBe(text);
  });
};

describe.only("single digit values", () => {
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

describe.only("outlier values", () => {
  [[10, "ten"], [11, "eleven"], [12, "twelve"]].forEach(createTest);
});

describe.only("teen values", () => {
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

describe.only("standard double digit values", () => {
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

describe.only("one hundred suffix values", () => {
  [
    [100, "one hundred"],
    [101, "one hundred and one"],
    [111, "one hundred and eleven"],
    //
    [200, "two hundred"],
    [202, "two hundred and two"],
    [222, "two hundred and twenty two"],
    //
    [300, "three hundred"],
    [303, "three hundred and three"],
    [333, "three hundred and thirty three"],
    //
    [400, "four hundred"],
    [404, "four hundred and four"],
    [444, "four hundred and forty four"],
    //
    [500, "five hundred"],
    [505, "five hundred and five"],
    [555, "five hundred and fifty five"],
    //
    [600, "six hundred"],
    [606, "six hundred and six"],
    [666, "six hundred and sixty six"],
    //
    [700, "seven hundred"],
    [707, "seven hundred and seven"],
    [777, "seven hundred and seventy seven"],
    //
    [800, "eight hundred"],
    [808, "eight hundred and eight"],
    [888, "eight hundred and eighty eight"],
    //
    [900, "nine hundred"],
    [909, "nine hundred and nine"],
    [999, "nine hundred and ninety nine"]
  ].forEach(createTest);
});
