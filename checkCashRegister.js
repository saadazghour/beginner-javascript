function checkCashRegister(price, cash, cid) {
 //it's Harder !!
 let change = cash * 100 - price * 100;
 let totalCid = 0;

 for (let el of cid) {
  totalCid += el[1] * 100;
 }

 // console.log(totalCid);

 if (change > totalCid) {
  return { status: "INSUFFICIENT_FUNDS", change: [] };
 } else if (change === totalCid) {
  return { status: "CLOSED", change: cid };
 } else {
  let answer = [];
  cid = cid.reverse();

  let moneyUnits = {
   "ONE HUNDRED": 10000,
   TWENTY: 6000,
   TEN: 1000,
   FIVE: 500,
   ONE: 100,
   QUARTER: 25,
   DIME: 10,
   NICKEL: 5,
   PENNY: 1,
  };

  for (let el of cid) {
   //  console.log(el);
   el[1] = el[1] * 100;

   console.log(moneyUnits[el[0]]);

   let holder = [el[0], 0];
   console.log(holder);

   while (change >= moneyUnits[el[0]] && el[1] > 0) {
    change -= moneyUnits[el[0]];
    el[1] -= moneyUnits[el[0]];
    holder[1] += moneyUnits[el[0]] / 100;

    // console.log(el[1]);
    // console.log(change);
    // console.log(el[0]);
   }

   //  console.log(holder);
   if (holder[1] > 0) {
    answer.push(holder);
    console.log(answer);
   }
  }

  // console.log(change);
  if (change > 0) {
   return { status: "INSUFFICIENT_FUNDS", change: [] };
  }
  return { status: "OPEN", change: answer };
 }
}

console.log(
 checkCashRegister(19.5, 20, [
  ["PENNY", 0.01],
  ["NICKEL", 0],
  ["DIME", 0],
  ["QUARTER", 0],
  ["ONE", 0],
  ["FIVE", 0],
  ["TEN", 0],
  ["TWENTY", 0],
  ["ONE HUNDRED", 0],
 ])
);

console.log(
 checkCashRegister(3.26, 100, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
 ])
);

// {status: "OPEN", change: [["QUARTER", 0.5]]}
console.log(
 checkCashRegister(19.5, 20, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
 ])
);

// console.log(
//  checkCashRegister(19.5, 20, [
//   ["PENNY", 1.01],
//   ["NICKEL", 2.05],
//   ["DIME", 3.1],
//   ["QUARTER", 4.25],
//   ["ONE", 90],
//   ["FIVE", 55],
//   ["TEN", 20],
//   ["TWENTY", 60],
//   ["ONE HUNDRED", 100],
//  ])
// );
