enum ShapeType {
  Circle,
  Square,
}

const calculateNumberSquare = (number: number): number => Math.pow(number, 2);
const multiplyNumbers = (firstNumber: number, secondNumber: number): number => firstNumber * secondNumber

function calculateArea(shape: ShapeType, radiusOrSide: number): number {
  const firstParam = shape === ShapeType.Circle ? Math.PI : 1;
  const powedRadiusOrSide = calculateNumberSquare(radiusOrSide);
  const area = multiplyNumbers(firstParam, powedRadiusOrSide)
  return +area.toFixed(2);
}

console.log(calculateArea(ShapeType.Circle, 5)); // Output: 78.54

//Математические операции лучше вынести в отдельные функции, хранящиеся, например, в utils. 
// SwitchCase, на мой взгляд, не нужен, достаточно сделать проверку первого множителя в зависимости от shape