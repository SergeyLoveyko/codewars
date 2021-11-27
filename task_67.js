//  67. - Freudian translator

function toFreud(string) {
    const str = string.split(" ");
    let arr = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] == '') {
            arr.push('');
        } else if (str[i] !== '') {
            arr.push("sex");
        }
        
    }

    return arr.join(' ');
}

console.log(toFreud(""));                                           //   ""
console.log(toFreud(""));                                           //   ""
console.log(toFreud("test"));                                       //   "sex"
console.log(toFreud("This is a test"));                             //   "sex sex sex sex"
console.log(toFreud("This is a longer test"));                      //   "sex sex sex sex sex"
console.log(toFreud("You're becoming a true freudian expert"));     //   "sex sex sex sex sex sex"