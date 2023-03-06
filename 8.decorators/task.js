//Задача № 1
function cachingDecoratorNew(func) {
  let cash = {};

  return function(...args) {
		const hash = md5(args);
		if (hash in cash) {
			return `Из кэша: ${cash[hash]}`
		}

		const result = func(...args);
		cash[hash] = result;
		return `Вычмсляем: ${result}`;
  }
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