function whatIsInAName(collection, source) {
 const srcKeys = Object.keys(source);

 //  console.log(srcKeys);

 return collection.filter(obj => {
  for (let i = 0; i < srcKeys.length; i++) {
   // console.log(obj[srcKeys[i]]);
   // console.log(source[srcKeys[i]]);
   // console.log(obj.hasOwnProperty(srcKeys[i]))
   if (
    !obj.hasOwnProperty(srcKeys[i]) ||
    source[srcKeys[i]] !== obj[srcKeys[i]]
   ) {
    return false;
   }
  }
  return true;
 });
}

console.log(
 whatIsInAName(
  [
   { first: "Romeo", last: "Montague" },
   { first: "Mercutio", last: null },
   { first: "Tybalt", last: "Capulet" },
  ],
  { last: "Capulet" }
 )
);
