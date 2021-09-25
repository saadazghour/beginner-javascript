function sumFibs(num) {
 let fibSequance = [0, 1];

 let counter =
  fibSequance[fibSequance.length - 2] + fibSequance[fibSequance.length - 1];

 while (counter <= num) {
  fibSequance.push(counter);
  counter =
   fibSequance[fibSequance.length - 2] + fibSequance[fibSequance.length - 1];
 }

 let sumAllOdd = 0;

 fibSequance.forEach(num => {
  if (num % 2 !== 0) {
   // console.log(num);
   sumAllOdd += num;
  }
 });

 return sumAllOdd;
}

console.log(sumFibs(75025));
