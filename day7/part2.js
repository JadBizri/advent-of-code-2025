const { getFileData } = require("../readFile");

const data = getFileData("day7/input.txt");

const rows = data.length;
const cols = data[0].length;

const startingColIndex = (cols - 1) / 2;

const memo = new Map();

const getTimelines = (rowIndex, colIndex) => {
  if (rowIndex === rows - 1) return 1;
  if (colIndex >= cols || colIndex < 0) return 0;

  const uniqKey = `R${rowIndex}C${colIndex}`;
  if (memo.has(uniqKey)) return memo.get(uniqKey);

  const value = data[rowIndex][colIndex];
  if (value === "^" || value === "S") {
    const result =
      getTimelines(rowIndex + 1, colIndex - 1) +
      getTimelines(rowIndex + 1, colIndex + 1);
    memo.set(uniqKey, result);
    return result;
  }

  const result = getTimelines(rowIndex + 1, colIndex);
  memo.set(uniqKey, result);
  return result;
};

console.log(getTimelines(0, startingColIndex));
