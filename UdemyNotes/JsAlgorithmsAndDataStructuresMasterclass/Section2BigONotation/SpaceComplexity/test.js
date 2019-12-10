function myNameInNumbers(name) {
  let numbers = [];
  let alpha = "abcdefghijklmnopqrstuvwxyz";
  for (let i = 0; i < alpha.length; i++) {
    for (let k = 0; k < name.length; k++) {
      if (alpha[i] === name[k]) {
        numbers.push(alpha.indexOf(alpha[i]) + 1);
        console.log(numbers);
      }
    }
  }
  console.log("Numbers: " + numbers);
}

myNameInNumbers("david");
