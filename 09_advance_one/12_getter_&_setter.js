class User{
     constructor(email , password){
        this.email = email;
        this.password = password
     }

     get email(){    //  
        return this._email.toUpperCase()
     }
     set email(value){           // setter ha value set karat asto tya mule tyat eik parameter pass kel ahe
        this._email = value
     }

    //  get password(){
    //     return this._password.toUpperCase()
    //  }
     get password(){
      return `${this._password}shyam`   //user la password asa disel => 32423shyam
         }

     set password(value){
        this._password = value     // password set like =>32423      
        
     }
}

const shyam = new User("xjjdc@.com","32423")
console.log(shyam.password);
console.log(shyam.email);


// it's a modern syntax


// getter and setter with function   // class ka syntax js main nahi tha tab function or object se hi kam hota tha
// next =====> properties.js