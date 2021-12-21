//  92. - L1: Set Alarm

function setAlarm(employed, vacation){
    return employed == true && vacation == false ? true : false;
}

console.log(setAlarm(true, true));     //  false,"Should be false."
console.log(setAlarm(false,true));     //  false, "Should be false."
console.log(setAlarm(true, false));    //  true,"Should be true."
