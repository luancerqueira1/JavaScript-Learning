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
// const grandparentid = document.getElementById("grandparent-id");
// const grandparent = document.querySelector(".grandparent");
// const parents = document.getElementsByClassName('parent');
// const parent = document.querySelector('.parent');
// const parentall = document.querySelectorAll('.parent');

// //get the children
// const children = Array.from(grandparent.children);
// const parent1 = children[0];
// const children2 = parent1.children;

// // changecolor(children2)

// // children.forEach(changecolor);

// // parentall.forEach(changecolor);
// // changecolor(grandparent)


// function changecolor(element) {
//   element.style.backgroundColor = '#333'
// }

// const childOne = document.querySelector('#child-one');
// const parentChildOne = childOne.parentElement;
// const grandparent2 = childOne.closest('.grandparent')

// changecolor(grandparent2)

/*===== Learn JavaScript DOM Traversal In 15 Minutes =====*/
// const grandparent = document.querySelector(".grandparent");
// const parent = document.querySelector(".parent");
// const child = document.querySelector(".child");

// grandparent.addEventListener('click', e => {
//   console.log("grandparent");
// })

// parent.addEventListener('click', e => {
//   console.log("parent");
// })

// child.addEventListener('click', e => {
//   console.log("child");
// })

// const div = document.querySelectorAll("div");

// div.forEach(div => {
//   div.addEventListener('click', () => {
//     console.log('HI');
//   })
// })

// const newDiv = document.createElement('div');
// newDiv.style.width ='200px'
// newDiv.style.height ='200px'
// newDiv.style.backgroundColor ='purple'
// document.body.append(newDiv);
// newDiv

/*===== JavaScript Higher Order Functions & Arrays =====*/
const companies = [
  { name: 'comapany one', category: 'finance', start: 1981, end: 2003 },
  { name: 'comapany two', category: 'retail', start: 1992, end: 2008 },
  { name: 'comapany three', category: 'auto', start: 1999, end: 2007 },
  { name: 'comapany four', category: 'retail', start: 1989, end: 2010 },
  { name: 'comapany five', category: 'tecnology', start: 2009, end: 2014 },
  { name: 'comapany six', category: 'finance', start: 1987, end: 2010 },
  { name: 'comapany seven', category: 'auto', start: 1986, end: 1996 },
  { name: 'comapany eight', category: 'tecnology', start: 2011, end: 2016 },
  { name: 'comapany nine', category: 'retail', start: 1981, end: 1989 },
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// for (let i = 0; i < companies.length; i++){
//   console.log(companies[i]);
// }

// //FOREACH
// companies.forEach((company,index) => {
//   console.log(company.name);
// })

//FILTER
// let canDrink = []

// // for (let i = 0; i < ages.length; i++){
// //   if (ages[i] >= 21) {
// //     canDrink.push(ages[i])
// //   }
// // }

// const canDrink = ages.filter(age => age >= 21)
// console.log(canDrink);


//FILTER RETAIL COMPANIES
// const retailCompanies = companies.filter(function (comapany) {
//   if (comapany.category === 'retail') {
//     return true;
//   }
// })

// const retailCompanies = companies.filter(company => company.category === 'retail')

// console.log(retailCompanies);

//GET 80S COMPANIES
// const eightiesCompanies = companies.filter(company => company.start >= 1980 && company.start < 1990);

// console.log(eightiesCompanies);


//LASTED 10 years
// const lasted10Years = companies.filter(company =>(company.end - company.start >= 10))
// console.log(lasted10Years);

//MAP
//create array of company itemsNames
// const companyNames = companies.map(function (company,index) {
//   return company.name;
// })
// console.log(companyNames);

// const testMap = companies.map(company => `${company.name} [${company.start} - ${company.end}]`)
// console.log(testMap);

//SORT

// const sortCompanies = companies.sort(function (c1,c2) {
//   if (c1.start > c2.start) {
//     return 1
//   }
//   else {
//     return -1
//   }
// })
// console.log(sortCompanies);

// const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1))
// console.log(sortedCompanies);


//SORT AGES
// const sortAges = ages.sort((a,b)=> a - b)

// console.log(sortAges);

//REDUCE
// let ageSume = 0
// for (let i = 0; i < ages.length; i++){
//   ageSume += ages[i]
// }

// const ageSum = ages.reduce(function (total, age) {
//   return total + age
// }, 0)
// console.log(ageSum);
// /*-----------------------------------------*/
const ageSum2 = ages.reduce( (total, age) => total + age ,0)

console.log(ageSum2);

//GET TOTAL YEARS FOR ALL COMPANIES
const totalYears = companies.reduce(function (total,company) {
  return total + (company.end - company.start)
}, 0); 
console.log(totalYears);
// /*-----------------------------------------*/

const totalYears2 = companies.reduce((total, company) => total + (company.end - company.start), 0); 
console.log(totalYears2);


//COMBINE METHODS
const combine = ages
  .map(age => age * 2)
  .filter(age => age >= 40)
  .sort((a, b) => a - b)
  .reduce((a,b) => a +b , 0)

console.log(combine);