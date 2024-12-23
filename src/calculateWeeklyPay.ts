//Долго разбирался с написанным, функция нечитаема. Константы рабочего времени и коэффициента для переработок вынес за пределы функции, чтобы была возможность управлять ими извне. Расчеты ставки, суммы и рабочего времени также лучше вынести за пределы, чтобы каждая функция отвечала за свой расчет и в целях улучшения читаемости.

const overTimeRateCoefficient = 1.5;
const wokrHoursLimit = 400;

const getPay = (rate: number, time: number): number => Math.round(rate * time);
const getRate = (baseRate: number, coefficient: number = 1) => baseRate * coefficient;
const getTime = (tenthsWorked: number, timeLimit: number = 0) => tenthsWorked - timeLimit;

function calculateWeeklyPay(overtime: boolean): number {
  const tenthRate: number = getTenthRate();
  const tenthsWorked: number = getTenthsWorked();
  const straightPay = getPay(getRate(tenthRate), getTime(tenthsWorked));

  if (overtime) {
    const overTimePay = getPay(
      getRate(tenthRate, overTimeRateCoefficient),
      getTime(tenthsWorked, wokrHoursLimit),
    );
    return straightPay + overTimePay;
  }
  return straightPay;
}
