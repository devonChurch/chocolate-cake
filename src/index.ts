const singleMap = {
  0: "zero",
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine"
};

const outlierMap = {
  10: "ten",
  11: "eleven",
  12: "twelve"
};

const staticMap = {
  ...singleMap,
  ...outlierMap
};

const multiMap = {
  ...singleMap,
  2: "twen",
  3: "thir",
  5: "fif",
  8: "eigh"
};

const chocolateCake = value => {
  // Static.
  const staticText = staticMap[value];
  if (staticText) return staticText;

  // Keys.
  const prefixKey = Math.floor(value / 10);
  const suffixKey = value % 10;

  return `${multiMap[suffixKey]}teen`;
};

export default chocolateCake;
