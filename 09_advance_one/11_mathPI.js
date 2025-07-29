const descripter = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(descripter);
// output : 
// {
//     value: 3.141592653589793,
//     writable: false,      => isChangeValue : false
//     enumerable: false,    => iteratable : false
//     configurable: false   => isdelete : flase
//   }


// example 
// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);
// the value of PI in not changeble it is a constant value and there properties are not writable


// declaring a object
// this method is applying on my created object
const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,
    orderChai: function(){
        console.log("chai nhi bni");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));
// ouput:
// {
//     value: 'ginger chai',
//     writable: true,
//     enumerable: true,
//     configurable: true
//   }


Object.defineProperty(chai, 'name', {   //defineProperty() give you the control of your object proprerties
    enumerable: false,
    
})
console.log(Object.getOwnPropertyDescriptor(chai, "name"));
//outptu :
// {
//   value: 'ginger chai',
//   writable: false,
//   enumerable: false,
//   configurable: true
// }


// =================================
//applying loop
for (let [key, value] of Object.entries(chai)) {  //object is not iteratable but you can use entries() to return the value and key into the object
    if (typeof value !== 'function') {      
        
        console.log(`${key} : ${value}`);
    }
}