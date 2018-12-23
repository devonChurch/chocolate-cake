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

const incrementMap = {
  10: value => `and ${createDoubleAndUnder(value)}`,
  100: value => `${createDoubleAndUnder(value)} hundred`
  // Higher increments must recurse?
};

const incrementCheck = Object.entries(incrementMap).sort(
  ([incrementA], [incrementB]) => (incrementA < incrementB ? 1 : -1)
);

const queryValue = ({ text, number, increment, append }) => {
  debugger;

  const isZero = number === 0;
  if (isZero) return { text, number: 0 };

  const isFinalRecurse = increment === 10;
  if (isFinalRecurse) return { text: `${text} ${append(number)}`, number: 0 };

  const isTooSmall = increment > number;
  if (isTooSmall) return { text, number };

  const numberNow = Math.floor(number / increment);
  const numberNext = number % increment;
  const hasNext = numberNext > 0;
  if (!hasNext) return { text: `${text} ${append(numberNow)}`, number: 0 };

  return { text: `${text} ${append(numberNow)}`, number: numberNext };
};

const recurseValue = value => {
  const shell = { text: "", number: value };
  const { text } = incrementCheck.reduce(
    (acc, [increment, append]) =>
      queryValue({ ...acc, increment: Number(increment), append }),
    shell
  );

  return text.replace(/^\s*/, "").replace(/^(and)(\s*)/, "");
};

const chocolateCake = value => (value ? recurseValue(value) : staticMap[value]);

export default chocolateCake;
