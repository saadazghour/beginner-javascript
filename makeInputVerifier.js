function makeInputVerifier(minimum, maximum) {
 // write your code here

 return function verify(inputValue) {
  if (inputValue < minimum) {
   return "Input is less than minimum value";
  } else if (inputValue >= minimum && inputValue <= maximum) {
   return "Input is in range";
  } else if (inputValue > maximum) {
   return "Input is more than maximum value";
  }
 };
}

console.log(makeInputVerifier(1, 5)(4));
