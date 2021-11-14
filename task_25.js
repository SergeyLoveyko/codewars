//  25. - Remove exclamation marks

function removeExclamationMarks(s) {
//   return s.replace(/!/g, '');
  return s.split('!').join('');
}

console.log(removeExclamationMarks("Hello World!"));    //  "Hello World"
console.log(removeExclamationMarks("Hello World!!"));    //  "Hello World"
console.log(removeExclamationMarks("!Hello! World"));    //  "Hello World"