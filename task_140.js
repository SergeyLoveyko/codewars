//  140. - Closest elevator

function elevator(left, right, call){
    const resLeft = Math.abs(left - call);
    const resRight = Math.abs(right - call);

    return resLeft == resRight ? 'right' :
            resLeft > resRight ? 'right' : 'left';
}

console.log(elevator(0,1,0));       //  'left'
console.log(elevator(0,1,1));       //  'right'
console.log(elevator(0,1,2));       //  'right'
console.log(elevator(0,0,0));       //  'right'
console.log(elevator(0,2,1));       //  'right'

// console.log(elevator(0,2,1));       //  'right'