//  139. - Remove duplicates from list

function distinct(a) {
    let arr = a.filter((item, index) => {
        return a.indexOf(item) === index;
    })

    return arr
}

console.log(distinct([1]));             //  [1]
console.log(distinct([1,2]));           //  [1,2]
console.log(distinct([1,1,2]));         //  [1,2]