const nums = [1, 2, 3, 4, 5, 6];

const fill = nums.filter((pares) => {
   return pares % 2 === 0;
});

console.log(fill);

const practice = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

const even = practice.filter((evenNum) => {
   return evenNum % 2 === 0;
});

console.log(practice, even);

console.log('------------');


const countries = [
   'brasil',
   'peru',
   'idia',
   'France',
   'south africa',
   'united states',
];

const blankSpace = countries.filter((empty) => {
   return empty.includes(' ');
});

console.log(blankSpace);

console.log('------------');


const prices = [1.23, 19, 99.99, 85.2, 32.87, 8, 5.2];

const lowPrices = prices.filter((price) => {
   if (price * 1.15 < 10) {
      console.log(price * 1.15);
      return true;
   }
});

console.log(lowPrices);

console.log('------------');

const values = [
   [1, 2, 3],
   [0, 0, 1],
   [3, 6, 9],
   [0, 1, 2],
   [0, 0, 3, 4]
];


const hasTwos = values.filter((has) => {
   return has.includes(2);
});

console.log(hasTwos);

console.log('----------------');


const nuns = [10, 20, 30, 40, 50].map(
   (num) => {
      return num *2 
}
).filter((num) => {
   return num > 50
});

console.log(nuns);

const timesTwo = nuns.map((num) => {
   return num * 2;
});
console.log(timesTwo);

const over50 = timesTwo.filter((num) => {
   return num > 50
});

console.log(over50);

