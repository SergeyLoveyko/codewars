//  168. - Double Char

function doubleChar(str) {
    // return str.replace(/./g, '$&$&');
    // return str.replace(/./g, m => Array(3).join(m));
    return str.split('').reduce((acc, n) => acc + n + n, '');
}

console.log(doubleChar("abcd"));           //  "aabbccdd"
console.log(doubleChar("Adidas"));         //  "AAddiiddaass"
console.log(doubleChar("1337"));           //  "11333377"
console.log(doubleChar("illuminati"));     //  "iilllluummiinnaattii"
console.log(doubleChar("123456"));         //  "112233445566"
console.log(doubleChar("%^&*("));          //  "%%^^&&**(("