//  178. (7kyu) - Get the Middle Character

function getMiddle(s) {
  const numTrue = s.length / 2;
  const numFalse = ((s.length - 1) / 2) + 1;

  if (s.length < 2) {
    return s;
  }
  return s.length % 2 == 0 ? s.slice(numTrue - 1, numTrue + 1) : s.slice(numFalse - 1, numFalse);
  // return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}


console.log(getMiddle("test"));         //  "es"
console.log(getMiddle("testing"));      //  "t"
console.log(getMiddle("middle"));       //  "dd"
console.log(getMiddle("A"));            //  "A"