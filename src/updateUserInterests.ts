// логика запроса должна быть отдельной сущностью, это уберет дублирование. Также не было проверки на ошибку запроса
const updateUserData = (route, body) => {
  try {
    const token = getToken();
    const headers = getHeaders(token);

    fetch(`${domain}/v1/users/${route}`, {
      method: 'PUT',
      headers,
      body: JSON.stringify({
        body,
      }),
    });
  } catch (error) {
    console.error(error);
  }
};

const updateUserDataWithLoginCheck = (key, value) =>
  isLoggedIn() ? updateUserData(key, value) : toLoginPage();

const updateUserHandle = (handle) => updateUserDataWithLoginCheck('handle', handle);

const updateUserInterests = (interestUUIDs) =>
  updateUserDataWithLoginCheck('interests', interestUUIDs);
