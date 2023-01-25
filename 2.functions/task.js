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

function summElementsWorker(...arr) {
  let sum;
  if (arr.length === 0) {
    sum = 0;
  } else {
    sum = arr.reduce(function(a , b) {
      return a + b;
    });
  }
  return sum;
}

function differenceMaxMinWorker(...arr) {
  let difference

  if (arr.length === 0) {
    difference = 0;
  } else {
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    difference = max - min;
  }
  return difference;
}

function differenceEvenOddWorker(...arr) {
  let difference = 0;
  let sumEvenElement = 0;
  let sumOddElement = 0;

  if (arr.length === 0) {
    difference;
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
    }
  }
  return difference = sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;
  let avg = 0;

  if (arr.length === 0) {
    avg = 0;
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        sumEvenElement += arr[i];
        countEvenElement += 1;
      }
      avg = sumEvenElement / countEvenElement
    }
  }
  return avg;
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  const arr = [...arrOfArr];

  for (let i = 0; i < arr.length; i++) {
    const resultFunc = func(...arr[i]);
    if (resultFunc > maxWorkerResult) {
      maxWorkerResult = resultFunc;
    }
  }
  return maxWorkerResult;
}
