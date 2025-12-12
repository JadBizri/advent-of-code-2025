const { getFileData } = require('../readFile');

const data = getFileData('day2/input.txt');

const sliceIdIntoChunks = (id, chunkSize) => {
  const chunks = [];
  for (let i = 0; i < id.length; i += chunkSize) {
    chunks.push(id.substring(i, i + chunkSize));
  }
  return chunks;
};

const isInvalidId = (id) => {
  let currentMaxNumberOfSequences = id.length;
  let iteration = 1;

  while (iteration < id.length) {
    if (currentMaxNumberOfSequences % 1 === 0) {
      const sequenceSize = id.length / currentMaxNumberOfSequences;
      const sequenceArr = sliceIdIntoChunks(id, sequenceSize);
      const allEqual = sequenceArr.every((seq) => seq === sequenceArr[0]);
      if (allEqual) {
        return true;
      }
    }
    currentMaxNumberOfSequences = id.length / iteration;
    iteration++;
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
