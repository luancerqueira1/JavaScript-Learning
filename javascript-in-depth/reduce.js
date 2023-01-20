const citys = ['rio', 'sp', 'zoe']

const localidade = citys.reduce((result, city) => {
   console.log('1',result);
   console.log('2',city);
   return result + city
},'');

console.log('result',localidade);


const sum = [5, 10, 15, 20, 25, 30, 35];

const sum2 = sum.reduce((result, number) => {
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