// Creatingavariable using var keyword
// var variableName='test';

// Creatingavariable using let keyWord
// let variableName='test';

// Creatingavariable using const keyword
// const variableName='test';

// VARIABLE NAMING
// 1. The name should be unique
// 2. The name should, not be any reserved keyword
// 3. The name must start with a character, _ , $

// DATA TYPES
// String
const hello = 'hello world';
// Number
const numero =  22;
// Boolean
// True - yes , correct , 1
// False - no , incoreect, 0
const boolean = true;
// Null
const nulo = null;
// Undefined
let x;
// Objects
const pessoa = {
	nome: "luan",
	idade: "22"
};
// Array
const cor = ['amarelo', 'azul', 'verde'];

// Comparison Operators true/false
const a= 10;
const b= 10;
// Greater than
// console.log(a>b);
// Greater than or equal to
// console.log(a b);
// Less than
// console.log(a<b);
// Less than or equal
// console.log(a<b);

// Is equal
console.log(a === b);
// Not iqual
console.log(a !== b);

// Loose Equality
// Doesen't compare DATA TYPES

// The Good Ones: === !==
// The Evil Twins: == !=

// console.log('' == '0'); // false
// console.log(0 == ''); // true
// console.log(0 == '0'); // true

// console.log(false == 'false'); // false
// console.log(false == '0'); // true

// Logical Operators
// AND && => ALL OPERANDS ARE TRUE => TRUE
// console.log(true &6 true &6 true);
// OR || => AT LEAST ONE OPERAND IS TRUE => TRUE
// console.log(false || false);
// NOT!
// console.log(!false);

//ABLOCK OF CODE=PERFORMSATASK

//AFUNCTION DECLARATION (definingafunction)
// function square(number){
//   return number * number;
// }

// //AFUNCTION CALL (calling/executingafunction)
// let result = square(5);
// console.log(result);

// // Afunction declaration
// function name1 (params){
// 	// statements
// 	// have access to "this" keyword
// }

// // Afunction expression
// const name2 = function(params){
// 	// statements
// }

// // An arrow function
// const name3 = (params) => {
// 	return params + params
// }
// console.log(name3(3));

// Arrow Function
const square = (number) => {
  return number * number;
}

const square1 = (number) => number * number;

const result = square(10);
const result1 = square1(10);
console.log(result);
console.log(result1);
