// Модуль 1
// вместо цикла возможно воспользоваться методом reduce, сократив код
function calculateTotalPrice(items) {
  return items.reduce((item, acc) => acc += item, 0)
}

// Модуль 2
//для читаемости расчет множителя можно вынести в отдельную функцию 
function getPercentage(discountPercentage) {
  return 1 - discountPercentage / 100
}

function applyDiscount(totalPrice, discountPercentage) {
  return totalPrice * getPercentage(discountPercentage);
}