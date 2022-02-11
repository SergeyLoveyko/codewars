//  154. - 16+18=214

function add(num1, num2) {
  let res = [];
  const numOne = num1.toString().split('').reverse();
  const numTwo = num2.toString().split('').reverse();
  if (numOne.length > numTwo.length) {
    for (let i = 0; i < numOne.length; i++) {
      if (Number(numTwo[i])) {
        res.push(Number(numOne[i]) + Number(numTwo[i]));
      } else {
        res.push(Number(numOne[i]));
      }
    }
  } else {
    for (let i = 0; i < numTwo.length; i++) {
      if (Number(numOne[i])) {
        res.push(Number(numTwo[i]) + Number(numOne[i]))
      } else {
        res.push(Number(numTwo[i]));
      }

    }
  }

  return Number(res.reverse().join(''));
}

console.log(add(2, 11)); //  13
console.log(add(0, 1)); //  1
console.log(add(0, 0)); //  0
console.log(add(16, 18)); //  214
console.log(add(26, 39)); //  515
console.log(add(122, 81)); //  1103
console.log(add(1222, 30277)); //  31499
console.log(add(1236, 30977)); //  31111013
console.log(add(38810, 1383)); //  391193
console.log(add(49999, 49999)); //  818181818