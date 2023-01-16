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
// let niraj = ['asnika' , 'patel' , 'luvly'];
// console.log(niraj);
// console.log(niraj[3]);
// console.log(niraj[2]);

// let ages = [ 20 , 21 , 22 , 23];
// console.log(ages[2]);

// let random = ['niraj', 'luvly' , 21 , 19];
// console.log(random);

// //length of array
// console.log(niraj.length);

// //array methods
// let results = niraj.join('-');
// console.log(results);

// //indexing 
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



// if statements
const age = 25;

if(age > 20){
    console.log('you are over 20 years old');
}

const password = 'p@ss';
if(password.length >= 8){
    console.log('that password is long enough !');
}
else {
    console.log('password is not long enough');
}

// for loops

for(let i=0; i<5; i++){
    //console.log(i);
    console.log('in loop: ', i);
}
console.log('loop finished');

const names = ['asnika' , 'patel' , 'luvly'];
for(let i=0;  i<names.length; i++){
    console.log(names[i]);
}

// while loops

let i = 0;

while(i<5){
    console.log('in loop:' , i);
    i++;
}

const namess = ['luvly' , 'asnika', 'patel'];
let j = 0;
while(j<namess.length){
    console.log(namess[j]);
    j++;
}

// do while loops

let k = 3;
do{
    console.log('val of k is:' , k);
    k++;
} while(k<5);


// logical operators - OR || and AND &&

const password2 = 'p@ssword1234';

if(password2.length >= 12 && password2.includes('@')){
    console.log('that password is mighty strong');
}
else if(password2.length >= 8 || password2.includes('@') && password2.length >=5){
    console.log('that password is strong enough !');
}
else {
    console.log('password is not strong enough');
}

// logical NOT (!)

/* switch boolean value 
 console.log(!ture);
 console.log(!false);
 */
 
let user = false;
if(!user){
    console.log('that is niraj');

}

//break and continue;

const scores = [50, 25, 0, 30, 100, 20, 10];

for(let i=0; i<scores.length; i++){
    console.log('your score: ', scores[i]);

    if(scores[i] == 0){
        continue;
    }

    if(scores[i] == 100){
        console.log('congrats, you got the top score');
        break;
    }
}

// switch statements
const grade = 'D';

switch(grade){
    case 'A':
        console.log('you got an A!');
    case 'B':
        console.log('you got an !B');
    case 'C':
        console.log('you got an C!');
    case 'D':
        console.log('you got an D!');
    case 'E':
        console.log('you got an E!');
    default:
        console.log('not a valid grade');

}

// variables  & block scope

let marks = 30;

if(true){
    let marks = 40;
    let name = 'niraj';
    console.log('inside 1st code block: ' , marks , name);

    if(true){
        let marks = 50;
        console.log('inside 2nd code block: ' , marks);

    }
}

console.log('outside code block: ', marks , name);
