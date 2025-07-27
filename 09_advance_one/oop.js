const user = {
    username : "shaym",
    loginCount: 8,
    signedin : true,

    getuserdetails : function(){
        console.log("got user details from data base")
        console.log(`username : ${this.username}`)  //without this keyword it gives the error because functional scope
       
    
    console.log(this);
    // output:-
// {
//     username: 'shaym',
//     loginCount: 8,
//     signedin: true,
//     getuserdetails: [Function: getuserdetails]
//   }
//   undefined
    }
}
console.log(user.username)
//output : - shaym

console.log(user.getuserdetails());
// output :=
// got user details from data base
// username : shaym
// undefined

console.log(this);
// output :- {}



// =============================
//       broweser console
//       console.log(this)
//       output := windows 
// ==============================



function User( username ,logincount , isloggedin){
    this.Username = username;           // 
    this.logincount = logincount;
    this.isloggedin = isloggedin;

    this.greeting = function(){
        console.log(`welcome ${this.username}`)
    }

    return this  // implicitly he hyach value return kart jar apan write nahi tar
}

// const userone = User("hitesh",12,true)
// const usertwo = User("chaiourcode",11,false)
// console.log(userone)



const userone = new User("hitesh",12,true)
const usertwo = new User("chaiourcode",11,false)
console.log(userone.constructor)
// // output := [Function: User]
console.log(usertwo)

