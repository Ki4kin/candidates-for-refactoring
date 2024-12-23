// const rollMany = (n: number, pins: number) => {
//   for (let rollCount = 0; rollCount < n; rollCount++) {
//     console.log(pins);
//   }
// };

const rollMany = (n: number, pins: number) => {
  Array.from({ length: n }).forEach(() => console.log(pins))
};

//Избавиться от цикла можно создав массив длинной n