//  Primitive DataTypes

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100;        // output : (typeof) number
const scoreValue = 100.3; // output : (typeof) number

const isLoggedIn = false; // output : boolean
const outsideTemp = null; // output : object
let userEmail;            //output : undefind

const id = Symbol('123') // outptu : symbol
const anotherId = Symbol('123')

console.log(id === anotherId);
// above two conditions pass same values but not equal because 
// symbol datatype is used for uniqucky identifying the user like id

const bignumber = 286487418647228n // output : (typeof) BigInt

console.log(typeof bignumber)


//  reference  (non primitive )
// array , object , function

// not primitive return the typeof data is object only
// function return the function output but this is always object function in backend


// array
const heros = ["thanos","ironman","thor"];
//  heros.forEach(hero => {console.log(hero)});


// objet
let sham = {
    name: "shyam",
    age: 33,
    email: "brasteshyam@gamil.com"

}

// function 
let myfunction = function () {
    console.log("hellow world");
}
myfunction();


// documentation
// https://262.ecma-international.org/5.1/#sec-11.4.3

