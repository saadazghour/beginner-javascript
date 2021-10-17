var Person = function(firstAndLast) {
 let fullName = firstAndLast;
 //  console.log(firstAndLast);

 this.getFullName = function() {
  return fullName;
 };
 this.getFirstName = function() {
  return fullName.split(" ")[0];
 };
 this.getLastName = function() {
  return fullName.split(" ")[1];
 };

 this.setFirstName = function(first) {
  if (typeof first === "string") {
   fullName = first + " " + fullName.split(" ")[1];
  }
 };

 this.setLastName = function(last) {
  // console.log(last);
  if (typeof last === "string") {
   fullName = fullName.split(" ")[0] + " " + last;
  }
 };

 this.setFullName = function(name) {
  fullName = name;
 };
};

var bob = new Person("Bob Ross");
console.log(bob.getFullName());

// console.log(bob.getFirstName());
// console.log(bob.getLastName());
// console.log(bob.getFullName());

// console.log(bob.setFullName("Haskell Curry"));
// console.log(bob.setFirstName("Haskell"));
// console.log(bob.setLastName("Curry"));
