//  127. - Fix the Bugs (Syntax) - My First Kata

function myFirstKata(a, b) {
    if (isNaN(a) || isNaN(b) || typeof(a) == 'boolean' || typeof(b) == 'boolean') {
      return false;
    } else {
    //   return `(${a} % ${b}) + (${b} % ${a})`;
      return a % b + b % a;
    }
}

console.log(myFirstKata(3,5));          //  (3 % 5 + 5 % 3),    5
console.log(myFirstKata("hello",3));    //  false
console.log(myFirstKata(67,"bye"));     //  false
console.log(myFirstKata(true,true));    //  false
console.log(myFirstKata(314,107));      //  (107 % 314 + 314 % 107),    207
console.log(myFirstKata(19483,9));      //  (9 % 19483 + 19483 % 9),    16