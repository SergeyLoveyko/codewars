//  53. - Is n divisible by x and y?

function isDivisible(n, x, y) {
    const a = Number.isInteger(n / x);
    const b = Number.isInteger(n / y);
    return a === false || b === false ? false : true;
}

console.log(isDivisible(3,3,4));   //  false
console.log(isDivisible(12,3,4));   //  true
console.log(isDivisible(8,3,4));   //  false
console.log(isDivisible(48,3,4));   //  true