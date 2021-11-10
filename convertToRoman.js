function convertToRoman(num) {
 const romanNumeral = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  II: 2,
  I: 1,
 };

 let roman = "";

 for (let key in romanNumeral) {
  // console.log(key);
  // console.log(romanNumeral[key]);

  while (num >= romanNumeral[key]) {
   roman += key;
   num -= romanNumeral[key];
   //  console.log(roman);
  }
 }

 //  console.log(roman);

 return roman;
}

console.log(convertToRoman(5));
