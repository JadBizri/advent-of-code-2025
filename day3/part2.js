const { getFileData } = require('../readFile');

const data = getFileData('day3/input.txt');

let answer = 0;

for (const bank of data) {
  let remainingDigits = 12;

  for (let left = 0; remainingDigits > 0; left++) {
    let current = 0;
    for (let right = left; right <= bank.length - remainingDigits; right++) {
      const bankRightPointer = parseInt(bank[right]);
      if (current < bankRightPointer) {
        current = bankRightPointer;
        left = right;
      }
    }
    remainingDigits--;
    answer += current * 10 ** remainingDigits;
  }
}

console.log(answer);
