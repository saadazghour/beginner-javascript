function spinalCase(str) {
 const strUpper = str.replace(/([a-z])([A-Z])/g, "$1 $2");

 return strUpper
  .toLowerCase()
  .split(/(?:_| )/)
  .join("-");
}

console.log(spinalCase("This Is Spinal Tap"));
console.log(spinalCase("thisIsSpinalTap"));
console.log(spinalCase("The_Andy_Griffith_Show"));
