function addTogether(a, b) {
 if (typeof a !== "number") {
  return undefined;
 }
 if (b === undefined) {
  return b => addTogether(a, b);
 }
 if (typeof b !== "number") {
  return undefined;
 }

 return a + b;
}

// console.log(addTogether(2, "3"));
// console.log(addTogether("fff", 3));
// console.log(addTogether(2, "ffff"));

// console.log(addTogether(2));

// console.log(addTogether(5)(7));
// console.log(addTogether(2)([3]));

// console.log(addTogether("https://www.youtube.com/watch?v=dQw4w9WgXcQ"));
