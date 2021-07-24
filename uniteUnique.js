function uniteUnique(collection) {
 const finalArray = [];
 //  console.log(arguments);

 const values = Object.values(arguments);

 //  console.log(values);

 values.forEach(groups => {
  groups.forEach(individualValues => {
   if (finalArray.indexOf(individualValues) === -1) {
    finalArray.push(individualValues);
   }
  });
 });

 return finalArray;
}

const result = uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
console.log(result);

// [1, 3, 2, 5, 4];
