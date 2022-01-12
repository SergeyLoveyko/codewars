//  122. - Beginner - Reduce but Grow

function grow(x){
    let res = 1;

    for (let i = 0; i < x.length; i++) {
        res *= x[i];
        // console.log(i);
    }

    return res;
}

console.log(grow([1, 2, 3]));               //  6
console.log(grow([4, 1, 1, 1, 4]));         //  16
console.log(grow([2, 2, 2, 2, 2, 2]));      //  64 