//  166. - Sum of Multiples

function sumMul(n,m){
    if (n == 0 || m <= 0) {
        return "INVALID";
    }
    let num = 0;
    for (let i = n; i < m; i += n) {
        num += i;
    }
    return num;
}

console.log(sumMul(0, 0));                  //  "INVALID"
console.log(sumMul(2, 9));                  //  20
console.log(sumMul(3, 13));                 //  30
console.log(sumMul(4, 123));                //  1860
console.log(sumMul(4,-7));                  //  "INVALID"