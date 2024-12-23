interface Stack<T> {
  pop(): T | null;
  push(item: T): void;
  percentFull(): number;
}

//методы pop и push обязательны. Если UnlimitedStack подразумевает только наличие метода percentFull, то нужно доработать типизацию

class UnlimitedStack<T> implements Pick<Stack<T>, 'percentFull'> {
  percentFull(): number {
    return 0;
  }
}
