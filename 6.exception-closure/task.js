/*Задача № 1*/

function parseCount(parseValue) {
	if (isNaN(Number.parseFloat(parseValue))) {
		throw new Error("Невалидное значение");
	} else {
		return Number.parseFloat(parseValue);
	}
}

function validateCount(value) {
	let error = new Error("Невалидное значение")
	try {
		if (isNaN(parseCount(value))) {
			return console.log(error);
		}
		return parseCount(value);
	}
	catch (error) {
		return error
	}
}

/*Задача № 2*/

class Triangle {
	constructor(firstSide, secondSide, thirdSide) {
		this.firstSide = firstSide;
		this.secondSide = secondSide;
		this.thirdSide = thirdSide;
		if (
			(firstSide + secondSide) < thirdSide ||
			(firstSide + thirdSide) < secondSide ||
			(secondSide + thirdSide) < firstSide) {
			throw new Error("Треугольник с такими сторонами не существует")
		}
	}

	get perimeter() {
		return this.firstSide + this.secondSide + this.thirdSide;
	}

	get area() {
		let p = this.perimeter / 2;
		return +(Math.sqrt(
			p * (p - this.firstSide) * (p - this.secondSide) * (p - this.thirdSide),
		).toFixed(3));
	}
}

function getTriangle(firstSide, secondSide, thirdSide) {
	let error = new Error("Ошибка! Треугольник не существует");
	try {
		return new Triangle(firstSide, secondSide, thirdSide)
	}
	catch (error) {
		console.log("error")
	}
	
}