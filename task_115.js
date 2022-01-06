//  115. - Student's Final Grade

function finalGrade (exam, projects) {
    if (exam > 90 || projects > 10) {
        return 100;
    } else if (exam > 75 && projects > 4) {
        return 90
    } else if (exam > 50 && projects > 1) {
        return 75
    } else {
        return 0;
    }
}

console.log(finalGrade(100, 12));    //  100
console.log(finalGrade(85, 5));      //  90
console.log(finalGrade(80, 4));      //  75
console.log(finalGrade(50, 5));      //  0
console.log(finalGrade(60, 1));      //  0