//  94. - Palindrome Strings

function isPalindrome(line) {
    const str = line.toString().split('').reverse().join('');
    return str === line ? true : false;
}


console.log(isPalindrome("anna"));      //   true
console.log(isPalindrome("walter"));    //   false
console.log(isPalindrome(12321));       //   true
console.log(isPalindrome(123456));      //   false
console.log(isPalindrome("."));         //   true
console.log(isPalindrome(".!!."));      //   true
