// js is all about object 

// let myname = "shaym         ";
// let name = "boraste          ";

// console.log(myname.trueLength);

// trueLenght  function defines the actual lenght of string and it does not count empty spaces 
// the importance is it applied on our whole script
// ================================

let myHeroes = ["thor" , "spiderman"]   // declaring a array 

let heroPower = {                       // declaring object 
    thor : "hammer",
    spiderman : "sling",

    getspidypower: function(){
        console.log(`spidy power is ${this.spiderman}`)
    }
}



Object.prototype.hitesh = function(){           
    console.log(`shyam is present in all object`);
}
// i create a userdefind method hitesh and this method is acces on all object . remeber the js is all about object

heroPower.hitesh()  //  with object 
myHeroes.hitesh()   // with array
// output := 
          //shyam is present in all object
          //shyam is present in all object




Array.prototype.sayHitesh = function(){
    console.log(`shyam say hellow `);
}
// applying this power on array

myHeroes.sayHitesh()   // with array
// output : shyam say hellow

// |  heroPower.sayHitesh() |    it not working on object





// INHERITANCE
// Inheritance means one object can access the properties and methods of another object.

// older syntax
const user = {
    name: "shaym"
}
const Teacher = {
    makevideo : true
}

const TeachingSupport = {
    inavailabe : false
}
const Tasupport = {
    MakeAssignment : 'js assignment',
    fulltime : true,
    __proto__:TeachingSupport
}

Teacher.__proto__ = user


//      modern sysntax 
Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherUsername = "sham";

String.prototype.trueLenght = function() {
    console.log(`${this}`)
    console.log(`true lenght is  ${this.trim().length}`)

}
anotherUsername.trueLenght()


// see the image i provige with name "related_to_3_prototype.png"