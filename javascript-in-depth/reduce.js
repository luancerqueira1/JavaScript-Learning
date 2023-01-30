const citys = ['rio', 'sp', 'zoe']

const localidade = citys.reduce((result, city) => {
   console.log('1',result);
   console.log('2',city);
   return result + city
},'');

console.log('result',localidade);


const sum1 = [5, 10, 15, 20, 25, 30, 35];

const sum2 = sum1.reduce((result, number) => {
   if (result < 20) {
      return result + number
   }

   return result
}, 0);

console.log(sum2);

const cities = ['brazil', 'Uruguai', 'berlin', 'codear'];

const concatCities = cities.reduce((concatString, city) => {
   
   if (city === 'brazil') {
      return concatString
   }
   
   return concatString + city + '-';
},'');

console.log(concatCities);
console.log('------------------');

const points = [55, 56, 57, 58, 59, 60];

const sum = points.reduce((result, point) => {
   return result + point
},0);

console.log(sum);

console.log('------------------');

const companies = ['apple', 'spaceX', 'tesla', 'meta', 'google','luan'];

const modded = companies.reduce((result, company,index) => {
   if (company.startsWith('a')) {
      return result 
   }

   if (index === companies.length -1) {
      return result + company;
   }
   return result + company + '-';

}, '')

console.log(modded);

console.log('------------------');


const prices = [1.23, 19.99, 85.2, 32.87, 8, 5.2];

const afterTax = prices.reduce((sum, price) => {
   if (price > 6) {
      return sum + price;
   }

   return sum + price * 1.2
}, 0);

console.log(afterTax);

console.log('------------------');


const itens = ['light', 'banana', 'phone', 'mouse'];

const caps = itens.map((item) =>{
   return item.toUpperCase()
})

const concat = caps.reduce((result, string) => {
   return result + string + ' '
}, '');

console.log(concat);

console.log('------------------');



const nums = [10, 30, 50, 70, 90];

const squares = nums.map((num) => {
   return num ** 2;
})

const over1000 = squares.filter((num)=> {
   if (num > 1000) {
      return true;
   }
   return false
})

const finale = over1000.reduce((result,num) => {
   return  result +  num
}, 0)

console.log(squares);
console.log(over1000);
console.log(finale);