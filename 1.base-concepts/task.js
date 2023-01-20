"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = b**2 - 4*a*c;
  console.log(d);
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

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  
}