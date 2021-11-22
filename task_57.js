//  57. - Counting sheep...

const array = [true,  true,  true,  false,
              true,  true,  true,  true ,
              true,  false, true,  false,
              true,  false, false, true ,
              true,  true,  true,  true ,
              false, false, true,  true ];

function countSheeps(arrayOfSheep) {
    let count = 0;
    arrayOfSheep.forEach(el => {
        if (el === true) {
            count++;
        }
    });
    return count;
    // return arrayOfSheep.filter(Boolean).length;
}


console.log(countSheeps(array));       //  17