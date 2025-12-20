const { getFileData } = require("../readFile");

const data = getFileData("day8/test.txt");

const extractJunctionBoxCoordinates = (data) =>
  data.map((line) => {
    const [x, y, z] = line.split(",").map(Number);
    return { x, y, z };
  });

const calculateDistance = (point1, point2) => {
  const xDist = point1.x - point2.x;
  const yDist = point1.y - point2.y;
  const zDist = point1.z - point2.z;

  return Math.sqrt(xDist ** 2 + yDist ** 2 + zDist ** 2);
};

const getAllDistances = (junctionBoxes) => {
  const distances = [];
  for (let i = 0; i < junctionBoxes.length - 1; i++) {
    const point1 = junctionBoxes[i];
    for (let j = i + 1; j < junctionBoxes.length; j++) {
      const point2 = junctionBoxes[j];
      const distance = calculateDistance(point1, point2);
      distances.push({ i, j, distance });
    }
  }
  return distances;
};

const jb = extractJunctionBoxCoordinates(data);
const distances = getAllDistances(jb);
console.log(distances);
