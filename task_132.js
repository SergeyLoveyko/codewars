//  132. - Tip Calculator

function calculateTip(amount, rating) {
    let num = 0;

    if (rating.toLowerCase() == "terrible") {
        num = 0;
    } else if (rating.toLowerCase() == "poor") {
        num = 5;
    } else if (rating.toLowerCase() == "good") {
        num = 10;
    } else if (rating.toLowerCase() == "great") {
        num = 15;
    } else if (rating.toLowerCase() == "excellent") {
        num = 20;
    } else {
        return "Rating not recognised"
    }

    return Math.ceil(amount * (num / 100));
}


console.log(calculateTip(20, "Excellent"));     //  4
console.log(calculateTip(26.95, "good"));       //  3
console.log(calculateTip(27.45, "Poor"));       //  2
console.log(calculateTip(157.07, "GREAT"));     //  24
console.log(calculateTip(157.07, "terrible"));     //  24