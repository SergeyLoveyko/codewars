//  144. - Well of Ideas - Easy Version

function well(x){
    const res = x.filter(function(i) {return i == 'good'}).length;

    return res == 0 ? 'Fail!' : res < 3 ? 'Publish!' : 'I smell a series!';
}

console.log(well(['bad', 'bad', 'bad']));                   //  'Fail!'
console.log(well(['good', 'bad', 'bad', 'bad', 'bad']));    //  'Publish!'
console.log(well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']));  //  'I smell a series!'
