function getGrade(s1, s2, s3) {
    const sum = (s1 + s2 + s3) / 3;

    if (sum < 60) {
        return "F";
    } else if (sum < 70) {
        return "D";
    } else if (sum < 80) {
        return "C";
    } else if (sum < 90) {
        return "B";
    } else if (sum <= 100) {
        return "A";
    }
}

console.log(getGrade(70, 70, 100)); //          B
console.log(getGrade(66, 62, 68)); //           D
console.log(getGrade(58, 59, 60)); //           F