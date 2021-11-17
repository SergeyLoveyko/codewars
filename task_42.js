//  42. - For UFC Fans (Total Beginners): Conor McGregor vs George Saint Pierre

var quote = function(fighter) {
  // your code here
    return fighter.toLowerCase() == 'george saint pierre'
        ? "I am not impressed by your performance."
        : "I'd like to take this chance to apologize.. To absolutely NOBODY!";
};

console.log(quote('george saint pierre'));
console.log(quote('conor mcgregor'));

console.log(quote('George Saint Pierre'));
console.log(quote('Conor McGregor'));