const { getFileData } = require("../readFile");

const data = getFileData("day7/input.txt");

const rows = data.length;
const cols = data[0].length;

const startingColIndex = (cols - 1) / 2;

let currentBeamIndexes = new Set([startingColIndex]);
const visitedSplitters = new Set();

const getSplitterCount = () => {
  let count = 0;

  for (let row = 0; row < rows; row++) {
    const nextRowBeamIndexes = new Set();

    for (const col of currentBeamIndexes) {
      if (col < 0 || col >= cols) continue;

      if (data[row][col] === "^") {
        const key = `${row},${col}`;
        if (!visitedSplitters.has(key)) {
          visitedSplitters.add(key);
          count++;
        }

        nextRowBeamIndexes.add(col - 1);
        nextRowBeamIndexes.add(col + 1);
      } else {
        nextRowBeamIndexes.add(col);
      }
    }

    currentBeamIndexes = nextRowBeamIndexes;
    if (currentBeamIndexes.size === 0) break;
  }

  return count;
};

console.log(getSplitterCount());
