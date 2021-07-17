function add(x) {
 const currying = y => z => x + y + z;
 return currying;
}

console.log(add(10)(20)(30));
