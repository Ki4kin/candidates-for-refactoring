type MathFuncType = (a: number, b: number) => number;
class Calculator {
  public add: MathFuncType = (a, b) => a + b;

  public subtract: MathFuncType = (a, b) => a - b;

  public multiply: MathFuncType = (a, b) => a * b;

  public divide: MathFuncType = (a, b) => a / b;
}

//Все методы имеют одинаковую типизацию, чтобы избежать повторения вынес ее в отдельный тип