//  177. - Return Two Highest Values in List

function twoHighest(arr) {
    const filt = arr.filter((item, index) => arr.indexOf(item) === index);
    return filt.sort((a, b) => b - a).slice(0, 2);
}

console.log(twoHighest([]));                            //  []
console.log(twoHighest([15]));                          //  [15]
console.log(twoHighest([1, 1, 1]));                     //  [1]
console.log(twoHighest([4, 10, 10, 9]));                //  [10, 9]
console.log(twoHighest([15, 20, 20, 17]));              //  [20, 17]
console.log(twoHighest([5, 7, 5, 10, 7, 5, 12, 10]));   //  [12, 10]