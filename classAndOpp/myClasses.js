// ES6
// classes in js were introduced after ES6


//syntax for class 

// class contains data members and member functions 
class User {
    // we can create constructor of the class, constructor is prototype of the class 
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password
    }

    // methods in class can be defined as 

    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }

}

const chai = new User("chai", "chai@gmail.com", "123")

console.log(chai.encryptPassword());
console.log(chai.changeUsername());

// behind the scene

// if we never had classes then same thing would have done as follows 

// step1 creatinh=g function 

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

// as we know functions are also object in js 

// adding a method to the protype of functions

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}


const tea = new User("tea", "tea@gmail.com", "123")

// using the userdefined protype function created above 

console.log(tea.encryptPassword());
console.log(tea.changeUsername());
