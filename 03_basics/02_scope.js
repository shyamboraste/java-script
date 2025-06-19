// let a = 20;
// const b = 40;
// var c = 38;


if(true){
    let a = 30;
    const b = 40;
    var c = 50;
    console.log("inner a : " , a);
}
// let ,const,var is block of code this code is only valide for that block but the problem is var 
// var not fallow the rule // var ha print kelya nantar pan tich value provide kartoy ye ani baher
// dusra var jari declare kela tari to if bloc madhalich value print karto tyamule let ani const 
// navin js madhe ale ahe 


// console.log(a);  // a is not defined
// console.log(b);  // b is not defined
// console.log(c);  // output : 50

   let a = 555;
   console.log(a);


//             new vedio


//    function one(){
//     const username = "shyam";

//        function two(){
//         const website = "youtube";
//         console.log(username);
//        }
//     //    console.log(website);

//        two();
//    }
// one();


if(true){
    const username = "shyam";

    if(username === "shyam"){
         const website = "youtube";
         console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);


// =====================interasting case======================

console.log(addone(5));   // first console then declaration

function addone(num){    //  function execute because functin is not store in any variable
    return num + 1;
}
// output : 5 


console.log(addtwo(10)); // first console then declare the function but function stored in the variable so it is not execute 

const myname = function addtwo(num){
    return num + 5;
}
// output : addtwo is not defined  




