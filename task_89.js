//  89. - pick a set of first elements

const arr = ['a', 'b', 'c', 'd', 'e'];

function first(arr, n = 1) {
    return arr.slice(0, n);
}

console.log(first(arr));         //      ['a']
console.log(first(arr, 2));      //      ['a', 'b']