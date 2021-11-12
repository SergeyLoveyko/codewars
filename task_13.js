// 13. - String repeat

function repeatStr(n, s) {
    let res = "";
    for (let i = 1; i <= n; i++) {
        res = res + s;
    }

    return res;
}

console.log(repeatStr(3, "*"));         //  "***"
console.log(repeatStr(5, "#"));         //  "#####"
console.log(repeatStr(2, "ha "));       //  "ha ha "