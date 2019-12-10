// function bonuses(arr) {
//   if (arr.length >= 2) {
//     let bonus = [];
//     let max = Math.max(...arr);

//     console.log(max);
//     let one = max / 4;
//     let two = max / 2;
//     let three = (max / 4) * 3;

//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i] < 1)
//     }
//   } else {
//     return false;
//   }
// }

// bonuses([10, 30]);
//[1,2,3,4,2,1]
let dollaz = [
  52.44,
  62,
  155.63,
  112.98,
  188.86,
  53.45,
  57.64,
  187.94,
  80.95,
  68.44,
  19.25,
  112.75,
  108.94,
  224.16,
  284.2,
  98.23,
  26.71,
  32.47,
  13.21,
  63.58,
  202.78
];
console.log(
  (
    dollaz.reduce(function(a, b) {
      return a + b;
    }) + 21249.81
  ).toFixed(2)
);
