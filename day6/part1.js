const { getFileData } = require("../readFile");

const data = getFileData("day6/input.txt");

const parsedData = [];

for (const line of data) {
  const parsedLine = line.split(" ").filter((s) => s !== "");
  parsedData.push(parsedLine);
}

let total = 0;

for (let col = 0; col < parsedData[0].length; col++) {
  let totalSum = 0;
  let totalMultiplication = 1;
  for (let row = 0; row < parsedData.length; row++) {
    const value = parsedData[row][col];
    if (value === "+") {
      total += totalSum;
      break;
    }
    if (value === "*") {
      total += totalMultiplication;
      break;
    }
    const num = parseInt(value);
    totalSum += num;
    totalMultiplication *= num;
  }
}

console.log(total);
