function truthCheck(collection, pre) {
 //  return collection.map((item, index) => {
 //   if (item.sex) {
 //    return true;
 //   }
 //   return false;
 //  });

 return collection.every(item => {
  // console.log(item);
  // console.log(pre);
  // console.log(item[pre]);
  return item[pre];
 });
}

console.log(
 truthCheck(
  [
   { user: "Tinky-Winky", sex: "male" },
   { user: "Dipsy", sex: "male" },
   { user: "Laa-Laa", sex: "female" },
   { user: "Po", sex: "female" },
  ],
  "sex"
 )
);
