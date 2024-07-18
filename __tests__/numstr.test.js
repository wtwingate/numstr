import { numToStr, generateNumStr, getLetterData } from "../app/numstr";

test('converts 1 to "one"', () => {
  expect(numToStr(1)).toBe("one");
});

test('converts 10 to "ten"', () => {
  expect(numToStr(10)).toBe("ten");
});

test('converts 100 to "onehundred"', () => {
  expect(numToStr(100)).toBe("onehundred");
});

test('converts 123 to "onehundredtwentythree"', () => {
  expect(numToStr(123)).toBe("onehundredtwentythree");
});

test('converts 12 to "twelve"', () => {
  expect(numToStr(12)).toBe("twelve");
});

test('converts 512 to "fivehundredtwelve"', () => {
  expect(numToStr(512)).toBe("fivehundredtwelve");
});

test('converts 999 to "ninehundredninetynine"', () => {
  expect(numToStr(999)).toBe("ninehundredninetynine");
});

test('converts   to ""', () => {
  expect(numToStr()).toBe("");
});

test('generates "onetwothree" from start=1 end=3', () => {
  expect(generateNumStr(1, 3)).toBe("onetwothree");
});

test('generates "teneleventwelvethirteenfourteenfifteensixteenseventeeneighteennineteentwenty" from start=10 end=20', () => {
  expect(generateNumStr(10, 20)).toBe(
    "teneleventwelvethirteenfourteenfifteensixteenseventeeneighteennineteentwenty",
  );
});

test('generates "ninetynineonehundredonehundredone" from start=99 end=101', () => {
  expect(generateNumStr(99, 101)).toBe("ninetynineonehundredonehundredone");
});

test('generates "fortytwo" from start=42 end=42', () => {
  expect(generateNumStr(42, 42)).toBe("fortytwo");
});

test("counts the occurences of letters in a string", () => {
  expect(getLetterData("helloworld")).toEqual([
    { letter: "h", count: 1 },
    { letter: "e", count: 1 },
    { letter: "l", count: 3 },
    { letter: "o", count: 2 },
    { letter: "w", count: 1 },
    { letter: "r", count: 1 },
    { letter: "d", count: 1 },
  ]);
});

test("counts the occurences of letters in an empty string", () => {
  expect(getLetterData("")).toEqual([]);
});
