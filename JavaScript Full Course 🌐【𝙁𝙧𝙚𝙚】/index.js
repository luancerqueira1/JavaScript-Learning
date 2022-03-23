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

let username;

document.getElementById('myButton').onclick = function (){

    username = document.getElementById('myText').value;
    console.log(username);
    document.getElementById('myLabel').innerHTML = 'hello ' + username;

}