const calculateNumberSquare = (number: number): number => Math.pow(number, 2);

function calculateArea2(radius: number): number {
  return Math.PI * calculateNumberSquare(radius); // "волшебное число" 3.14
}

//также можно переиспользовать функцию calculateNumberSquare, константу Пи лучше использовать встроенную, как минимум для большей точности расчетов  
