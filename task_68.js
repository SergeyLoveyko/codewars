//  68. - Is it a palindrome?

function isPalindrome(x) {
    const newStr = x.toLowerCase().split('').reverse().join('');

    return x.toLowerCase() == newStr;
}

console.log(isPalindrome("a"));              //  true
console.log(isPalindrome("aba"));            //  true
console.log(isPalindrome("Abba"));           //  true
console.log(isPalindrome("hello"));          //  false
console.log(isPalindrome("Bob"));            //  true
console.log(isPalindrome("Madam"));          //  true
console.log(isPalindrome("AbBa"));           //  true
console.log(isPalindrome(""));               //  true