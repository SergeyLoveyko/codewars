//  120. - 101 Dalmatians - squash the bugs, not the dogs!

function howManyDalmatians(number) {
    var dogs = ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIANS!!!"];
    
    return number <= 10 ? dogs[0] : number <= 50 ? dogs[1] : number <= 100 ? dogs[2] : dogs[3]
    

}

console.log(howManyDalmatians(26));     //  "More than a handful!"
console.log(howManyDalmatians(8));      //  "Hardly any"
console.log(howManyDalmatians(14));     //  "More than a handful!"
console.log(howManyDalmatians(80));     //  "Woah that's a lot of dogs!"
console.log(howManyDalmatians(100));    //  "Woah that's a lot of dogs!"
console.log(howManyDalmatians(101));    //  "101 DALMATIANS!!!"