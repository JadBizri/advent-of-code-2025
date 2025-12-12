const { getFileData } = require('../readFile');

const data = getFileData('day3/input.txt');

let answer = 0;

for (const bank of data) {
  let largestJoltage = 0;

  for (let i = 0; i < bank.length; i++) {
    for (let j = i + 1; j < bank.length; j++) {
      const battery1 = bank[i];
      const battery2 = bank[j];
      const joltage = parseInt(battery1 + battery2);
      if (joltage > largestJoltage) {
        largestJoltage = joltage;
      }
    }
  }

  answer += largestJoltage;
}

console.log(answer);
