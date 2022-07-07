

/*operators*/
// const food = Number(prompt('how much was your food?')); ;
// const tippercetage = prompt('tip percentage') / 100;
// const tipAmount = food * tippercetage;
// const total = food + tipAmount;
// alert('tip amount' + tipAmount);
// alert('your bill is R$: ' + total)

/* BABY APP */
// let weather = prompt('how is th eweather');
// if (weather === 'rain') {
//    alert('grab your umbrella');
// }
// else{
//    alert('grab your sunglasses');
// }

/* FUNCTIONS */
// function SayMyname() {
//   let name = prompt('whats your name?');
//    alert('olá ' + name);
// }
// SayMyname();

// function sum(a, b) {
//    return a + b
// }
// numbersSum = sum(2,2)
// console.log(numbersSum);

function calculateFoodTotal(food, tip) {
   let tippercetage = tip / 100;
   const tipAmount = food * tippercetage;
   const total = sum(food , tipAmount);
   return total
}
function sum(a, b) {
   return a + b
}
console.log(calculateFoodTotal(300, 20));
