// THIS
// THIS keyword refers to the current context
const user = {
    usrename: "shyam",
    price: 9999,

    welcomeMessage: function() {
        console.log(`${this.usrename} , welcome to website`)
        console.log(this)
    }
}
user.welcomeMessage()  // shyam , welcome to website
 // you are able to change context value 
user.usrename = "adi";
user.welcomeMessage()  // output : adi ,welcome to website 

console.log(this)  // output : {}


function chai(){
    let username = " shyam"
    console.log(this)
}
chai()

const chai = function(){
    let username = " shyam"
    console.log(this.username)
}
chai() // output : undedined



//             ARROW FUNCTION

const chai = ()  => {
        let username = " shyam"
        console.log(this);
    }
    chai()
// output : {}


const chai = ()  => {
    let username = " shyam"
    console.log(this.username);
}
chai()
// output : undefined



  const addtwo =  (num1, num2) => {
    return num1 + num2
  }
console.log(addtwo(3,5))       // output : 8
// if you have used curly brases so you have to write the return keyword


// second syntax without using curly brases and return keyword
const addtwo =  (num1, num2) =>  num1 + num2
console.log(addtwo(3,5))       // output : 8

// thired syntax raping the values to the parenthesis ()
const addtwo =  (num1, num2) =>  (num1 + num2)
console.log(addtwo(3,5))


//if you have return the object you can create a objetc and rap the object into parenethesis
const addtwo =  (num1, num2) =>( {username: "shyam"})
console.log(addtwo(3,5)) 


const addtwo =  (num1, num2) => {username: "shyam"}  // output : undefined
console.log(addtwo(3,5)) 




// const myarray = [2,4,3,6,7,4,6]

// myarray.forEach(() => ())
