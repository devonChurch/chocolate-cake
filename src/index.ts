interface ReduceValue {
  // The current accumulated text from parsing the supplied numerical value thus
  // far.
  text: string;
  // The remaining numerical value that has not yet been parsed into text.
  remaining: number;
  // The current increment "key" (as a number, object keys are originally strings)
  // that the recursive sequence in reducing on.
  // Example:
  // 1000 = thousands
  // 100 = hundreds
  increment: number;
  // The sequence that generate the text representation according to the current
  // increment in the iteration.
  append(value: number): string;
}

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

// The prefix for multi digit values (that are not accounted for in the outliers
// map) that can be automated in their structure.
// Example:
// 13 = "thir" + "teen"
// 30 = "thir" + "ty"
const multiMap = {
  ...singleMap,
  2: "twen",
  3: "thir",
  4: "for",
  5: "fif",
  8: "eigh"
};

// For numbers 99 and under we no longer need to recurse through a to generate a
// text version of the number. From this point we can use our "look-up maps" to
// derive the final text.
const createDoubleAndUnder = (value: number): string => {
  // Static.
  // -------
  // If we can simply extract the text from the static map then we can return and
  // exit early.
  const staticText = staticMap[value];
  if (staticText) return staticText;

  // Keys.
  // -----
  // Get the prefix and suffix for the current number.
  // Example:
  // 19 = [prefix = 1], [suffix = 9]
  // 27 = [prefix = 2], [suffix = 7]
  const prefixKey = Math.floor(value / 10);
  const suffixKey = value % 10;

  // Teen.
  // -----
  // "Teen" numbers are slightly difference in that their prefix and suffix are
  // swapped.
  // Example:
  // If a number was 29 then we would prefix it with "twen" followed by a "ty" to
  // make "twenty".
  // However:
  // If a number is 19 then we would prefix with the suffix "nine" followed by a
  // "teen" to make "nineteen".
  const isTeen = prefixKey === 1;
  if (isTeen) return `${multiMap[suffixKey]}teen`;

  // Standard.
  // ---------
  // Finally if there are no matches thus far we can create a "standard" text
  // version for numbers 20 through to 99.
  const prefixText = `${multiMap[prefixKey]}ty`;
  const suffixText = suffixKey ? ` ${staticMap[suffixKey]}` : "";

  return `${prefixText}${suffixText}`;
};

// If a number is 99 or less we can immediately find out its text representation.
// If not we continue to recurse through to distill the remaining number closeer
// and closer to be less than 99.
const conditionallyRecurse = (value: number): string =>
  value < 100 ? createDoubleAndUnder(value) : recurseValue(value);

// Take a value of "zeros" and creates an increment key.
// Example"
// 2 zeros = [100]
// 6 zeros = [1000000]
const createIncrementKey = (zeros: number): string =>
  `1${new Array(zeros).fill(0).join("")}`;

const incrementMap = [
  // The number of "zeros" in each increment (KEY) and their corresponding text
  // represented suffix (VALUE).
  [1, ""],
  [2, " hundred"],
  [3, " thousand,"],
  [6, " million,"],
  [9, " billion,"],
  [12, " trillion,"],
  [15, " quadrillion,"],
  [18, " quintillion,"]
].reduce(
  // Turn this configuration into a map of key/value pairs to build a recursive
  // increment system.
  // Example:
  // {
  //   ...
  //   [100]: value => (/* create (hundred)... */),
  //   [1000]: value => (/* create (thousand)... */),
  //   ...
  // }
  (acc, [zeros, suffix]) => ({
    ...acc,
    [createIncrementKey(Number(zeros))]: (value: number): string =>
      `${conditionallyRecurse(value)}${suffix}`
  }),
  {}
);

