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

describe("one hundred suffix values", () => {
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

describe("one thousand suffix values", () => {
  [
    [1000, "one thousand"],
    [10000, "ten thousand"],
    [100000, "one hundred thousand"],
    //
    [1001, "one thousand and one"],
    [10011, "ten thousand and eleven"],
    [100111, "one hundred thousand one hundred and eleven"],
    //
    [1100, "one thousand one hundred"],
    [11100, "eleven thousand one hundred"],
    [111100, "one hundred and eleven thousand one hundred"],
    /* - - - - - - - - - - - */
    [2000, "two thousand"],
    [20000, "twenty thousand"],
    [200000, "two hundred thousand"],
    //
    [2002, "two thousand and two"],
    [20022, "twenty thousand and twenty two"],
    [200222, "two hundred thousand two hundred and twenty two"],
    //
    [2200, "two thousand two hundred"],
    [22200, "twenty two thousand two hundred"],
    [222200, "two hundred and twenty two thousand two hundred"],
    /* - - - - - - - - - - - */
    [3000, "three thousand"],
    [30000, "thirty thousand"],
    [300000, "three hundred thousand"],
    //
    [3003, "three thousand and three"],
    [30033, "thirty thousand and thirty three"],
    [300333, "three hundred thousand three hundred and thirty three"],
    //
    [3300, "three thousand three hundred"],
    [33300, "thirty three thousand three hundred"],
    [333300, "three hundred and thirty three thousand three hundred"],
    /* - - - - - - - - - - - */
    [4000, "four thousand"],
    [40000, "forty thousand"],
    [400000, "four hundred thousand"],
    //
    [4004, "four thousand and four"],
    [40044, "forty thousand and forty four"],
    [400444, "four hundred thousand four hundred and forty four"],
    //
    [4400, "four thousand four hundred"],
    [44400, "forty four thousand four hundred"],
    [444400, "four hundred and forty four thousand four hundred"],
    /* - - - - - - - - - - - */
    [5000, "five thousand"],
    [50000, "fifty thousand"],
    [500000, "five hundred thousand"],
    //
    [5005, "five thousand and five"],
    [50055, "fifty thousand and fifty five"],
    [500555, "five hundred thousand five hundred and fifty five"],
    //
    [5500, "five thousand five hundred"],
    [55500, "fifty five thousand five hundred"],
    [555500, "five hundred and fifty five thousand five hundred"],
    /* - - - - - - - - - - - */
    [6000, "six thousand"],
    [60000, "sixty thousand"],
    [600000, "six hundred thousand"],
    //
    [6006, "six thousand and six"],
    [60066, "sixty thousand and sixty six"],
    [600666, "six hundred thousand six hundred and sixty six"],
    //
    [6600, "six thousand six hundred"],
    [66600, "sixty six thousand six hundred"],
    [666600, "six hundred and sixty six thousand six hundred"],
    /* - - - - - - - - - - - */
    [7000, "seven thousand"],
    [70000, "seventy thousand"],
    [700000, "seven hundred thousand"],
    //
    [7007, "seven thousand and seven"],
    [70077, "seventy thousand and seventy seven"],
    [700777, "seven hundred thousand seven hundred and seventy seven"],
    //
    [7700, "seven thousand seven hundred"],
    [77700, "seventy seven thousand seven hundred"],
    [777700, "seven hundred and seventy seven thousand seven hundred"],
    /* - - - - - - - - - - - */
    [8000, "eight thousand"],
    [80000, "eighty thousand"],
    [800000, "eight hundred thousand"],
    //
    [8008, "eight thousand and eight"],
    [80088, "eighty thousand and eighty eight"],
    [800888, "eight hundred thousand eight hundred and eighty eight"],
    //
    [8800, "eight thousand eight hundred"],
    [88800, "eighty eight thousand eight hundred"],
    [888800, "eight hundred and eighty eight thousand eight hundred"],
    /* - - - - - - - - - - - */
    [9000, "nine thousand"],
    [90000, "ninety thousand"],
    [900000, "nine hundred thousand"],
    //
    [9009, "nine thousand and nine"],
    [90099, "ninety thousand and ninety nine"],
    [900999, "nine hundred thousand nine hundred and ninety nine"],
    //
    [9900, "nine thousand nine hundred"],
    [99900, "ninety nine thousand nine hundred"],
    [999900, "nine hundred and ninety nine thousand nine hundred"]
  ].forEach(createTest);
});
