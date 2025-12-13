const { getFileData } = require("../readFile");

const data = getFileData("day5/input.txt");

const getFreshIngredients = (data) => {
  const ranges = [];

  // extract ranges from data
  for (const line of data) {
    if (line === "") {
      break;
    }
    const rangeSplit = line.split("-");
    const rangeStart = parseInt(rangeSplit[0]);
    const rangeEnd = parseInt(rangeSplit[1]);
    ranges.push({ rangeStart, rangeEnd });
  }

  // sort by rangeStart
  ranges.sort((a, b) => a.rangeStart - b.rangeStart);

  // merge range conflicts
  for (let i = 0; i < ranges.length; i++) {
    if (i === 0) {
      continue;
    }
    const currentRange = ranges[i];
    const previousRange = ranges[i - 1];
    if (currentRange.rangeStart <= previousRange.rangeEnd) {
      if (currentRange.rangeEnd <= previousRange.rangeEnd) {
        ranges.splice(i, 1);
      } else {
        previousRange.rangeEnd = currentRange.rangeEnd;
        ranges.splice(i, 1);
      }
      i--;
    }
  }

  // count based on each range's size
  let freshIngredientsCount = 0;
  for (const range of ranges) {
    const rangeSize = range.rangeEnd - range.rangeStart + 1;
    freshIngredientsCount += rangeSize;
  }

  return freshIngredientsCount;
};

console.log(getFreshIngredients(data));
