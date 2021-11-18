//  45. - Enumerable Magic #3 - Does My List Include This?

function include(arr, item) {
    if (arr.includes(item)) {
        return true;
    }
    return false;
}


console.log(include([1,2,3,4], 3));   // true
console.log(include([1,2,4,5], 3));   // false