const numbers = new Set();

numbers.add(1);
numbers.add(2);
numbers.add(3);
numbers.add(4);
numbers.add(5);
numbers.add(2);
numbers.add(3);
numbers.add(4);

console.log(numbers);

numbers.add([1, 2, 3, 4, 5, 6, 5]);

console.log(numbers);

console.log('-----------');

const points = [10, 20, 10, 30, 15, 15, 35, 60, 10];

const uniquePoints = new Set(points);

console.log(uniquePoints);

console.log('-----------');

const numbers2 = [10, 20, 10, 30, 15, 15, 35, 60, 20];

const seenNumbers = new Set();

for (let i = 0; i < numbers2.length; i++) {
   if (seenNumbers.has(numbers2[i])) {
      console.log(numbers2[i]);
   }
   seenNumbers.add(numbers2[i]);
}

console.log('-----------');

const itens = [
   {
      name: 'banana',
      quantity: 1,
      price: 1.95,
   },
   {
      name: 'apple',
      quantity: 1,
      price: 1.45,
   },
   {
      name: 'banana',
      quantity: 1,
      price: 3.50,
   },
   {
      name: 'candy',
      quantity: 1,
      price: 3.5,
   },
];

const result = [];

const duplicates = new Set();

for (let i = 0; i < itens.length; i++) {
   if (duplicates.has(itens[i].name)) {
      continue;
   }
   result.push(itens[i]);
   duplicates.add(itens[i].name)
}

console.log(result);