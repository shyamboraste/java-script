// ES6

class User{
    constructor(username,email,password){  //when you use the new keyword the constructure method is automatically called
    this.username = username;
    this.email = email;
    this.password = password;
}

encrytPassword(){
    return `${this.password}abc`
}
changeUsername(){
    return `${this.username.toUpperCase()}`
}
}
const chai = new User("shyam" , "shyamboraste6@gmail.com" , "123456")

console.log(chai.encrytPassword())
console.log(chai.changeUsername())
//output := 123456abc  
//          SHYAM


// ======================================
// dehind the scene
// without class syntax 

function user(username, email,password){
    this.username = username;
    this.email = email;
    this.password = password;
}
user.prototype.encrytpassword = function(){
    return `${this.password}abc`
}
user.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const sham = new user("chai" , "jsdhed@gmail.com" , "123456")

console.log(sham.encrytpassword());
console.log(sham.changeUsername());
//output := 123456abc  
//          SHYAM

