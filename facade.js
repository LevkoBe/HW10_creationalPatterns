class Student {
  constructor(name, data) {
    this.name = name;
    this.data = data;
    this.knowledge = 0;
  }

  attendLessons(universityName, subject, luck) {
    let result = "successful";
    if (!new University(universityName).enroll(this.name, this.data)) {
      result = "unsuccessful";
    } else if (!new Subject(subject).passed(this.name)) {
      result = "unsuccessful";
    } else if (new Events(luck).arise(this.name)) {
      result = "unsuccessful";
    }
    return "studying of " + this.name + " was " + result;
  }
}

class University {
  constructor(universityName) {
    this.universityName = universityName;
  }

  enroll(name, data) {
    // some complex logic...
    return true;
  }
}

class Subject {
  constructor(subject) {
    this.subject = subject;
  }

  passed(name) {
    // some complex logic...
    return true;
  }
}

class Events {
  constructor(luck) {
    this.luck = luck;
  }

  arise(name) {
    // some complex logic...
    return Math.random() > 0.5;
  }
}

var student = new Student("Joan", "19 years, secondary education");
var result = student.attendLessons("Stanford University", "History of Ukraine", "Lucky");

console.log(result);
