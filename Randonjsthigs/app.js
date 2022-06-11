// /*=====  8 Must Know JavaScript Array Methods =====*/

// const items = [
//   { name: "bike", Price: 100 },
//   { name: "tv", Price: 200 },
//   { name: "album", Price: 30 },
//   { name: "book", Price: 10 },
//   { name: "phone", Price: 500 },
//   { name: "computer", Price: 1000 },
// ];

// const items2 = [1, 2, 3, 4, 5];

// //FILTER
// const filterItems = items.filter((item) => {
//   return item.Price <= 100;
// });

// console.log(filterItems);

// //MAP
// const itemsNames = items.map((item) => {
//   return item.name;
// });

// console.log(itemsNames);

// //FIND
// const findItems = items.find((item) => {
//   return item.name === "book";
// });

// console.log(findItems);

// //FOREACH
// items.forEach((item) => {
//   console.log(item.name);
// });

// //SOME
// const hasInespensive = items.some((item) => {
//   return item.Price <= 100;
// });
// console.log(hasInespensive);

// //REDUCE
// const total = items.reduce((currentTotal, item) => {
//   console.log(currentTotal);
//   return item.Price + currentTotal;
// }, 0);
// console.log(total);

// //INCLUDES
// const includesTwo = items2.includes(0);
// console.log(includesTwo);


// /*===== JavaScript ES6 Arrow Functions Tutorial =====*/

// function sum(a, b) {
// 	return a+ b
// }
// const sum2 = (a, b) => {
// 	return a + b
// }
// console.log(sum(2,3));
// console.log(sum2(2, 2));

// /*------------------------------------*/
// function isPositive(number) {
// 	return number >= 0;
// }
// const isPositive2 = (number) => {
// 	return number >= 0;
// }

// /*------------------------------------*/
// function ramdomNumber() {
// 	return Math.random();
// }
// const ramdomNumber2 = () => {
// 	return Math.random();
// }

// /*------------------------------------*/
// document.addEventListener('click', function () {
// 	console.log('click');
// })
// document.addEventListener('click',  () => {
// 	console.log('click');
// })


/*===== Learn JavaScript DOM Traversal In 15 Minutes =====*/
const grandparentid = document.getElementById("grandparent-id");
const grandparent = document.querySelector(".grandparent");
const parents = document.getElementsByClassName('parent');
const parent = document.querySelector('.parent');
const parentall = document.querySelectorAll('.parent');

//get the children
const children = Array.from(grandparent.children);
const parent1 = children[0];
const children2 = parent1.children;

// changecolor(children2)

// children.forEach(changecolor);

// parentall.forEach(changecolor);
// changecolor(grandparent)


function changecolor(element) {
  element.style.backgroundColor = '#333'
}

const childOne = document.querySelector('#child-one');
const parentChildOne = childOne.parentElement;
const grandparent2 = childOne.closest('.grandparent')

changecolor(grandparent2)