/*Задача № 1*/

function parseCount(parseValue) {
	let parse = Number.parseFloat(parseValue)
	if (isNaN(parse)) {
		throw new Error("Невалидное значение");
	} else {
		return parse;
	}
}

function validateCount(value) {
	try {
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
	if (
		(firstSide + secondSide) < thirdSide ||
		(firstSide + thirdSide) < secondSide ||
		(secondSide + thirdSide) < firstSide) {
			return {
				get area() {
					return "Ошибка! Треугольник не существует"	
				},
				get perimeter() {
					return "Ошибка! Треугольник не существует"
				}
			}
	} else {
		return new Triangle (firstSide, secondSide, thirdSide);
	}
}