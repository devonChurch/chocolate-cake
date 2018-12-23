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
  // ten eleven and twelve share no affiliation to a `${prefix}${suffix}` style
  // system.
  10: "ten",
  11: "eleven",
  12: "twelve",
  // In the "teens" we need an extra "u" in the word "fourteen". All other
  // variants e.g. "forty" do not have a "u". Because of this we cannot use the
  // `${prefix}${suffix}` style system that works with something like "thirteen"
  // and "thirty".
  14: "fourteen"
};

const staticMap = {
  ...singleMap,
  ...outlierMap
};

const multiMap = {
  ...singleMap,
  2: "twen",
  3: "thir",
  4: "for",
  5: "fif",
  8: "eigh"
};

const createDoubleAndUnder = value => {
  // Static.
  const staticText = staticMap[value];
  if (staticText) return staticText;

  // Keys.
  const prefixKey = Math.floor(value / 10);
  const suffixKey = value % 10;

  // Teen.
  const isTeen = prefixKey === 1;
  if (isTeen) return `${multiMap[suffixKey]}teen`;

  // Standard.
  const prefixText = `${multiMap[prefixKey]}ty`;
  const suffixText = suffixKey ? ` ${staticMap[suffixKey]}` : "";

  return `${prefixText}${suffixText}`;
};

const conditionallyRecurse = value =>
  value < 100 ? createDoubleAndUnder(value) : recurseValue(value);

const createIncrementKey = zeros => `1${new Array(zeros).fill(0).join("")}`;

const incrementMap = [
  [1, ""],
  [2, " hundred"],
  [3, " thousand,"],
  [6, " million,"],
  [9, " billion,"],
  [12, " trillion,"],
  [15, " quadrillion,"],
  [18, " quintillion,"]
].reduce(
  (acc, [zeros, suffix]) => ({
    ...acc,
    [createIncrementKey(zeros)]: value =>
      `${conditionallyRecurse(value)}${suffix}`
  }),
  {}
);

const incrementCheck = Object.entries(incrementMap).sort(
  ([incrementA], [incrementB]) => (incrementA < incrementB ? 1 : -1)
);

const queryValue = ({ text, number, increment, append }) => {
  const isZero = number === 0;
  if (isZero) return { text, number: 0 };

  const isFinalRecurse = increment === 10;
  if (isFinalRecurse)
    return { text: `${text} and ${append(number)}`, number: 0 };

  const isTooSmall = increment > number;
  if (isTooSmall) return { text, number };

  const numberNow = Math.floor(number / increment);
  const numberNext = number % increment;
  const hasNext = numberNext > 0;
  if (!hasNext) return { text: `${text} ${append(numberNow)}`, number: 0 };

  return { text: `${text} ${append(numberNow)}`, number: numberNext };
};

const sanitiseText = (text: string): string => {
  const replacedText = text
    .replace(/^\s*/g, "")
    .replace(/^(and)(\s*)/g, "")
    .replace(/, and/g, " and")
    .replace(/(,*|\s*)$/g, "")
    .replace(/\s\s(\s*)?/g, " ");
  const capital = replacedText.slice(0, 1).toUpperCase();
  const remaining = replacedText.slice(1);

  return `${capital}${remaining}`;
};

const recurseValue = (value: number): string => {
  const shell = { text: "", number: value };
  const { text } = incrementCheck.reduce(
    (acc, [increment, append]) =>
      queryValue({ ...acc, increment: Number(increment), append }),
    shell
  );

  return text;
};

const chocolateCake = (value: number): string => {
  const text = value ? recurseValue(value) : staticMap[0];

  return sanitiseText(text);
};

export default chocolateCake;
