// longhand
if (console) {
    console.log('Console Available');
}

// shorthand
console && console.log('Console Available');

const player1 = 'Martin';

// player2 is only defined if player1 is defined
const player2 = player1 && 'Dan';

// 'Dan'
alert(player2);