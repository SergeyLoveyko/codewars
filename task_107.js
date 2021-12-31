//  107. - Century From Year

function century(year) {
  
    let res = "";
    const yearNew = year.toString();

    // if (year.toString().length < 4) {
    //     res = 1;
    // } else if (year.toString().substr(3) == 0) {
    //     res = year.toString().substring(0, 2);
    // } else if (year.toString().substr(3) != 0) {
    //     res = parseInt(year.toString().substring(0, 2), 10) + 1;
    // }

    if (yearNew.length < 3) {
        res = 1;
    } else if (yearNew.length < 4) {
        if (yearNew.slice(-2) < 1) {
            res = yearNew[0];
        } else {
            res = Number(yearNew[0]) + 1;
        }        
    } 
    else if (yearNew.length > 3) {
        if (yearNew.slice(-2) < 1) {
            res = yearNew.slice(0, yearNew.length - 2);
        } else {
            res = Number(yearNew.slice(0, yearNew.length - 2)) + 1;
        }
    }

    // return year.toString().length;
    // return parseInt(res, 10);
    return Number(res);
}

console.log(century(1705));     //  18
console.log(century(1900));     //  19
console.log(century(1601));     //  17
console.log(century(2000));     //  20
console.log(century(89));       //  1
console.log(century(289));      //  3
console.log(century(200));      //  2
console.log(century(23400));    //  234




