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
