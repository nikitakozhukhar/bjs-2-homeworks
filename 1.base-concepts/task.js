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
  
  let mounthPercent;
  let body;
  let pay;
  let result;

  if (isNaN(percent) || isNaN(contribution) || isNaN(amount)) {
    result = 'false';
  } else {
    mounthPercent = percent/(100*12);
    body = amount - contribution;
    pay = body * (mounthPercent + (mounthPercent / (((1 + mounthPercent) ** countMonths) - 1)));
    result = +(pay * countMonths).toFixed(2);
  }
  console.log(result);
  return result;
  
}

calculateTotalMortgage(20, 0, 'k10000', 36);