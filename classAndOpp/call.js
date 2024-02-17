function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    // without using .call() method the setUsernamr function will be called but after its execution context or activation record get deleted we cant access it so it will not be ever printed 
   // we use call to hold the variable after execution context and this keyword is used to give the reference to plaace we want to hold the variable
    SetUsername.call(this, username)
   
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);