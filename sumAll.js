function sumAll(arr) {
 let max = Math.max(arr[0], arr[1]);
 let min = Math.min(arr[0], arr[1]);

 let sumBtw = 0;

 for (let i = min; i <= max; i++) {
  sumBtw += i;
 }
 return sumBtw;
}

sumAll([1, 4]);
