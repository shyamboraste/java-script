class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`username ${this.username}`);
    }
    static createid(){
        return `123`
    }
    // static:= static methods or properties are used for functionality that is shared by all instances, or that does not need object-specific data.
}

const hitesh = new User("hitesh")

// console.log(hitesh.createid())
//output := 123

class Teacher extends User{
    constructor(username , email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone","sjdhci@gmail.com")
iphone.logMe()
//output:= username iphone

console.log(iphone.createid())
//output := give an error




