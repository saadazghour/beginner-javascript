

const squareList = arr => {

  return arr.filter((item) => (item > 0 && item % parseInt(item) === 0) ).map((item) =>  Math.pow(item, 2) )

};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);

console.log(squaredIntegers);
