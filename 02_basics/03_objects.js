// two ways to create 

// 1. literals     2. constructor 

// objects created through constructors are singleton 

// objects created through literals are not singleton 


//declaring symbol

const mysym1 = Symbol("key1");


const Jsuser = {
    name : "shyam",
    "fullname": "shyam pandey",
    //using symbol as key 
    [mysym1]: "mykey1",
    email: "shyam@abc.com",
    age: 20,
    location: "blore",
    isLoggedin: false,
    lastLoginDays: ["Mondays","Saturday"]
}

// accessing objets 

// there are two ways 

// 1. dot (.) notation  2. using []

// example 
console.log(Jsuser.name);
console.log(Jsuser["email"]); // here we have to provide keys as string i.e; in double quotes 

// second methos is important to know because if a key is string type then we cant access it using dot operator 

// example 
console.log(Jsuser["fullname"]);

// working with symbol data type
// symbols in object are declared using square brackets and accessed using square brackets 
// accessing key of type symbol in a object 

console.log(Jsuser[mysym1])

// changing value of a key in object 
Jsuser.email="abc@shyam.com"

// we can also freeze object to prevent changes 

Object.freeze(Jsuser);

// again changing the email but it will not be changed 

Jsuser.email="abc@xyz.com"

console.log(Jsuser);

