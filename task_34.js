//  34. - How good are you really?

function betterThanAverage(classPoints, yourPoints) {
  // Your code here
    let sum = 0;
    for (let i = 0; i < classPoints.length; i++) {
        sum += classPoints[i];
    }
    const res = sum / classPoints.length;
    console.log(res);
    return res < yourPoints ? true : false;
    
}

console.log(betterThanAverage([2, 3], 5));      // true
console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75));      // true
console.log(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 69));      // true