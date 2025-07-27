class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`username is ${this.username}`);
    }
}

class Teacher extends User{          //The extends keyword is used to create a child class (subclass) from a parent class (superclass). 
    constructor(username,email,password){
        super(username)       //super:= The super keyword is used in classes and helps child (derived) classes to access properties and methods of the parent (base) class.  
        this.email = email
        this.password = password
    }
    addCource(){
        console.log(`a new cource was added by ${this.username}`);
    }
}

const chai = new Teacher("shyam","sdjjk@gmail.com","12354")
const masalachai = new User("masalachai")

chai.addCource()
masalachai.logMe()

console.log(chai === masalachai);
//output := false

console.log(chai instanceof User); // The instanceof keyword is used to check whether an object is an instance of a particular class or constructor function.
//output := true