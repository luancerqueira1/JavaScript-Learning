// let a = 5;
// let b = 8;
// let c = a*3+b+4+(a - 25);
// console.log('c = ' + c);

// let luan = 'oi';

// console.log(luan);

/*===== OPERATORS =====*/
// let x = 6;
// let y = 4;

// console.log('division ' , x/y);
// console.log('modules ', x % y);

// let z = 5;
// console.log('increment ', ++z); // increment by 1
// console.log('decrement ', --z); // decrement by 1

// let a = 12;
// let b = 8;
// let c = 5;
// let result = 'hello ' + (a + b + c);
// console.log(result);

// let u = 51;
// let z = (u > 50) ? 'oi' : 'nop'
// console.log(y);

//logical operators
// let x = 12;

// if (x > 0) {
//    if (x % 2 === 0) {
//       console.log( x + ' positive and even');
//    }
//    else {
//       console.log(x + ' positive and odd');
//    }
// }
// else if(x < 0) {
//    if(x % 2 === 0) {
//       console.log(x + ' nagative and even');
//    }
//    else {
//       console.log(x + ' positive and odd');
//    }
// }
// else {
//    console.log(x + ' the value is 0');
// }

//SWITCH
// let month = 1;

// switch (month) {
//    case 1:
//       console.log('jan');
//       break;
//    case 2:
//       console.log('feb');
//       break;
//    case 3:
//       console.log('march');
//       break;
//    case 4:
//       console.log('apr');
//       break;
//    case 5:
//       console.log('may');
//       break;
//    case 6:
//       console.log('jun');
//       break;
//    case 7:
//       console.log('july');
//       break;
//    default:
//       console.log('error');
// }

/*===== FUNCTIONS =====*/
// let x = 5;
// let y = 10;

// function sum(a, b) {
//    let total = a + b
//    console.log(total);
//    return total
// }
// let result = sum(5, 5)
// console.log(result);

//=== VARIabLES
// let cars= ['kia', 'ford', 'honda'];
// cars.push('luan');
// cars.push('shipsossiba');
// cars.pop(); //remove o ultimo

// for (caros in cars) {
//    for (careiro of cars) {
//       console.log(careiro);
//    }
// }
// console.log(cars.length);

//=== OBJECTS
// let car = {
//    manufacturer: 'audi',
//    model: 'q7',
//    price: 50000,
//    running: () => {
//       return 'andando'
//    },
// };
// console.log('modelo '+ car.model + 'o carro esta ' + car.running());

//=== PROTOTIPES
// function xyz(name,subject,adress) {
//    this.name = name;
//    this.subject = subject;
//    this.adress = adress;
// }

// let x1 = new xyz('luan', 'pyton', 'mestre');
// let x2 = new xyz('bistc', 'samurai', 'mestre');
// console.log(x1, x2);

// const Employee = {
//    post: function () {
//       return 'a dev okay/'
//    },
//    changeName: function (name) {
//       this.name = name;
//    }
// };
// let e1 = Object.create(Employee);
// e1.name = 'luan';
// e1.role = 'dev';
// console.log(e1);

// function Employee(name, id, salary) {
//    this.name = name;
//    this.id = id;
//    this.salary = salary;
// }
// function Programmer(name, id, salary, language) {
//    Employee.call(this, name, id, salary);
//    this.language = language;
// }
// let user1 = new Programmer('luna', 333, 2000, 'skype');
// console.log(user1);

//=== CLASSES
// class Student {
//    constructor(name, age, roll) {
//       this.name = name;
//       this.age = age;
//       this.roll = roll;
//    }
// }

// function fun() {
//    const x = document.getElementsByTagName('div');

//    for (exes of x) {
//       exes.style.color = 'red'
//    }
// }
//=== FUNCTIONS
// function person(friend, person2) {
//    setTimeout(function () {
//       console.log('you have no friends ' + friend);
//       person2();
//    }, 2000);
// }
// function person2() {
//    console.log('this is a message');
// }
// person('luan', person2);

//=== PROMISES
// let prom = new Promise(function (resolve, reject) {
//    let drive = true;
//    if (drive) {
//       resolve('yes');
//    } else {
//       reject('no');
//    }
// });

// prom
//    .then(function (resolve) {
//       console.log(resolve);
//    })
//    .catch(function (reject) {
//       console.log(reject);
//    });

// const message = () => {
//    alert('hy')
// }

// const start = () => {
//    setTimeout(message,1000)
// }

// let id = 0;
// const start = () => {
//   id = setTimeout(() => {
//       alert('hy');
//   }, 3000);
//    console.log(id);
// };

// const stop = () => {
//    console.log('stop');
//    clearTimeout(id);
// };

/*===== VALIDATION FORM =====*/
// function validate  ()  {
//    let user = document.getElementById('uname').value;
//    let pass = document.getElementById('pass').value;
//    let age = document.getElementById('age').value;

//    if (user.trim() === "" || pass.trim()  === "" || age.trim()  === "") {
//       alert('empty fields');
//       return false;
//    }
//    else if (user == 'luan' && pass == '12345' && age >= 13) {
//       alert('success');
//       return true;
//    } else {
//       alert('wrong');
//       return false;
//    }
// };

/*===== EMAIL VALIDATION  =====*/
// function validate() {
//    let email = document.querySelector('#email').value;
//    let regex = /^([a-z A-Z 0-9 \. _]+)@([a-z A-Z]+).([a-z A-Z]{2,6})(.[a-z]{2,6})?$/;

//    if (email.trim() == '') {
//       alert('please enter a  valid email')
//    }
//    else if(regex.test(email)){
//       alert('email submited success')
//    }
//    else {
//       alert('wrong  email id');
//    }
// }

//=== DEBUGGING
// function add() {
//    let n1 = parseInt(document.querySelector('#n1').value);
//    let n2 = parseInt(document.querySelector('#n2').value);
//    let n3 = n1 + n2 ;
//    alert(n3)
// }

//=== GENERATORS
// function cars(values) {
//    let index = 0;
//    return {
//       next: function () {
//          if (index < values.length)
//             return {
//                value: values[index++],
//                done: false,
//             };
//          else {
//             return {
//                done: true,
//             };
//          }
//       },
//    };
// }
// let arr = ['bmw', 'audi', 'mercedes'];

// let newCars = cars(arr);
// console.log(newCars.next());
// console.log(newCars.next());
// console.log(newCars.next());
// console.log(newCars.next());

// function* generate() {
   
//    let i = 0;
//    yield 'bmw';
//    yield 'audi';
//    yield 'mercedes';
//    yield 'honda';
// }

// let gen = generate();
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());

//=== MAPS
// let myCar = [[1, 'bmw'], [2, 'audi'], [3, 'honda']];
// let myCar2 = new Map(myCar);

// console.log(myCar);
// console.log(myCar2);

// for (let [key, value] of myCar) {
//    console.log(key, value);
// }

// let yourCar = new Map(myCar2);
// console.log(yourCar);
// console.log(myCar === yourCar);

//=== SETS