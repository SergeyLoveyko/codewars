//  12. - Difference of Volumes of Cuboids

function findDifference(a, b) {
    //loading...
    // console.log("-------------------------------");
    let arrCountA;
    let arrCountB;

    function countA(arr) {
        let arrA = "1";
        arr.forEach(function (item) {
            arrA *= item;
        });
        // console.log(arrA);
        arrCountA = arrA;
    }
    countA(a);
    // console.log(arrCountA);

    function countB(arr) {
        let arrA = 1;
        arr.forEach(function (item) {
            arrA *= item;
        });
        // console.log(arrA);
        arrCountB = arrA;
    }
    countB(b);
    // console.log(arrCountB);

    if (arrCountA > arrCountB) {
        const A = arrCountA - arrCountB;
        console.log("---");
        console.log(A);
        return A;
    } else {
        const B = arrCountA - arrCountB;
        console.log("---");
        console.log(B);
        return arrCountB - arrCountA;
    }
}


// console.log(findDifference([3, 2, 5], [1, 4, 4]));

findDifference([3, 2, 5], [1, 4, 4]);           //   14
findDifference([9, 7, 2], [5, 2, 2]);           //  106
findDifference([11, 2, 5], [1, 10, 8]);         //   30
findDifference([4, 4, 7], [3, 9, 3]);           //   31
findDifference([15, 20, 25], [10, 30, 25]);     //    0