// Square
console.group("Square");
//const squareSide = 5;
//console.log(`The side of the Square Side measure: ${squareSide}cm`);

const squarePerimeter = (side) => side * 4;
//console.log(`The perimeter of the square is: ${squarePerimeter}cm`);

const squareArea = (side) => side * side;
//console.log(`The area of the square is: ${squareArea}cm^2`);

console.groupEnd();
// Triangle
console.group("Triangle");

const trianglePerimeter = (sidea, sideb, base) => {
  return sidea + sideb + base;
};

const triangleArea = (base, height) => {
  return (base * height) / 2;
};

console.groupEnd();

// Circles
console.group("Circle");
const PI = Math.PI;

const circleDiameter = (radio) => {
  return radio * 2;
};

const circlePerimeter = (radio) => {
  diameter = circleDiameter(radio);
  return diameter * PI;
};

const circleArea = (radio) => {
  return radio * radio * PI;
};

console.groupEnd();

const calculateSquarePerimeter = () => {
  const side = document.querySelector("#squareInput").value;
  alert(`The perimeter of the square is:  ${squarePerimeter(side)}`);
};

const calculateSquareArea = () => {
  const side = document.querySelector("#squareInput").value;
  alert(`The perimeter of the square is:  ${squareArea(side)}`);
};
