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

//template strings
// const title = 'Best reads of 2019';
// const author = 'Mario';
// const likes = 30;

// // concatenation way
// // let res = 'The blog called ' + title + ' by ' + author + ' has ' + likes;
// // console.log(res); 
 
//template string way 
// let result = 'The bolg called ${title} by ${author} has ${likes} likes';
// console.log(result);

// //creating html templates
// // let html = '<h2>${title}</h2>
// // <p>by ${autor}</p>
// // <span>This blog has ${likes} likes</span>
// // ';
// // console.log(html);

// //array
// let niraj = ['asnika' , 'patel' , 'luvly'];
// console.log(niraj);
// console.log(niraj[3]);
// console.log(niraj[2]);

// let ages = [ 20 , 21 , 22 , 23];
// console.log(ages[2]);

// let random = ['niraj', 'luvly' , 21 , 19];
// console.log(random);

//length of array
// console.log(niraj.length);

// //array methods
// let results = niraj.join('-');
// console.log(results);

//indexing 
// let res = niraj.indexOf('luvly');
// console.log(res);

// //add in array
// let ans = niraj.concat(['Niraj' , 'Kumar']);
// console.log(ans);

// let pushorpop = niraj.push('luv');
// pushorpop = niraj.pop();
// console.log(pushorpop);

//NULL

// let age;
// console.log(age, age + 3, 'the age is ${age}');
// let age = null;
// console.log(age, age + 3, 'the age is ${age}');

// //booleans
// //booleans & comparisons
// console.log(true,false);

// //methods can return booleans
// let email = 'nirajkumarpatel264@gamil.com';
// let names = [ 'niraj' , 'kumar' , 'patel'];

// let result1 = email.includes('!');
// let result2 = names.includes('nakli');
// console.log(result1);
// console.log(result2);

// let result3 = names.includes('niraj');
// console.log(result3);

// //comparison operators
// let ans = 25;

// console.log(ans == 25);
// console.log(ans == 30);
// console.log(ans != 30);
// console.log(ans > 20);
// console.log(ans < 20);
// console.log(ans <= 25);

// let name = 'niraj';

// console.log(name == 'niraj');
// console.log(name == 'Niraj');
// console.log(name > 'luvly');

// let boy = 25;

// // loose comparison ( different types can still be equal)

// console.log(boy == 25);
// console.log(boy == '25');
// console.log(boy != 25);
// console.log(boy != '25');

// // strict comparison (different types cannot be equal);

// console.log(boy === 25);
// console.log(boy === '25');
// console.log(boy !== 25);
// console.log(boy !== '25');


// // type conversion
// let score = '100';
// console.log(score + 1);

// score = Number(score);
// console.log(typeof score);

// // let res = Number('hello');
// // console.log(res); NaN

// // let res = String(50);
// // console.log(res , typeof res);

// let res = Boolean(100);
// console.log(res , typeof res);




/* CONTROL FLOW.... */

// use conditional statements for checking condition
/* if(some condition is ture){
    do something....
} */



// // if statements
// const age = 25;

// if(age > 20){
//     console.log('you are over 20 years old');
// }

// const password = 'p@ss';
// if(password.length >= 8){
//     console.log('that password is long enough !');
// }
// else {
//     console.log('password is not long enough');
// }

// // for loops

// for(let i=0; i<5; i++){
//     //console.log(i);
//     console.log('in loop: ', i);
// }
// console.log('loop finished');

// const names = ['asnika' , 'patel' , 'luvly'];
// for(let i=0;  i<names.length; i++){
//     console.log(names[i]);
// }

// // while loops

// let i = 0;

// while(i<5){
//     console.log('in loop:' , i);
//     i++;
// }

// const namess = ['luvly' , 'asnika', 'patel'];
// let j = 0;
// while(j<namess.length){
//     console.log(namess[j]);
//     j++;
// }

// // do while loops

// let k = 3;
// do{
//     console.log('val of k is:' , k);
//     k++;
// } while(k<5);


// // logical operators - OR || and AND &&

// const password2 = 'p@ssword1234';

// if(password2.length >= 12 && password2.includes('@')){
//     console.log('that password is mighty strong');
// }
// else if(password2.length >= 8 || password2.includes('@') && password2.length >=5){
//     console.log('that password is strong enough !');
// }
// else {
//     console.log('password is not strong enough');
// }

// // logical NOT (!)

// /* switch boolean value 
//  console.log(!ture);
//  console.log(!false);
//  */
 
// let user = false;
// if(!user){
//     console.log('that is niraj');

// }

// //break and continue;

// const scores = [50, 25, 0, 30, 100, 20, 10];

// for(let i=0; i<scores.length; i++){
//     console.log('your score: ', scores[i]);

