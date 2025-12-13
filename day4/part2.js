const { getFileData } = require('../readFile');

const data = getFileData('day4/input.txt');

const rowLength = data.length;
const columnLength = data[0].length;

const isAccessable = (currGrid, row, column) => {
  const previousRow = row - 1;
  const nextRow = row + 1;
  const previousColumn = column - 1;
  const nextColumn = column + 1;
  let countOfSurroundingRolls = 0;

  for (let r = previousRow; r <= nextRow; r++) {
    if (r < 0 || r >= rowLength) {
      continue;
    }
    for (let c = previousColumn; c <= nextColumn; c++) {
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
  for (let row = 0; row < rowLength; row++) {
    for (let column = 0; column < columnLength; column++) {
      const value = grid[row][column];
      if (value === '@' && isAccessable(grid, row, column)) {
        accessableRolls++;
        newGridState[row] = newGridState[row].substring(0, column) + 'x' + newGridState[row].substring(column + 1);
      }
    }
  }
  return { numberOfAccessibleRolls: accessableRolls, gridState: newGridState };
}

const getTotalNumberOfAccessibleRolls = (currentGrid) => {
  const { numberOfAccessibleRolls, gridState } = getNumberOfAccessibleRollsByGrid(currentGrid);
  if (numberOfAccessibleRolls > 0) {
    return getTotalNumberOfAccessibleRolls(gridState) + numberOfAccessibleRolls;
  }
  return 0;
}

console.log(getTotalNumberOfAccessibleRolls(data));
