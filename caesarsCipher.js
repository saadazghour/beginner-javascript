function rot13(str) {
 //  console.log(str);

 let resultDecoded = "";
 const startAlphabet = "abcdefghijklm".toUpperCase();
 const endAlphabet = "nopqrstuvwxyz".toUpperCase();

 for (let i = 0; i < str.length; i++) {
  // console.log(startAlphabet.indexOf(str[i]));

  if (startAlphabet.indexOf(str[i]) >= 0) {
   resultDecoded += endAlphabet[startAlphabet.indexOf(str[i])];
  } else if (endAlphabet.indexOf(str[i]) >= 0) {
   resultDecoded += startAlphabet[endAlphabet.indexOf(str[i])];
  } else {
   resultDecoded += str[i];
  }
 }

 return resultDecoded;
}

console.log(rot13("SERR PBQR PNZC"));
