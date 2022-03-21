//  176. - Filter out the geese

function gooseFilter (birds) {
    const geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    return  birds.filter(i => geese.indexOf(i) < 0);
};

console.log(gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]));
//  ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]
console.log(gooseFilter(["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"]));
//  ["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"]
console.log(gooseFilter(["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]));
//  []
