//  75. - Generate range of integers

function generateRange(min, max, step) {
    let arr = [];

    for (let i = min; i <= max; i += step) {
        arr.push(i);
    }
    return arr;
}

console.log(generateRange(2, 10, 2)); //  [2,4,6,8,10]
console.log(generateRange(1, 10, 3)); //  [1,4,7,10]