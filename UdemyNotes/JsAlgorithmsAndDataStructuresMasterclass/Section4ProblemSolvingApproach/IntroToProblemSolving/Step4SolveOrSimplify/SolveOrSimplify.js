function charCount(str) {
  var result = {};
  for (let i = 0; i < str.length; i++) {
    var char = str[i];
    if (result[char] > 0) {
      result[char]++;
    } else {
      result[char] = 1;
    }
  }
  return result;
}

function charCount2(str) {
  var result = {};
  for (let i = 0; i < str.length; i++) {
    var char = str[i].toLowerCase();
    if (/[a-z0-9]/.test(char)) {
      if (result[char] > 0) {
        result[char]++;
      } else {
        result[char] = 1;
      }
    }
  }

  return result;
}

function charCount3(str) {
  var result = {};
  for (var char of str) {
    char = char.toLowerCase();
    if (/[a-z0-9]/.test(char)) {
      if (result[char] > 0) {
        result[char]++;
      } else {
        result[char] = 1;
      }
    }
  }

  return result;
}

function charCount4(str) {
  var result = {};
  for (var char of str) {
    char = char.toLowerCase();
    if (/[a-z0-9]/.test(char)) {
      result[char] > 0 ? result[char]++ : (result[char] = 1);
    }
  }
  return result;
}
function charCount5(str) {
  var result = {};
  for (var char of str) {
    char = char.toLowerCase();
    if (/[a-z0-9]/.test(char)) {
      result[char] = ++result[char] || 1;
    }
  }
  return result;
}
var sentence = "My name is";

console.log("One:");
console.log(charCount(sentence));
console.log("Two:");
console.log(charCount2(sentence));
console.log("Three:");
console.log(charCount3(sentence));
console.log("Four:");
console.log(charCount4(sentence));
console.log("Five:");
console.log(charCount5(sentence));
