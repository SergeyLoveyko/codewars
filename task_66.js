//  66. - Get the mean of an array

function getAverage(marks) {
    let num = 0;
    let count = 0;
    for (let i = 0; i < marks.length; i++) {
        num += marks[i];
        count++;
    }

    return Math.floor(num / count);
}

console.log(getAverage([2,2,2,2]));              //   2
console.log(getAverage([1,2,3,4,5,]));           //   3
console.log(getAverage([1,1,1,1,1,1,1,2]));      //   1