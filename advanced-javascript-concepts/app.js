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