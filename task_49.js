//  49. - Calculate BMI

function bmi(weight, height) {
    const weiIndex = weight / (height ** 2);
    let res = "";
    if (weiIndex <= 18.5) {
        res = "Underweight";
    } else if (weiIndex <= 25.0) {
        res = "Normal";
    } else if (weiIndex <= 30.0) {
        res = "Overweight";
    } else {
        res = "Obese";
    }
     return res;
}

console.log(bmi(80, 1.80));     //  "Normal"