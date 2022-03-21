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
