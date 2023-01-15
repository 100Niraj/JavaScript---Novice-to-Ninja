let age = 21;
let year = 2023;

console.log(age , year);

//log things to console
const points  = 100;
console.log(points);

// data types
// numbers :- 1,2,3,3.4
// string :- "hello,world" , "nirajkumarpatel.com"
// boolean :- true/false
// Null :- explicity set a variable with no value
// undefined :- for variables that have not yet been defined
// object :- complex data structures - arrays, dates, literals etc 
// symbol :- use with obj

// strings
console.log('hello Niraj');

let email = 'nirajkumar264@gamil.com';
console.log(email);

//string concatenation
let firstName = 'Niraj';
let lastName = 'kumar';

let fullName = firstName + ' ' + lastName;
console.log(fullName);

//getting characters
console.log(fullName[0]);
console.log(fullName[5]);

//string length
console.log(fullName.length);

//string method
console.log(fullName.toUpperCase());
let result = fullName.toLowerCase();
console.log(result);

//indexing
let index = email.indexOf('@');
console.log(index);