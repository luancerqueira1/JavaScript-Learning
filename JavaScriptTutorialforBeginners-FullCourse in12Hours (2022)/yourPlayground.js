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

/* API */
// https://dog.ceo/api/breeds/image/random

// const APIURL = 'https://dog.ceo/api/breeds/image/random';

// async function getRandom(URL) {
//    const resp = await fetch(URL);
//    const respData = await resp.json();

//    show(respData.message);
// }
// const dogBtn = document.querySelector('#dog-btn');
// const pic = document.querySelector('#pic');

// const show = (showurl) => {
//    pic.setAttribute('src', showurl);
// };
// dogBtn.onclick = () => {
//    getRandom(APIURL);
// };

/* SUPER HERO API */ // error

// API URL
// const APIHERO = 'https://superheroapi.com/api.php/1481962918922066';

// async function getRandomSuperHero(url) {
//    const resp = await fetch(`${url}/${randomNumber()}`);
//    const respData = await resp.json();
//    console.log(respData);

//    getData(respData.image.url);
// };

// async function getSearchSuper (url) {
//    const resp = await fetch(`${url}/search/batman`);
//    const respData = await resp.json();

//    getData(respData.image.url);
// };
// //find searched hero BTN
// const searchHeroBtn = document.querySelector('#search-hero-btn');
//  const searchHero = document.querySelector('#search-hero');
// searchHeroBtn.onclick = () => searched(searchHero.value);
// ;

// //show hero picture
// const getData = (show) => {
//    const heroimg = document.querySelector('#hero');
//    heroimg.setAttribute('src',`${show}`);
// };

// //click to get arandom hero
// const heroBtn = document.querySelector('#hero-random');
// heroBtn.onclick = () => {
//    getRandomSuperHero(APIHERO);
// }

// //random hero function
// const randomNumber = () => {
//    const numberHeros = 371;
//    return Number(Math.floor(Math.random() * numberHeros) + 1);
// };

/* ASYNCHRONOUS */
// const waitting = () => console.log('oi');
// setTimeout(waitting, 2000);

// const promise1 = new Promise((resolve, reject) => {
//    setTimeout(() => {
//       isReady = false;
//       isReady ? resolve('soup is ready') : reject('soup is not ready')
//    },2000)
// })
// console.log(promise1
//    .then(value => console.log(value))
//    .catch(error => console.log({ error })));

/* ASYNC AWAIT */
// const APIURL = 'https://dog.ceo/api/breeds/image/random';

// const getDog = async () => {
//    try{
//       const resp = await fetch(APIURL);
//       const respData = await resp.json();
//       console.log(respData);
//    } catch {
//       console.log('err');
//    }
// }
// getDog();

/* WEATHER APP */
// const options = {
//    method: 'GET',
//    headers: {
//       'X-RapidAPI-Key': '089ce5e3f3mshda14881f713c1a6p14cd3djsn2242b7b5dda0',
//       'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com',
//    },
// };

// fetch(
//    'https://community-open-weather-map.p.rapidapi.com/weather?q=chicago&units=imperial',
//    options
// )
//    .then((response) => response.json())
//    .then((response) => console.log(response))
//    .catch((err) => console.error(err));

// const API =
//    'https://community-open-weather-map.p.rapidapi.com/weather?q=chicago&units=imperial';

// async function getWeatherData() {
//    const resp = await fetch(API, options);
//    const respData = await resp.json();
//    console.log(respData);
// }

// getWeatherData();

/*===================   Weather App   ======================== */
/**
 * TODO: Complete getWeatherData() to return json response Promise
 * TODO: Complete searchCity() to get user input and get data using getWeatherData()
 * TODO: Complete showWeatherData() to set the data in the the html file from response
 */

/* DIV ID's you'll need access to 👇
"city-name"
"weather-type"
"temp"
"min-temp"
"max-temp"
*/

// // API_KEY for maps api
// let API_KEY = 'a8e71c9932b20c4ceb0aed183e6a83bb';

// /**
//  * Retrieve weather data from openweathermap
//  * HINT: Use fetch()
//  * HINT: URL should look like this:
//  * https://api.openweathermap.org/data/2.5/weather?q=detroit&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=imperial
//  */
// const getWeatherData = async (city) => {
//    try {
//       const URL = 'https://api.openweathermap.org/data/2.5/weather';
//       const FULL_URL = `${URL}?q=${city}&appid=${API_KEY}&units=imperial`;
//       //HINT: Use template literals to create a url with input and an API key

//       //CODE GOES HERE
//       const resp = await fetch(FULL_URL);
//       const respData = await resp.json();

//       showWeatherData(respData);
//    } catch {
//       noResults();
//    }
// };

// /**
//  * Retrieve city input and get the weather data
//  * HINT: Use the promise returned from getWeatherData()
//  */
// const searchCity = () => {
//    const city = document.getElementById('city-input').value;
//    // CODE GOES HERE
//    getWeatherData(city);
// };
// /**
//  * Show the weather data in HTML
//  * HINT: make sure to console log the weatherData to see how the data looks like
//  */
// const showWeatherData = (weatherData) => {
//    //CODE GOES HERE
//    const cityName = document.querySelector('#city-name');
//    const weatherType = document.querySelector('#weather-type');
//    const temp = document.querySelector('#temp');
//    const minTemp = document.querySelector('#min-temp');
//    const maxTemp = document.querySelector('#max-temp');

//    cityName.innerText = weatherData.name;
//    weatherType.innerText = weatherData.weather[0].main;

//    temp.innerText = FtoC(weatherData.main.temp);
//    minTemp.innerText = FtoC(weatherData.main.temp_max);
//    maxTemp.innerText = FtoC(weatherData.main.temp_min);
// };

// // fahrenheit to celsius
// function FtoC(value) {
//    const valor = (5 / 9) * (value - 32);
//    return Number(valor.toFixed(2));
// };
// // No results Found
// function noResults() {
//    const cityName = document.querySelector('#city-name');
//    cityName.innerText = '❌Sem Resultados';
//    const weatherType = (document.querySelector('#weather-type').innerText = '');
//    const temp = (document.querySelector('#temp').innerText = '');
//    const minTemp = (document.querySelector('#min-temp').innerText = '');
//    const maxTemp = (document.querySelector('#max-temp').innerText = '');
// };
// //chicago

// class
class Car {
   constructor(name, color, speed) {
      this.name = name;
      this.color = color;
      this.speed = speed;
   }
   drive() {
      console.log('driving');
   }
}
const ferrari = new Car('ferrari', 'red', 200);
console.log(ferrari);
ferrari.drive();
