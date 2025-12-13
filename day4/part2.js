const { getFileData } = require('../readFile');

const data = getFileData('day4/input.txt');

const rowLength = data.length;
const columnLength = data[0].length;

const isAccessable = (currGrid, row, column) => {
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
      if (currGrid[r][c] === '@') {
        countOfSurroundingRolls++;
        if (countOfSurroundingRolls > 3) {
          return false;
        }
      }
    }
  }
  return true;
}

const getNumberOfAccessibleRollsByGrid = (grid) => {
  let accessableRolls = 0;
  const newGridState = [...grid];
  for (let i = 0; i < rowLength; i++) {
    for (let j = 0; j < columnLength; j++) {
      if (grid[i][j] === '@') {
        if (isAccessable(grid, i, j)) {
          accessableRolls++;
          newGridState[i] = newGridState[i].substring(0, j) + 'x' + newGridState[i].substring(j + 1);
        }
      }
    }
  }
  return { numberOfAccessibleRolls: accessableRolls, gridState: newGridState };
}

const getTotalNumberOfAccessibleRolls = (currentGrid) => {
  const { numberOfAccessibleRolls, gridState } = getNumberOfAccessibleRollsByGrid(currentGrid);
  if (numberOfAccessibleRolls > 0) {
    return getTotalNumberOfAccessibleRolls(gridState) + numberOfAccessibleRolls;
  } else {
    return 0;
  }
}

console.log(getTotalNumberOfAccessibleRolls(data));
