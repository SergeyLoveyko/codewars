//  86. - The Wide-Mouthed frog!

function mouthSize(animal) {
    return animal == "alligator" || animal == "ALLIGATOR" ? "small" : "wide";
}

console.log(mouthSize("toucan"));        //  "wide"
console.log(mouthSize("ant bear"));      //  "wide"
console.log(mouthSize("alligator"));    //  "small"