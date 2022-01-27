//   138. - Count by X

function countBy(x, n) {
    let z = [];
    let num = 0;
    for (let i = x; num < n; i += x) {
        z.push(i);
        num++;
    }
    return z;
  }

  console.log(countBy(1,10));    //  [1,2,3,4,5,6,7,8,9,10], "Array does not match"
  console.log(countBy(2,5));     //  [2,4,6,8,10], "Array does not match"