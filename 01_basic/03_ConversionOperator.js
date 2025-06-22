let score = "33abc"
console.log(score)

console.log(typeof score)
console.log(typeof(score))

//  number conversion
let valueInNumber = Number(score)
console.log(typeof(valueInNumber))
console.log(valueInNumber)

//  "33" easily convert => number
//  "33abc" => NaN (not in number)



//boolean conversion
let isLoggedIn =""
let booleanIsLogged = Boolean(isLoggedIn)
console.log(booleanIsLogged);

//     1 => true ; 0 => false
//     "" => false
//    "shyam" => true


//string conversion
let Sky = 33
let Stringnumber = String(Sky)
console.log(Stringnumber)
console.log(typeof(Stringnumber))

// outptu : (typeof) 33 => string 


// *********************** Operations ***********************

let value = 3
let NegValue = -value
console.log(NegValue);  // output : -3

 console.log(2+2);
 console.log(2-2);
 console.log(2*2);
 console.log(2**3);
 console.log(2/3);
 console.log(2%3);

let str1 = "hello"
let str2 = " shyam"

let str3 = str1 + str2
 console.log(str3);       // output : hellow shyam

 console.log("1" + 2);      //output : 12
 console.log(1 + "2");      //out put : 12
 console.log("1" + 2 + 2);  //output : 122
 console.log(1 + 2 + "2");  // output: 32
 console.log("1"+"2"+3);    //output : 123

 console.log( 3 + 4 * 5 % 3);  // do not write the code in this format it's like complecated use proper parenthesis
 // ex console.log((3 + 4) * (5 % 3))

 console.log(true);   // output : true
 console.log(+true);  //output : 1
 console.log(true+);  //output : 0
 console.log(+"");    //output : 0

let num1, num2, num3

num1 = num2 = num3 = 2 + 2 // it is tricy but code redability goes down

let gameCounter = 100
++gameCounter;
console.log(gameCounter);

//prefix meance first increament ++ ex.++gamecount                     ==> out put : 101
//postfix meance first oprand and then increment++ ex.gamecount++     ==> out put : 101

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion


