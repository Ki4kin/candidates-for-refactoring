const expressOrder = (item: unknown) => {
  // Логика обработки заказа с учетом экспресс-доставки
};
const standartOrder = (item: unknown) => {
  // Логика для стандартной доставки
};

function processOrder(item: unknown, isExpress: boolean) {
  isExpress ? expressOrder(item) : standartOrder(item);
}

//логику доставок необхоимо вынести из логики обработки
