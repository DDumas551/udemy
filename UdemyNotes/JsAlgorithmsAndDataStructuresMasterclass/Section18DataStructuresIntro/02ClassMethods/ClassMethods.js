class Student {
  constructor(firstName, lastName, year) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = year;
    this.late = 0;
    this.scores = [];
  }
  fullName() {
    return `Your full name is ${this.firstName} ${this.lastName}`;
  }
  markLate() {
    this.late += 1;
  }
  attendance() {
    // this.late += 1;
    return this.late >= 2
      ? `${this.firstName} ${this.lastName} has been late ${this.late} times`
      : this.late === 1
      ? `${this.firstName} ${this.lastName} has been late ${this.late} time`
      : `${this.firstName} ${this.lastName} has never been late!`;
  }
  addScore(score) {
    this.scores.push(score);
    return this.scores;
  }
  calculateAvg() {
    let sum = this.scores.reduce((a, b) => {
      return a + b;
    });
    return sum / this.scores.length;
  }
  static EnrollStudents() {
    return "Enrolling students BLORP";
  }
}

let firstStudent = new Student("Hello", "Kitty", 12);
let secondStudent = new Student("Jimmie", "Haffa", 5);

Student.EnrollStudents();
