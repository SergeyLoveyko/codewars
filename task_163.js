//  163. - Combine objects

const objA = { a: 10, b: 20, c: 30 };
const objB = { a: 3, c: 6, d: 3 };
const objC = { a: 5, d: 11, e: 8 };
const objD = { c: 3 };

const combine = (...rest) => rest.reduce((result, current) => {
    for (let key in current) {
        let value = current[key];

        if (result[key] === undefined) {
            result[key] = value;
        } else {
            result[key] += value;
        }
    }
    return result
}, {});

console.log(combine(objA, objB, objC, objD));