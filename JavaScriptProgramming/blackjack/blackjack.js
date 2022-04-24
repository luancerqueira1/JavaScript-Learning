// Create four functions: add (), subtract(), divide(), multiply ()
// Call the correct function when the user clicks on one of the buttons
// Perform the given calculation using numl and num2
// Render the result of the calculation in the paragraph with id%="sum-el"
// E.g. if the user clicks on the "Plus" button, you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"

// let num1 = 8;
// let num2 = 2;
// document.getElementById("num1-el").textContent = num1;
// document.getElementById("num2-el").textContent = num2;

// let adiciona = document.getElementById("add");
// let diminui = document.getElementById("substract");
// let divide = document.getElementById("divide");
// let mutiplica = document.getElementById("multiply");


// adiciona.addEventListener("click", function () {
// 	let sum = num1 + num2;
// 	document.getElementById("sum-el").innerHTML = "SUM: " + sum;
// });

// diminui.addEventListener("click", function () {
// 	let sum = num1 - num2
// 	document.getElementById("sum-el").innerHTML = "SUM: " + sum;
// });

// divide.addEventListener("click", function () {
// 	let sum = num1 / num2
// 	document.getElementById("sum-el").innerHTML = "SUM: " + sum;
// });

// mutiplica.addEventListener("click", function () {
// 	let sum = num1 * num2
// 	document.getElementById("sum-el").textContent = "SUM: " + sum;
// });

/*📌==========================================================📌*/
// let firstCard = 10
// let secondCard = 17
// let sum = firstCard + secondCard

// if (sum < 21) {
// 	console.log("do you want a new card?")
// } else if (sum === 21) {
// 	console.log("you´ve got blackjack!")
// } else {
// 	console.log("you lost")
// }

/*📌==========================================================📌*/
 // Check if the person is elegible for a birthday card from the King! (100)
// if less than 100 -> "Not elegible"
// else if exactly 100 -> "Here is your birthday Card from the King!"
// else-> "Not elegible, you have already gotten one"
// let age = 101;

// if (age < 100) {
// 	console.log("not elegible")
// } else if (age === 100) {
// 	console.log("Here is your birthday Card from the King!");
// } else {
// 	console.log("Not elegible, you have already gotten one");
// }

// console.log(4 === 3) // false
// console.log(5 > 2) // true
// console.log(12 > 12) // false
// console.log(3 < 0) // false
// console.log(3 >= 3) // true
// console.log(11 <= 11) // true
// console.log(3 <= 2) // false

// //arrays
// let arrayslists = ['nothing1', 'nada2', 3, 'afff4', 'just5']
// console.log(arrayslists)
// console.log(arrayslists.length)

// let aboutMe = ["luan", 24, true]
// aboutMe.push(5)  //adiciona um item no final do array
// aboutMe.pop()
// console.log(aboutMe)

// Push the newMessage to the messages array, and then log out the array
//  let messages =[
// 	"Hey, how's it going?",
// 	"I'm great, thank you! How about you?",
// 	 "All good. Been working on my portfolio lately.",
// 	"oi"
// ]
// for (let i = 0; i < messages.length; i += 1){
// 	console.log(messages[i])
// }

// console.log(messages)
// let newMessage = "Same here!"
// messages.push(newMessage)
// console.log(messages)

/*📌==========================================================📌*/
//        START 		FINISH		 STEP SIZE
// for (let count = 1; count <= 11; count += 1){
// 	console.log(count[i])
// }

/*📌==========================================================📌*/
//Create a for loop that counts from 10 to 100in steps of 10
// Use console.log to log out the numbers
// for (let i = 10; i <= 100; i += 10){
// 	console.log(i)
// }

// let carta = [7, 3, 9]			//i++
// for (i = 0; i < carta.length; i += 1){
// 	console.log(carta[i])
// }

/*📌==========================================================📌*/
// let sentence = ["Hello", "my", "name", "is", "luan"];
// let greetingEl = document.getElementById("greeting-el");

// for (let i = 0; i < sentence.length; i += 1){
// 	greetingEl.textContent += sentence[i] + " ";
// }

// /*📌==========================================================📌*/
// let player1Time = 100
// let player2Time = 100
// let fastestrace = getFastestRace();
// let totalTime = totalRaceTime();


// function getFastestRace() {
// 	if (player1Time < player2Time) {
// 		return player1Time
// 	} else if (player2Time < player1Time) {
// 		return player2Time
// 	} else {
// 		return "empate"
// 	}
// }

// totalRaceTime();

// function totalRaceTime() {
// 	return player1Time + player2Time
	
// }

// console.log(totalTime);

// /*📌==========================================================📌*/
//RAMDOM

// let flooreNumber = Math.floor(3.4466)
// console.log(flooreNumber)

// function rollDice() {
// 	let randomNumber = Math.floor(Math.random() * 6) + 1
// 	return randomNumber
// }
// console.log(rollDice());

// /*📌==========================================================📌*/
 // Create two boolean variables, likesDocumentaries and likesStartups
//Use an OR statement (||) to call recommendMovie() if either of those variables are true
// let likesDocumentaries = true
// let likesStartups = false

// if (likesDocumentaries === true || likesStartups === true) {
// 	recommendMovie()
// }
// function recommendMovie() {
// 	console.log("show")
// }

