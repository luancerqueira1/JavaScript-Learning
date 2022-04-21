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

/*📌==========================================================📌*/
//Write the conditional according to these rules:
// if less than or equal to 20 -> "Do you want to draw a new card?
// else if exactly 21 -> "Wohoo! You've got Blackjack!
// else -> "You're out of the game!


let firstCard = 10;
let secondCard = 4;
let sum = firstCard + secondCard;
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")

function startGame() {
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




