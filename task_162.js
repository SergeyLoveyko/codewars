//  162. - Colour Association

function colourAssociation(array){
    let arr = [];
    for (let i = 0; i < array.length; i++) {
        let obj = {};
        obj[array[i][0]] = array[i][1]
        arr.push(obj);
    }
    return arr;
}

console.log(colourAssociation([["white", "goodness"], ["blue", "tranquility"]]));           //  [{white:"goodness"},{blue:"tranquility"}]
console.log(colourAssociation([["red", "energy"],["yellow", "creativity"],["brown" , "friendly"],["green", "growth"]]));
//  [{red: "energy"},{yellow: "creativity"}, {brown: "friendly"},{green: "growth"}]
