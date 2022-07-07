

/*operators*/
// const food = Number(prompt('how much was your food?')); ;
// const tippercetage = prompt('tip percentage') / 100;
// const tipAmount = food * tippercetage;
// const total = food + tipAmount;
// alert('tip amount' + tipAmount);
// alert('your bill is R$: ' + total)

/* BABY APP */
// let weather = prompt('how is th eweather');
// if (weather === 'rain') {
//    alert('grab your umbrella');
// }
// else{
//    alert('grab your sunglasses');
// }

/* FUNCTIONS */
// function SayMyname() {
//   let name = prompt('whats your name?');
//    alert('olá ' + name);
// }
// SayMyname();

// function sum(a, b) {
//    return a + b
// }
// numbersSum = sum(2,2)
// console.log(numbersSum);

// function calculateFoodTotal(food, tip) {
//    let tippercetage = tip / 100;
//    const tipAmount = food * tippercetage;
//    const total = sum(food , tipAmount);
//    return total
// }
// function sum(a, b) {
//    return a + b
// }
// console.log(calculateFoodTotal(300, 20));

/* ARRAYS */
// const groceries = ['🍎', '🍩','🥨','🍉','🍭'];
// console.log(groceries[0]);
// groceries.push('🎂');
// console.log(groceries);
// console.log(groceries.slice(1));
// console.log(groceries.length);

/* OBJECTS */
// const person = {
//    name: 'leonardo',
//    shirt: 'white',
// };
// //DOT NOTATON
// console.log(person.name);
// console.log(person.shirt);
// // BRACKET NOTATION
// console.log(person['name']);
// console.log(person['shirt']);
// // ASSIGN OBJECT
// person.phone = '122-33-4444';
// console.log(person);
// //person 2
// const person2 = {
//   name: 'luan',
//   age: 24,
//   shirt: 'white',
//   phone: undefined,
// };
// console.log(person2);

const introducer = (name, shirt) => {
   const person = {
      name: name,
      shirt: shirt,
      assets: 100,
      debt: 50,
      netWorth : function() {
         return this.assets - this.debt
      }
   };
   const intro = `Hi my name is ${person.name} and the color of my hirt is ${person.shirt} eu eu tenho R$:${person.netWorth()} conto`
   return intro
}
console.log(introducer('luan','white')); 