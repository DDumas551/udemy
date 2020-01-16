function hash(key, arrLength) {
  let total = 0;
  for (let char of key) {
    let value = char.charCodeAt(0) - 96;
    total = (total + value) % arrLength;
  }
  return total;
}

const newHash = (key, arrLength) => {
  let total = 0;
  let weird_prime = 31;
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let char = key[i];
    let value = char.charCodeAt(0) - 96;
    total = (total * weird_prime + value) % arrLength;
  }
  return total;
};
