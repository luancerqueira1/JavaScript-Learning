/*======================= AULA 1 =======================*/

// console.log('i like pizza!');
// console.log('its really good');

// // window.alert("i like pizza");

// // comment

// /* Comment */

// let firstName = "Luan"; // strings
// let age = 24; // numbers
// let student = true; // booleans

// age = age +1

// console.log(age);
// console.log("hello my name is", firstName, "and i'm", age);
// console.log(student);

// document.getElementById("p1").innerHTML = "hello " + firstName;
// document.getElementById("p2").innerHTML = "you are " + age + " years old";
// document.getElementById("p3").innerHTML = "present " + student;


/*======================= AULA 2 =======================*/

/*
let students = 20;

students = students + 1;
students = students - 1;
students = students * 2;
students = students / 2;
students = students % 2;

 students +=  2;
 students -=  2;
 students *=  2;
 students /=  2;
 

console.log(students)

/*
    operator precedence
    1. parenthesis ()
    2. exponents
    3. multiplication & division
    4. addition & subtraction
*/

/*
let result = 1 + 2 * (4 + 3);
//(4+3=7  | 2*7=14  | 14+1=15)

console.log(result);
*/


/*======================= AULA 3 =======================*/

// let username = window.prompt('whars your name?');
// console.log(username);
/*
let username;

document.getElementById('myButton').onclick = function (){

    username = document.getElementById('myText').value;
    console.log(username)
    document.getElementById('myLabel').innerHTML = 'hello ' + username;
}
*/

/*======================= AULA 4 =======================*/

/*
let age = window.prompt("How old are you?");

console.log(typeof age);
age = Number(age);
console.log(typeof age);
age += 1;

console.log("Happy Birthday! You are", age, "years old");


let x;
let y;
let z;

x = Number(3.14);
y = String(3.14);
z = Boolean('pizza');

console.log(x, typeof x)
console.log(y, typeof y)
console.log(z, typeof z)
*/


/*======================= AULA 5 =======================*/

// const = a variable that can't be changed

/*
const PI = 3.14159;
let radius;
let circumference;

radius = window.prompt("Enter the radius of a circle");
radius = Number(radius);

// PI = 420.69;

circumference = 2 * PI * radius;
console.log("The circumference is:", circumference);
*/

/*======================= AULA 6 =======================*/

/*
let x = 3.14;
let y = 5;
let z = 9;
let maximum;
let minimum;

//x Math.round (x);
//x = Math.floor(x);
//x = Math.ceil(x);
//x Math.pow(x, 2);
//x Math.sqrt(x);
//x = Math.abs (x);

maximum = Math.max(x, y, z);
minimum = Math.min(x, y, z);

x = Math.round(x);

console.log(maximum)
*/

/*======================= AULA 7 =======================*/
/*
let  a;
let b;
let c;

a = window.prompt('enter side a');
a = Number(a);

b = window.prompt('enter side b');
b = Number(b);

c = Math.pow(a, 2) + Math.pow(b, 2);
c = Math.sqrt(c);

console.log('side c:', c);
*/
/*
document.getElementById("submitButton").onclick = function () {

    a = document.getElementById('atextBox').value;
    a = Number(a);

    b = document.getElementById("btextBox").value;
    b = Number(b);

    c = Math.pow(a, 2) + Math.pow(b, 2);
    c = Math.sqrt(c);

    document.getElementById('clabel').innerHTML = 'side c:' + c;
};
*/

/*======================= AULA 8 =======================*/
/*
let count = 0;

document.getElementById('decreaseBtn').onclick = function () {
    count -= 1;
    document.getElementById('countLabel').innerHTML = count;
}

document.getElementById('increaseBtn').onclick = function () {
    count += 1;
    document.getElementById('countLabel').innerHTML = count;
}

document.getElementById('resetBtn').onclick = function () {
    count = 0;
    document.getElementById('countLabel').innerHTML = count;  
}
*/

/*======================= AULA 9 =======================*/

/*
let x; 
let y; 
let z;

document.getElementById('rollButton').onclick = function (){
    
    x = Math.floor(Math.random() * 6) + 1;
    y = Math.floor(Math.random() * 6) + 1;
    z = Math.floor(Math.random() * 6) + 1;
    
    document.getElementById('xlabel').innerHTML = x
    document.getElementById('ylabel').innerHTML = y
    document.getElementById('zlabel').innerHTML = z
}
*/

/*======================= AULA 10 =======================*/

// uselful string properties & methods
/*
let userName = ' Luan      gama      ';
let phoneNumber = '123-456-789';

// console.log(userName.length);
//console.log(userName.length);
//console.log(userName.charAt(0));
//console.log(userName.indexof ("o"));
//console.log(userName.lastIndexof ("o"));
// userName = userName.trim();
// userName = userName.toLocaleUpperCase();
// userName = userName.toLowerCase();

phoneNumber = phoneNumber.replaceAll('-', '');

console.log(userName);
console.log(phoneNumber);
*/

