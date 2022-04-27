// let openBox = document.getElementById("box");

// openBox.addEventListener("click", function () {
//   console.log("i want open the box");
// });

/*📌==========================================================📌*/
// // If possible, use const. If not, use let.
// // Which variables below should be changed from let to const?
// // The customer wants to order some stuff. Here are the details:
// const basePrice = 520
// const discount = 120
// let shippingCost = 12
// let shippingTime = "5-12 days"
// // Whops! Turns out the shipping will be a bit more complex
// shippingCost = 15
// shippingTime = "7-14 days"
// // Calculating the full price
// const fullPrice = basePrice - discount + shippingCost
// // Finally, notifying the customer
// console.log("Total cost: " + fullPrice + ". It will arrive in " + shippingTime)

/*📌==========================================================📌*/
// // Use .innerHTML to render a Buy! button inside the div container
// const contain = document.getElementById("container3");
// contain.innerHTML = "<button onclick='buy()'>buy!</button>"


// function buy(){
// 	contain.innerHTML += "<p>thank ou  for buying</p>"
// }

/*📌==========================================================📌*/
// // template strings/literals
// const recipient = "James"
// let sender = "luan"
// // Refactor the email string to use template strings
// const email =
// `Hey ${recipient}!
// How is it going?
// Cheers ${sender}`;
// console.log (email)
 
/*📌==========================================================📌*/
// let myLeads = []
// const inputEl  =document.getElementById("input-el")
// const inputBtn = document.getElementById ("input-btn")
// const ulEl = document.getElementById ("ul-el")

// // 1. Save a key-value pair in localStorage
// // 2. Refresh the page. Get the value and log it to the console
// // 3. Clear localStorage

// // HINTS
// // localStorage.setItem(key, value)
// //localStorage.getItem(key)
// // localStorage.clear()
// // PS: both key and value need to be strings

// localStorage.setItem("myName", "Luan")
// console.log(localStorage)
// let myname = localStorage.getItem("myName")
// console.log(myname)
// localStorage.clear()

// /*📌==========================================================📌*/
// let myLeads = `["www.awesomelead.com"]`
//  console.log(myLeads);
// // 1. Turn the myLeads string into an array
// myLeads = JSON.parse(myLeads);
// console.log(myLeads);
// // 2. Push a new value to the array
// myLeads.push("www.luan.com");
// console.log(myLeads);
// // 3. Turn the array into a string again
// myLeads = JSON.stringify(myLeads);
// // 4. Console.log the string using typeof to verify that it's a string
// console.log(typeof myLeads)

// /*📌==========================================================📌*/
//FALSY
//0
//""
//null -> HOW YOU AS A DEVELOPER SIGNILIZE EMPITNESS
//undefined -> HOW JAVASCIPT SIGNILIZES EMPTINESS
//NaN

// console.log(Boolean("")) // false
// console.log(Boolean ("0") ) // true
// console.log(Boolean (100) ) // true
// console.log(Boolean (null)) // false
// console.log( Boolean ([0]) ) //true
// console.log(Boolean(-0)) // false

// /*📌==========================================================📌*/
// let welcome = document.getElementById("welcome-el")

// function greetUser( greeting, nome, emoji) {
// 	welcome.textContent = `${greeting} ${nome} ${emoji}`
// }
// greetUser("Helou","Luan", "😱")

///*📌==========================================================📌*/
// // Create a function, add (), that adds two numbers together and returns the sum
// 			//PARAMETERS -> DENTRO DA FUNÇAO
// function add(a,b) {
// 	return a + b
// }
// 					//ARGUMENTS
// console.log( add (3,4) )     // should log 7
// console.log(add (9, 102))    // should log 111


///*📌==========================================================📌*/
 // Create a function, getFirst (arr), that returns the first item in the array
// Call it with an array as an argument to verify that it works

// let arr = ["luan", "gama"]
// function getFirst(arr) {
// 	return arr[0]
// }
// let firstCard = getFirst([10,20,5])
// console.log(firstCard)

// /*📌==========================================================📌*/
                //FINALS CHALLENGES  
//  // SETTING THE STAGE
// const player = "per"
// const opponent = "Nick"
// const game = "Amazing Fighter"
// let points = 0
// let  hasWon = false
// //PLAYING THE GAME
// points += 100
// hasWon = true
// // ANNOUNCING THE WINNER
// if (hasWon) {
//   console.log(`${player}  got ${points} points and won the ${game} game!`)
// } else {
//   console.log(`The winner is ${ opponent }! ${ player } lost the game`)
// }
// // Go through all variables and decide if they should be let or const
// // Change the console logs to use template strings instead of double quotes
/*--------------------------------------------------------------------------- */ 
// // Create a function that takes a single parameter, an array,
// // and logs all the items of the array to the console.
// // Call the function while passing in myCourses as an argument

