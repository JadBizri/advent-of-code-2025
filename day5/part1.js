const { getFileData } = require("../readFile");

const data = getFileData("day5/input.txt");

const getFreshIngredients = (data) => {
  let rangeCheckDone = false;
  let ranges = [];
  const freshIngredientsSet = new Set();

  for (const line of data) {
    if (line === "") {
      rangeCheckDone = true;
      continue;
    }
    if (!rangeCheckDone) {
      const rangeSplit = line.split("-");
      const rangeStart = parseInt(rangeSplit[0]);
      const rangeEnd = parseInt(rangeSplit[1]);
      ranges.push({ rangeStart, rangeEnd });
    } else {
      const availableId = parseInt(line);
      for (const range of ranges) {
        if (availableId >= range.rangeStart && availableId <= range.rangeEnd) {
          freshIngredientsSet.add(availableId);
        }
      }
    }
  }
  return freshIngredientsSet.size;
};

console.log(getFreshIngredients(data));
