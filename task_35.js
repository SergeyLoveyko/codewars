//  35. - Beginner Series #4 Cockroach

function cockroachSpeed(s) {
  //Good Luck!
    const res = Math.floor((s * 1000 * 100) / 60 / 60);
    return res;
}

console.log(cockroachSpeed(1.08));      //  30
console.log(cockroachSpeed(1.09));      //  30
console.log(cockroachSpeed(0));         //   0