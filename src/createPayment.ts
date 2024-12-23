// const createPayment = (isToken: Boolean) => {
//   if (isToken) {
//     const token = getUrl().slice();
//     system.createTransaction(token).setTransaction();
//   } else {
//     const cardNumber = account.getCardNumber();
//     userAccount.createCardPayment(cardNumber).postTransactionToServer();
//   }
// };

const createTransaction = () => {
  const token = getUrl().slice();
  system.createTransaction(token).setTransaction();
};

const createCardPayment = () => {
  const cardNumber = account.getCardNumber();
  userAccount.createCardPayment(cardNumber).postTransactionToServer();
};

const createPayment = (isToken: Boolean) => (isToken ? createTransaction() : createCardPayment());

//Внутри фукции была зашита логика для двух случаев. Для каждого случая логику вынес в отдельные функции, которые вызываются в зависимости от улосвия isToken