/*======================= AULA 11 =======================*/

/*
let fullName = "Luan Cerqueira";
let firstName;
let lastName;
//firstName = fullName.slice(e, 3);
//lastName = ful1Name.slice(4);

firstName = fullName.slice(0, fullName.indexOf(' '));
lastName = fullName.slice(fullName.indexOf(' ') + 1);

console.log(firstName);
console.log(lastName);
*/


/*======================= AULA 12 =======================*/
// method chaining = calling one method after another
//                   in one continuous line of code
/*
let userName = 'luan';

let letter = userName.charAt(0).toUpperCase().trim();

console.log(letter)
*/


/*======================= AULA 13 =======================*/
// if statement = a basic form of decision making
//                if a condition is true, then do something
//                if not, then don't do it!
/*
let age = 66

 if (age >= 65) {
  console.log("you are older");
}
else if (age >= 18) {
  console.log("you are an adult!");
}
else if (age <= 0) {
  console.log("not born");
}
else {
  console.log("child");
}


let online = true;

if (online){
    console.log('you are onlie');
}
else {
    console.log('you are offline');
}
*/

/*====================== AULA 14 ======================*/
/*
document.getElementById('myButton').onclick = function () {

    const myCheckBox = document.getElementById("myCheckBox");
    const visaBtn = document.getElementById("visaBtn");
    const mastercardBtn = document.getElementById("mastercardBtn");
    const paypalBtn = document.getElementById("paypalBtn");


    if (myCheckBox.checked) {
        console.log('you are sybscribed');
        document.getElementById('teste').innerHTML = "<h2>inscrito</h2>";
    }
    else {
        document.getElementById("teste").innerHTML = '<h2>se inscreva</h2>';
        console.log('you are not sybscribed');
    }

    if (visaBtn.checked) {
        console.log('you are paying with visa');
    }
    else if (mastercardBtn.checked) {
      console.log("you are paying with master card");
    }
    else if (paypalBtn.checked) {
      console.log("you are paying with paypal");
    }
    else {
        console.log('select a payment type')
    }
}
*/
 
/*====================== AULA 15 ======================*/
// switch = statement that examines a value
//        for a match against many case clauses.
//       More efficient that many "else if" statements
/*
let grade = 'pizwdza';

switch (grade) {
    case 'A':
        console.log('you did great!');
        break;
    case 'B':
        console.log('you did  good');
        break;
    case 'C':
        console.log('you did okay');
        break;
    case 'D':
        console.log('you passed... barley');
        break;
    case 'F':
        console.log('you faild');
        break;
    default:
        console.log(grade, 'its not a grade');
}

let grade1 = "60";

switch (true) {
  case grade1 >= 90:
    console.log("you did great!");
    break;
  case grade1 >= 80:
    console.log("you did  good");
    break;
  case grade1 >= 70:
    console.log("you did okay");
    break;
  case grade1 >= 60:
    console.log("you passed... barley");
    break;
  case grade1 >= 50:
    console.log("you faild");
    break;
  default:
    console.log(grade1, "its not a grade");
}
*/

/*====================== AULA 16 ======================*/
/*
let temp = 10;
let sunny = false;

if (temp > 0 && temp < 30 && sunny) {
  console.log("the weather is good");
} else {
  console.log("the weather is bad");
}

if (temp <= 0 || temp >= 30) {
    console.log('the weather is bad');
}
else {
    console.log('the weather is good')
}
*/

/*====================== AULA 17 ======================*/

/*
let temp = 15;
let sunny = false;

if (!(temp > 0)) {
  console.log("It's cold outside");
} else console.log("It's warm outside");

if (!sunny) {
  console.log("It's cloudy outside");
} else {
  console.log("It's sunny outside");
}
*/

/*====================== AULA 18 ======================*/
/*
let userName = "";

while(userName == "" || userName == null){
    userName = window.prompt("Enter your name");
}
console.log("Hello", userName);
*/

/*====================== AULA 19 ======================*/
/*
let userName;

do {
  userName = window.prompt("Enter your name");
} while (userName == "");

console.log("Hello", userName);
*/

/*====================== AULA 20 ======================*/

/*
for (let i = 1; i <= 20; i += 1){
    console.log(i);
}
 console.log('happy');
*/

/*====================== AULA 21 ======================*/

/*
//para no 13
for (let i = 1; i <= 20; i += 1){
    if (i == 13) {
        break;
    }
    console.log(i)
}

//pula o 13 e continua
for (let i = 1; i <= 20; i += 1){
    if (i == 13) {
        continue;
    }
    console.log(i)
}
*/

/*====================== AULA 22 ======================*/
/*
let symbol = window.prompt("enter a symbol");
let rows = window.prompt('enter rows');
let columns = window.prompt("enter columns");

for(let i = 1; i <= rows; i+=1){
    for(let j = 1; j <= columns; j+=1){
        document.getElementById('myRectangle').innerHTML += symbol;
    }
    document.getElementById("myRectangle").innerHTML += '<br>';
}
*/

