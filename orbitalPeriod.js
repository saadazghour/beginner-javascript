function orbitalPeriod(arr) {
 var GM = 398600.4418;
 var earthRadius = 6367.4447;

 return arr.map(({ name, avgAlt }) => {
  let earth = avgAlt + earthRadius;

  let orbitalPeriod = Math.round(
   2 * Math.PI * Math.sqrt(Math.pow(earth, 3) / GM)
  );

  // console.log({ name, orbitalPeriod });

  return { name, orbitalPeriod };
 });
}

console.log(orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]));