// Order the incrementMap into an array from largest to smallest increment so
// that we can recursively iterate through and build up a text representation
// for each major increment milestone (millions, thousands, hundreds).
const incrementCheck = Object.entries(incrementMap).sort(
  ([incrementA], [incrementB]) => (incrementA < incrementB ? 1 : -1)
);

// Distill the remaining numerical value closer to 0 while building up the text
// representation to emulate the value extracted thus far.
const reduceValue = ({ text, remaining, increment, append }: ReduceValue) => {
  // Stop recursing if we have finally reached zero for the remaining number.
  const isZero = remaining === 0;
  if (isZero) return { text, remaining: 0 };

  // If the remaining number is less than 99 (on the 10 increment) then we can
  // derive the last text representation without recursing further.
  const isFinalRecurse = increment === 10;
  if (isFinalRecurse)
    // Note: we add "and" to the text as its the final value in the current sequence.
    // Example:
    // one thousand and one
    //              ---
    // Or:
    // five and seven thousand, four hundred and two
    //     ---                              ---
    return { text: `${text} and ${append(remaining)}`, remaining: 0 };

  // If the remaining number is too small for the current increment then skip the
  // current increment and move on. This can happen if there are no relevant value
  // for the current increment.
  // Example:
  // 1,001 = "one thousand and one"
  // We completely skip the "hundreds" increment as its not relevant for this
  // number.
  const isTooSmall = increment > remaining;
  if (isTooSmall) return { text, remaining };

  // If there are no matches thus far then we get the current values associated
  // to the increment and extract the remaining values for then next recursive
  // iteration.
  // Example:
  // 1234 = [1000 for the "thousands" increment] and [234 remaining for the next
  // iteration].
  const remainingNow = Math.floor(remaining / increment);
  const remainingNext = remaining % increment;

  // If there are no remaining values then we ensure that the recursion stops in
  // the next "isZero" check.
  const hasNext = remainingNext > 0;
  if (!hasNext)
    return { text: `${text} ${append(remainingNow)}`, remaining: 0 };

  // Generate the current text representation for this increment and return the
  // remaining values so that we can continue the recursion sequence in the next
  // iteration.
  return { text: `${text} ${append(remainingNow)}`, remaining: remainingNext };
};

// As we recursively grow the text representation of the supplied value we can
// run into anomalies due to an isolation from what next/previous increments in
// the recursion sequence are doing. In that regard this is a final check to ensure
// that the structure of the numerical text is consistent with the required format.
const sanitiseText = (text: string): string => {
  const replacedText = text
    // Should start flush with text (no white space).
    .replace(/^\s*/g, "")
    // Should not start with "and " (can happen when the number is one or two
    // digits in size).
    .replace(/^(and)(\s*)/g, "")
    // " and" should not be preceded by a comma (as it's the last reference in
    // the string "section").
    .replace(/, and/g, " and")
    // Should end flush with text (no white space or trailing commas).
    .replace(/(,*|\s*)$/g, "")
    // White space inside the text representation should only be once space in
    // size.
    .replace(/\s\s(\s*)?/g, " ");
  // Capitalise the first letter in the string sequence.
  const capital = replacedText.slice(0, 1).toUpperCase();
  const remaining = replacedText.slice(1);

  return `${capital}${remaining}`;
};

// Iterate through each increment size (from largest to smallest) and build up a
// text representation of the supplied value.
// As we recurse through the increments the text representation grows and the
// remaining number shrinks until it reaches 0.
const recurseValue = (value: number): string => {
  // Start with an empty string and a "remaining" numerical value of the full
  // supplied number.
  const shell = { text: "", remaining: value };
  const { text } = incrementCheck.reduce(
    (acc, [increment, append]) =>
      reduceValue({
        ...acc,
        increment: Number(increment),
        append
      } as ReduceValue),
    shell
  );

  return text;
};

const chocolateCake = (value: number): string => {
  const text = value ? recurseValue(value) : staticMap[0];

  return sanitiseText(text);
};

export default chocolateCake;