//     if(scores[i] == 0){
//         continue;
//     }

//     if(scores[i] == 100){
//         console.log('congrats, you got the top score');
//         break;
//     }
// }

// // switch statements
// const grade = 'D';

// switch(grade){
//     case 'A':
//         console.log('you got an A!');
//     case 'B':
//         console.log('you got an !B');
//     case 'C':
//         console.log('you got an C!');
//     case 'D':
//         console.log('you got an D!');
//     case 'E':
//         console.log('you got an E!');
//     default:
//         console.log('not a valid grade');

// }

// // variables  & block scope

// let marks = 30;

// if(true){
//     let marks = 40;
//     let name = 'niraj';
//     console.log('inside 1st code block: ' , marks , name);

//     if(true){
//         let marks = 50;
//         console.log('inside 2nd code block: ' , marks);

//     }
// }

// console.log('outside code block: ', marks , name);


// FUNCTIONS

//function declaration

// function greet(){
//     console.log('hello niraj');
// }
// function expression 
// const speak = function(name, time){
//     console.log(`good day! ${time} ${name}`);
// }


// // callling fuct 
// greet();
// greet();
// //speak();

// const speak = function(name,time){
//     console.log(`good day ! ${time} ${name}`);
// }

// speak('niraj' , 'good morning');

// const calsArea = function(radius){                 //PS E:\JavaScript - Novice to Ninja\chapter> node sandbox.js
//                                                     // good day ! good morning niraj
//                                                     // area is: 78.5
//     let area = 3.14 * radius**2;
//     return area;
// }
// const a = calsArea(5);
// console.log('area is:' , a);

// //practise arrow functions

// const greeet = () => 'hello niraj';
// const results = greeet();
// console.log(results);

// ////
// const name = 'niraj';

// //function
// const grt = () => 'hello';
// let resultone = grt();
// console.log(resultone);

// // methods

// let resultwo = name.toUpperCase();
// console.log(resultwo);

// //callbacks & foreach

// let people = ['niraj', 'khushbu','deepak','nishant','ashant'];
// people.forEach((person,index)=> {
//     console.log(index,person);
// })

// //get a reference to the 'ul'

// const ul = document.querySelector('.people');

// const people2 = ['niraj', 'khushbu', 'deepak', 'nishant','ashant'];

// let html = ``;

// people.forEach(function(person){
//     //creat html template
//     html += `<li style="color: purple">${person}</li>`;
// })
// console.log(html);

// ul.innerHTML = html;

// OBJECTS


// const blogs = [
//     {title: 'why mac & cheese rules', likes: 30 },
//     {title: '10 things to make with mar', likes: 50}
// ];

// console.log(blogs);

// let user = {
//     name: 'Niraj',
//     age: 21,
//     email: 'nirajkumarpatel264@gmail.com',
//     location: 'Bihar',
//     blogs: ['why mac & cheese rules', '10 things to make with mar'],
//     login: function(){
//         console.log('the user logged in');
//     },
//     logout: function(){
//         console.log('the user logged out');
//     },
//     logBlogs: function(){
//         //console.log(this.blogs);
//         console.log('this user has written the following bolgs:');
//         this.blogs.forEach(blog => {
//             console.log(blog);
//         })
//     }
// };


// console.log(user);
// console.log(user.name);
// console.log(user.age);
// console.log(user['email']);

// user.logBlogs();
// console.log(this);


// // math objects

// console.log(Math);
// console.log(Math.PI);
// console.log(Math.E);

// const area = 7.7;
// console.log(Math.round(area));
// console.log(Math.floor(area));
// console.log(Math.ceil(area));
// console.log(Math.trunc(area));

// //random numbers

// const random = Math.random();
// console.log(random);

// /* symbol : use with objects

// primitive types :- numbers , strings , booleans , null , undefined , symbols
// refrence types :- all types of objects , objects literals , arrays , function ,dates , all other objects; */

// // primitive types of objects is store in stack 
// // refrence types of objects is store in heap

// // // primitive values

// let scoreOne = 50;
// let scoreTwo = scoreOne;
// console.log(`scoreOne: ${scoreOne}` , `scoreTwo: ${scoreTwo}`);

// // if we change scoreOne
// scoreOne = 100;
// console.log(`scoreOne: ${scoreOne}` , `scoreTwo: ${scoreTwo}`);

// // reference values

// const userOne = { name: 'niraj', age:21};
// const userTwo = userOne;
// console.log(userOne,userTwo);

// userOne.age = 30;
// console.log(userOne,userTwo);

///////// interacting with a browser

//DOM:- document object model

/*const para = document.querySelector('p');
console.log(para); */

