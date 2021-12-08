//  78. - Grasshopper - Terminal game combat function

function combat(h, d) {
    return (h - d) < 0 ? 0 : h - d;
}

console.log(combat(100, 5)); //                 95
console.log(combat(92, 8)); //                  84
console.log(combat(20, 30)); //                  0