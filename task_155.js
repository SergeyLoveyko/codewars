//  155. - Will there be enough space?

function enough(cap, on, wait) {
    const sum = on + wait;
    return (cap >= sum) ? 0 : sum - cap;
    // if (cap >= sum) {
    //   return 0;
    // } else {
    //   return sum - cap;
    // }
}

console.log(enough(10, 5, 5));          //  0
console.log(enough(100, 60, 50));       //  10
console.log(enough(20, 5, 5));          //  0