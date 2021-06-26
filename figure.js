// Square
console.group("Square");
//const squareSide = 5;
//console.log(`The side of the Square Side measure: ${squareSide}cm`);

const squarePerimeter = (side) =>  side * 4;
//console.log(`The perimeter of the square is: ${squarePerimeter}cm`);

const squareArea = (side) => side * side;
//console.log(`The area of the square is: ${squareArea}cm^2`);

console.groupEnd();
// Triangle
console.group("Triangle");
const triangleSideA = 6;
const triangleSideB = 6;
const triangleSideBase = 4;
const triangleHeight = 5.5;

console.log(
  `The sides of the triangle Side measure: ${triangleSideA}cm, ${triangleSideB}cm, ${triangleSideBase}cm`
);
console.log(`The triangle height is: ${triangleHeight}cm`);

const trianglePerimeter = triangleSideA + triangleSideB + triangleSideBase;

console.log(`The perimeter of the triangle is: ${trianglePerimeter}cm`);

const triangleArea = (triangleSideBase * triangleHeight) / 2;

console.log(`The area of the triangle is: ${triangleArea}cm^2`);

console.groupEnd();

// Circles
console.group("Circle");

const radio = 4;
const PI = Math.PI;

const circleDiameter = radio * 2;
const circlePerimeter = circleDiameter * PI;
const circleArea = (radio * radio) * PI;

console.log(`The diameter of the circle is: ${circleDiameter}cm`);
console.log(`The perimeter of the circle is: ${circlePerimeter}cm`);
console.log(`The area of the circle is: ${circleArea}cm^2`);

console.groupEnd();
