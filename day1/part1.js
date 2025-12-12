const { getFileData } = require('../readFile');

const data = getFileData('day1/input.txt');

let startPoint = 50;
let password = 0;

for (const i in data) {
  const letter = data[i].slice(0, 1);
  const number = parseInt(data[i].slice(1));

  if (letter === 'R') {
    startPoint += number;
    startPoint = startPoint % 100;
  } else {
    startPoint += 100 - number;
    startPoint = startPoint % 100;
  }

  if (startPoint === 0) {
    password++;
  }
}

console.log(password);
