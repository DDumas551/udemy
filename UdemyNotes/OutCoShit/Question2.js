!array[k] === array[i]
  ? Math.abs(array[i]) === Math.abs(array[k])
    ? !pairs.includes(Math.abs(array[k]))
    : second
  : first;