// const para = document.querySelector('.error');
// console.log(para);

// const myage = 21;
// console.log(typeof(myage));







// thapa techanical -- javascript   

// ARRAY 
// FOR LOOP 

// var friends = ['niraj' ,'deepak', 'khushboo', 'dheeraj', 'dillip'];

// for (let elements of friends){
//     console.log(elements);
// }
 
// const myfriend = ['motka', 'shera', 'niraj', 'neha'];
// console.log(myfriend);
// for(let i=0; i<myfriend.length; i++){
//     console.log(myfriend[i]);
// }
// console.log(myfriend[2]);

// // FOR IN LOOP :- it's provide indexing in loop 

// var friends = ['niraj' ,'deepak', 'khushboo', 'dheeraj', 'dillip'];

// for(let elements in friends){
//     console.log(elements);
// }

// //FOR OF LOOP :- it's provide indexing name(element) in array 

// for (let elements of friends){
//     console.log(elements);
// }



// 4 ARRAY SUBSECTION 4 :- PERFORM CRUD
// Array.prototype.push()
// the push() method adds one or more elements to the 
// end of an array and returns the new length of the array;


// const animals = ['pigs', 'cow', 'dogs', 'goats', 'sheep'];

// animals.push('cats');
// for(let i=0; i<animals.length; i++){
//     console.log(animals[i]);
// }

// Array.prototype.unshift()
// the unshift() method andds one or more elements to the beginning of an array and returns the new length of the array;


// const animals = ['pigs', 'cow', 'dogs', 'goats', 'sheep'];

// animals.unshift('cats');
// for(let i=0; i<animals.length; i++){
//     console.log(animals[i]);
// }

//array.prototype.pop() :- remove elements to the end  in array 
//array.prototype.shift() :- remove elements to beginning of an array;

/// /// // splice method  /// /// ////\

// const animals = ['pigs', 'cow', 'dogs', 'goats', 'sheep'];
// const newanimals = animals.splice(3,0, "cats");
// console.log(animals);

///output :-[ 'pigs', 'cow', 'dogs', 'cats', 'goats', 'sheep' ]

///// UPDATE ELEMENTS //////

// const animals = ['pigs', 'cow', 'dogs', 'goats', 'sheep'];

// const updateanimals = animals.splice(1,1,"cows");
// console.log(animals);
//now we update cow to cows;

////// INDEXING AND DELETE BY USE SPLICE METHOD //////

// const months =['jan', 'feb', 'mar', 'apr', 'may','june','july'];

// const indexOfmonths = months.indexOf('apr');

// if(indexOfmonths != -1){
//     const updatemonths = months.splice(indexOfmonths , 1);
//     console.log(months);
//     console.log(updatemonths);

// }
// else {
//     console.log('No such data found');
// }

// output:-  [ 'jan', 'feb', 'mar', 'may', 'june', 'july' ]
// [ 'apr' ]

////////******** Array subsection 4 :- MAP and Reduce method *****************/////////////

//array.prototype.map()
//let newarray = arr.map(callback(currentvalue[,index[,array]]))
// return element for newarray, after executing something 
// }[, thisArg]};
//Return a new array containing the results of calling a 
//function on every elements in this array;

// const array1 = [1, 2, 5, 7, 16, 25];
// if we print all < 7 

// let newArr = array1.map((currentElement , index , arr) =>{
//     return currentElement > 7;
// }
// )
// console.log(newArr);
////output :- [ false, false, false, false, true, true ]

// let newArr = array1.map((currentElement, index, arr) => {
//     return `Index no = ${index} and the value is ${currentElement} belong to ${arr}`
// })
// console.log(newArr);

// output :- [
//   'Index no = 0 and the value is 1 belong to 1,2,5,7,16,25',
//   'Index no = 1 and the value is 2 belong to 1,2,5,7,16,25',
//   'Index no = 2 and the value is 5 belong to 1,2,5,7,16,25',
//   'Index no = 3 and the value is 7 belong to 1,2,5,7,16,25',
//   'Index no = 4 and the value is 16 belong to 1,2,5,7,16,25',
//   'Index no = 5 and the value is 25 belong to 1,2,5,7,16,25'
// ]

// forEach((currentElement, index, arr)) == output (undefiend);

// NOTE :- IT Return new array without mutating the orignal array
// INTERVIEW Q  :- WHAT IS DIFF B\W MAP() AND forEach(); 
// both is returuing value but forEach() mehtod return undefind and map() return new array with the transformed elements;



//////// REDUCE METHOD //////////////////////////////

//flatten an array means to convert the 3rd or 2nd array into a single dimensional array

// the reduce() method executes a reducer function (that you provide)
// on each element of the array. resulting in single output value;;

