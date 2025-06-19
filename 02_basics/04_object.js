const tinderUser1 = new Object();  // singleton object
const tinderUser = {};             // non singleton object

console.log(tinderUser1);  // output : {}
console.log(tinderUser);  // output : {}

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

//object in object

const regularUser = {
    name : "shyam",
    email: "'shamboraste@gmail.com'",
    fullname: {
        userfullname: {
            firstname: "shyam",
            lastname: "boraste"
        }
    }
}
console.log(regularUser)
// output : 
//  {
//     name: 'shyam',
//     email: 'shamboraste@gmail.com',
//     fullname: { userfullname: { firstname: 'shyam', lastname: 'boraste' } }
//   }

// console.log(regularUser.fullname.userfullname.firstname);
// output : shyam
//console.log(regularUser.userfullname.lastname)
//output : boraste


// combination of object

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

// types of combiantion methods 
// first is

// const obj4 = { obj1, obj2 };

// const obj4 = Object.assign(obj1, obj2, obj3);
// console.log(obj4); 
//  // abhi iss case main sari values obj 1 main store hogi
// obj1 is target and obj2,obj3 is source

//// const obj4 = Object.assign({}, obj1 , obj2 , obj3);
// console.log(obj4);  // abhi iss case main sari values empty object main store hui hain
// empty {} is target and other obj1,obj2,obj3 are source


// second type

const obj4 = {...obj1, ...obj2, ...obj3}
console.log(obj4);     // use for spred the objects


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

console.log(tinderUser);

console.log(Object.keys(tinderUser));
//outptu : 
// [ 'Id', 'name', 'isLoggedIn' ] 

console.log(Object.values(tinderUser));
//outptu : 
//[ '1235', 'sam', false ] 

console.log(Object.entries(tinderUser)); 
//outptu : 
//[ [ 'Id', '1235' ], [ 'name', 'sam' ], [ 'isLoggedIn', false ] ]



// all tinderUser keys are convert into array and then it easy to applying the loops



console.log(tinderUser.hasOwnProperty('isLoggedIn'));
// output : true
// use for finding the passed property have present or not 


// you also gain info of objects you go the google browser and open inspect then click consle
//  and past the following object (const obj1 = {1 : "a" , 2 : "b"};) then enter obj1 and you 
// see prototype than click them


const course = {
    coursename : " javascript",
    price : 9999,
    courseInstructor : "hiteshsir"
}

// course.courseInstructor

// const {courseInstructor} = course
console.log(courseInstructor)
// output : hiteshsir

//you aslo change the key name using the below syntax
const {courseInstructor: instructor} = course
console.log(instructor)
// output : hiteshsir



//=========== destructor object in react=========

const navbar = () => {   //const navabr = ({company}) => ()   use for destructing the object

}

navbar(company = "hiteshsir")


// json
// in form of json
{
   " name" : "shyam",
   " coursename ": "javascript",
   " price ": "free"
}
// also key and values are string 

// in form of array also
[
    {},
    {},
    {}
]


// random user me api link : https://randomuser.me/
// study for api using json formator website link : https://jsonformatter.org/

