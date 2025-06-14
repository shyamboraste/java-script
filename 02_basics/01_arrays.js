// array

// Description

// In JavaScript, arrays aren't primitives but are instead Array objects with the following core characteristics:
// JavaScript arrays are resizable and can contain a mix of different data types. (When those characteristics are undesirable, use typed arrays instead.)
// JavaScript arrays are not associative arrays and so, array elements cannot be accessed using arbitrary strings as indexes, but must be accessed using nonnegative integers (or their respective string form) as indexes.
// JavaScript arrays are zero-indexed: the first element of an array is at index 0, the second is at index 1, and so on — and the last element is at the value of the array's length property minus 1.
// JavaScript array-copy operations create shallow copies. (All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies).


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


// slice, splice
// Slice:
// The slice() method returns selected elements in an array, as a new array.
// The slice() method selects from a given start, up to a (not inclusive) given end.
// The slice() method does not change the original array.

// splice():
// The splice() method adds and/or removes array elements.
// The splice() method overwrites the original array.

console.log("A ", myArr);       // A  [ 0, 1, 2, 3, 4, 5 ] original array
const myn1 = myArr.slice(1, 3);    
console.log(myn1);                 // [ 1, 2 ]
console.log("B ", myArr);          //  B  [ 0, 1, 2, 3, 4, 5 ] original array
const myn2 = myArr.splice(1, 3);
console.log("C ", myArr);           // C  [ 0, 4, 5 ]
console.log(myn2);                  // [ 1, 2, 3 ]
