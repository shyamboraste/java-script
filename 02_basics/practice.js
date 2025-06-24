const myArr = [0, 1, 2, 3, 4, 5];
// const myHeors = ["shaktiman", "naagraj"];

console.log(myArr);    //[ 0, 1, 2, 3, 4, 5 ]
console.log(myHeors); //[ 'shaktiman', 'naagraj' ]


const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[1]);  // 1

// Array methods

// myArr.push(6);  insert element to the end of the array
// myArr.push(7);
// myArr.pop();   remove element to the end of the array

// myArr.unshift(9);  insert element to the first
// myArr.shift();    remove first unshift element 
 
 console.log(myArr.includes(9)); // include()fun check the value is present in the array or not if present it returns true otherwise returns false
 console.log(myArr.indexOf(3)); // the 3 is stored on the which index number 

// const newArr = myArr.join();
// console.log(myArr);
// console.log(newArr); // 1,2,3,4,... in the string format

// singleton  
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh",
    "full name": "sham boraste",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "shyam@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "shyam@chatgpt.com";
// Object.freeze(JsUser);
JsUser.email = "shyam@microsoft.com";
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
