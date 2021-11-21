function telephoneCheck(str) {
 const regex = /^1? ?(\(\d{3}\)|\d{3})[ |-]?(\d{3})[ |-]?\d{4}$/gm;

 return regex.test(str);
}

console.log(telephoneCheck("55 55-55-555-5"));
