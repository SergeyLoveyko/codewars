//  48. - Transportation on vacation

function rentalCarCost(d) {
  // Your solution here
    const oneDayCar = 40;
    if (d > 6) {
        return d * oneDayCar - 50;
    } if (d > 2) {
        return d * oneDayCar - 20;
    }
    return d * oneDayCar;
}

console.log(rentalCarCost(1));      //  40
console.log(rentalCarCost(2));      //  80
console.log(rentalCarCost(7));      //  
console.log(rentalCarCost(5));      //  