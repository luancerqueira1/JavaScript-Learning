const hello = () => {
   console.log('you!');
   return 'luan';
};

hello();

const result = hello();
console.log(result);

const chill = () => {
   console.log('doing some chilling!');
   for (let i = 1; i <= 10; i++) {
      console.log(`chill ${i}`);
   }
   console.log('that was ice cold');
};
chill();

const noRemainder = (num, mod) => {
   if (num % mod === 0) {
      return true;
   } else {
      return false;
   }
};

const result1 = noRemainder(3, 5);
const result2 = noRemainder(5, 5);

console.log(result1);
console.log(result2);

const login = (username, password) => {
   if (username === 'admin') {
      return true;
   }
   if (username === 'monkey' && password === '123') {
      return true;
   }
   if ((username === 'moomoo') & (password === 'farm')) {
      return true;
   }

   return false;
};

const result3 = login('admin');
const result4 = login('monkey', '123');
const result5 = login('admin', 'luan');
const result6 = login('moomoo', 'farm');
const result7 = login('moomoo', 'farm3');

console.log('result3 ', result3);
console.log('result4 ', result4);
console.log('result5 ', result5);
console.log('result6 ', result6);
console.log('result67', result7);





const square = (num) => {
   return num ** 2;
};


const sumSquare = (num1,num2) => {
   return square(num1) + square(num2);
}

const result8 = sumSquare(2, 2);
const result9 = sumSquare(5, 5);

console.log('result 8',result8);
console.log('result 9',result9);
