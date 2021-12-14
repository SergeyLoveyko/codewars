//  84. - Abbreviate a Two Word Name

function abbrevName(name){
    const arr = name.split(' ');
    let newArr = [];
    for (let value of arr) {
        newArr.push(value.slice(0, 1).toUpperCase());
    }
    
    return newArr.join('.');
}

console.log(abbrevName("Sam Harris"));          //  "S.H"
console.log(abbrevName("Patrick Feenan"));      //  "P.F"
console.log(abbrevName("Evan Cole"));           //  "E.C"
console.log(abbrevName("P Favuzzi"));           //  "P.F"
console.log(abbrevName("David Mendieta"));      //  "D.M"