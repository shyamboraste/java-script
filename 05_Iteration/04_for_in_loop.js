// for in loop 

// for in loop in object

const myObject = {
    js : "javascript",
    cpp : "c++",
    rb : "ruby",
    swift : "swift by apple"
}

for (const key in myObject) {
    // console.log(myObject[key])
}
// output :
// javascript
// c++
// ruby
// swift by apple

//one or way

for (const key in myObject) {
    // console.log(`${key} shortcut for ${myObject[key]}`)
}
// output :
// js shortcut for javascript
// cpp shortcut for c++
// rb shortcut for ruby
// swift shortcut for swift by apple


//===============


// for in loop in array

const programming = ["js","python","sql","c","php"]

for(const key in programming){
    // console.log(key)
}
//output 
// 0
// 1
// 2
// 3
// 4

// NOTE:
// for of loop provide the key with there values but for in  loop not provide it values only provide key in number
// but key value are accesibe i write it below 

for(const key in programming){
    // console.log(programming[key])
}
// output :
// js
// pythoc
// sql
// c
// php

//==========
// FOR IN LOOP IN MAPS
const map = new Map()
map.set('S',"shyam")
map.set('A',"akash")
map.set('A',"aditya")


for(const key in map){
    console.log(key)
}

// NOTE : 
// in for in loop the MAP is not iteratable also it not iteratable in other so that why he is not giving out put 
