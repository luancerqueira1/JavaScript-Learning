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
let myLeads = `["www.awesomelead.com"]`
 console.log(myLeads);
// 1. Turn the myLeads string into an array
myLeads = JSON.parse(myLeads);
console.log(myLeads);
// 2. Push a new value to the array
myLeads.push("www.luan.com");
console.log(myLeads);
// 3. Turn the array into a string again
myLeads = JSON.stringify(myLeads);
// 4. Console.log the string using typeof to verify that it's a string
console.log(typeof myLeads)



// /*📌==========================================================📌*/
// let myLeads = ["www.google.com"];
// myLeads = JSON.stringify(myLeads)
// console.log(typeof myLeads)

// const inputEl = document.getElementById("input-el");
// let saveBtn = document.getElementById("input-btn");
// const ulEl = document.getElementById("ul-el");

// localStorage.setItem("myLeads", "www.google.com" )

// saveBtn.addEventListener("click", function () {
// 	myLeads.push(inputEl.value)
// 	inputEl.value = ""
// 	renderLeads()
// });

// function renderLeads() {
//   let listItems = "";
//   for (let i = 0; i < myLeads.length; i++) {
//    //listItems +="<li> <a href= '" + myLeads[i] + "' target='_blank'> " + myLeads[i] + "</a> </li>";
// 	listItems +=
// 	`<li> 
// 		<a href= '${myLeads[i]}' target='_blank'>  ${myLeads[i]} <a>
// 	</li>`;

//   }
//   ulEl.innerHTML = listItems;
// }

