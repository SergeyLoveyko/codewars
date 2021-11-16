//  39. - Grasshopper - Summation

function summation(num) {
  // Code here
    let sum = 0;
  for (let i = 0; i <= num; i++) {
        sum += i;
    }
    return sum;
}

console.log(summation(1));      //  1
console.log(summation(8));      //  36