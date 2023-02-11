/*Задача 1. Печатное издание*/ 

class PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.state = 100;
		this.type = null;
		this.fix = function () {
			this.state *= 1.5;
		}
	}
		set state(newState) {
			if (newState < 0) {
				this._state = 0;
			} else if (newState > 100) {
				this._state = 100;
			} else {
				this._state = newState;
			}
		}

		get state() {
			return this._state;
		}
	
}

class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		super (name, releaseDate, pagesCount);
		this.type = "magazine";
	}
}

class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount) {
		super (name, releaseDate, pagesCount, author);
		this.author = author;
		this.type = "book";
	}
}

class NovelBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super (author, name, releaseDate, pagesCount);
		this.type = "novel";
	}
}

class FantasticBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super (author, name, releaseDate, pagesCount);
		this.type = "fantastic";
	}
}

class DetectiveBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super (author, name, releaseDate, pagesCount);
		this.type = "detective";
	}
}

/*Задача 2. Библиотека*/

class Library {
	constructor(name) {
		this.name = name;
		this.books = [];
	}
	addBook(book){
		this.books.push(book);
		// console.log(this.books);
	}
	findBookBy(type, value){
		// console.log(this.books[i]["type"]);
		// const {name: , releaseDate, pagesCount} = this.book;
		// console.log(author, name, releaseDate, pagesCount);
		for (let i = 0; i < this.books.length; i++) {
			const {type: name, value: findValue} = Book;	
		console.log(name, findValue)
			// debugger;

			let arrOfKeys = Object.keys(this.books[i]);
			let arrOfValues = Object.values(this.books[i]);
			// // for (let j = 0; j < arrOfKeys.length; j++)
			// // console.log(Object.keys(arrOfKeys[i]));
			// // console.log(this.books[i]);
			if (arrOfKeys.includes(type) && arrOfValues.includes(value)) {
				return this.books.book
			} else {
				return null
			}
			
		}
	}
	giveBookByName(bookName) {
		// for (let i = 0; i <= this.books.length; i++) {
		// 	console.log(this.books[i]) 
		// }
	
	}
	
}

// const library = new Library("Библиотека имени Ленина");
// library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
// library.addBook(new Magazine("Мурзилка", 1924, 60));

// console.log(library.findBookBy("name", "Властелин колец")); //null
// console.log(library.findBookBy("releaseDate", 1924).name); //"Мурзилка"


/*Задача 3*/

class Student {
	constructor(name, gender, age) {
		this.name = name;
		this.gender = gender;
		this.age = age;
		this.marks = {};
	}

	addMark(value, subject) {
		if (value >= 2 && value <= 5) {
			if (!this.marks[subject]) {
				this.marks[subject] = [value];
				// console.log(this.marks);
			} else {
				this.marks[subject].push(value);
			}
			
		} else {
			return this.marks
		}
    }

	getAverageBySubject(subject) {
		if (!this.marks[subject]) {
			return 0
		} else {
			return this.marks[subject].reduce((acc, item, index, arr) => {
				acc += item;
				if (index === arr.length - 1) {
					return acc / arr.length
				}
				return acc
			}, 0)
		}
	}

	getAverage() {
		let arrOfKeys = Object.keys(this.marks);
		let arrOfValues = [...Object.values(this.marks)];
		console.log(arrOfKeys);
		console.log(arrOfValues);

		for (let i = 0; i <= arrOfValues.length - 1; i++) {
			let arrOfAvg
			arrOfValues[i].reduce((acc, item, index, arr) => {
				console.log(arrOfAvg.push(acc));
				acc += item;
				if (index === arr.length - 1) {
					return acc / arr.length
				}
				// console.log(avg)
				
				return acc;
				
			}, 0);
			
			// console.log(avg)
		}
		
	}
}

let student = new Student("Иван Петров");
student.addMark(3, "математика");
student.addMark(5, "математика");
student.addMark(3, "математика");
student.addMark(5, "физика");
student.addMark(4, "физика");
student.addMark(3, "геометрия");
student.addMark(4, "геометрия");
student.getAverage();
//   Student.prototype.setSubject = function (subjectName) {
// 	this.subject = subjectName;
//   }

//   Student.prototype.addMarks = function (...marks) {
// 	if (this.marks) {
// 	  this.marks.push(...marks);
// 	}
//   }
  
//   Student.prototype.getAverage = function () {
// 	if (this.marks) {
// 	  return this.marks.reduce((acc, item, index, arr) => {
// 		acc += item;
// 		if (index === arr.length - 1) {
// 		  return acc / arr.length
// 		};
// 		return acc
// 	  }, 0);
// 	} else {
// 	  return 0
// 	}
//   }
  
//   Student.prototype.exclude = function (reason) {
	  
// 	if (reason) {
// 	  delete this.subject;
// 	  delete this.marks;
// 	  this.excluded = reason;
// 	}
//   }