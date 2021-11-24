//  62. - Boiled Eggs

function cookingTime(eggs) {
    let count = 0;
    const eg = 8;
    let sum = 0;

    for (let i = 0; eggs > sum ; i++) {
        sum += eg;
        count++;
    }

    return eggs > 0 ? count * 5 : 0;
}

console.log(cookingTime(0));        //   0
console.log(cookingTime(8));        //   5
console.log(cookingTime(16));       //  10
console.log(cookingTime(20));       //  15
console.log(cookingTime(24));       //  15
console.log(cookingTime(32));       //  20
console.log(cookingTime(40));       //  25
console.log(cookingTime(48));       //  30
console.log(cookingTime(64));       //  40