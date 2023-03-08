//Задача № 1
function cachingDecoratorNew(func) {
  let cash = [];
	console.log(cash);
	console.log(cash.hash)
   
	function wrapper(...args) {
		const hash = (args);
		if (hash in cash) {
			console.log(`Из кэша ${hash}`);
			return `Из кэша: ${cash[hash]}`
		}

		const result = func(...args);
		cash[hash] = result;
		console.log(`Вычисляем ${result}`);
		return `Вычисляем: ${result}`;
  }
	
	return wrapper
}

//Задача № 2
// function debounceDecoratorNew(func, delay) {
  
// }

function debounceDecoratorNew(func, delay) {
	let timeoutId = null;
	wrapper.count = 0;
	wrapper.allCount = 0;
	
	function wrapper(...args) {
		if (!timeoutId){
			console.log(func(...args))
		} 
		timeoutId = setTimeout(() => {
			clearTimeout(timeoutId);
			console.log(func(...args));
		}, delay)
		// console.log(args)
		wrapper.allCount++
	}
	if (func) {
		wrapper.count++;
	}
	return wrapper;
}
  /*module.exports = {
	debounceDecoratorNew, 
  }*/