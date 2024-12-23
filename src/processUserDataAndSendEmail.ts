function sendEmail(email: string, isError: boolean) {
  const message = isError ? 'Ошибка обработки данных' : 'Данные обработаны успешно';
  emailService.sendEmail(email, message);
}

function processUserData(processData): boolean {
  try {
    processData();
    return false;
  } catch (error) {
    console.error(error);
    return true;
  }
}

function processUserDataAndSendEmail(user: User) {
  const { processData, email } = user;
  const isErrorProcess = processUserData(processData);
  sendEmail(email, isErrorProcess);
}

//Разделил логику функций, не было логики обработки возможной ошибки user.processData()
