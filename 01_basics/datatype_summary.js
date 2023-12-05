// there are two important division of data types they are primitive and non primitive 

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId); // output is false because symbol, create uniqueness
// for bigInt we us e as  => const bigNumber = 122525654323456776543n;


// non primitive datatypes 

//array
const heros = ["shaktiman","naagraj","doga"];

//objects

// they are represented as key value pairs 
let myObj = {
    name : "shyam",
    age: 20

}

// functions 

const myfunc = function () {
    console.log("hello world");
}

console.log(typeof(myfunc)); //output is function 

