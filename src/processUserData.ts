const isAdult = (user): boolean => {
  // Получаем данные пользователя
  const { age } = getUserData(user);
  // Проверяем данные пользователя
  return age >= 18;
};

function processUserData(user) {
  // Обрабатываем данные
  isAdult(user) ? processUser(user) : console.error('User is under 18');
}

//Также разделил логику проверки польщователя и обработки данных