//  let myCourses = [
//   "Learn CSS Animations",
//   "UI Design Fundamentals",
//   "Intro to Clean Code",
// ];

// function meusCursos(a) {
//   for (i = 0; i < a.length; i++) {
//     console.log(a[i])
//   }
// }
// meusCursos(myCourses)

/*--------------------------------------------------------------------------- */ 
// // Save a value to localStorage
// // Delete your code and refresh the page
// // Fetch your value from localStorage and log it out

// localStorage.setItem("myCredits", "100")
// let myCredits = localStorage.getItem("myCredits")
// console.log(myCredits)
  
/*--------------------------------------------------------------------------- */ 
//  let data = [{
//     player: "Jane",
//     score: 52
//   },
//   {
//     player: "Mark",
//     score: 41
//   }
// ]
// // Fetch the button from the DOM, store it in a variable
// // Use addEventListener() to listen for button clicks
// // Log Jane's score when the button is clicked (via data)

// let scoreBtn = document.getElementById("score-btn");

// scoreBtn.addEventListener("click", function () {
//   console.log(data[0].score)
// })
/*--------------------------------------------------------------------------- */
  //ERRO
// // The generateSentence (desc, arr) takes two parameterer: a description and an array.
// // It should return a string based upon the description and array.
// // Example 1: if you pass in "largest countries", and ["China", "India", "USA"],
// // it should return the string: "The 3 largest countries are China, India, USA"
// // Example 2: If you pass in "best fruits" and ["Apples", "Bananas"], it should return:
// // "The 2 best fruits are Apples, Bananas"
// // Use both a for loop and a template string to solve the challenge
// function generateSentence(desc, arr) {
//   let baseString = `the ${arr.lenght} ${desc} are`
//   const lastIndex = arr.lenght - 1
//   for (i = 0; i < arr.length; i++){
//     if (i === lastIndex) {
//       baseString += arr[i];
//     } else {
//       baseString += arr[i] += ", "
//     }
//   }
//   return  baseString
// }
// const sentence = generateSentence("highet mountains", ["mount everest " , "k2"])
// console.log(sentence)
/*--------------------------------------------------------------------------- */
// //nem fiz pq nao entendi nada (com foto ainda)

// // Create a function that renders the three team images.
// // Use a for loop, template strings (), plus equals (+=)
// // .innerHTML to solve the challenge.
// const imgs = [
// "hip1.jpg",
// "hip2.png",
// "hip3.jpg"
// ]

// const container = document.getElementById("container10")

// function renderImages () {
//   let imgsDOM = ""
//   for (let i = 0; i < imgs.length; i++) {
//     imgsDOM += `<img class="team-img" src="${imgs[i]}">`
//   }
//   container.innerHTML = imgsDOM
// }
// renderImages()





// /*📌==========================================================📌*/
// let myLeads = [];
// const inputEl = document.getElementById("input-el");
// const saveBtn = document.getElementById("input-btn");
// const ulEl = document.getElementById("ul-el");
// const deleteBtn = document.getElementById("delete-btn");
// const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
// const tabBtn = document.getElementById("tab-btn");


// tabBtn.addEventListener("click", function () {
//     chrome.tabs.query({ active: true, currentWindow: true}, function (tabs){
//      myLeads.push(tabs[0].url);
//      localStorage.setItem("myleads", JSON.stringify(myLeads));
//      render(myLeads);
// 	 });
// });

// if (leadsFromLocalStorage) {
//   myLeads = leadsFromLocalStorage;
//   render(myLeads);
// };

// function render(leads) {
//   let listItems = "";
//   for (let i = 0; i < leads.length; i++) {
//     //listItems +="<li> <a href= '" + myLeads[i] + "' target='_blank'> " + myLeads[i] + "</a> </li>";
//     listItems += `<li> 
// 		<a href= '${leads[i]}' target='_blank'>  ${leads[i]} <a>
// 	  </li>`;
//   }
//   ulEl.innerHTML = listItems;
// }

// deleteBtn.addEventListener("dblclick", function () {
// 	localStorage.clear()
// 	myLeads = []
// 	render(myLeads);
// })

// saveBtn.addEventListener("click", function () {
// 	myLeads.push(inputEl.value)
// 	inputEl.value = ""
// 	localStorage.setItem("myLeads", JSON.stringify(myLeads))
// 	render(myLeads)
// });

