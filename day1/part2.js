const { getFileData } = require("../readFile");

const data = getFileData("day1/input.txt");

let dial = 50;
let passwordCount = 0;

for (const line of data) {
  const direction = line[0];
  const rotations = parseInt(line.slice(1), 10);

  const step = direction === "R" ? 1 : -1;

  for (let i = 0; i < rotations; i++) {
    dial += step;

    if (dial < 0) dial = 99;
    if (dial > 99) dial = 0;

    if (dial === 0) passwordCount++;
  }
}

console.log(passwordCount);
