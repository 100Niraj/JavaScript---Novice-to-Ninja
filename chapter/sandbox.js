// /

// data types
// numbers :- 1,2,3,3.4
// string :- "hello,world" , "nirajkumarpatel.com"
// boolean :- true/false
// Null :- explicity set a variable with no value
// undefined :- for variables that have not yet been defined
// object :- complex data structures - arrays, dates, literals etc 
// symbol :- use with obj

// // numbers

// let radius = 10;
// const pi = 3.14;
// console.log(radius,pi);

// //math operators +,-,*, / , ** , %
// console.log(10/2);
// let result = radius % 3;
// console.log(result);

// let result2 = pi * radius**2;
// console.log(result2);

// //order of operation - B I D M A S 
// let result3 = 5*(10-3)**2;
// console.log(result3);

// let likes = 10;
// likes = likes + 5;
// likes--;
// likes++;
// console.log(likes);
// //likes += 10; :- 20
// //likes -= 5; :- 5
// //likes *= 5: :- 50;
// //likes /= 5; :- 2;

// // NaN = not a number
// console.log(5 / 'hello');
// console.log(5 * 'hello');

// let res = 'the bolg has ' +  likes  + ' likes';
// console.log(res);


// //strings
// console.log('hello Niraj');

// let email = 'nirajkumar264@gamil.com';
// console.log(email);

// //string concatenation
// let firstName = 'Niraj';
// let lastName = 'kumar';

// let fullName = firstName + ' ' + lastName;
// console.log(fullName);

// //getting characters
// console.log(fullName[0]);
// console.log(fullName[5]);

// //string length
// console.log(fullName.length);

// //string method
// console.log(fullName.toUpperCase());
// let result = fullName.toLowerCase();
// console.log(result);

// //indexing
// let index = email.indexOf('@');
// console.log(index);

// //template strings
// const title = 'Best reads of 2019';
// const author = 'Mario';
// const likes = 30;

// // concatenation way
// // let res = 'The blog called ' + title + ' by ' + author + ' has ' + likes;
// // console.log(res); 
 
// //template string way 
// let result = 'The bolg called ${title} by ${author} has ${likes} likes';
// console.log(result);

// //creating html templates
// // let html = '<h2>${title}</h2>
// // <p>by ${autor}</p>
// // <span>This blog has ${likes} likes</span>
// // ';
// // console.log(html);

//array
let niraj = ['asnika' , 'patel' , 'luvly'];
console.log(niraj);
console.log(niraj[3]);
console.log(niraj[2]);

let ages = [ 20 , 21 , 22 , 23];
console.log(ages[2]);

let random = ['niraj', 'luvly' , 21 , 19];
console.log(random);

//length of array
console.log(niraj.length);

//array methods
let results = niraj.join('-');
console.log(results);

//indexing 
let res = niraj.indexOf('luvly');
console.log(res);

//add in array
let ans = niraj.concat(['Niraj' , 'Kumar']);
console.log(ans);

let pushorpop = niraj.push('luv');
pushorpop = niraj.pop();
console.log(pushorpop);




