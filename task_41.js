//  40. - What is between?

function between(a, b) {
    // your code here
    let arr = [];
    for (let i = a; i <= b; i++) {
        arr.push(i);
    }
    return arr;
}

console.log(between(1, 4));         //        [1, 2, 3, 4]
console.log(between(-2, 2));        //   [-2, -1, 0, 1, 2]