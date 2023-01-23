function getArrayParams(...arr) {
  let min = arr[0][0];
  let max = arr[0][0];
  let sum = 0;
  let avg;
  for (let i = 0; i < arr[0].length; i++) {
    if (arr[0][i] > max) {
      max = arr[0][i];
    } else if (arr[0][i] < min) {
      min = arr[0][i];
    }
    sum += arr[0][i];
    avg = +(sum / arr[0].length).toFixed(2);
  }
  
  return { min: min, max: max, avg: avg };
}

getArrayParams([-99, 99, 10]);

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
