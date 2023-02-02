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
    this.marks.push(...marks);
  }
}

Student.prototype.getAverage = function () {
  if (this.marks) {
    return this.marks.reduce((acc, item, index, arr) => {
      acc += item;
      if (index === arr.length - 1) {
        return acc / arr.length
      };
      return acc
    }, 0);
  } else {
    return 0
  }
}

Student.prototype.exclude = function (reason) {
	
  if (reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
  }
}

