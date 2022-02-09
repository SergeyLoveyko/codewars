//  151. - Count of positives / sum of negatives

function countPositivesSumNegatives(arr) {
    let arrRes = [];
    let sum = 0;
    let negative = 0;
    if (arr === null) {
        arrRes = [];
    } else {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === null) {
                arrRes = [];
            } else {
                if (arr[i] > 0) {
                    sum++;
                } else if (arr[i] < 0) {
                    negative +=  arr[i];
                }
            }
        }
    }

    arrRes.push(sum, negative)
    if (sum === 0 && negative === 0) {
        arrRes = [];
    } else {
        return arrRes;
    }

    return arrRes;
}

console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));      //  [ 10, -65 ]
console.log(countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14]));           //  [ 8, -50 ]