/*====================== AULA 23 ======================*/
/*
startProgram();

function startProgram() {
    let userName = "luan";
    let age = 24;

    happyBirthday(userName, age);
}

function happyBirthday(userName, age) {
  console.log("Happy birthday to you!");
  console.log("Happy birthday to you!");
  console.log("Happy birthday dear", userName);
  console.log("Happy birthday to you!");
  console.log("You are " , age , " years old!");
}    
*/

/*====================== AULA 24 ======================*/

// nao funcionou essa porcaria

// let area;
// let width;
// let height;

// width = window.prompt("enter width");
// height = window.print("enter height");

// area = getArea(width, height);

// console.log("the area is: ", area);
// function getArea(width, height) {
//   let result = (width * height);
//   return result;
// }

// e esse funcionou como?

// let area;
// let width;
// let height;

// width = window.prompt("Enter width");
// height = window.prompt("Enter height");

// area = getArea(width, height);

// console.log("The area is: ", area);
// function getArea(width, height) {
//   let result = width * height;
//   return result;
// }

/*====================== AULA 25 ======================*/
/*
let adult = checkAge(18);

console.log(adult)

function checkAge(age){
  
  if (age >= 18) {
    return true;
  }
  else {
    return false;
  }
}

checkWinner();

function checkWinner(win){
  
  win ? console.log('you win') : console.log('you lose');
}
*/

/*====================== AULA 26 ======================*/

// doSomething();

// function doSomething(){
//   for(var i = 1; i <= 3; i+= 1){
//   }
//  }
//  console.log(i);

/*====================== AULA 27 ======================*/
//tenplate literals = delimited with (``)
//                    instead of double or single quotes
//                    allows embedded variables and expressions

/*
let userName = 'luan'
let items = 3;
let total = 75

// console.log('hello', userName);
// console.log('you have', items, 'items in your cart');
// console.log('your totals is $:', total);

// console.log(`hello ${userName}`);
// console.log(`you have ${items} items in your cart`);
// console.log(`your total is ${total} dolares`);

let text = `hello ${userName} <br>
you have ${items} items in your cart<br>
your total is ${total} dolares <br>`;

// console.log(text);
document.getElementById('myLabel').innerHTML = text;
*/

/*====================== AULA 28 ======================*/
/*
let myNum = 100;

// myNum = myNum.toLocaleString('en-us'); //us english
// myNum = myNum.toLocaleString("en-us", { style:'currency', currency:'usd'});
// myNum = myNum.toLocaleString("en-us", { style:'currency', currency:'brl'});

// myNum = myNum.toLocaleString(undefined, {style:'unit', unit:'celsius'});

console.log(myNum);
*/

/*====================== AULA 29 ======================*/
/*
const answer = Math.floor(Math.random() * 10 + 1);
let guesses = 0;

document.getElementById('submitButton').onclick = function () {
  
  let guess = document.getElementById('guessField').value;
  guesses += 1;

  if (guess == answer) {
    alert(`${answer} is the number. it took you ${guesses} guesses`);
  }
  else if (guess < answer) {
    alert('too small');
  }
  else {
    alert('to large');
  }
}

*/

/*====================== AULA 30 ======================*/
//covert temperature

// document.getElementById('submitButton').onclick = function() {

//   let temp;

//   if (document.getElementById('cButton').checked){
//     temp = document.getElementById('textBox').value;
//     temp = Number(temp);
//     temp = toCelsius(temp);
//     document.getElementById("tempLabel").innerHTML = temp + "°C";
//   }
//   else if (document.getElementById('fButton').checked) {
//     temp = document.getElementById("textBox").value;
//     temp = Number(temp);
//     temp = toFahrenheit(temp);
//     document.getElementById("tempLabel").innerHTML = temp + "°F";
//   }
//   else {
//     document.getElementById("tempLabel").innerHTML = "<h3>select a unit</h3>";
//   }
// }



// function toCelsius(temp) {
//   return (temp - 32) * (5 / 9);
// }

// function toFahrenheit(temp) {
//   return temp * 9 / 5 + 32;
// }

/*====================== AULA 31 ======================*/
// array think of it as a variable
// that can store multiple values

// let fruits = ['apple', 'orange', 'banana'];

// // fruits[2] = 'coconut';


// fruits.push('lemon');    //adicionas mais elementos
// fruits.pop('apple');    //remove elementos
// fruits.unshift('mango');  //add element to beginning
// fruits.shift('apple')  // removes element from beginning

// let length = fruits.length;
// let index = fruits.indexOf('apple') //mostra a posiçao que ela está

// console.log(index);

/*====================== AULA 32 ======================*/

// let prices = [5, 15, 20, 25];

// for (let i = 0; i < prices.length; i += 1){
//   console.log(prices[i]);
// }

// for (let i = prices.length - 1; i >= 0; i-=1) {
//   console.log(prices[i]);
// }

// for (let price of prices) {
//   console.log(price);
// }

