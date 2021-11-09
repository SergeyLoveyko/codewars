// 2. - Basic data types--Array

function getLength(arr) {
  //return length of arr
    console.log(arr.length);
    return arr.length;
}
function getFirst(arr){
  //return the first element of arr
    console.log(arr[0]);
    return arr[0];
}
function getLast(arr){
  //return the last element of arr
    console.log(arr[arr.length - 1]);
    return arr[arr.length - 1];
}
function pushElement(arr){
  var el=1;
  //push el to arr
    arr.push(el);
    console.log(arr.length);
    return arr.length;
}
function popElement(arr){
  //pop an element from arr
    arr.pop();
    console.log(arr.length);
    return arr.length;
}


getLength([1, 2, 3]);       //  3
getFirst([1, 2, 3]);        //  1
getLast([1, 2, 3]);         //  3
pushElement([1, 2, 3]);     //  length: 4
popElement([1, 2, 3]);      //  length: 2