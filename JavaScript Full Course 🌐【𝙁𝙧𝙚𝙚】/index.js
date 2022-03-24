/*======================= AULA 1 =======================*/

// console.log('i like pizza!');
// console.log('its really good');

// // window.alert("i like pizza");

// // comment

// /* Comment */

// let firstName = "Luan"; // strings
// let age = 24; // numbers
// let student = true; // booleans

// age = age +1

// console.log(age);
// console.log("hello my name is", firstName, "and i'm", age);
// console.log(student);

// document.getElementById("p1").innerHTML = "hello " + firstName;
// document.getElementById("p2").innerHTML = "you are " + age + " years old";
// document.getElementById("p3").innerHTML = "present " + student;


/*======================= AULA 2 =======================*/

/*
let students = 20;

students = students + 1;
students = students - 1;
students = students * 2;
students = students / 2;
students = students % 2;

 students +=  2;
 students -=  2;
 students *=  2;
 students /=  2;
 

console.log(students)

/*
    operator precedence
    1. parenthesis ()
    2. exponents
    3. multiplication & division
    4. addition & subtraction
*/

/*
let result = 1 + 2 * (4 + 3);
//(4+3=7  | 2*7=14  | 14+1=15)

console.log(result);
*/


/*======================= AULA 3 =======================*/

// let username = window.prompt('whars your name?');
// console.log(username);
/*
let username;

document.getElementById('myButton').onclick = function (){

    username = document.getElementById('myText').value;
    console.log(username)
    document.getElementById('myLabel').innerHTML = 'hello ' + username;
}
*/

/*======================= AULA 4 =======================*/

/*
let age = window.prompt("How old are you?");

console.log(typeof age);
age = Number(age);
console.log(typeof age);
age += 1;

console.log("Happy Birthday! You are", age, "years old");


let x;
let y;
let z;

x = Number(3.14);
y = String(3.14);
z = Boolean('pizza');

console.log(x, typeof x)
console.log(y, typeof y)
console.log(z, typeof z)
*/


/*======================= AULA 5 =======================*/

// const = a variable that can't be changed

/*
const PI = 3.14159;
let radius;
let circumference;

radius = window.prompt("Enter the radius of a circle");
radius = Number(radius);

// PI = 420.69;

circumference = 2 * PI * radius;
console.log("The circumference is:", circumference);
*/

/*======================= AULA 6 =======================*/

/*
let x = 3.14;
let y = 5;
let z = 9;
let maximum;
let minimum;

//x Math.round (x);
//x = Math.floor(x);
//x = Math.ceil(x);
//x Math.pow(x, 2);
//x Math.sqrt(x);
//x = Math.abs (x);

maximum = Math.max(x, y, z);
minimum = Math.min(x, y, z);

x = Math.round(x);

console.log(maximum)
*/

/*======================= AULA 7 =======================*/
/*
let  a;
let b;
let c;

a = window.prompt('enter side a');
a = Number(a);

b = window.prompt('enter side b');
b = Number(b);

c = Math.pow(a, 2) + Math.pow(b, 2);
c = Math.sqrt(c);

console.log('side c:', c);
*/
/*
document.getElementById("submitButton").onclick = function () {

    a = document.getElementById('atextBox').value;
    a = Number(a);

    b = document.getElementById("btextBox").value;
    b = Number(b);

    c = Math.pow(a, 2) + Math.pow(b, 2);
    c = Math.sqrt(c);

    document.getElementById('clabel').innerHTML = 'side c:' + c;
};
*/

/*======================= AULA 8 =======================*/
/*
let count = 0;

document.getElementById('decreaseBtn').onclick = function () {
    count -= 1;
    document.getElementById('countLabel').innerHTML = count;
}

document.getElementById('increaseBtn').onclick = function () {
    count += 1;
    document.getElementById('countLabel').innerHTML = count;
}

document.getElementById('resetBtn').onclick = function () {
    count = 0;
    document.getElementById('countLabel').innerHTML = count;  
}
*/

/*======================= AULA 9 =======================*/

/*
let x; 
let y; 
let z;

document.getElementById('rollButton').onclick = function (){
    
    x = Math.floor(Math.random() * 6) + 1;
    y = Math.floor(Math.random() * 6) + 1;
    z = Math.floor(Math.random() * 6) + 1;
    
    document.getElementById('xlabel').innerHTML = x
    document.getElementById('ylabel').innerHTML = y
    document.getElementById('zlabel').innerHTML = z
}
*/

/*======================= AULA 10 =======================*/

// uselful string properties & methods
/*
let userName = ' Luan      gama      ';
let phoneNumber = '123-456-789';

// console.log(userName.length);
//console.log(userName.length);
//console.log(userName.charAt(0));
//console.log(userName.indexof ("o"));
//console.log(userName.lastIndexof ("o"));
// userName = userName.trim();
// userName = userName.toLocaleUpperCase();
// userName = userName.toLowerCase();

phoneNumber = phoneNumber.replaceAll('-', '');

console.log(userName);
console.log(phoneNumber);
*/

/*======================= AULA 11 =======================*/

/*
let fullName = "Luan Cerqueira";
let firstName;
let lastName;
//firstName = fullName.slice(e, 3);
//lastName = ful1Name.slice(4);

firstName = fullName.slice(0, fullName.indexOf(' '));
lastName = fullName.slice(fullName.indexOf(' ') + 1);

console.log(firstName);
console.log(lastName);
*/


/*======================= AULA 12 =======================*/
// method chaining = calling one method after another
//                   in one continuous line of code
/*
let userName = 'luan';

let letter = userName.charAt(0).toUpperCase().trim();

console.log(letter)
*/


/*======================= AULA 13 =======================*/
// if statement = a basic form of decision making
//                if a condition is true, then do something
//                if not, then don't do it!
/*
let age = 66

 if (age >= 65) {
  console.log("you are older");
}
else if (age >= 18) {
  console.log("you are an adult!");
}
else if (age <= 0) {
  console.log("not born");
}
else {
  console.log("child");
}


let online = true;

if (online){
    console.log('you are onlie');
}
else {
    console.log('you are offline');
}
*/

/*====================== AULA 14 ======================*/
/*
document.getElementById('myButton').onclick = function () {

    const myCheckBox = document.getElementById("myCheckBox");
    const visaBtn = document.getElementById("visaBtn");
    const mastercardBtn = document.getElementById("mastercardBtn");
    const paypalBtn = document.getElementById("paypalBtn");


    if (myCheckBox.checked) {
        console.log('you are sybscribed');
        document.getElementById('teste').innerHTML = "<h2>inscrito</h2>";
    }
    else {
        document.getElementById("teste").innerHTML = '<h2>se inscreva</h2>';
        console.log('you are not sybscribed');
    }

    if (visaBtn.checked) {
        console.log('you are paying with visa');
    }
    else if (mastercardBtn.checked) {
      console.log("you are paying with master card");
    }
    else if (paypalBtn.checked) {
      console.log("you are paying with paypal");
    }
    else {
        console.log('select a payment type')
    }
}
*/
 















/*====================== AULA 15 ======================*/