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