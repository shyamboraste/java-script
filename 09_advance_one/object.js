function multiplyby5(num){
    return num * 5;
}
multiplyby5.power = 2

console.log(multiplyby5(5));
console.log(multiplyby5.power);
console.log(multiplyby5.prototype);
// output : 
// 25
// 2
// {}


function createuser(username , score){
    this.username = username
    this.score = score
}

createuser.prototype.increament  = function(){
    this.score++
}

createuser.prototype.printme = function(){
    console.log(`score is ${this.score}`);
}

const chai = new createuser("chai" , 40)

chai.printme()  



// const chai = new createuser("chai" , 40)
// const tea =  createuser("tea", 350)

