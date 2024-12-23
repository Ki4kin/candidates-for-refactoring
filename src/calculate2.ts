const isNumber = (arg: unknown): arg is number => typeof arg === 'number';

function calculateSum(a, b) {
  if (isNumber(a) && isNumber(b)) {
    return a + b;
  } else {
    throw new Error('Складывать можно только числа');
  }
}

//Также непонятно из названия функции что именно она расчитывает. Отсутствует типизация, соответственно необходимо либо строго добавить тип параметров, либо проверить тип, используя TypeGuard  