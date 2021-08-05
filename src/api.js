const romanAndNumeral = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};
const allRomans = Object.keys(romanAndNumeral);
const allNumerals = Object.keys(romanAndNumeral).map((obj) => romanAndNumeral[obj]);

const parse = (str) => {
  if (typeof (str) !== 'string') {
    throw new Error('Not a string');
  }

  const romans = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
  const strArray = str.split('');
  const verifyString = strArray.map((word) => romans.includes(word));

  if (verifyString.includes(false)) {
    throw new Error('Unknown roman numeral');
  }
  if (strArray[0] === 'L' && strArray[1] === 'L') {
    throw new Error('Invalid repetition of number starting with 5: L (50)');
  }
  if (strArray[0] === strArray[1] && strArray[0] === strArray[2] && strArray[0] === strArray[3]) {
    throw new Error('Too many repetitions of roman numeral I');
  }
  if (strArray.length > 1 && strArray[0] === 'V' && romans.splice(1, 6).includes(strArray[1])) {
    throw new Error('Invalid substraction prefix V');
  }
  if (strArray.length > 1 && strArray[0] === 'L') {
    throw new Error('Invalid order');
  }

  let arabics = 0;
  let strNew = str;

  for (let i = 0; i <= allNumerals.length; i += 1) {
    while (strNew.indexOf(allRomans[i]) === 0) {
      arabics += allNumerals[i];
      strNew = strNew.replace(allRomans[i], '');
    }
  }

  return arabics;
};

const stringify = (num) => {
  if (typeof (num) !== 'number') {
    throw new Error('Not a number');
  }
  if (num >= 4000 || num <= -1) {
    throw new Error('out of range');
  }

  let romans = '';
  let numNew = num;
  for (let i = 0; i < allRomans.length; i += 1) {
    while (numNew >= allNumerals[i]) {
      numNew -= allNumerals[i];
      romans += allRomans[i];
    }
  }
  return romans;
};

module.exports = {
  parse,
  stringify,
};
