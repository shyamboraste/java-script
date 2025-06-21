const username ="shamboraste";

if(username){
    // console.log//"got user name")
}else{
    // console.log("don't have username")
}

// falsy values
// false , 0 , -0 ,bigint 0n , "" , null , undefiend , NaN

//truthy values 
// "0" , "  " , 'false' , [] , {} , function(){}

if(username.length === 0){
    console.log("array is empty");
}


const emptyobj = {} 

if(Object.keys(emptyobj).length === 0){
    console.log("object is empty")
}
// output : object is empty


// nullish coalescing operator (??): null , undefined

val = 5 ?? 19
// output : 5
val1 = null ?? 10;
// output : 10
val2 = undefined ?? 15 ?? 47 ?? 57; 
// val2 = undefined ?? 15;
// output : 15

console.log(val)
console.log(val1)
console.log(val2)


// terniary operator

// condition ? true : false

const iceteaprice = 100;

iceteaprice <= 80 ? console.log("less than 80")  : console.log("more than 80")