const { getFileData } = require('../readFile');

const data = getFileData('day2/input.txt');

const isInvalidId = (id) => {
  if (id.length % 2 === 0) {
    const separator = id.length / 2;
    const firstNumber = parseInt(id.slice(0, separator));
    const secondNumber = parseInt(id.slice(separator));
    if (firstNumber === secondNumber) {
      return true;
    }
  }
  return false;
};

let answer = 0;

for (const range of data) {
  const rangeArr = range.split('-');
  const startNumber = parseInt(rangeArr[0]);
  const endNumber = parseInt(rangeArr[1]);
  for (
    let currentNumber = startNumber;
    currentNumber <= endNumber;
    currentNumber++
  ) {
    if (isInvalidId(currentNumber.toString())) {
      answer += currentNumber;
    }
  }
}

console.log(answer);
