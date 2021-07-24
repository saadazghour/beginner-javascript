function uniteUnique(collection) {
 const finalArray = [];

 //  console.log(arguments);

 const values = Object.values(arguments);

 for (let i = 0; i < values.length; i++) {
  // console.log(values[i]);
  for (let j = 0; j < values[i].length; j++) {
   // console.log(values[j]);
   // console.log(values[i][j]);
   if (finalArray.indexOf(values[i][j]) === -1) {
    finalArray.push(values[i][j]);
   }
  }
 }

 return finalArray;
}

const result = uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
console.log(result);

// [1, 3, 2, 5, 4];
