const NUMSTR = {
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
  10: "ten",
  11: "eleven",
  12: "twelve",
  13: "thirteen",
  14: "fourteen",
  15: "fifteen",
  16: "sixteen",
  17: "seventeen",
  18: "eighteen",
  19: "nineteen",
  20: "twenty",
  30: "thirty",
  40: "forty",
  50: "fifty",
  60: "sixty",
  70: "seventy",
  80: "eighty",
  90: "ninety",
  100: "hundred",
};

function generateNumStr(start, end) {
  const numArray = [];
  for (let i = start; i < end + 1; i++) {
    numArray.push(i);
  }

  const strArray = [];
  for (let num of numArray) {
    strArray.push(numToStr(num));
  }

  return strArray.join("");
}

function numToStr(n) {
  const ones = n % 10;
  const tens = (n % 100) - ones;
  const hundreds = (n % 1000) - tens - ones;

  if (tens === 10) {
    let str1 = hundreds ? NUMSTR[hundreds / 100] + "hundred" : "";
    let str2 = NUMSTR[tens + ones];
    return str1 + str2;
  } else {
    let str1 = hundreds ? NUMSTR[hundreds / 100] + "hundred" : "";
    let str2 = tens ? NUMSTR[tens] : "";
    let str3 = ones ? NUMSTR[ones] : "";
    return str1 + str2 + str3;
  }
}

function getLetterData(string) {
  const letterData = [];
  for (let i = 0; i < string.length; i++) {
    const letter = string.charAt(i);
    const data = letterData.find((e) => e.letter === letter);
    if (data) {
      data.count++;
    } else {
      letterData.push({ letter: letter, count: 1 });
    }
  }
  return letterData;
}

export { getLetterData, generateNumStr, numToStr };
