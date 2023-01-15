const practice = [25, 36, 27, 28, 29, 30];
const squares = practice.map((number) => {
   return number * number
});

console.log(squares, practice);



const bools = [true, true, false, true, false, false ,true];
const bool = bools.map((boolean) => {
   if (boolean) {
      return Math.floor(Math.random() * 5)
   } else {
      return 0
   }
})

console.log(bool);


const prices = [1.23, 19.99, 85.2, 32.87, 8, 5.2];
const addTax = prices.map((price) => {
   if (price > 10) {
      return price * 1.2;
   } else {
      return price
   }
})

console.log(addTax);


const itens = ['light', 'banana', 'phone', 'mouse'];
const plurals = itens.map((plural) => {
   if (plural === 'mouse') {
      return 'mice'
   }
   return `${ plural }s`;
})

console.log(plurals);


const row = [10, 20, 30, 40, 50];
const matrix = row.map((item) => {
   return [item]
})

console.log(matrix);