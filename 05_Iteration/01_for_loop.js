// for loop 

for (let i = 0; i <= 20; i++) {
    const element = i;
    if(element == 5){
        // console.log(`5 is the best number`);
    }
    // console.log(element)
    
}
// console.log(element)  output : error because variable scope is end
// output : 0 1 2 4 5 is the best number 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20


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

// 2. continue

for (let i = 0; i <= 20; i++) {
    const element = i;
    if(element == 5){
        console.log("5 is detected");
        continue
    }
    console.log(element)
    
}

// entire the loop when the if condition is executed then print the other values
//  but the 5 is not print of the loop flow because the he said one mistake is avoided but still continue
