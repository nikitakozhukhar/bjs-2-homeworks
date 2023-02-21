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
		if (book.state > 30) {
			this.books.push(book);
		}
	}

	findBookBy(type, value){
		return this.books.find((item) => item[type] == value) || null;
	}
	giveBookByName(bookName) {
		let giveBook = this.books.findIndex((item) => item['name'] === bookName);
		return giveBook === -1 ? null : this.books.splice(giveBook, 1)[0];
	}
}


/*Задача 3*/

class Student {
	constructor(name) {
		this.name = name;
		this.marks = {};
	}

	  addMark(value, subject) {
		  if (value >= 2 && value <= 5) {
			  if (!this.marks[subject]) {
				  this.marks[subject] = [value];
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
		if (arrOfKeys.length === 0) {
			return 0
		}
		return arrOfKeys.reduce((acc, item) => {
			return acc += this.getAverageBySubject(item) / arrOfKeys.length
		}, 0);
	}
}