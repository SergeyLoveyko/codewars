//  1. - The highest profit wins! (7kyu)

function minMax(arr){
  return [Math.min.apply(null, arr), Math.max.apply(null, arr)]; // fix me!
}


console.log(minMax([1, 2, 3, 4, 5]));
console.log(minMax([1, 5]));
console.log(minMax([2334454, 5]));
console.log(minMax([5, 2334454]));
console.log(minMax([5], [5, 5]));