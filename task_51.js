//  51. - Switch it Up!

function switchItUp(number){
//Write your own Code!
    // switch (number) {
    //     case 0:
    //         return "Zero";
    //     case 1:
    //         return "One";
    //     case 2:
    //         return "Two";
    //     case 3:
    //         return "Three";
    //     case 4:
    //         return "Four";
    //     case 5:
    //         return "Five";
    //     case 6:
    //         return "Six";
    //     case 7:
    //         return "Seven";
    //     case 8:
    //         return "Eight";
    //     case 9:
    //         return "Nine";
    // }
    return 'Zero One Two Three Four Five Six Seven Eight Nine'.split(' ')[number];
}

console.log(switchItUp(1));     //  "One"
console.log(switchItUp(3));     //  "Three"
console.log(switchItUp(5));     //  "Five"