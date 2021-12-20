//  90. - Find the Difference in Age between Oldest and Youngest Family Members

function differenceInAges(ages){
    const newArr = ages.sort(function(a, b) {
        return a - b;
    });

    const difference = newArr[newArr.length -1] - newArr[0];

    return [newArr[0], newArr[newArr.length -1], difference, ];
}

console.log(differenceInAges([82, 15, 6, 38, 35]));     //   [6, 82, 76]
console.log(differenceInAges([57, 99, 14, 32]));        //   [14, 99, 85]