/*====================== AULA 33 ======================*/

// let fruits = ['banana', 'mango', 'apple', 'orange'];

// fruits = fruits.sort().reverse();

// for (let fruit of fruits) {
//   console.log(fruit);
// }

/*====================== AULA 34 ======================*/

// 2d array = an array of arrays

// let fruits =     ["banana", "mango",   "apple",  "orange"];
// let vegetables = ["carrots", "onions", "potatos", "tomatos"];
// let meats =      ["eggs",    "fish",    "chicken", "beef"];

// let grocerylist = [fruits, vegetables, meats];

// grocerylist[0][0] ='luan'

// for (let list of grocerylist) {
//   for (let food of list) {
//     console.log(food);
//   }
// }

/*====================== AULA 35 ======================*/

// let userName = 'luan cerqueira'
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// let maximum = Math.max(...numbers)

// console.log(...userName);
// console.log(...numbers)
// console.log(maximum);

// let class1 = ['spogebob', 'patrick', 'sandy']
// let class2 = ['squidward', 'mr.krabks', 'plankton']

// class1.push(...class2)
// console.log(...class1)

/*====================== AULA 36 ======================*/

// let a = 1;
// let b = 2;
// let c = 3;
// let d = 4;
// let e = 5;

// console.log(soma/*<- mesmo nome*/(a, b, c, d));

// function soma /*<- mesmo nome*/(...numbers1) {
//   let total = 0;
//   for (let number of numbers1) {
//     total += number;
//   }
//   return total;
// }

/*====================== AULA 37 ======================*/

// sum(2, 3, displayDom);

// function sum(x, y, callBack) {
//   let result = x + y;
//   callBack(result);
// }

// function displayConsole(output) {
//   console.log(output);
// }
// function displayDom(output) {
//   document.getElementById('myLabel').innerHTML = output;
// }

/*====================== AULA 38 ======================*/

// let students = ['spongebob', 'patrick', 'squidward'];

// students.forEach(capitalize);
// students.forEach(print);

// function capitalize(element, index, array) {
//   array[index] = element[0].toUpperCase() + element.substring(1);
// }

// console.log(students[0]);

// function print(element) {
//   console.log(element);
// }

/*====================== AULA 39 ======================*/

// let numbers = [1, 2, 3, 4, 5];
// let squares = numbers.map(square);
// let cubes = numbers.map(cube);

// cubes.forEach(print);

// function square(element) {
//   return Math.pow(element, 2);
// }
// function cube(element) {
//   return Math.pow(element, 3);
// }
// function print(element) {
//   console.log(element);
// }

/*====================== AULA 40 ======================*/

//array.filter() creates a new array with all elements
// that pass the test provided by a function

// let ages = [18, 16, 21, 17, 19, 90,10,44];
// let adults = ages.filter(checkAge);

// adults.forEach(print)

// function checkAge(element) {
//   return element >= 18;
// }

// function print(element) {
//   console.log(element);
// }

/*====================== AULA 41 ======================*/

// let prices = [5, 10, 15, 20, 25,30]
// let total = prices.reduce(checkOut)

// console.log(`the total is $${total}`);

//                 /*total*/  /*elemento*/
// function checkOut(luan1 ,    luan2) {
//   return luan1 + luan2;
// }

/*====================== AULA 42 ======================*/

// let grades = [100, 50, 90, 60, 80, 70]

// grades = grades.sort(ascendingSort);
// grades.forEach(print)

// function descendingSort(x, y) {
//   return y - x;
// }
// function ascendingSort(x, y) {
//   return x - y;
// }
// function print(element) {
//   console.log(element)
// }

/*====================== AULA 43 ======================*/

// const greeting = function () {
//   console.log('hello');
// }
// greeting();

// let count = 0

// function decreaseCount() {
//   count -= 1;
//   document.getElementById('myLabel').innerHTML = count;
// }
// function increaseCount() {
//   count += 1;
//   document.getElementById('myLabel').innerHTML = count;
// }


// document.getElementById("decreaseButton").onclick = function () {
//   count -= 1;
//   document.getElementById('myLabel').innerHTML = count;
// };
// document.getElementById("increaseButton").onclick = function () {
//   count += 1;
//   document.getElementById("myLabel").innerHTML = count;
// };

/*====================== AULA 44 ======================*/
// arrow function compact alternative to a traditional function
// =>


// const greeting = function (userName) {
//   console.log(userName)
// }

// greeting("luan");

// const greeting1 = (userName) =>  {
//   console.log(`hello ${userName}`);
// };

// greeting1("luan");

// const percent = function (x, y) {
//   return x / y * 100;
// }
// console.log(`${percent(34,100)}%`)


// const percent1 = (x, y) => x / y * 100;
// console.log(`${percent1(34, 100)}%`);




// let grades = [100, 50, 90, 80, 70,200,300];

// grades.sort(descending);
// grades.forEach(cerqueira)


