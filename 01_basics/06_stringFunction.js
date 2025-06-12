const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value"); this is a old syntax 
// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hitesh-hc-com')
// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));    // it shows the which character is stored in the index of 2
console.log(gameName.indexOf('t')); // indexof() is use to find the index of specific  character

const newString = gameName.substring(0, 4)
console.log(newString);   // it returns the character stored in the 0 to 4 index value 

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);  // it start with the back side of the string with - sign and returns the specific character to that range 

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim()); // trim() function is used to remove the extra spaces 

const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20', '-')) // output : "https://hitesh.com/hitesh-choudhary"
console.log(url.includes('sundar')) // ye check karta hain ki url main includes() function main jo pass kiya hain vo uss string main hain ya  nahi

console.log(gameName.split('-'));