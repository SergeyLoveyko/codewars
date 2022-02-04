//  146. - Expressions Matter

function expressionMatter(a, b, c) {
    let arr = []
    arr.push(a * (b + c));
    arr.push(a * b * c);
    arr.push(a + b + c);
    arr.push(a + b * c);
    arr.push((a + b) * c);
    arr.push((a * b) + c);
    return Math.max(...arr);
}

console.log(expressionMatter(2, 1, 2));     //  6
console.log(expressionMatter(2, 1, 1));     //  4
console.log(expressionMatter(1, 1, 1));     //  3
console.log(expressionMatter(1, 2, 3));     //  9
console.log(expressionMatter(1, 3, 1));     //  5
console.log(expressionMatter(2, 2, 2));     //  8