// function descending(maior, menor) {
//   return menor - maior
// }
// function cerqueira(luan) {
//   console.log(luan)
// }


// let grades1 = [100, 400, 500, 700, 600, 200, 300];
// grades1.sort((x, y) => y - x);
// grades1.forEach((element) => console.log(element));

/*====================== AULA 45 ======================*/

// let cards = ['A', '2', '3','4', '5','6','7','8','9','10','j','K','Q']

// shuffle(cards)

// // console.log(cards)
// cards.forEach(card => console.log(card))

// function shuffle(array) {
//   let currentIndex = array.length;

//   while (currentIndex != 0) {
//     let randomIndex = Math.floor(Math.random() * array.length)
//     currentIndex -= 1
    
//     let temp = array[currentIndex]
//     array[currentIndex] = array[randomIndex]
//     array[randomIndex] = temp
//   }
//   return array
// }

/*====================== AULA 46 ======================*/

// let userName = 'Luan'
// let userInbox = 2

// login()

// function login() {
//   displayUsername()
//   displayUserInbox()

//   function displayUsername() {
//     console.log(`welcome ${userName}`)
//   }
//   function displayUserInbox() {
//     console.log(`you have ${userInbox} new messeges`)
//   }
// }

/*====================== AULA 47 ======================*/

// const store = new Map([
//   ['t-shirt', 20],
//   ['jeans', 30],
//   ['socks', 10],
//   ['underwear', 50]
// ])

// // let shoppingCart = 0

// // shoppingCart += store.get('t-shirt')
// // shoppingCart += store.get('jeans')
// store.get('t-shirt')

// store.set('hat', 40) //adiciona novo par
// store.delete('hat')  //deleta um par
// console.log(store.size) //tanto de pares
// console.log(store.has('jeans')) //verifica se tem par

// // console.log(shoppingCart)

// store.forEach((valor,item) => console.log(`${item} $${valor}`))

/*====================== AULA 48 ======================*/
// Obejto grupo de propriedades e metodos
// Propriedades => o que um objeto tem
// Metodos é o que o obejto pode fazer

// const car1 = {
//   model: 'mustang',
//   color: 'red',
//   year: '2022',
  
//   drive : function () {
//     console.log(`you drive the car ${this.model}`)
//   },
//   break : function () {
//     console.log(`you step on the breaks `)
//   }
// }

// const car2 = {
//   model: "corvette",
//   color: "blue",
//   year: "2021",

//   drive: function () {
//     console.log(`you drive the car ${car2.model}`);
//   },
//   break: function () {
//     console.log("you step on the breaks");
//   },
// };

// car1.drive()
// car2.drive()

/*====================== AULA 49 ======================*/

// class Player{
//   score = 0;
  
//     pause(){
//       console.log("You paused the game");
//     }
//     exit(){
//       console.log("You exited the game");
//     }
// }
// const player1 = new Player();
// const player2 = new Player();
// const player3 = new Player();
// const player4 = new Player();
                
// player1.score += 1

// console.log(player1.score)


/*====================== AULA 50 ======================*/

// class student{

//   constructor(name,age, gpa,nota,nomedomeio) {
//     this.name = name;
//     this.nomedomeio = nomedomeio;
//     this.gpa = gpa;
//     this.nota = nota;
//     this.age = age;
//   }
//   study() {
//     console.log(`${this.name} is studying`)
//   }
// }

// const student1 = new student('spongebob', 24, 3.2 ,7,'gama')
// const student2 = new student('patrick', 20, 3.2 ,2,'strela')
// const student3 = new student('sandy', 25, 3.2 ,2,'cheks')

// console.log(student1.name)
// console.log(student1.age)
// console.log(student1.gpa)
// console.log(student1.nota)
// console.log(student1.nomedomeio);
// student1.study()

// console.log(student2.name)
// console.log(student2.age)
// console.log(student2.gpa)
// console.log(student2.nota)
// console.log(student2.nomedomeio);
// student2.study()

// console.log(student3.name)
// console.log(student3.age)
// console.log(student3.gpa)
// console.log(student3.nota)
// console.log(student3.nomedomeio);
// student3.study()

/*====================== AULA 51 ======================*/

// class car {
//   static numberOfCars = 0

//   constructor(model) {
//     this.model = model;
//     car.numberOfCars +=1
//   }
//   static startRace() {
//     console.log('3...2...1...Go!')
//   }
// }

// const car1 = new car("Mustang");
// const car2 = new car("Corvette");
// const car3 = new car("BMW");

// console.log(car.numberOfCars)
// car.startRace()

/*====================== AULA 52 ======================*/

// class Animal {
//   alive = true;

//   eat() {
//     console.log(`this ${this.name} is eating`);
//   }
//   sleep() {
//     console.log(`this ${this.name} is sleeping`);
//   }
// }

// class Rabbit extends Animal{

//   name = 'rabbit'

//   run() {
//     console.log(`this ${this.name} is running`)
//   }
// }

// class Fish extends Animal {

//   name = "fish";