// /*📌==========================================================📌*/
// let hasCompletedCourse = true
// let givesCertificate = true

// if (hasCompletedCourse === true && givesCertificate === true) {
//     generateCertificate();
// }
// function generateCertificate() {
// 	console.log("aloha")
// }

/*📌==========================================================📌*/
// Objects store data in-depth - composite / complex data type
//key-value pairs
// let couse = {
// 	title: "learn css grid for free",
// 	lessons: 16,
// 	creator: "per harald borgen",
// 	length: 63,
// 	level: 2,
// 	isFree: true,
// 	tags: ["html", "css"]
// }

// console.log(couse.length)
// console.log(couse.tags)

// let castle = {
//   title: "live like a king",
//   price: 190,
//   isSuperHost: true,
//   images: ["img/castle1.png", "img/castle2.png"],
// };
// console.log(castle.price)
// console.log(castle.images)

/*📌==========================================================📌*/
// Create a person object that contains three keys: name, age, and county.
// Use yourself as an example to set the values for name, age, and country
//Create a function, logData(), that uses the person object to create a
// string in the following format:
// "Per is 35 years old and lives in Norway"
// Call the logData () function to verify that it works

// let person = {
// 	name: "luan",
// 	age: 24,
// 	country: "brasil"
// }
// logData();

// function logData() {
// 	console.log(
//     person.name + " is " + person.age + " years and lives in " + person.country
//   );
// }

/*📌==========================================================📌*/
// less than 6 years old -> free
// 6 to 17 years old -> child discount
// 18 to 26 years old -> student discount
// 27 to 66 years old -> full price
// over 66 years old -> senior citizen discount

// Create a conditional statement (if/else/else if) that logs out the discount
// the passenger will get based upon the value of the age variable
// let age = 27;

// if (age < 6) {
// 	console.log("free")
// }else if(age < 18){
// 	console.log("child discount")
// }else if(age < 27){
// 	console.log("student discount");
// }else if(age < 67 ){
// 	console.log("full price");
// } else {
// 	console.log("senior citizen discount");
// }

/*📌==========================================================📌*/
/* Use a for loop to log the following to the console:
The 5 largest countries in the world:
- China
- India
- United States
Indinesia
Pakistan
*/

//	pop() = Remove an item from the end of an array
// push()= Add items to the end of an arra
// shift(): Remove an item from the beginning of an array
//unshift(): Add items to the beginning of an array

// let largeCountries = ["China", "India", "USA", "Indonesia", "Pakistan"];

// for (let i = 0; i < largeCountries.length; i++){
// 	console.log("- " + largeCountries[i])
// }

/*📌==========================================================📌*/
// You need to help me fixup the largeCountries array so that
// China and Pakistan are added back into their respective places
// Use push() & pop () and their counterparts unshift() & shift()
// Google how to use unshift() and shift()

// let largeCountries = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"];
// largeCountries.pop()
// largeCountries.push("Pakistan")
// largeCountries.shift()
// largeCountries.unshift("China");
// console.log(largeCountries)

/*📌==========================================================📌*/
// let dayOvMonth = 31
// let weekDay = "friday"

// if (dayOvMonth === 31 && weekDay === "friday"){
// 	console.log("😱")
// }

/*📌==========================================================📌*/
//create a function that reuturns a random item from the array

// let hands = ["rock", "paper", "scissors"]

// function getHand() {
// 	let randomIndex = Math.floor(Math.random() * 3);
// 	return hands[randomIndex]
// }
// console.log(getHand())

/*📌==========================================================📌*/
// Create a function that puts the apples onto the appleShelf
// and the oranges onto the orangeShelf. Use a for loop,
// a conditional statement, and the textContent property.

// let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"];
// let appleShelf = document.getElementById("apple-shelf");
// let orangeShelf = document.getElementById("orange-shelf");
 
// function sortFruits() {
// 	for (let i = 0; i < fruit.length; i++)
// 		if (fruit[i] === "🍎") {
// 			appleShelf.textContent += "🍎";
// 		} else if (fruit[i] === "🍊") {
// 			orangeShelf.textContent += "🍊";
// 		}
// }
// sortFruits()
/*📌==========================================================📌*/
                          //THE GAME
let player = {
	name: "luan",
	Chips: 200,
}
let cards = []
let sum = 0;
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + ": $" + player.Chips

function getRandomCard() {
	let randonNumber = Math.floor(Math.random() * 13) + 1
	if (randonNumber > 10) {
		return 10
	}else if(randonNumber === 1){
		return 11
	} else {
		return randonNumber
	}
}

getRandomCard()

function startGame() {
	isAlive = true
	let firstCard = getRandomCard();
	let secondCard = getRandomCard();
	cards = [firstCard , secondCard]
	sum = firstCard + secondCard
	renderGame()
}

function renderGame() {
	cardsEl.textContent = "cards: "
	for (let i = 0; i < cards.length; i++){
		cardsEl.textContent += cards[i] + " "
	}
	sumEl.textContent = "sum: " + sum
	if(sum <= 20) {
		message = "Do you want to draw a new card?";
	} else if (sum === 21) {
		message = "Wohoo! You've got Blackjack!";
		hasBlackJack = true
	} else {
		message = "You're out of the game!";
		isAlive = false
	}
	messageEl.textContent = message
}

function newCard() {
	if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    renderGame();
	}
}
	






