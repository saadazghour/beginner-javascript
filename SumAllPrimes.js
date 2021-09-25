function sumPrimes(num) {
 if (num < 1) {
  return false;
 }

 let sumAll = 0;

 for (let count = 2; count <= num; count++) {
  if (isPrime(count)) {
   sumAll += count;
  }
 }

 return sumAll;
}

function isPrime(num) {
 for (let i = 2; i < num; i++) {
  if (num % i === 0) {
   return false;
  }
 }
 return true;
}

sumPrimes(10);

console.log(isPrime(2));
