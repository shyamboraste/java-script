// if else
const temperature = 41

if(temperature > 50) {
    // console.log("temprature is greter than 50");
}else {
    // console.log("temprature is less than 50");
}

//           operator
// < , > , <= , >= , == , != , ===

const score = 200;

if (score == 200){
    let power = "super";
    // console.log(`user power : ${power}`);
}


const balance = 1000

// this is not correct syntax for writng if statement prefer to above code syntax
if(balance > 500) console.log("hellow"),console.log("by")


// nested if else 

if(balance < 30000){
    // console.log("less than 30000")
}else if(balance < 2000){
    // console.log("less than 2000")
}else if(balance < 500){
    // console.log("less than the 500")
}else{
    // console.log("enter valid amount")
}

const isuserloggedin = true;
const debitcart = false;
const loggedinfromgoogle = false;
const loggedinfromemail = true;

// using && operator is ckech the all condition if all condition are right then execute the code
if(isuserloggedin && debitcart)
{
    // console.log("welcome user1")
}
// output : blank


// using the || operator is check the condition if the at least one condition are true then execute the following the code
if(loggedinfromgoogle || loggedinfromemail)
{
    // console.log("welcome user2")
}
// output: welcome user2