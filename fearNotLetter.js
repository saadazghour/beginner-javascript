function fearNotLetter(str) {
 //  const alphabet = "abcdefghijklmnopqrstuvwxyz";

 //  const startIndex = alphabet.indexOf(str[0]);
 //  const finalAlphabet = alphabet.slice(startIndex);

 //  console.log(finalAlphabet);

 // for (let i = startIndex; i < startIndex + str.length; i++) {
 //  // const element = array[i];
 //   // console.log(alphabet[i] !== str[i]);
 //   // console.log(i);
 //   if (alphabet[i] !== str[i]) {
 //     return alphabet[i]
 //   }
 // }

 //Refactoring

 const alphabet = "abcdefghijklmnopqrstuvwxyz";

 const startIndex = alphabet.indexOf(str[0]);

 const finalAlphabet = alphabet.slice(startIndex);

 for (let i = 0; i < str.length; i++) {
  // const element = array[i];
  if (str[i] !== finalAlphabet[i]) {
   return finalAlphabet[i];
  }
 }
}

console.log(fearNotLetter("abce"));
console.log(fearNotLetter("stvwx"));
console.log(fearNotLetter("bcdf"));
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));
console.log(fearNotLetter("abcdefghjklmno"));
