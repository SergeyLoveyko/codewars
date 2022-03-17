//  172. - Define a card suit

// deck = ['2♣','3♣','4♣','5♣','6♣','7♣','8♣','9♣','10♣','J♣','Q♣','K♣','A♣',
//         '2♦','3♦','4♦','5♦','6♦','7♦','8♦','9♦','10♦','J♦','Q♦','K♦','A♦',
//         '2♥','3♥','4♥','5♥','6♥','7♥','8♥','9♥','10♥','J♥','Q♥','K♥','A♥',
//         '2♠','3♠','4♠','5♠','6♠','7♠','8♠','9♠','10♠','J♠','Q♠','K♠','A♠'];

const deck = ['2♣','6♦', 'Q♣', '8♠'];

function defineSuit(card) {
    const obj = {
        '♣': 'clubs',
        '♦': 'diamonds',
        '♥': 'hearts',
        '♠': 'spades'
    }
    const arrOne = card.slice(1, 2);
    const arrTwo = card.slice(2, 3);

    return card.length > 2 ? obj[arrTwo] : obj[arrOne];
}

console.log(defineSuit('3♣'));     //  clubs
console.log(defineSuit('3♥'));     //  hearts
console.log(defineSuit('3♠'));     //  spades
console.log(defineSuit('10♠'));    //  spades
console.log(defineSuit('7♣'));     // clubs