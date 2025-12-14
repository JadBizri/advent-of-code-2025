const { getFileData } = require("../readFile");

const data = getFileData("day6/input.txt");

const chunkArray = (originalArray, chunkSize) => {
  const resultArrays = [];
  for (let i = 0; i < originalArray.length; i += chunkSize) {
    const chunk = originalArray.slice(i, i + chunkSize);
    resultArrays.push(chunk);
  }
  return resultArrays;
};

const transformData = (d) => {
  const allValues = [];
  // get each value from data sorted by column order
  for (let i = 0; i < d[0].length; i++) {
    for (let j = 0; j < d.length; j++) {
      allValues.push(d[j][i]);
    }
  }

  const columnLength = d.length;
  // group all values by column
  const valuesPerCol = chunkArray(allValues, columnLength);

  // filter out empty arrays and empty spaces
  const filteredValuesPerCol = valuesPerCol
    .map((arr) => arr.filter((a) => a !== " "))
    .filter((a) => a.length !== 0);

  return filteredValuesPerCol;
};

const getParsedValueOfCol = (colArr) => {
  let numString = "";
  for (value of colArr) numString += value;
  return parseInt(numString);
};

const calculateResult = (rawData) => {
  let totalAnswer = 0;
  let currentOperator = "";
  let currentOperationTotal = 0;

  const valuesPerCol = transformData(rawData);
  for (const colArr of valuesPerCol) {
    const operator = colArr[colArr.length - 1];
    if (operator === "+" || operator === "*") {
      currentOperator = operator;
      totalAnswer += currentOperationTotal;
      currentOperationTotal = 0;
    }
    const currentValue = getParsedValueOfCol(colArr);
    if (currentOperator === "+") {
      currentOperationTotal += currentValue;
    } else {
      if (currentOperationTotal === 0) currentOperationTotal++;
      currentOperationTotal *= currentValue;
    }
  }
  totalAnswer += currentOperationTotal;

  return totalAnswer;
};

const result = calculateResult(data);
console.log(result);
