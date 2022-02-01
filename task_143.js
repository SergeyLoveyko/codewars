//  143. - 

function odds(values){
    let result = values.filter(function(elem) {
        return elem % 2 !== 0;
    });

    return result;
  }

  console.log(odds([]));                          //  []
  console.log(odds([2, 4, 6]));                     //  []
  console.log(odds([1, 3, 5]));                     //  [1, 3, 5]
  console.log(odds([1, 2, 3, 4, 5, 6]));            //  [1, 3, 5]
   