//  119. - Match Characters that Occur One or More Times

function mergeArrays(arr1, arr2) {
    const arrPlus = [...arr1, ...arr2];
    const arrSotr = arrPlus.sort((a, b) => a - b);
    const arrUnique = arrSotr.filter((item,index) => 
        arrSotr.indexOf(item) === index);

    return arrUnique;
}

console.log(mergeArrays([1,2,3,4], [5,6,7,8]));         //  [1,2,3,4,5,6,7,8], "Basic tests"
console.log(mergeArrays([1,3,5,7,9], [10,8,6,4,2]));    //  [1,2,3,4,5,6,7,8,9,10], "Basic tests"
console.log(mergeArrays([1,3,5,7,9,11,12], [1,2,3,4,5,10,12]));     //  [1,2,3,4,5,7,9,10,11,12], "Basic tests"