//   swim() {
//     console.log(`this ${this.name} is swimming`);
//   }
// }

// class Hawk extends Animal {
 
//   name = "hawk";

//   fly() {
//     console.log(`this ${this.name} is flying`);
//   }
// }

// const rabbit = new Rabbit()
// const fish = new Fish()
// const hawk = new Hawk()

// console.log(rabbit.alive)
// rabbit.sleep()
// rabbit.eat()
// rabbit.run()

/*====================== AULA 53 ======================*/
// super = Refers to the parent class.
//         Commonly used to invoke constructor of a parent class

// class Animal{
//   constructor(name, age) {
//     this.name = name
//     this.age = age
//   }
// }
// class Rabbit extends Animal{
//   constructor(name, age, runSpeed) {
//     super(name,age)
//     this.runSpeed = runSpeed
//   }
// }
// class Fish extends Animal {
//   constructor(name, age, swimSpeed) {
//     super(name, age);
//     this.swimSpeed = swimSpeed;
//   }
// }

// class Hawk extends Animal {
//   constructor(name, age, flySpeed) {
//     super(name, age);
//     this.flySpeed = flySpeed;
//   }
// }

// const rabbit = new Rabbit('rabbit', 1,40)
// const fish = new Fish("fish", 3, 80);
// const hawk = new Hawk("Hawk", 6, 200);

// console.log(rabbit.name)
// console.log(rabbit.age)
// console.log(rabbit.runSpeed)

// console.log(fish.name)
// console.log(fish.age);
// console.log(fish.swimSpeed);

/*====================== AULA 54 ======================*/

// class Car {
//   constructor(power) {
//     this._gas = 50
//     this._power = power
//   }
//   get power() {
//     return`${this._power}hp`
//   }
//   get gas() {
//     return`${this._gas}L (${this._gas / 50 * 100}%)`
//   }
//   set gas(value) {
//     if (value > 50) {
//       value= 50
//     }
//     else if (value < 0){
//       value= 0
//     }
//     this._gas= value
//   }
// }

// let car = new Car(400)

// car.gas = 10

// console.log(car.power)
// console.log(car.gas)

/*====================== AULA 55 ======================*/

// class Car{
//   constructor(model, year, color, posuo) {
//     this.model = model;
//     this.year = year;
//     this.color = color;
//     this.posuo = posuo;
//   }
// }
  
// const car1 = new Car("Mustang", 2023, "red",'tenho');
// const car2 = new Car("Corvette", 2024, "blue");
// const car3 = new Car("Lambo", 2022, "yellow", 'vou comprar');


// displayInfo(car2)
// changeColor(car2, "pink");
// displayInfo(car2)
// posuir(car2, 'tenho')
// displayInfo(car2)

// function displayInfo(car) {
//   console.log(car.model)
//   console.log(car.year)
//   console.log(car.color)
//   console.log(car.posuo)
// }

// function changeColor(car,color) {
//   car.color = color
// }

// function posuir(car, posuo) {
//   car.posuo = posuo
// }

/*====================== AULA 56 ======================*/

// class Car{

//   constructor(model, year, color, posuo) {
//     this.model = model;
//     this.year = year;
//     this.color = color;
//     this.posuo = posuo;
//   }

//   drive() {
//     console.log(`you drive the ${this.model}`)
//   }
// }

// const car1 = new Car("Mustang", 2023, "red",'tenho');
// const car2 = new Car("Corvette", 2024, "blue", 'nao tenho');
// const car3 = new Car("Lambo", 2022, "yellow", 'vou comprar');
// const car4 = new Car("ferrari", 2020, "white", 'vou comprar');

// const cars = [car1,car2,car3,car4]

// // console.log(cars[0].model)
// // console.log(cars[1].model)
// // console.log(cars[2].model)

// // cars[0].drive()
// // cars[1].drive()
// // cars[2].drive()

// startRace(cars)

// function startRace(cars) {
//   for (const car of cars) {
//     car.drive()
//   }
// }

/*====================== AULA 57 ======================*/

// class Card{
//   constructor(value, suit) {
//     this.value = value
//     this.suit = suit
//   }
// }

// let card1 = new Card('A', 'hearts');
// let card2 = new Card('A', 'spades');
// let card3 = new Card('A', 'diamonds');
// let card4 = new Card('A', 'clubs');
// let card5 = new Card('2', 'hearts');
// let card6 = new Card('2', 'spades');
// let card7 = new Card('2', 'diamonds');
// let card8 = new Card('2', 'clubs');

// let cards = [card1, card2, card3, card4, card5, card6, card7, card8];
// console.log(cards[0].value + cards[0].suit)

// //other option
//  new Card("A", "hearts");
//  new Card("A", "spades");
//  new Card("A", "diamonds");
//  new Card("A", "clubs");
//  new Card("2", "hearts");
//  new Card("2", "spades");
//  new Card("2", "diamonds");
//  new Card('2, clubs');
   
