//  123. - Match Ending String Patterns

function position(letter){
    const str = "abcdefghijklmnopqrstuvwxyz";
    return `Position of alphabet: ${str.indexOf(letter) + 1}`;
}

console.log(position("a"));     //  "Position of alphabet: 1"
console.log(position("z"));     //  "Position of alphabet: 26"
console.log(position("e"));     //  "Position of alphabet: 5"