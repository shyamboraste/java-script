function chai(){
    let username = " shyam"
    console.log(this)
}
chai()

const chai = function(){
    let username = " shyam"
    console.log(this.username)
}
chai() // output : undedined