const coding = ["js","python","cpp","java"]

coding.forEach(function (item) {     // under parenthesis i write the simple function but without name just write to remeber
// console.log(item);
})   
// output : 
// js
// python
// cpp
// java

// using arrow function
coding.forEach( (item) => {
    // console.log(item)
} )
// output : 
// js
// python
// cpp
// java


// accesss item / index / array
coding.forEach( (item , index , array) => {
    console.log(item , index , array)
} )
//output :
// js 0 [ 'js', 'python', 'cpp', 'java' ]
// python 1 [ 'js', 'python', 'cpp', 'java' ]
// cpp 2 [ 'js', 'python', 'cpp', 'java' ]
// java 3 [ 'js', 'python', 'cpp', 'java' ]


// function printerMe(item){
//     console.log(item);
// }
// coding.forEach(printerMe)


// object in the array accesible
mycoding = [
    {
        languagename : "javascript",
        languagefilename : "js"
    },
    {
        languagename : "python",
        languagefilename : "py"
    },
    {
        languagename : "cpp",
        languagefilename : "c"
    }
]

mycoding.forEach( (item) => {
          console.log(item.languagefilename);
} )

// output  
// js
// py
// c


