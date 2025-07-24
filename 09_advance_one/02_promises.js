
// The Promise object represents the eventual completion (or failure) 
// of an asynchronous operation and its resulting value.


// a promis is one of these state

// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
// rejected: meaning that the operation failed.

const Promiseone = new Promise(function(resolve , reject){    
    //do an async task
    //db calls , cryptography , network
    setTimeout(() => {
        console.log('asyn task is complete');
        resolve() 
    }, 1000);
})
Promiseone.then(function() {          // return all promise one values 
    console.log("promise consumed");
 })


 // seoncd way to create promise

 // without stroring promise in variable
new Promise(function(resolve , reject){
    //do an async task
    //db calls , cryptography , network
    setTimeout(() => {
        console.log('asyn task  2 is complete');
        resolve()
    }, 1000);
}).then(function() {
    console.log("promise consumed");
})


// 
const promisethree = new Promise(function(resolve , reject){
    setTimeout(function(){
        resolve({username : "shaym" , email: "shamboraste6@gmail.com"})
              // also passing function ,object,array in the resolve()
    },1000)
})
promisethree.then(function(user){
    console.log(user)
})

// promis four 
//file acces kari to kuch print karo na ho to kuch print karo
const promisfour = new Promise(function(resolve , reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username : "sham" , pass: "123"})   //resolve meanse correct and exicutable
        }else{
            reject('ERROR : something went wrong')       // opposite to resolve
        }
    },1000)
})
promisfour.then((user) => {
       console.log(user);
       return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error) {
    console.log(error)
}).finally(() => console.log("the promise is either resolve or reject"))


// promis five

const promisefive =  new Promise(function(resolve , reject) {
    setTimeout(function(){
        let error = true
        if(!error) {
            resolve({username : "shaym ", pass: " 123"})
        }else{
            reject('ERROR:js went wrong')
        }
    },1000)
})
// using asyn / await 
// 1 .functionality => he waiting for executing the process and the process is execute then move next process
//   if process have error then it stope and first show the error
// example :- databse connection huva hi nahi hain to mujhe age jana hi nahi
// await :- waiting for execute the process 
async function consumepromise(){
    try {
        const response = await promisefive
    console.log(response)
}catch(error){
    console.log(error);
}
}
consumepromise()
// try catch block 
//          try{

//          }catch(){
//          }
// apan varti error variable declare kelela ahe and tyachi value pan true ahe mag try madhe apli 
//     process takaychi ani catch madhe apla error 
// it is some to if else statement


// example for async / await 
async function getallusers() {
    try {
     const response = await fetch('https://api.github.com/users')

    const data = await response.json()
    console.log(data)
} catch(error){
    console.log("E:",error);
}
}
getallusers()


// using .then
fetch('https://api.github.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data)
})
.catch((error) => console.log(error))




