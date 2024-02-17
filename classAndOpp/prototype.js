// let myName = "shyam    "
// let mychannel = "chai     "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
}


// adding a user defined protype method to array it can be used by multiple arrays in this program file 


Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`);
}

// heroPower.hitesh()
// myHeros.hitesh()
// myHeros.heyHitesh()
// heroPower.heyHitesh()

// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    // giving prototype access of TeachingSupport to TASupport
    __proto__: TeachingSupport
}

// give the protype acess of usser to teacher in old approach 
Teacher.__proto__ = User


// give the protype acess of usser to teacher in new  approach 
// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

// above are the example to protypal inheritence 




// assignment :- design a method or property in protype so that we can easily find true length aur actual length of string without count empty spaces at start or end 

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`); // this kaaa matlab JISH ne call kiya in case of "shyam".trueLength() , this console will print shyam beacuse shyam has called trueLength
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()
