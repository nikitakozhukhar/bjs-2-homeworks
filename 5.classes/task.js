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
		console.log(this.books);
	}
	findBookBy(type, value){
		// console.log(this.books[i]["type"]);
		// for (let i = 0; i <= this.books.length; i++) {
		// 	debugger;
		// 	console.log(Object.keys(this.books[i][type]));
			// if () {
			// 	return this.name
			// } else {
			// 	return null
		// 	}
			
		// }
	}
	giveBookByName(bookName) {
		// for (let i = 0; i <= this.books.length; i++) {
		// 	console.log(this.books[i]) 
		// }
	
	}
	
}

const library = new Library("Библиотека имени Ленина");
library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));

// console.log(library.findBookBy("name", "Властелин колец")); //null
// console.log(library.findBookBy("releaseDate", 1924)); //"Мурзилка"
