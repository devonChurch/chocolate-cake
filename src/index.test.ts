import chocolateCake from "./index";

type TestItem = [number, string];
type TestItems = TestItem[];

const createTest = ([value, text]: TestItem, index: number): void => {
  test(`returns ${text} from ${value}`, () => {
    expect(chocolateCake(value)).toBe(text);
  });
};

const createError = (error: string) => (value: any): void => {
  test(`throws error from ${value}`, () => {
    const test = () =>
      chocolateCake(
        // Lie to typescript (that these arguments are numbers) in order to allow
        // incorrect types to pass through into our library scope.
        value as number
      );
    expect(test).toThrowError(error);
  });
};

describe("single digit values", () => {
  ([
    [0, "Zero"],
    [1, "One"],
    [2, "Two"],
    [3, "Three"],
    [4, "Four"],
    [5, "Five"],
    [6, "Six"],
    [7, "Seven"],
    [8, "Eight"],
    [9, "Nine"]
  ] as TestItems).forEach(createTest);
});

describe("outlier values", () => {
  ([
    [10, "Ten"],
    [11, "Eleven"],
    [12, "Twelve"]
    //
  ] as TestItems).forEach(createTest);
});

describe("teen values", () => {
  ([
    [13, "Thirteen"],
    [14, "Fourteen"],
    [15, "Fifteen"],
    [16, "Sixteen"],
    [17, "Seventeen"],
    [18, "Eighteen"],
    [19, "Nineteen"]
  ] as TestItems).forEach(createTest);
});

describe("standard double digit values", () => {
  ([
    [20, "Twenty"],
    [29, "Twenty nine"],
    [30, "Thirty"],
    [39, "Thirty nine"],
    [49, "Forty nine"],
    [40, "Forty"],
    [50, "Fifty"],
    [59, "Fifty nine"],
    [60, "Sixty"],
    [69, "Sixty nine"],
    [70, "Seventy"],
    [79, "Seventy nine"],
    [80, "Eighty"],
    [89, "Eighty nine"],
    [90, "Ninety"],
    [99, "Ninety nine"]
  ] as TestItems).forEach(createTest);
});

describe("hundred suffix values", () => {
  ([
    [100, "One hundred"],
    [101, "One hundred and one"],
    [111, "One hundred and eleven"],
    //
    [200, "Two hundred"],
    [202, "Two hundred and two"],
    [222, "Two hundred and twenty two"],
    //
    [300, "Three hundred"],
    [303, "Three hundred and three"],
    [333, "Three hundred and thirty three"],
    //
    [400, "Four hundred"],
    [404, "Four hundred and four"],
    [444, "Four hundred and forty four"],
    //
    [500, "Five hundred"],
    [505, "Five hundred and five"],
    [555, "Five hundred and fifty five"],
    //
    [600, "Six hundred"],
    [606, "Six hundred and six"],
    [666, "Six hundred and sixty six"],
    //
    [700, "Seven hundred"],
    [707, "Seven hundred and seven"],
    [777, "Seven hundred and seventy seven"],
    //
    [800, "Eight hundred"],
    [808, "Eight hundred and eight"],
    [888, "Eight hundred and eighty eight"],
    //
    [900, "Nine hundred"],
    [909, "Nine hundred and nine"],
    [999, "Nine hundred and ninety nine"]
  ] as TestItems).forEach(createTest);
});

