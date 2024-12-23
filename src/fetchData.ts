const DEFAULT_TIMEOUT = 5000;

function fetchData(url: string) {
  // Используем значение по умолчанию для таймаута
  fetch(url, { signal: AbortSignal.timeout(DEFAULT_TIMEOUT) })
    .then((response) => console.log(response))
    .catch((error) => console.error(error));
}

//неверная передача таймаута в fetch