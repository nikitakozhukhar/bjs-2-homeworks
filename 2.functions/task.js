function getArrayParams(...arr) {
  /*let min = arr[0];
  let max = arr[0];
  let sum = 0;
  let avg;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    } else if (arr[i] < min) {
      min = arr[i];
    }
    sum += arr[i];
    avg = +(sum / arr.length).toFixed(2);
  }*/
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  let sum = arr.reduce(function(a , b) {
    return a + b;
  });
  let avg = +(sum / arr.length).toFixed(2);
  return { min: min, max: max, avg: avg };
}
getArrayParams(-99, 99, 10);
function summElementsWorker(...arr) {

}

function differenceMaxMinWorker(...arr) {

}

function differenceEvenOddWorker(...arr) {

}

function averageEvenElementsWorker(...arr) {

}

function makeWork (arrOfArr, func) {

}
