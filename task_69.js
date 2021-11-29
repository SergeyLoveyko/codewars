function hello(name = "World") {
    const str = name.toLowerCase();
    const newStr = str.charAt(0).toUpperCase();

    return name === '' ? 'Hello, World!'
        : 'Hello, ' + newStr + str.slice(1) + '' + '!';
    
}

console.log(hello('johN'));                 //  'Hello, John!'
console.log(hello('alice'));                //  'Hello, Alice!'
console.log(hello());                       //  'Hello, World!'
console.log(hello(''));                     //  'Hello, World!'