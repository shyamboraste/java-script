const mynums = [1,2,3]
const mytotal = mynums.reduce(function(acc, currval) {
                console.log(`acc val := ${acc} , curr val is := ${currval}`)
                return acc + currval

} , 0)
console.log(mytotal)
// output : 
// acc val := 4 , curr val is := 1
// acc val := 5 , curr val is := 2    ===> only three because above declare array is three nums
// acc val := 7 , curr val is := 3
// 10  == last values 7+3 = 10


// reduce in arrow function

const name = [1,2,3,4]
const total = name.reduce( (acc , curval) => acc+curval , 0 )
console.log(total)
// output : 10


const shoppingCard = [
      {
            itemname:"js cource",
            price:1000
      },
      {
            itemname:"python",
            price:13732
      },
      {
            itemname:"web dev",
            price:14000
      },
      {
            itemname:"data science",
            price:20000
      }
]

const pricetopay = shoppingCard.reduce( (acc , item) => (acc + item.price) , 0 )
console.log(pricetopay)
// output : 48732
// NOTE:= hya function ne sarv price jya jya ahet tyanchi price total kele ani ti return keli