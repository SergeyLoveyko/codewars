//  141. - Array plus array

function arrayPlusArray(arr1, arr2) {
    const resArr1 = arr1.reduce(function(sum, elem) {
    return sum + elem;
    }, 0)
    const resArr2 = arr2.reduce(function(sum, elem) {
    return sum + elem;
    }, 0)

    return resArr1 + resArr2;
}


console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]));          //  21
console.log(arrayPlusArray([-1, -2, -3], [-4, -5, -6]));    //  -21
console.log(arrayPlusArray([0, 0, 0], [4, 5, 6]));          //  15
console.log(arrayPlusArray([100, 200, 300], [400, 500, 600]));  //2100  