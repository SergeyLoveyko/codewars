//  20. - Training JS #9: loop statement --while and do..while

function padIt(str,n){
    //coding here
    let res = str;
    let num = 0;
    let count = n;
    while (num < n) {
        ++num;
        if (count % 2 === 1) {
            res = "*" + res;
            count++;
        } else {
            res = res + "*";
            count++;
        }
    }
    return res;
}

console.log(padIt("a",1));      //  "*a"
console.log(padIt("a",2));      //  "*a*"
console.log(padIt("a",3));      //  "**a*"
console.log(padIt("a",4));      //  "**a**"
console.log(padIt("a", 5));     //  "***a**"

console.log(padIt("xf",13));            //  "*******xf******"
console.log(padIt("foahty",25));        //  "*************foahty************"


