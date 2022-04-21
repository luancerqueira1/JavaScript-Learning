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
let firstCard = 10
let secondCard = 17
let sum = firstCard + secondCard 

if (sum < 21) {
	console.log("do you want a new card?")
} else if (sum === 21) {
	console.log("you´ve got blackjack!")
} else {
	console.log("you lost")
} 

