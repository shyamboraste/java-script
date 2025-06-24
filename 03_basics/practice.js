function sayMyname() {
console.log("s");
console.log("h");
console.log("y");
console.log("a");
console.log("m");
}

// sayMyname    // it is just a reference it gives output  empty
sayMyname();   // output : e e e e e e

function addTwoNumbers(number1, number2){      // (number1 , number2) is called as parameter
    console.log(number1 + number2);
}

addTwoNumbers(3, 5);         // output : 8      // (3 , 5) are colled argument 
addTwoNumbers(3, "5");       // output : 35
addTwoNumbers(3, "a");       // output : 3a
addTwoNumbers(3, null);      // output : 3
addTwoNumbers(3, undefined); // output : NaN


function addTwoNumber(number1, number2){      // (number1 , number2) is called as parameter
// first
    // console.log(number1 + number2);   // output : result : undefined

// second
    // let result = number1 + number2;
    //  console.log("shaym");   
    // return result;         // once write the return keyword and then write code below of the return keyword is not execute 
 
//thired
    return number1 + number2;
}
const result = addTwoNumber(3,4);
console.log("result:", result);    // result: 7


function loginUserMessage(username){
    return '${username} just logged in';
}
console.log(loginUserMessage("shyam"));  // output : shyam just logged in
console.log(loginUserMessage());  // output : undefined just logged in


// function loginUserMessage(username){
function loginUserMessage(username = "shyam"){
    if(!username) {  // second method : username === undefined
         console.log("please enetr username");
         return
    }
    return '${username} just logged in';
}
console.log(loginUserMessage("shyam"));  // undefined just logged in


//===================next vedio ==========================

function calculateCartPrice(num1){
    return num1;
}
console.log(calculateCartPrice(2,4,6));  // output : 2


function calculateCartPrice(...num1) {
      return num1; 
    
    }
    console.log(calculateCartPrice(200 , 400, 500, 2000)); // output : [ 200, 400, 500, 2000 ]
    
    // rest or spred (...num) is also called as rest or spred operator
 

    function calculateCartPrice(val1,val2,...num1){
    return num1
}
console.log(calculateCartPrice(200, 400, 500, 20000))   // output : [ 500, 20000 ]

// first value go to the val1 and second value go to the val2 and other return as output

const user = {
    username: "shyam",
    price: 1999
}

function handleobject(anyobject){
    console.log('username is ${anyobjet.username} and price is ${anyobject.price}');
}

//through object
// handleobject(user)  // output : username is shayam and price is 1999

// you can direct pass the object through arguments , don't need to create any object
handleobject({
    username: "sam",
    price: 399
})

//through array

const myarray = [200, 400, 5000];
function arrayhandling(getarray){
    return getarray[1];
}

// console.log(arrayhandling(myarray))  // output : 400

// you can direct pass the array without creating it
console.log(arrayhandling([200, 400,5000]));

// THIS
// THIS keyword refers to the current context
const user = {
    usrename: "shyam",
    price: 9999,

    welcomeMessage: function() {
        console.log(`${this.usrename} , welcome to website`)
        console.log(this)
    }
}
user.welcomeMessage()  // shyam , welcome to website
 // you are able to change context value 
user.usrename = "adi";
user.welcomeMessage()  // output : adi ,welcome to website 

console.log(this)  // output : {}


function chai(){
    let username = " shyam"
    console.log(this)
}
chai()

const chai = function(){
    let username = " shyam"
    console.log(this.username)
}
chai() // output : undedined



//             ARROW FUNCTION

const chai = ()  => {
        let username = " shyam"
        console.log(this);
    }
    chai()
// output : {}


const chai = ()  => {
    let username = " shyam"
    console.log(this.username);
}
chai()
// output : undefined



  const addtwo =  (num1, num2) => {
    return num1 + num2
  }
console.log(addtwo(3,5))       // output : 8
// if you have used curly brases so you have to write the return keyword


// second syntax without using curly brases and return keyword
const addtwo =  (num1, num2) =>  num1 + num2
console.log(addtwo(3,5))       // output : 8

// thired syntax raping the values to the parenthesis ()
const addtwo =  (num1, num2) =>  (num1 + num2)
console.log(addtwo(3,5))


//if you have return the object you can create a objetc and rap the object into parenethesis
const addtwo =  (num1, num2) =>( {username: "shyam"})
console.log(addtwo(3,5)) 


const addtwo =  (num1, num2) => {username: "shyam"}  // output : undefined
console.log(addtwo(3,5)) 




// const myarray = [2,4,3,6,7,4,6]

// myarray.forEach(() => ())
// immediately invoked function expression (IIFE)

function chai(){
    console.log(`db connected`)
}
chai();


// syntax  =>  (function defination) (call)
(function sham(){
    // named iife
    console.log(`hii guys`);
})  
();

(function java(){
    // named llfe
    console.log(`hellow world`)
})
();

// at the end of iife semicolon is required otherwise next iife is not execute

// iife in arrow function

( (name) => {
    // simple iife/unknown iif
    console.log(`${name} my name is shyam`)
})
("hellow");

// note :
// name iife : which function have there own name is called as name iife
// simple iife : which function have no name is callrd as simple iife
