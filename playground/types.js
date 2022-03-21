const lastName = "AZGHOUR";
const middle = "middle";
const firstName = "Saad";

const concat = `My Name is ${firstName} and my last Name is ${lastName} !!`;

const html = `
  <div>
    <h1>${lastName}</h1>
    <h2>${firstName}</h2>
  </div>
`;

// document.body.innerHTML = html;

const smarties = 20;
const kids = 3;

const eachKidsGet = smarties / kids;

const exactGet = Math.floor(eachKidsGet);

// console.log(`Each kids get ${exactGet}`);

const dadGets = smarties % kids;

// console.log(`Dad Gets ${dadGets}`);

const Person = {
  first: "SAAD",
  last: "AZGHOUR",
  age: 100,
};

const first = Person.first;
const last = Person.last;
// const age = Person.age;

// console.log(
//   `My first name is ${first}, && last name is ${last}, && age is ${age}`
// );

let somethingUndefined;
const somethingNull = null;

const cher = {
  first: "cher",
};

// console.log(`I Get undefined! ${cher.last}`);

const teller = {
  first: "Raymond",
  last: "Teller",
};

teller.first = "Teller";
teller.last = "null";

const isDrawing = false;
const age = 20;

const ofAge = 20 > 22;
// console.log(`The Resule is : ${ofAge}`);
