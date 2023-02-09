const generateDeck = () => {
   const deck = [];
   const suits = ['hearts', 'clubs', 'diamonds', 'spades'];
   const cards = [
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10',
      'jack',
      'queen',
      'king',
      'ace',
   ];

   for (const card of cards) {
      for (const suit of suits) {
         deck.push({ card: card, suit: suit });
      }
   }

   return deck;
};

const drawCard = (deck) => {
   const randomIndex = Math.floor(Math.random() * deck.length);
   const card = deck[randomIndex];
   deck.splice(randomIndex, 1);
   return card;
};

const checkScore = (hand) => {
   let total = 0;

   for (const cardObject of hand) {
      if (cardObject.card === 'king') {
         total += 10;
      } else if (cardObject.card === 'queen') {
         total += 10;
      } else if (cardObject.card === 'jack') {
         total += 10;
      } else if (cardObject.card === 'ace') {
         total += 1;
      } else {
         total += Number(cardObject.card);
      }
   }
   return total;
};

const myDeck = generateDeck();
const playerHand = [];
const dealerHand = [];

playerHand.push(drawCard(myDeck));
playerHand.push(drawCard(myDeck));
dealerHand.push(drawCard(myDeck));
dealerHand.push(drawCard(myDeck));

console.log('starting player hand',playerHand);
console.log('starting player score', checkScore(playerHand));
console.log('starting dealer hand', dealerHand);
console.log('starting dealer score', checkScore(dealerHand));



while (true) {
   playerHand.push(drawCard(myDeck));
   const playerScore = checkScore(playerHand);
   let dealerScore = checkScore(dealerHand);
   if (playerScore > 21) {
      console.log(`you lose seu score foi ${playerScore} dealer ${dealerScore}`);
      break;
   }

   if (playerScore === 21) {
      console.log(`your win  you score ${playerScore}: dealer score ${dealerScore}`);
      break;
   }

   dealerHand.push(drawCard(myDeck))
   dealerScore = checkScore(dealerHand);

   if (dealerScore > 21) {
       console.log(`you win seu score foi ${playerScore} dealer ${dealerScore}`);
      break;
   }

   if (dealerScore === 21) {
      console.log(`your lose  you score ${playerScore}: dealer score ${dealerScore}`);
      break;
   }
}

console.log('ending player hand', playerHand);
console.log('ending player score', checkScore(playerHand));
console.log('ending dealer hand', dealerHand);
console.log('ending dealer score', checkScore(dealerHand));
