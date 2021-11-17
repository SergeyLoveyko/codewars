//  43. - Training JS #13: Number object and its properties

function whatNumberIsIt(n){
    //coding here
    if (n === 1.7976931348623157e+308) {
        return "Input number is Number.MAX_VALUE";
    } else if (n === 5e-324) {
        return "Input number is Number.MIN_VALUE";
    } else if (isNaN(n)) {
        return "Input number is Number.NaN";
    } else if (n === -Infinity) {
        return "Input number is Number.NEGATIVE_INFINITY";
    } else if (n === Infinity) {
        return "Input number is Number.POSITIVE_INFINITY";
    } else {
        return `Input number is ${n}`;
    }
}

console.log(whatNumberIsIt(1 / 0));                         //  "Input number is Number.POSITIVE_INFINITY"
console.log(whatNumberIsIt(100));                           //  "Input number is 100"
console.log(whatNumberIsIt(1.7976931348623157e+308));       //  "Input number is Number.MAX_VALUE"
console.log(whatNumberIsIt(5e-324));                        //  "Input number is Number.MIN_VALUE"
console.log(whatNumberIsIt(-Number.MAX_VALUE*2));           //  "Input number is Number.NEGATIVE_INFINITY"
console.log(whatNumberIsIt(NaN));                           //  "Input number is Number.NaN"
console.log(whatNumberIsIt(Infinity+1));                    //  "Input number is Number.POSITIVE_INFINITY"