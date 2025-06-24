for (let i = 0; i <= 20; i++) {
    const element = i;
    if(element == 5){
        // console.log(`5 is the best number`);
    }
    // console.log(element)
    
}
// console.log(element)  output : error because variable scope is end
// output : 0 1 2 4 5is the best number 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20


for (let i = 1; i <= 10; i++) {
    //console.log(`Outer loop value: ${i}`);
   for (let j = 1; j <= 10; j++) {
    //console.log(`Inner loop value ${j} and inner loop ${i}`);
   }
    
}

// printing the multiplication of table 
for (let i = 1; i <= 10; i++) {
    //  console.log(`outer loop value : ${i}`);
      for (let j = 1; j <= 10; j++) {
        // console.log(i + '*' + j + '=' + i*j);
      }
    
}


let sham = ["ironman","thor","flash"];

for (let index = 0; index < sham.length; index++) {
    const element = sham[index];
    // console.log(element);
    
}

// output : ironman thor flash



// additional keywords

// 1. break;

for (let i = 0; i <= 20; i++) {
    const element = i ;
    if(element == 5){
        // console.log("5 is detected")
        break
    }
    // console.log(element)
    
}
// output :  0 1 2 3 4 5 is detected




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
