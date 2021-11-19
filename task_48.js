//  48. - Beginner Series #3 Sum of Numbers

function getSum(a, b) {
   //Good luck!
    if (a == b) return a;
    
    let arr = [];
    let sum = 0;
    if (a > b) {
        for (let i = b; i <= a; i++) {
            arr.push(i);
        }    
    } else {
        for (let i = a; i <= b; i++) {
            arr.push(i);
        } 
    }
    arr.forEach(el => {
        sum += el;
    });
    console.log(arr);
    return sum;
    
}

console.log(getSum(0, -1));     //      -1
console.log(getSum(0, 1));      //       1
console.log(getSum(-1, 2));      //      2
console.log(getSum(-3, 5));      //      9