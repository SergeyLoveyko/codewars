//  87. - Swap Values

function swapValues(value) {
    const arr = [1, 2];
    var res = arr.reverse();
    return res[value];
}

console.log(swapValues(0));    //  2, "Failed swapping numbers"
console.log(swapValues(1));    //  1, "Failed swapping numbers"