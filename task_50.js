//  50. - What's the real floor?

function getRealFloor(n) {
    // if (n >= 13) {
    //     return n - 2;
    // } else {
    //     return n - 1;
    // }

    return n <= 0 ? n : n >= 13 ? n - 2 : n - 1;
}

console.log(getRealFloor(1));    //   0
console.log(getRealFloor(5));    //   4
console.log(getRealFloor(15));   //  13
console.log(getRealFloor(0));    //  -1
console.log(getRealFloor(-2));   //  -2
console.log(getRealFloor(-5));   //  -5