//  125. - Failed Sort - Bug Fixing #4

var sortArray = function(value) {
    return value.split('').sort((c, p) => c - p ).join('');
}

console.log(sortArray('12345'));    //  '12345', 'Return a ascending sorted array'
console.log(sortArray('54321'));    //  '12345', 'Return a ascending sorted array'
console.log(sortArray('34251'));    //  '12345', 'Return a ascending sorted array'