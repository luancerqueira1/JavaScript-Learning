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

// const introducer = (name, shirt) => {
//    const person = {
//       name: name,
//       shirt: shirt,
//       assets: 100,
//       debt: 50,
//       netWorth : function() {
//          return this.assets - this.debt
//       }
//    };
//    const intro = `Hi my name is ${person.name} and the color of my hirt is ${person.shirt} eu eu tenho R$:${person.netWorth()} conto`
//    return intro
// }
// console.log(introducer('luan','white'));

/* LOOP */
// const fruits = ['🍎', '🍩', '🥨', '🍉', '🍭'];
// for (let i = 0; i < fruits.length; i++) {
//    console.log(fruits[i]);
// };

// for (const fruit of fruits) {
//    console.log(fruit);
// }

// fruits.forEach((fruit) => {
//    console.log(fruit);
// });

// let result = [];
// const numbers = [1, 2, 3, 4, 5];
// for (const number of numbers) {
//    // console.log(number * 2);
//    console.log(number);
//    result.push(number * 2)
// }
// console.log(result);

// const double = (numbers) => {
//    let result = [];
//    for (const number of numbers) {
//       result.push(number ** 2)
//    }
//    return result
// }
// console.log(double([2, 2, 2, 3, 5, 8, 9]));

// const letterCounter = (phrase) => {

//    let result = undefined;
//    for (const index in phrase) {
//       result = Number(index) + 1;
//    }
//    return result
// }
// const phrase = prompt('wahts the frase');
// console.log(letterCounter(phrase));

// const sumArray = (numbers) => {
//    let result = 0;
//    for (number of numbers) {
//       result += number
//    }
//    return result
// }
// const nums = [1,2,3,4]
// console.log(sumArray(nums));

// const max = (numbers) => {
//    let result = numbers[0];
//    for (const number of numbers) {
//       if (number > result) {
//          result = number
//       }
//    }
//    return result
// }
// let numbers = [1,2,8,3,4,5]
// console.log(max(numbers));

// const letterFrequency = (phrase) => {
//    let frequency = {};
//    for (const letter of phrase) {
//       if (letter in frequency) {
//          frequency[letter] += +1;
//       }
//       else {
//          frequency[letter] = 1
//       }
//    }
//    return frequency
// }
// console.log(letterFrequency('luan gama cerqueira'));

// const wordFrequency = (phrase) => {
//    let words = phrase.split(' ');
//    return letterFrequency(words)

// }
// const userInput = prompt('write your sentence')
// console.log(wordFrequency(userInput));

/* ARRAY METHODS */
// MAP
// const doubleMap = (numbers) => {
//    return numbers.map(number => number * 2)
// }
// console.log(doubleMap([1, 2, 3]));

// FILTER 👉🏻 returns an array
// const filter = (numbers, greaterThen) => {
//    let result = [];
//    for (const number of numbers) {
//       if (number > greaterThen) {
//          result.push(number);
//       }
//    }

//    return result
// }
// console.log(filter([1, 2, 3, 4, 5], 1));

// const nums = [1, 2, 3, 4, 5, 6];
// console.log(nums.filter(num => num > 3));

// const actors = [
//   {
//     name: 'jhon',
//     net: 100,
//   },
//   {
//     name: 'luan',
//     net: 2,
//   },
//   {
//     name: 'drim',
//     net: 20,
//   },
//   {
//     name: 'dex',
//     net: 30,
//   }
// ];
// const result = actors.filter(actor => actor.net > 20);
// let names = result.map(actor => actor.name).join(', ')
// document.body.innerHTML = `<h1> ${names} </h1>`

/* REDUCE */
// const nums = [1, 2, 3,2];
// const result = nums.reduce((prev, curr) => {
//   return prev + curr
// })
// console.log(result);
// const total = actors.reduce((prev, curr) => prev + curr.net , 0);
// console.log(total);

/* DOM MANIPULATION */
// let title = document.getElementById('title');
// title.innerText = 'oii';
// title.style.color = 'red'
// title.style.backgroundColor = 'lightpink';

// let red = document.getElementById('red');
// let yellow = document.getElementById('yellow');
// let green = document.getElementById('green');
// let clicou = document.getElementById('clicou');
// let colorBtn = document.querySelectorAll('.color-btn');
// let clearBtn = document.querySelector('#clear-btn');

// red.onclick = () => {
//   clicou.style.backgroundColor = 'red';
//   clicou.innerHTML = 'you clicked on red';
// }
// yellow.onclick = () => {
//   clicou.style.backgroundColor = 'yellow';
//   clicou.innerHTML = 'you clicked on yellow';
// };
// green.onclick = () => {
//   clicou.style.backgroundColor = 'green';
//   clicou.innerHTML = 'you clicked on green';
// };
/*--------------------------------------------- */
// const timesClicked = {
//   'red': 0,
//   'yellow': 0,
//   'green' : 0,
// }
// colorBtn.forEach((btn) => {
//   btn.onclick = () => {
//     timesClicked[btn.value] += 1;
//     clicou.innerHTML = `you clicked on ${btn.value} ${timesClicked[btn.value]} times`;
//     btn.innerText = timesClicked[btn.value];

//   }
// });

// clearBtn.onclick = () => clearScore();

// const clearScore = () => {
//   colorBtn.forEach((btn) => {
//     timesClicked[btn.value] = 0;
//     btn.innerText = " ";
//   });
// };

// const randomSelectArray = (fruits) => {
//    const randomNumber = Math.floor(Math.random() * fruits.length);
//    return fruits[randomNumber];
// };
// const fruits = ['🍎', '🍭', '🍉'];
// console.log(randomSelectArray(fruits));
