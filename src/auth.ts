type TPayment = {
  amount: number;
  rcCode: number;
};

type TGatewayService = {
  sendAuth: (payment: TPayment) => number;
};

const auth = (payment: TPayment, gateway: TGatewayService) => {
  try {
    const rcCode = gateway.sendAuth(payment);
    return { ...payment, rcCode };
  } catch (error) {
    console.error('Ошибка авторизации');
  }
};

//Отсутствовала обработка возможной ошибки метода sendAuth, возвращать лучше копию объека, а не мутировать исходный