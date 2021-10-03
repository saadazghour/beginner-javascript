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
