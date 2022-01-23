//  134. - No zeros for heros

function noBoringZeros(n) {
    return Number(n.toString().replace(/0+$/g, ''));
}

console.log(noBoringZeros(1450))        //  145
console.log(noBoringZeros(960000))      //  96
console.log(noBoringZeros(1050))        //  105
console.log(noBoringZeros(-1050))       //  -105
console.log(noBoringZeros(-105))        //  -105
console.log(noBoringZeros(0))           //  0