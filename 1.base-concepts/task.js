"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = b**2 - 4*a*c;
  if (d < 0) {
    arr = [];
  } else if ( d === 0) {
    let root = -b / (2 * a);
    arr = [root];
  } else if (d > 0) {
    let rootOne = (-b + Math.sqrt(d) )/(2*a);
    let rootTwo = (-b - Math.sqrt(d) )/(2*a);
    arr = [rootOne, rootTwo]
  }
  return arr;

}
console.log(solveEquation(1, 5, 4));
console.log(solveEquation(1, 2, 1));
console.log(solveEquation(1, 2, 10));

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  if (percent !== 0 || 100) {
    alert('Неверно указана процентная ставка')
  }
  let mounthPercent = percent/(100*12);
  let body = amount - contribution;
  let pay = body * (mounthPercent + (mounthPercent / (((1 + mounthPercent) ** countMonths) - 1)));
  let fullPay = +(pay * countMonths).toFixed(2);
  console.log(fullPay);
  return fullPay;
}

calculateTotalMortgage(10, 0, 50000, 12);