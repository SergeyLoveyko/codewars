//  21. - Training JS #10: loop statement --for

function pickIt(arr){
    var odd=[],even=[];
    //coding here
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 1) {
            odd.push(arr[i]);
        } else {
            even.push(arr[i]);
        }
    }
  
    return [odd,even];
}


console.log(pickIt([1,2]));                //  [[1],[2]]
console.log(pickIt([1,2,3]));              //  [[1,3],[2]]
console.log(pickIt([3,2,1]));              //  [[3,1],[2]]
console.log(pickIt([10,20,30]));           //  [[],[10,20,30]]
console.log(pickIt([11,21,31]));           //  [[11,21,31],[]]
console.log(pickIt([8,1,5,4,6,1,1]));      //  [[1,5,1,1],[8,4,6]]
