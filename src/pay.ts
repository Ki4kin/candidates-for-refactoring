const checkPayDayAndDeliverPay = (employee) => {
  const { isPayday, calculatePay, deliverPay } = employee;
  isPayday() && deliverPay(calculatePay());
};

const pay = () => employees.forEach((employee) => checkPayDayAndDeliverPay(employee));

//Вместо цикла для обхода элементов массива лучше использовать forEach, логику проверки отделил от логики функции pay
