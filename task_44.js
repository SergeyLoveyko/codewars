//  44. - Training JS #15: Methods of Number object--toFixed(), toExponential() and toPrecision()

function howManySmaller(arr,n){
  //coding here..
    let newArr = [];
    let res = 0;
    arr.forEach(el => {
        newArr.push(el.toFixed(2));
    });
    newArr.forEach(el => {
        if (el < n) {
            res++;
        }
    });
    return res;
}

console.log(howManySmaller([1.234, 1.235, 1.228], 1.24));       //  2
console.log(howManySmaller([1.1888,1.1868,1.1838],1.19));       //  1
console.log(howManySmaller([3.1288,3.1212,3.1205],3.1212));     //  2