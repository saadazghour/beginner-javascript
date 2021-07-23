function pairElement(str) {
 function basPair(pair) {
  if (pair === "A") {
   return "T";
  } else if (pair === "T") {
   return "A";
  } else if (pair === "C") {
   return "G";
  } else if (pair === "G") {
   return "C";
  }
 }

 return str.split("").map(item => [item, basPair(item)]);
}

console.log(pairElement("GCG"));
