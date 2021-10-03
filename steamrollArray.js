function steamrollArray(arr) {
 //  console.log(...arr);

 console.log([].concat(...arr));

 let flat = [].concat(...arr);

 //  console.log(flat.some(Array.isArray) ? steamrollArray(flat) : flat);

 return flat.some(Array.isArray) ? steamrollArray(flat) : flat;
}

// let arr = steamrollArray([1, [2], [3, [[4]]]]);

// [1, 2, 3, 4]
let arr = steamrollArray([1, [2], [3, [[4]]]]);

console.log(arr);

// ------------------------------------------------------------

// function steamrollArray(arr) {
//  //  console.log(arr);
//  let i = 0;
//  while (i < 3) {
//   arr = arr.flat();
//   i++;
//  }

//  return arr;
// }

// ------------------------------------------------------------

// function steamrollArray(arr) {
//  while (arrayDataSet(arr)) {
//   arr = arr.flat();
//  }
//  return arr;
// }

// function arrayDataSet(arr) {
//  return arr.some(dataPoint => {
//   return Array.isArray(dataPoint);
//  });
// }

// [1, 2, 3, 4]
// let arr = steamrollArray([1, [2], [3, [[4]]]]);

// console.log(arr);

// ------------------------------------------------------------
