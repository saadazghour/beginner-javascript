function dropElements(arr, func) {
 let result = [];

 for (let i = 0; i < arr.length; i++) {
  if (func(arr[i])) {
   return arr.slice(i);
  }
 }

 return result;
}

let result = dropElements([1, 2, 3, 4], function(n) {
 return n >= 3;
});

console.log(result);
