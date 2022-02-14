//  157. - BASIC: Making Six Toast.

function sixToast(num) {
    if (6 < num) {
      return num - 6;
    } else if (6 > num) {
      return 6 - num;
    } else {
      return 0;
    }
}

console.log(sixToast(6));           //  0
console.log(sixToast(17));          //  11
console.log(sixToast(3));           //  3