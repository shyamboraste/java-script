const mynumber = [1,2,3,4,5,6,7,8,9,10]

const newnum = mynumber.map( (num) => {return num + 10} )
// const newnum = mynumber.map( (num) => num + 10 )
// console.log(newnum)
//output : 
//     [
//       11, 12, 13, 14, 15,
//       16, 17, 18, 19, 20
//     ]


// chaining

const number = mynumber
                 .map( (num) => num *10 )
                 .map( (num) => num + 1 )
                 .filter( (num) => num >= 40 )
console.log(number)
// output : 
//  [
//   41, 51,  61, 71,
//   81, 91, 101
//  ]

    

    