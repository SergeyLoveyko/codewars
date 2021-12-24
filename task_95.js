//  95. - UEFA EURO 2016

function uefaEuro2016(teams, scores){
    // let win = '';
    // let losing = '';
    if (scores[0] > scores[1]) {
        return `At match ${teams[0]} - ${teams[1]}, ${teams[0]} won!`;
    } else if ((scores[0] < scores[1])) {
        return `At match ${teams[0]} - ${teams[1]}, ${teams[1]} won!`;
    } else {
        return `At match ${teams[0]} - ${teams[1]}, teams played draw.`;
    }
    // const res = ['won!', 'teams played draw.'];
    // return `At match ${teams[]} - ${teams[]}, ${} `;
}

console.log(uefaEuro2016(['Germany', 'Ukraine'], [2, 0]));    //    "At match Germany - Ukraine, Germany won!"
console.log(uefaEuro2016(['Belgium', 'Italy'], [0, 2]));      //    "At match Belgium - Italy, Italy won!"
console.log(uefaEuro2016(['Portugal', 'Iceland'], [1, 1]));   //    "At match Portugal - Iceland, teams played draw."