 console.log(2 > 1);  // output : true
 console.log(2 >= 1); // output : true
 console.log(2 < 1);  // output : false
 console.log(2 == 1); // output : false
 console.log(2 != 1); // output : true


 console.log("2" > 1);  // output : true
 console.log("02" > 1); // output : true

console.log(null > 0);  // output : false
console.log(null == 0); // output : false
console.log(null >= 0); // output : true
//the reason is that an equality checks == and comparison > < >= <= work differently 
// comaparison convert null to a number ,treating it as 0.
// thats why (3)null >= 0 is true and | (1)null > 0 is false.
// comparision operator convert the given value to number

console.log(undefined == 0); // output : false
console.log(undefined < 0);  // output : false
console.log(undefined > 0);  // output : false

// ===
// note : 
// (=) equal sign only check the value is equal or not
//(==) double equal sign changing the value to previously alllocated to new 
//(===) triple equal sign strickly check the value and datatype 

console.log("2" === 2);// output : false





