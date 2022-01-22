//  133. - Draw stairs

function drawStairs(n) {
    let str = "";

    for (let i = 0; i < n; i++) {
        if (i == 0) {
            str += "I";
        } else {
            str += "\n" + " ".repeat(i) + "I";
        }
    }

    return str;
}

console.log(drawStairs(1));         //  "I"
console.log(drawStairs(2));         //  "I\n I"
console.log(drawStairs(3));         //  "I\n I\n  I"
console.log(drawStairs(4));         //  "I\n I\n  I\n   I"
console.log(drawStairs(5));         //  "I\n I\n  I\n   I\n    I"