// let cards2 = [
//   new Card("A", "hearts"),
//   new Card("A", "spades"),
//   new Card("A", "diamonds"),
//   new Card("A", "clubs"),
//   new Card("2", "hearts"),
//   new Card("2", "spades"),
//   new Card("2", "diamonds"),
//   new Card('2',' clubs'),
// ];

// cards2.forEach(card => console.log(`${card.value} ${card.suit}`))

/*====================== AULA 58 ======================*/

// error = object with a description of
// something went wrong
// throw = executes a user-defined error

// try {
//   let x = window.prompt("Enter a #");
//   x = Number(x);

//   if (isNaN(x)) throw "That wasn't a number!";
//   if (x == "") throw "That was empty!";

//   console.log(`${x} is a number`);
// }
// catch (error) {
//   console.log(error);
// }
// finally {
//   console.log('this always executes')
// }

/*====================== AULA 59 ======================*/

// let item = 'crypto'
// let price = 420

// let timer1 = setTimeout(firstMessege,3000,item ,price)
// let timer2 = setTimeout(secondMessege, 6000);
// let timer3 = setTimeout(thirdMessege, 10000);

// function firstMessege(item,price) {
//   alert(`buy this ${item} for ${price}`)
// }

// function secondMessege() {
//   alert(`this is not a scam`)
// }

// function thirdMessege() {
//   alert(`do it!`)
// }

// document.getElementById('myButton').onclick = function(){
//   clearTimeout(timer1)
//   clearTimeout(timer2)
//   clearTimeout(timer3)
//   alert('thanks for buying')
// }

/*====================== AULA 60 ======================*/

// let count = 0
// let max = window.prompt('count up to what # ?')
// max = Number(max)

// const myTimer = setInterval(countUp, 1000)

// function countUp() {
//   count += 1
//   console.log(count)
//   if (count >= max) {
//     clearInterval(myTimer)
//   }
// }

/*====================== AULA 61 ======================*/

// the date object is used to work with dates & times

// let date = new Date()
//let date = new Date(0);
//let date = new Date(2023, 0, 1, 2, 3, 4, 5);
//let date = new Date("January 1, 2023 00:00:00");
            
// let dayOfMonth = date.getDate();
// let dayOfWeek = date.getDate();
// let mounth = date.getMonth();
// let hour = date.getHours();
// let minuts = date.getMinutes();

// date.setFullYear(2025)
// date.setMonth(1)
// date.setDate(30)

// date = date.toLocaleString() // mostra só o essencial


// document.getElementById("myLabel").innerHTML = formatTime(date);
// document.getElementById('myLabel2').innerHTML = dayOfMonth
// document.getElementById('myLabel3').innerHTML = year

// function formatDate(date) {
//   let year = date.getFullYear()
//   let month = date.getMonth() +1
//   let day = date.getDate()

//   return(`${month}/${month}/${day}`)
// }

// function formatTime(date) {
//   let hours = date.getHours()
//   let minutes = date.getMinutes()
//   let seconds = date.getSeconds()
//   let amOrPm = hours >= 12 ? "pm" : "am"
  
//   hours = (hours % 12) || 12

//   return(`${hours}:${minutes}:${seconds} ${amOrPm}`)
// }

/*====================== AULA 62 ======================*/

// const myLabel = document.getElementById('myLabel')

// update()
// setInterval(update)

// function update() {
  
//   let date = new Date()
//   myLabel.innerHTML = formatTime(date)

//   function formatTime(date) {
//     let hours = date.getHours()
//     let minutes = date.getMinutes()
//     let seconds = date.getSeconds()
//     let amOrPm = hours >= 12 ? "pm" : "am";

//     hours = (hours % 12) || 12

//     hours = formatZeros(hours)
//     minutes = formatZeros(minutes);
//     seconds = formatZeros (seconds);

//     return `${hours}:${minutes}:${seconds} ${amOrPm}`
//   }
//   function formatZeros(time) {
//     time = time.toString()
//     return time.length < 2 ? '0' + time : time;
//   }
// }

/*====================== AULA 63 ======================*/

// console.time() = Starts a timer you can use to
//                  track how long an operation takes
//                    Give each timer a unique name.

//start
// console.time("Response time");

// //alert("CLICK THE OK BUTTON!");
// setTimeout(() => console.log("HELLO!"), 3000);

// //end
// console.timeEnd ("Response time");


/*====================== AULA 64 ======================*/

// const promise = new Promise((resolve, reject) => {
  
//   let fileLoaded = false

//   if (fileLoaded) {
//     resolve('file loaded')
//   }
//   else {
//     reject('file not loaded')
//   }
// })

// promise.then(value => console.log(value))
//   .catch(error => console.log(error))

// const wait = time => new Promise(resolve => {
//   setTimeout(resolve,time)
// })

// wait(3000).then(()=> console.log('thanks por esperar'))

/*====================== AULA 65 ======================*/

// async function loadFile() {
//    let fileLoaded = true;

