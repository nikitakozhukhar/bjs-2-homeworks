//Задача № 1
function cachingDecoratorNew(func) {
  let cash = [];
	console.log(cash);
	console.log(cash.hash)
   
	function wrapper(...args) {
		const hash = md5(args);
		if (hash in cash) {
			console.log(`Из кэша ${hash}`);
			return `Из кэша: ${cash[hash]}`
		}

		// cash.push({hash: md5(args), value: func(...args)});
		console.log(cash)
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
			wrapper.count++
		} 
		timeoutId = setTimeout(() => {
			clearTimeout(timeoutId);
			console.log(func(...args));
			console.log(wrapper.count);
			wrapper.count++;
		}, delay)
		// console.log(args)
		wrapper.allCount++
		// console.log(wrapper.allCount);
	}
	if (func) {
		// wrapper.count++;
	}
	return wrapper;
}
  /*module.exports = {
	debounceDecoratorNew, 
  }*/