// the reducer fucion takes four argumensts;

//accumulator  :- simple me jama karna savi int ko given array
//current value
//current index
//source array

// const array1 = [1, 2, 5, 7, 16, 25];

// let sum = array1.reduce((accumulator,currentElement,index,arr) =>
// {
//     return accumulator += currentElement;
// }//if we add sum extra int then we add here and put :- 8
// )
// console.log(sum);
//output :- 56; , 64;




///// HOW TO FATTEN AN ARRAY ///////
//converting  2nd and 2d array into one dimensional array

// const  arr = [['xone_1', 'xone_2'],
// ['xone_3', 'xone_4'],
// ['xone_5', 'xone_6'], 
// ['xone_7', 'xone_8']];

// let flatArr = arr.reduce((accumulator,currentElement)=>{
//     return accumulator.concat(currentElement);
// }
// )
// console.log(flatArr);
// //output [
//   'xone_1', 'xone_2',
//   'xone_3', 'xone_4',
//   'xone_5', 'xone_6',
//   'xone_7', 'xone_8' 
// ]

////////////////// STRING ///////////////////////////////////////////////////////////////

/*************Section 7 :- string in javascript *********/
//A javascript string is zero or more characters written inside quotes.
//javascript strings are used for storing and manipulating text.
// You can use single or double quotes;
//strings can be created as primitives;
//from string literals , or as objects , using the string() constructor;

//let  myName = 'Niraj kumar';
// const ytName = new string("Niraj Tech");

//console.log(myName);
// console.log(ytName);

//find length
//console.log(myName.length); //11

/// Finding  stirng in string ///
//string.prtotype.indexof(searchvalue [,from index])
//the indexof() method returns the index of (the position of ) the first 
// occurrence of specified text in string;

//console.log(myName.indexOf("kumar"));
// PS E:\JavaScript - Novice to Ninja\chapter> node sandbox.js
// Niraj kumar
// 11
// 6

//// Extracting string parts ////

// There are 3 method for extracting a part of a string;
// 1. slice(start,end)
//2.substring(start,end)
//3.substr(start,length);
// the slice() method is extarct a part of a stirng and returns the extracted part in a new stirng 
 
// var str = 'Apple ,banana, kiwi, raj, kumar';

// var str1 = str.slice(5,9);
// console.log(str1);
// var str2  = str.substring(7,13);
// console.log(str2);
// var str3 = str.substring(0,5);
// console.log(str3);


/// Replacing String content() //

// string.prototype.replace(searchfor, replacewith)
// the replace() method replaces a spedified value 
// with another value in a string

// let myBioData = 'I an Niraj Kumar ';

///point to rem
//1. the replace() method does not change the stirng it is called on. it returns a new string .
//2. by default, the replace () nethod replace only the first match

// let replacemyBioData = myBioData.replace('Niraj' , 'Khushboo');
// console.log(replacemyBioData);

// function myfunction(){ 
//     var t = new Date();
//     t.setHours(5);
//     document.getElementById("demo")
// }



/////////////////       DOM       /////////////////////////

//DOM in javascript
//dom is basically DOCUMENT OBJECT MODEL 
//WE USE FOR DOM की मदद से आप सभी html एलेमेंट्स (tags) को access और change कर सकते है · DOM की मदद से सभी html ... render to html page to excess;
const myfunction = () =>
            {
                console.log(document.getElementById('demo').innerHTML ="this is my name");

            }
// document.queryselector().innerHTML 
//use as same but जबकि querySelectorAll document में present सभी matched element की 
//NodeList return करता है। इनके अलावा भी elements को select करने के तरीके है , 
//आप किसी भी Element console में print कराकर आसानी से सभी functions बारे में जान सकते हैं। 
//I Hope अब आप समझ गए होंगे कि , DOM Elements को कैसे access करते हैं।


////////////////// EVENTS //////////////////////////////////////

// EVENTS IN JAVASCRIPT;
// 4 way of writing events in javascipt
// HTML events are 'thing' that happens to HTML elements;
// when javascript is used in html pages , javascript can 'react' on those events;
/// 
//here are some example of htnl events

// an html web page has finished loading 
//an html input field was changed 
//an html button was clicked 

// html allows event handler attributes , with javascript code, to be added to html element



// 4.way 
//1.using inline events alert();
// 2.by calling a function (we already seem and most common way of writing)
//3. using inline events (html onclick ="" property and element.onclick)  //overight kar deta hai 
//4.using event listeners (addeventlistener and IE's attachevent);    fun ke ander fun call kar ke events ko karte hai     //multi time call  alert kar sakta hai uske baad console bhi kar deta hai so it is best;


//// onchange()' :-






