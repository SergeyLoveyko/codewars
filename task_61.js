//  61. - Square Every Digit

function squareDigits(num) {
    let sum = (num + '').split('');
    let arr = [];
    sum.forEach(el => {
        arr.push(el * el);
    });

    return +(arr.join(''));
}

console.log(squareDigits(3212));        //  9414
console.log(squareDigits(2112));        //  4114
console.log(squareDigits(0));           //  0