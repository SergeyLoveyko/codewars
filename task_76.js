//  76. - FIXME: Replace all dots

var replaceDots = function (str) {
    return str.replace(/\./g, '-');
}

console.log(replaceDots("one.two.three")); //   "one-two-three"
console.log(replaceDots("left.top.bottom")); //   "one-two-three"