function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  // this.setSubject = "";
  // this.addMarks = [];
  // // this.getAverage();
  // this.exclud = "";
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marksToAdd) {
	this.marks = [marksToAdd];
}

Student.prototype.getAverage = function (...marksToAdd) {
	let marks = marksToAdd;
  if (marks.length != 0) {
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
    delete Student.prototype.setSubject;
    delete Student.prototype.addMarks;
    this.excluded = reason;
  }
  return reason;
}