describe("thousand suffix values", () => {
  ([
    [1000, "One thousand"],
    [10000, "Ten thousand"],
    [100000, "One hundred thousand"],
    //
    [1001, "One thousand and one"],
    [10011, "Ten thousand and eleven"],
    [100111, "One hundred thousand, one hundred and eleven"],
    //
    [1100, "One thousand, one hundred"],
    [11100, "Eleven thousand, one hundred"],
    [111100, "One hundred and eleven thousand, one hundred"],
    /* - - - - - - - - - - - */
    [2000, "Two thousand"],
    [20000, "Twenty thousand"],
    [200000, "Two hundred thousand"],
    //
    [2002, "Two thousand and two"],
    [20022, "Twenty thousand and twenty two"],
    [200222, "Two hundred thousand, two hundred and twenty two"],
    //
    [2200, "Two thousand, two hundred"],
    [22200, "Twenty two thousand, two hundred"],
    [222200, "Two hundred and twenty two thousand, two hundred"],
    /* - - - - - - - - - - - */
    [3000, "Three thousand"],
    [30000, "Thirty thousand"],
    [300000, "Three hundred thousand"],
    //
    [3003, "Three thousand and three"],
    [30033, "Thirty thousand and thirty three"],
    [300333, "Three hundred thousand, three hundred and thirty three"],
    //
    [3300, "Three thousand, three hundred"],
    [33300, "Thirty three thousand, three hundred"],
    [333300, "Three hundred and thirty three thousand, three hundred"],
    /* - - - - - - - - - - - */
    [4000, "Four thousand"],
    [40000, "Forty thousand"],
    [400000, "Four hundred thousand"],
    //
    [4004, "Four thousand and four"],
    [40044, "Forty thousand and forty four"],
    [400444, "Four hundred thousand, four hundred and forty four"],
    //
    [4400, "Four thousand, four hundred"],
    [44400, "Forty four thousand, four hundred"],
    [444400, "Four hundred and forty four thousand, four hundred"],
    /* - - - - - - - - - - - */
    [5000, "Five thousand"],
    [50000, "Fifty thousand"],
    [500000, "Five hundred thousand"],
    //
    [5005, "Five thousand and five"],
    [50055, "Fifty thousand and fifty five"],
    [500555, "Five hundred thousand, five hundred and fifty five"],
    //
    [5500, "Five thousand, five hundred"],
    [55500, "Fifty five thousand, five hundred"],
    [555500, "Five hundred and fifty five thousand, five hundred"],
    /* - - - - - - - - - - - */
    [6000, "Six thousand"],
    [60000, "Sixty thousand"],
    [600000, "Six hundred thousand"],
    //
    [6006, "Six thousand and six"],
    [60066, "Sixty thousand and sixty six"],
    [600666, "Six hundred thousand, six hundred and sixty six"],
    //
    [6600, "Six thousand, six hundred"],
    [66600, "Sixty six thousand, six hundred"],
    [666600, "Six hundred and sixty six thousand, six hundred"],
    /* - - - - - - - - - - - */
    [7000, "Seven thousand"],
    [70000, "Seventy thousand"],
    [700000, "Seven hundred thousand"],
    //
    [7007, "Seven thousand and seven"],
    [70077, "Seventy thousand and seventy seven"],
    [700777, "Seven hundred thousand, seven hundred and seventy seven"],
    //
    [7700, "Seven thousand, seven hundred"],
    [77700, "Seventy seven thousand, seven hundred"],
    [777700, "Seven hundred and seventy seven thousand, seven hundred"],
    /* - - - - - - - - - - - */
    [8000, "Eight thousand"],
    [80000, "Eighty thousand"],
    [800000, "Eight hundred thousand"],
    //
    [8008, "Eight thousand and eight"],
    [80088, "Eighty thousand and eighty eight"],
    [800888, "Eight hundred thousand, eight hundred and eighty eight"],
    //
    [8800, "Eight thousand, eight hundred"],
    [88800, "Eighty eight thousand, eight hundred"],
    [888800, "Eight hundred and eighty eight thousand, eight hundred"],
    /* - - - - - - - - - - - */
    [9000, "Nine thousand"],
    [90000, "Ninety thousand"],
    [900000, "Nine hundred thousand"],
    //
    [9009, "Nine thousand and nine"],
    [90099, "Ninety thousand and ninety nine"],
    [900999, "Nine hundred thousand, nine hundred and ninety nine"],
    //
    [9900, "Nine thousand, nine hundred"],
    [99900, "Ninety nine thousand, nine hundred"],
    [999900, "Nine hundred and ninety nine thousand, nine hundred"]
  ] as TestItems).forEach(createTest);
});

describe("million suffix values", () => {
  // prettier-ignore
  ([
    [1234567, "One million, two hundred and thirty four thousand, five hundred and sixty seven"],
    [12345678, "Twelve million, three hundred and forty five thousand, six hundred and seventy eight"],
    [123456789, "One hundred and twenty three million, four hundred and fifty six thousand, seven hundred and eighty nine"]
  ] as TestItems).forEach(createTest);
});

describe("billion suffix values", () => {
  // prettier-ignore
  ([
    [1234567890, "One billion, two hundred and thirty four million, five hundred and sixty seven thousand, eight hundred and ninety"],
    [12345678901, "Twelve billion, three hundred and forty five million, six hundred and seventy eight thousand, nine hundred and one"],
    [123456789012, "One hundred and twenty three billion, four hundred and fifty six million, seven hundred and eighty nine thousand and twelve"],
  ] as TestItems).forEach(createTest);
});

describe("trillion suffix values", () => {
  // prettier-ignore
  ([
    [1234567890123, "One trillion, two hundred and thirty four billion, five hundred and sixty seven million, eight hundred and ninety thousand, one hundred and twenty three"],
    [12345678901234, "Twelve trillion, three hundred and forty five billion, six hundred and seventy eight million, nine hundred and one thousand, two hundred and thirty four"],
    [123456789012345, "One hundred and twenty three trillion, four hundred and fifty six billion, seven hundred and eighty nine million, twelve thousand, three hundred and forty five"],
  ] as TestItems).forEach(createTest);
});

describe("is not a number validation", () => {
  [
    "123",
    false,
    () => 123,
    0 / 0 //
  ].forEach(createError("is not a number"));
});

describe("is too large validation", () => {
  [
    1000000000000000 //
  ].forEach(createError("is too large"));
});
