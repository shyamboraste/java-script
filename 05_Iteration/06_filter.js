const coding = ["js","python","ruby","cpp"]

const values = coding.forEach( (item) => {
                // console.log(item)
                // return item
            } )
// console.log(values)
// output : 
// js
// python
// ruby
// cpp
// undefined
// NOTE : foreach loop does not return the values

const mynum = [1,2,3,4,5,6,7,8,9,10]
const newnum = mynum.filter( (num) => { return num > 4})
// const newnum = mynum.filter( (num) => num > 4)
// const newnum = mynum.filter( (num) => (num > 4))
console.log(newnum)
// output : [ 5, 6, 7, 8, 9, 10 ]

// one or way
const newnums = []
mynum.forEach( (num) => {
    if(num > 4){
        newnum.push(num)
    }
} )
// output : [ 5, 6, 7, 8, 9, 10 ]

// example for the purpose of databases 
const books = [
    {
        title: 'book one' , gerne:'finction',publish:1981,edition:'2004'
    },
    {
        title: 'book two' , gerne:'non-finction',publish:1945,edition:'2004'
    },
    {
        title: 'book three' , gerne:'history',publish:2000,edition:'2004'
    },
    {
        title: 'book four' , gerne:'finction',publish:1998,edition:'2004'
    },
    {
        title: 'book five' , gerne:'science',publish:2009,edition:'2004'
    },
    {
        title: 'book six' , gerne:'chemisrty',publish:2004,edition:'2004'
    },
    {
        title: 'book seven' , gerne:'biology',publish:1995,edition:'2004'
    },
    {
        title: 'book eight' , gerne:'mathematicd',publish:2011,edition:'2004'
    },
    {
        title: 'book nine' , gerne:'finction',publish:2015,edition:'2004'
    },
]

let userbooks = books.filter( (item) => { return item.gerne === 'finction'} )

userbooks = books.filter( (bk) => { 
            return bk.publish >= 2000 && bk.gerne === 'finction'})

console.log(userbooks)
