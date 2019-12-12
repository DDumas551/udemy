class Hello {
  constructor(greeting, salutation) {
    this.greeting = greeting;
    this.salutation = salutation;
    this.arr = [];
  }
  push(val) {
    this.arr.push(val);
  }
}
var greeting = new Hello();
greeting.arr.push("x");
console.log(greeting);
