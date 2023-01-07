let greeting = 0;

while (greeting < 4) {
   console.log('oi');
   greeting++;
}

let score = 0;
while (true) {
   console.log('inside loop');

   if (score >= 3) {
      break;
   }

   score++;
}

// criar loop that will print out all the even numbers

let count = 10;
while (count <= 40) {
   if (count % 2 === 0) {
      console.log(count, 'even');
   } else {
      console.log(count, 'odd');
   }
   count++;
}

let contador = 1;

while (contador <= 100) {
   if (contador === 50) {
      console.log('half way there');
      contador++;
      continue;
   }
   if (contador === 100) {
      console.log('you made it');
      contador++;
      continue;
   }

   if (contador % 10 === 0) {
      console.log('checkpoint', contador);
   }
   contador++;
}
