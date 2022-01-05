//  114. - String ends with?

function solution(str, ending){
    if (ending == '') {
        return true
    } else {
    let num = ending.length;
    return str.slice(-num) == ending;
    }
}

console.log(solution('abcde', 'cde'));  //  true
console.log(solution('abcde', 'abc'));  //  false