//  23. - Training JS #12: loop statement --for..in and for..of

function giveMeFive(obj){
  //coding here
    let res = [];
    for (let key in obj) {
        if (key.length == 5) {
            res.push(key);
        }
        if (obj[key].length == 5) {
            res.push(obj[key]);
        }
    }
    return res;
}

console.log(giveMeFive({Our:"earth",is:"a",beautyful:"world"}));                //  [ 'earth', 'world' ]
console.log(giveMeFive({Ihave:"enough", money:"to",buy:"a",car:"model"}));      //  [ 'Ihave', 'money', 'model' ]
console.log(giveMeFive({Pears:"than",apple:"sweet"}));                          //  [ 'Pears', 'apple', 'sweet' ]