let numbers = [10, 20, 30, 40, 50];

for (let num of numbers) {
   console.log(num ** 2);
}

console.log('----------');

const ages = [10, 42, 15, 11, 22, 74, 39, 2];

let results = [];

for (let age of ages) {
   results.push({
      age: age,
      name: 'dragon',
   });
}

console.log(results);

console.log('----------');

const names = new Set();

const capsNames = new Set();

names.add('bibo');
names.add('hermione');
names.add('Spock');
names.add('leila');

for (const name of names) {
   const upper = name.toUpperCase();

   capsNames.add(upper);
}

console.log(capsNames);

console.log('----------');

const backpack = new Map();

backpack.set(1, {
   name: 'sword',
   value: 300,
});
backpack.set(2, {
   name: 'banana',
   value: 5,
});
backpack.set(3, {
   name: 'gold nugget',
   value: 1000,
});
backpack.set(4, {
   name: 'pants',
   value: 100,
});

console.log(backpack);

let totalValue = 0;

for (const item of backpack) {

   const itemItself = item[1]
   console.log(`${itemItself.name}: $${itemItself.value}`);

   totalValue += itemItself.value;
}
console.log(totalValue);