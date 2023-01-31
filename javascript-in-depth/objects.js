const mexico = {
   id: 24,
   name: 'Mexico',
   capital: 'Mexico city',
   neighbors: ['usa', 'Guatemala', 'Belize'],
};

console.log(mexico);

mexico['id'] = 25;

mexico['neighbors'].push('Honduras');

console.log(mexico);


console.log('-------------');

const myPet = {
   name: 'sudo',
   type: 'dog',
   breed: 'poodle',
   age: 7,
   friends: [ 'bit','bite','data']
}

console.log(myPet);

myPet.color = 'black';
myPet.breed = 'beagle';

myPet.friends.pop();

console.log(myPet);

myPet.friends.push('chip')

console.log(myPet);

console.log('-------------');


const banana = {
   name: 'banana',
   quantity: 1,
   price:1.95,
}

const apple = {
   name: 'apple',
   quantity: 1,
   price: 1.45,
}

const candy = {
   name: 'candy',
   quantity: 1,
   price: 3.50,
}

const store = {
   storeNumber: 5,
   locationCity: 'milan',
   localCountry: 'italy',
   products: [banana, apple,candy]
}

console.log(store);

console.log('-------------');

console.log(store.products);
console.log(store.products[2]);

store.products[0].price = 1.75;

console.log(store);
console.log(banana);

console.log('-------------');

const houseForSale = {
   area: 940,
   value: 320000,
   streetName: 'fifth street',
   built: '2012',
   owner: {
      name: 'luan',
      age: 25,
   },
   offers: [29000,295000,35000,312000]
}

console.log(houseForSale);

delete houseForSale.built

console.log(houseForSale);

houseForSale.owner.age = 30;

console.log(houseForSale);

const maxPrice = houseForSale.offers.reduce((max,price) => {
   if (max < price) {
      return price
   }

   return max
}, 0)

console.log(maxPrice);

console.log('-------------');

const myConsole = {
   log: (message) => {
      console.log(message);
   }
};

myConsole.log('hellou')