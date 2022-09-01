/*===== CLOUSURE =====*/
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

// const credits = ((num) => {
//    let credits = num;
//    console.log(credits);
//    return () => {
//       credits -= 1;
//       if (credits > 0) console.log(`playing game, ${credits}`);
//       if (credits <= 0) console.log('not enough credits');
//    };
// })(3);
// credits();
// credits();
// credits();

/*===== PROTOTYPES =====*/
// const person = {
//    alive: true,
// }

// const musician = {
//    plays:true,
// }

// const getPerson = Object.setPrototypeOf(musician, person);

// const guitarrist = {
//    strings: 6,
//    __proto__ :musician
// }
// console.log(guitarrist.alive);

// const car = {
//    doors: 2,
//    seats: 'vinyl',
//    get seatMaterial() {
//       return this.seats;
//    },
//    set seatMaterial(material) {
//       this.seats = material
//    }
// }
// const luxuryCar = {};
// Object.setPrototypeOf(luxuryCar, car);
// luxuryCar.seatMaterial = 'leader';
// console.log(luxuryCar.valueOf());

// function Animal(species) {
//    this.species = species;
//    this.eats = true;
// }

// Animal.prototype.walks = function () {
//    return `A ${this.species} is walking`
// }

// const bear = new Animal('bear');
// console.log(bear.species);
// console.log(bear.walks());

// class Vehicle {
//    constructor() {
//       this.wheels = 4,
//       this.motorized = true
//    }
//    ready() {
//       return 'ready to go!';
//    }
// }

// class Motorcycle extends Vehicle{
//    constructor() {
//       super();
//       (this.weels = 2), (this.motorized = false);
//    }
//    wheelie() {
//       return 'on one weels now!'
//    }
// }

// const myBike = new Motorcycle();
// console.log(myBike);
// console.log(myBike.weels);
// console.log(myBike.motorized);
// console.log(myBike.wheelie());

/*===== RECURSION =====*/
//without recursion
// const fibonacci = (num, array = [0, 1]) => {
//    while (num > 2) {
//       const [nextToLast, last] = array.slice(-2);
//       array.push(nextToLast + last);
//       num -= 1;
//    }
//    return array;
// }
// console.log(fibonacci(5));

// //with recursion
// const fib = (num, array = [0, 1]) => {
//    if (num <= 2) return array;
//    const [nextToLast, last] = array.slice(-2);
//    return fib(num -1 , [...array,nextToLast + last])
// }
// console.log(fib(5));

/*===== DECORATORS =====*/
// let sum = (...args) => {
//    return [...args].reduce((acc,num) => acc + num)
// }
// console.log(sum(3, 3, 3));

// const callCounter = (fn) => {
//    let count = 0;
//    return (...args) => {
//       console.log(`sum has been called ${count += 1} times`);
//       return fn(...args)
//    }
// }
// sum = callCounter(sum);
// console.log(sum(4));
// console.log(sum(4,3));

// let rectangleArea = (length, width) => {
//    return length * width
// };

// const countParams = (fn) => {
//    return (...params) => {
//       if (params.length !== fn.length) {
//          throw new Error(`incorrect number of parameters for ${fn.name}`);
//       }
//       return fn(...params);
//    };
// }

// const requireIntergers = (fn) => {
//    const name = fn.name;
//    return (name,...params) => {
//       params.forEach(param => {
//          if (!Number.isInteger(param)) {
//             throw new TypeError(`params for ${name} must be intergs`);
//          }
//       });
//       return fn(...params)
//    };
// }
// rectangleArea = countParams(rectangleArea);
// rectangleArea = requireIntergers(rectangleArea);
// console.log(rectangleArea(20,30));

// let requestData = async (url) => {
//    try {
//       const response = await fetch(url);
//       const data = await response.json()
//       return data;
//    }
//    catch (err) {
//       console.error(err);
//    }
// }

// const dataResponseTime = (fn) => {
//    return async (url) => {
//       console.time('fn');
//       const data = await fn(url);
//       console.timeEnd('fn');
//       return data;
//    }
// }

// const myTestFunction = async () => {
//    requestData = dataResponseTime(requestData);
//    const data = await requestData('https://jsonplaceholder.typicode.com/posts');
//    console.log(data);
// }
// myTestFunction();

/*===== CURRY =====*/
//...........................

/*===== Shallow Copy and Deep Copy  =====*/
//Primitives pass values
// let x = 2;
// let y = x;
// y += x;
// console.log(x);
// console.log(y);
// //Structural types use references
// let array = [1, 2, 3];
// let yarray = array;
// array.push(4)
// console.log(array);
// console.log(yarray);

/*===== forEach is BAD! for Async Await Code =====*/

const ids = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const getPost = async (id) => {
   return await (await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)).json();
}
const getPostSerialized = async (ids) => {
   for (id in ids) {
      const data = await getPost(ids[id])
      console.log(data);
   }
   console.log('waiting');
}
getPostSerialized(ids);