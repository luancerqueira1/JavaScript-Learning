
// document.getElementById("count-el").innerText = 5 ;

// let count = 7
// console.log(count)

// let firstBatch = 5
// let secondBatch = 7
// let count = firstBatch + secondBatch
// console.log (count)

/*📌==========================================================📌*/
// 1. Create two variables, myAge and humanDogRatio
// 2. Multiply the two together and store the result in myDogAge
// 3. Log my DogAge to the console

// let myAge = 24
// let humanDogRatio = 7
// let myDogAge = myAge * humanDogRatio
// console.log(myDogAge)

/*📌========================================================= 📌*/
// Create a variable, bonusPoints. Initialize it as 50. Increase it to 100.
// Decrease it down to 25, and then finally increase it to 70
// Console.log the value after each step

// let bonusPoints = 50
// console.log(bonusPoints)
// bonusPoints = bonusPoints + 50
// console.log(bonusPoints)
// bonusPoints = bonusPoints - 75
// console.log(bonusPoints)
// bonusPoints = bonusPoints + 45
// console.log(bonusPoints)

/*📌========================================================= 📌*/
 // Create a function (you decide the name) that logs out the number 42 to the console
// Call/invoke the function

// function myLogger() {
// console.log(42)
// }
// myLogger ()

/*📌========================================================= 📌*/
//  // Create a function that logs out the sum of all the lap times

// let lap1 = 34;
// let lap2 = 33;
// let lap3 = 36;
 
// function logLapTime() {
//    // let totalTime = lap1 + lap2 + lap3
//    console.log(lap1 + lap2 + lap3);
// }
// logLapTime();

/*📌==========================================================📌*/
// // Create a function that increments the lapsCompleted variable with one
// // Run it three times
// let lapsCompleted = 0

// function incrementLap() {
// 	lapsCompleted =lapsCompleted +1
// }

// incrementLap()
// incrementLap()
// incrementLap()

// console.log(lapsCompleted)

/*📌==========================================================📌*/
// Create two variables, name and greeting. The name variable should store your name,
// and the greeting should store e.g. "Hi, my name is "
// Create a third variable, myGreeting, that contatenates the two strings
//Log myGreeting to the console

// let myName = "luan"
// let greeting = "hy my name is "
// let myGreeting = greeting + myName;
// console.log(myGreeting)

/*📌==========================================================📌*/
//Grab the welcome-el paragraph and store it in a variable called welcomeEl
//Create two variables (name & greeting) that contains your name
//and the greeting we want to render on the page
//Render the welcome message using welcomeEl.innerText

let welcomeEl = document.getElementById("welcome-el")
let theName = "luan"
let greeting = "Welcome Again "
welcomeEl.innerText =  greeting  + theName 
welcomeEl.innerText +=  "👋🏻"


/*📌==========================================================📌*/
let count = 0;
let countEl = document.getElementById("count-el");

function increment() {
	count +=  1 
	countEl.textContent = count;
}

function save() {
	console.log(count)
}