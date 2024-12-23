// лучше переиспользовать функцию из utils
const multiplyNumbers = (firstNumber: number, secondNumber: number): number =>
  firstNumber * secondNumber;
const totalPrice = multiplyNumbers(quantity, price);

//в функции не было проверки на длину номера телефона, также можно использовать один раз match вместо трех slice
function formatPhoneNumber(number: number) {
  const stringPhoneNumber = number.toString();
  if (stringPhoneNumber.length === 10) {
    const match = stringPhoneNumber.match(/^(\d{3})(\d{3})(\d{4})$/);
    return `(${match?.[1]}) ${match?.[2]}-${match?.[3]}`;
  }
  throw new Error('Неверный формат номера телефона.');
}
