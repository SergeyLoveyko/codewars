//  98. - repeatIt

var repeatIt = function(str, n) {
    let newStr = '';
    for (let i = 0; i < n; i++) {
        newStr += str;
    }
    return typeof(str) == "string" ? newStr : "Not a string";
}

console.log(repeatIt("*",3));           //  "***"
console.log(repeatIt("Hello",11));      //  "HelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHello"
