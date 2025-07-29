const User = {
    _email : "sjdj@.com",
    _password : "abc",

  get email(){
    return this._email.toUpperCase()
  },

  set email(value){
    this._email = value
  }
}

const shyam = Object.create(User)
console.log(shyam.email);
console.log(shyam.password);




