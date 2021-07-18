function destroyer(arr, ...argsToRemove) {
 return arr.filter(item => !argsToRemove.includes(item));
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
