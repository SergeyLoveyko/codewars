//  106. - Fake Binary

function fakeBin(x){
    let str = "";

    for (let i = 0; i < x.length; i++) {
        if (x[i] < 5) {
            str += 0;
        } else {
            str += 1;
        }
    } 

    return str;
}

console.log(fakeBin('45385593107843568'));      //  '01011110001100111'
console.log(fakeBin('509321967506747'));        //  '101000111101101'
console.log(fakeBin('366058562030849490134388085'));    //  '011011110000101010000011011'
