const mexico = new Map();

mexico.set('id', 24);
mexico.set('name', 'mexico');
mexico.set('capital', 'mexico city');
mexico.set('neibors', ['usa', 'guatemala', 'belize']);

console.log(mexico);

mexico.set('id', 25);
mexico.get('neibors').push('honduras');

console.log(mexico);
console.log('------------------');

const myPet = new Map();

myPet.set('age', 7);
myPet.set('name', 'sudo');
myPet.set('type', 'dog');
myPet.set('breed', 'poodle');
myPet.set('friends', ['bit', 'bite', 'data']);

console.log(myPet);

myPet.set('color', 'black');

console.log(myPet);

myPet.set('breed', 'beagle');

console.log(myPet);

myPet.get('friends').pop();
myPet.get('friends').push('chip');

console.log(myPet);

console.log('------------------');

const banana = {
   name: 'banana',
   quantity: 1,
   price: 1.95,
};

const apple = {
   name: 'apple',
   quantity: 1,
   price: 1.45,
};

const candy = {
   name: 'candy',
   quantity: 1,
   price: 3.5,
};

const store = new Map();
store.set('storeNumber', 5);
store.set('localCity', 'milan');
store.set('locationcountry', 'italy');
store.set('products', [banana, apple, candy]);

console.log(store);

console.log(store.get('products'));

store.get('products')[0].price = 1.75;

console.log(store);

candy.price = 4.99;

console.log(store);

console.log('------------------');

const houseForSale = new Map();

houseForSale.set('area', 940);
houseForSale.set('value', 320000);
houseForSale.set('streetName', 'fifth street');
houseForSale.set('built', 2012);
houseForSale.set('owner', { name: 'blake', age: 29 });
houseForSale.set('offers', [290000, 31500, 312000]);

console.log(houseForSale);
houseForSale.delete('built');
console.log(houseForSale);

houseForSale.get('owner').age = 30;

console.log(houseForSale);

const maxPrice = houseForSale.get('offers').reduce((max, price) => {
   if (price > max) {
      return price;
   }

   return max;
}, 0);

console.log(maxPrice);

houseForSale.set('sale price', 312000);

console.log(houseForSale);

console.log('------------------');

const myConsole = new Map();

myConsole.set('log', (message) => {
   console.log(message);
});

myConsole.get('log')('oi');

myConsole.set(1, 'number 1');
myConsole.set('1', 'string one');

console.log(myConsole);

console.log('------------------');

const numbers = [10, 20, 15, 30, 15, 20, 35, 60, 10];

const seenNumbers = new Map();

for (let i = 0; i < numbers.length; i++){
   if (seenNumbers.has(numbers[i])) {
      console.log(i, seenNumbers.get(numbers[i]));
      break;
   } else {
      seenNumbers.set(numbers[i], i);
   }
}

console.log(seenNumbers); ;
