//  for of loop 

// ["","",""]
//[{},{},{}]

const arr = [1,2,3,4,5,6]  // through array
for (const key of arr) {
    // console.log(key) 
} 
// output : 
// 1
// 2
// 3
// 4
// 5
// 6


const greetings = "hellow world!";  // through string
for(const greet of greetings){
    // console.log(`each char is ${greet}`)
}
// output :
// each char is h
// each char is e
// each char is l
// each char is l
// each char is o
// each char is w
// each char is  
// each char is w
// each char is o
// each char is r
// each char is l
// each char is d
// each char is !

//=============

// MAPS

// MAP  is known as unique values it not print the duplicates values 
const map = new Map()
map.set('IN',"indian")
map.set('usa',"united state of america")
map.set('FR',"france") 
map.set('IN',"indian")

// console.log(map)
//output
//  Map(3) {
//     'IN' => 'indian',
//     'usa' => 'united state of america',
//     'FR' => 'france'
//   }

// applying loop in map
for(const key of map){
    // console.log(key)
}
// output :
// [ 'IN', 'indian' ]
// [ 'usa', 'united state of america' ]
// [ 'FR', 'france' ]

for(const [key, value] of map){
    // console.log(key, ':-' , value)
}
//output :
// IN :- indian
// usa :- united state of america
// FR :- france




const myObject = {
    'game1': 'carrom',  //  game1 : 'carrom;
    'game2': 'pubg'     // gaem2 : 'pubg'           aslo we write the without quets
}
for (const [game , gamename] of myObject) {
    console.log(game , ':-' , gamename);
    
}
//output : 
// myObject is not iterable

// because the object is not iteratable so the for of loop is not working on object


// NOTE :

// for of loop is using the ARRAY , MAPS better not in object 
// object pan iteratable astat pan tyachya methods veglya ahe tyla iteratable banavanyasathi