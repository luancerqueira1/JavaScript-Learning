
const animals = ['leao','gato','cao'];


for(animal of animals){
   console.log(animal);
}


const planets = ['mercury','Venus','earth','mars'];

planets.push('Jupiter');
planets.unshift('sun');
planets.pop();
planets.pop();
planets.shift();
planets.shift();

console.log(planets);


const multiple = 5;
const numbers = [10,11,12,13,14,15,16];


for (number of numbers ){
   const result  = multiple * number

   console.log(`${number} x ${multiple} = ${result}`);
}

const greeting = 'hello, nice to meet you!';

for (greet of greeting){
   console.log(greet);
}

let total = 0;
const grades = [55,63,82,98,91,43];

for (grade of grades ){
   total += grade
}
total /= grades.length
console.log(total);


const bakery = ['cake','cookie','bread','scone'];
const myBakery = bakery;

myBakery.push('croissant','granola')


console.log(bakery);
console.log(myBakery);
