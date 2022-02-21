//  164. - Count the Digit

function nbDig(n, d) {
    let arr = [];
    let num = 0;
    for (let i = 0; i <= n; i++) {
        arr.push(i**2);
    }
    for (let i = 0; i < arr.length; i++) {
        let res = String(arr[i]);
        for (let j = 0; j < res.length; j++) {
            if (res[j] == d) {
                num++;
            }
        }
        // console.log(res);
    }
    // console.log(arr);
    return num;
}

console.log(nbDig(10, 1));                  //  4
console.log(nbDig(5750, 0));                //  4700
console.log(nbDig(11011, 2));               //  9481
console.log(nbDig(12224, 8));               //  7733
console.log(nbDig(11549, 1));               //  11905