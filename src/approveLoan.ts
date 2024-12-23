//Проверку пользователя лучше вынести в отдельную функцию, а также воспользоваться деструктуризацией. Код стал читаемее и логичнее

const checkUser = (user) => {
  const { age, employmentStatus, criminalRecord } = user;
  return age <= 65 && age >= 18 && employmentStatus === 'employed' && !criminalRecord;
};

checkUser(user) && approveLoan();
