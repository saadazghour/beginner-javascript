

const globalArray = [5, 6, 3, 2, 9];


function nonMutatingSort(arr) {

   return [].concat(arr).sort(function(a, b) {
    return a - b
   })

}
nonMutatingSort(globalArray);
