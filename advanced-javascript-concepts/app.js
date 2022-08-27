// CLOUSURE
// let x = 1;

// const parentFunction = () => {
//    let myValue = 2;
//    console.log(x);
//    console.log(myValue);

//    const childFunction = () => {
//       console.log((x += 2));
//       console.log((myValue += 2));
//    };
//    return childFunction;
// };

// const result = parentFunction();
// console.log(result);
// result();
// result();

// const privateCounter = (() => {
//    let count = 0;
//    console.log(`inicial value ${count}`);
//    return () => {
//       count += 1;
//       console.log(count);
//    };
// })();
// privateCounter();
// privateCounter();

const credits = ((num) => {
   let credits = num;
   console.log(credits);
   return () => {
      credits -= 1;
      if (credits > 0) console.log(`playing game, ${credits}`);
      if (credits <= 0) console.log('not enough credits');
   };
})(3);
credits();
credits();
credits();
