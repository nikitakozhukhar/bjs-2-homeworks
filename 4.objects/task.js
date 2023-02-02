function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {

  if (this.marks) {
    for (let elem of marks) {
      this.marks.push(elem);
    }
  } 
}

Student.prototype.getAverage = function () {
	let marks = this.marks;
  if (marks && marks.length > 0) {
    let avg;
    marks.reduce((acc, item, index, arr) => {
      acc += item;
      if (index === arr.length - 1) {
        return avg = acc / arr.length
      };
      return acc
    }, 0);
    return avg
  } else {
    return 0
  }
}

Student.prototype.exclude = function (reason) {
	
  if (reason) {
    this.subject = undefined;
    this.marks = undefined;
    this.excluded = reason;
  }
}

