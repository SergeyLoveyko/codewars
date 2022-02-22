//  165. - Find the Remainder

function remainder(a, b){
    if (a > b) {
        return a % b;
    } else if (a < b) {
        return b % a;
    } else if (a == 0 || b == 0) {
        return NaN;
    } else if (a < 0 || b < 0) {
        return 0;
    }
}

console.log(remainder(17,5));           //  2
console.log(remainder(13, 72));         //  7
console.log(remainder(1, 0));           //  NaN
console.log(remainder(0, 0));           //  NaN