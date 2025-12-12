const { getFileData } = require('../readFile');

const grid = getFileData('day4/input.txt');

let answer = 0;

const rowLength = grid.length;
const columnLength = grid[0].length;

const isAccessable = (row, column) => {
  let countOfSurroundingRolls = 0;

  for (let r = row - 1; r <= row + 1; r++) {
    if (r < 0 || r >= rowLength) {
      continue;
    }
    for (let c = column - 1; c <= column + 1; c++) {
      if (c < 0 || c >= columnLength) {
        continue;
      }
      if (r === row && c === column) {
        continue;
      }
      if (grid[r][c] === '@') {
        countOfSurroundingRolls++;
        if (countOfSurroundingRolls > 3) {
          return false;
        }
      }
    }
  }
  return true;
}

for (let i = 0; i < rowLength; i++) {
  for (let j = 0; j < columnLength; j++) {
    if (grid[i][j] === '@') {
      if (isAccessable(i, j)) {
        answer++;
      }
    }
  }
}

console.log(answer);
