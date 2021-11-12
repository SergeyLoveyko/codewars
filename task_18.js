//  18. - Find the smallest integer in the array

function findSmallestInt(args) {
    const minValue = args.reduce((a, b) => Math.min(a, b));

    return minValue ;
}


console.log(findSmallestInt([78, 56, 232, 12, 8]));     //   8
console.log(findSmallestInt([78,56,232,12,18]));        //  12
console.log(findSmallestInt([78,56,232,412,228]));      //  56
console.log(findSmallestInt([78,56,232,12,0]));         //   0
console.log(findSmallestInt([1,56,232,12,8]));          //   1