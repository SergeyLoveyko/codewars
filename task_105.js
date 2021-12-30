//  105. - Even or Odd

function even_or_odd(number) {
    return number % 2 == 0 ? "Even" : "Odd";
}

console.log(even_or_odd(2));            //  "Even"
console.log(even_or_odd(7));            //  "Odd"
console.log(even_or_odd(-42));          //  "Even"
console.log(even_or_odd(-7));           //  "Odd"
console.log(even_or_odd(0));            //  "Even"