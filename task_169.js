//  169. - Find Maximum and Minimum Values of a List

var min = function(list){
    return Math.min.apply(null, list);
}

var max = function(list){
    return Math.max.apply(null, list);;
}

console.log(min([-52, 56, 30, 29, -54, 0, -110]));      //  -110
console.log(min([42, 54, 65, 87, 0]));                  //  0
console.log(max([4,6,2,1,9,63,-134,566]));              //  566
console.log(max([5]));                                  //  5