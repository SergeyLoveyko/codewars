//  19. - Reversed sequence

const reverseSeq = n => {
  let num = n;
  let arr = []
  for (let i = n; i > 0; i--) {
    arr.push(num--);
  }
  return arr;
};

console.log(reverseSeq(5));     //  [ 5, 4, 3, 2, 1 ]
console.log(reverseSeq(3));     //  [ 3, 2, 1 ]
console.log(reverseSeq(11));    //  [11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
console.log(reverseSeq(7));     //  [7, 6, 5, 4, 3, 2, 1]