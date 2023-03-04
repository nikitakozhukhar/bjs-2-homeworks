//Задача № 1
function cachingDecoratorNew(func) {
  let cash = {};

  return (...args) => {
	const hash = args.join(',');
	if (hash in cash) {
		return cash[hash]
	}

	const result = func(...args);
	cash[hash] = result;
	return result;
  }
}

// sum = (...args) => args.reduce((acc, item) => acc + item, 0);

// const cashedSum = cachingDecoratorNew(sum);
// debugger;

//Задача № 2
function debounceDecoratorNew(func, delay) {
  
}


function debounceDecoratorNew(func, delay) {
	let timeoutId = null;
	wrapper.count = 0;
	wrapper.allCount = 0;
  
	function wrapper(...args) {
		wrapper.history.push(args)
		return func(...args)
	}
	wrapper.history = [];
	console.log(a, b)
	return wrapper;
  }
//   const sum = (a, b) => a + b;

//   let spy = debounceDecoratorNew(sum)
  
  /*module.exports = {
	debounceDecoratorNew, 
  }*/