//    if (fileLoaded) {
//      return("file loaded");
//    } else {
//      throw("file not loaded");
//    }
// }

// loadFile().then((value) => console.log(value))
//   .catch((error) => console.log(error));// async function loadFile() {
//    let fileLoaded = true;

//    if (fileLoaded) {
//      return("file loaded");
//    } else {
//      throw("file not loaded");
//    }
// }

// loadFile().then((value) => console.log(value))
//   .catch((error) => console.log(error));

/*====================== AULA 66 ======================*/

// async function loadFile() {
//    let fileLoaded = false;

//    if (fileLoaded) {
//      return("file loaded");
//    } else {
//      throw("file not loaded");
//    }
// }
// async function startProcess() {
//   try {
//     let messege = await loadFile();
//     console.log(messege);
//   }
//   catch(error) {
//     console.log(error)
//   }
// }

// startProcess()

/*====================== AULA 67 ======================*/

// import {PI , getCircumference, getArea} from './math.util.js'
// console.log(PI)

// let circumference = getCircumference(10)
// console.log(circumference)

// let area = getArea(10)
// console.log(area)

/*------------------------------------------------*/

// import * as MathUtil from "./math.util.js";
// console.log(MathUtil.PI);

// let circumference = MathUtil.getCircumference(10);
// console.log(circumference);

// let area = MathUtil.getArea(10);
// console.log(area);

/*====================== AULA 68 ======================*/
//DOM

// console.dir(document.document)
// console.log(document.title)
// console.log(document.URL)

// document.title = "aqui e o titulo"
// document.location = 'http://www.google.com'

// document.body.style.backgroundColor='skyblue'

/*====================== AULA 69 ======================*/

// let element = document.getElementById('myTitle')

// element.style.backgroundColor='lightgreen'


// let fruits = document.getElementsByName('fruits')

// fruits.forEach(fruit => {
//   if (fruit.checked) {
//     console.log(fruit.value);
//   }
// })

// let vegetables = document.getElementsByTagName('li')
// vegetables[1].style.backgroundColor = 'lightblue'

// let desserts = document.getElementsByClassName('desserts')
// desserts[0].style.backgroundColor = 'pink'

// /*------------------------------------------------*/
// //querryselector seleciona o primeiro elemento
// let elementId = document.querySelector('#myTitle')
// elementId.style.backgroundColor = "gold";

// let dessertsClass = document.querySelector('.desserts')
// dessertsClass.style.backgroundColor = "lightgreen";

// let dessertstagname = document.querySelector('li')
// dessertstagname.style.backgroundColor = "red";

// let dessertsatribute = document.querySelectorAll('[for]')
// dessertsatribute.forEach(dessertsatribute => {
//   dessertsatribute.style.backgroundColor = "coral";
// });

/*====================== AULA 70 ======================*/

// let element = document.querySelector("#vegetables");
// let parent = element.parentElement;
// parent.style.backgroundColor = "lightgreen";

// .firstElementChild
// .lastElementChild
// .parentElement
// .nextElementSibling
// .previousElementSibling
// .children[]
// Array.from(.children)


/*====================== AULA 71 ======================*/

// add/change HTML elements
//.innerHTML (vulnerable to XSS attacks)
//.textContent (more secure)

// const nameTag = document.createElement('h1')
// nameTag.innerHTML = window.prompt('enter your name')
// document.body.append(nameTag)
// /*------------------------------------------------*/
//  //much safer
// const nameTag = document.createElement('h1')
// nameTag.textContent = window.prompt('enter your name')
// document.body.append(nameTag)

// const myList = document.querySelector('#fruit')
// const listItem = document.createElement('li')
// listItem.textContent = 'manga'
// myList.append(listItem)
// myList.prepend(listItem)
// myList.insertBefore(listItem, myList.getElementsByTagName("li")[0]);


/*====================== AULA 72 ======================*/

// const title = document.getElementById('myTitle')

// title.style.backgroundColor = '#222222'
// title.style.color = "rgb(50,200,250";
// title.style.fontFamily = 'consolas'
// title.style.textAlign = 'center'
// title.style.border='.2rem solid'


/*====================== AULA 73 ======================*/

// const element = document.getElementById('myButton')
// const elemento = document.body
// const element = document.getElementById("myText");
// const element = document.getElementById("myDiv");
// element.onmouseover = doSomething

// element.onclick = doSomething
// elemento.onload = doSomething
// element.onchange = doSomething
// element.onmouseout = doSomethingElse
// element.onmousedown = doSomething
// element.onmouseup = doSomethingElse


// function doSomething() {
//   // alert('you did something')
//   element.style.backgroundColor='blue'
// }

// function doSomethingElse() {
//    element.style.backgroundColor = "lightgreen";
// }





















/*====================== AULA 74 ======================*/
/*====================== AULA 75 ======================*/
/*====================== AULA 76 ======================*/
/*====================== AULA 77 ======================*/
/*====================== AULA 78 ======================*/
/*====================== AULA 79 ======================*/


  














