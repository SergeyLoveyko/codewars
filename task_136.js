//  136. - Pillars

function pillars(num_pill, dist, width) {
    const distSm = dist * 100;
    if (num_pill <= 1) {
        return 0;
    } else {
        if (num_pill == 2) {
            return distSm;
        } else {
            return (distSm * (num_pill - 1)) + ((num_pill * width) - width * 2);
        }
    }
}

console.log(pillars(1, 10, 10));        //  0
console.log(pillars(2, 20, 25));        //  2000
console.log(pillars(11, 15, 30));       //  15270