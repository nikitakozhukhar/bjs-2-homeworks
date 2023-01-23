function getArrayParams(...arr) {
  let min = arr[0];
  let max = arr[0];
  let sum;
  let avg;
  for (let i = 0; i <= arr; i++) {
    if (arr[i] > max) {
      max = arr[i];
      sum += max;
      console.log(sum)
    } else if (arr[i] < min) {
      min = arr[i];
      sum += min;
      console.log(sum)
    }
    avg = sum / arr.length;
  }
  return { min: min, max: max, avg: avg };
}
getArrayParams([-99, 99, 10])

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
