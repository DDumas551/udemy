function naiveSeach(str, word) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    for (let k = 0; k < word.length; k++) {
      if (word[k] !== str[i + k]) break;
      if (k === word.length - 1) count++;
    }
  }
  return count;
}

console.log(naiveSeach("lorie loled", "lo"));
