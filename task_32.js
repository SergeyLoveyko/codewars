//  32. - Third Angle of a Triangle

function otherAngle(a, b) {
    const sum = 180;
    return sum - (a + b);
}

console.log(otherAngle(30, 60));    //   90
console.log(otherAngle(60, 60));    //   60
console.log(otherAngle(43, 78));    //   59
console.log(otherAngle(10, 21));    //  150