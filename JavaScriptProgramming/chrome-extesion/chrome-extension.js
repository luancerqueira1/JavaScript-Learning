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
// template strings/literals
const recipient = "James"
let sender = "luan"
// Refactor the email string to use template strings
const email = 
`Hey ${recipient}!
How is it going? 
Cheers ${sender}`;
console.log (email)


/*📌==========================================================📌*/
let myLeads = [];
const inputEl = document.getElementById("input-el");
let saveBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

saveBtn.addEventListener("click", function () {
	myLeads.push(inputEl.value)
	renderLeads()
	inputEl.value = ""
});

function renderLeads() {
  let listItems = "";
  for (let i = 0; i < myLeads.length; i++) {
   //listItems +="<li> <a href= '" + myLeads[i] + "' target='_blank'> " + myLeads[i] + "</a> </li>";
	listItems +=
	`<li> 
		<a href= '${myLeads[i]}' target='_blank'>  ${myLeads[i]} <a>
	</li>`;

  }
  ulEl.innerHTML = listItems;
}

