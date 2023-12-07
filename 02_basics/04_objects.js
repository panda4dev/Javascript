// objects through literals have been discussed in previous section 

// in this file we discuss objectthrough constructors 

// we crete singleton object through constructor 
// const tinderUser = new Object()
// console.log(tinderUser) // an empty object 

const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn= false

console.log(tinderUser) // output will be an object 

// we have seen the we can add all type of data in object including arrays 

// we can also add an object to the object that is object nesting 

const regularUser = {
    email: "Abc@gmail.com",

    fullname : {
        userfullname: {
            firstname: "shyam",
            lastname: "pandey"
        }
    }
}

// we can access all values using dot notation 

console.log(regularUser.fullname);
console.log(regularUser.fullname.userfullname);
console.log(regularUser.fullname.userfullname.firstname);

// the more we use dot operator the more we will go into deep of object



// optional chaining of objects 

// lets suppose that fullname object is not present then we use ? to chcek if it is present or not 
// this concept is mostly used when the response comes from an api as an object and we ave to go deep inside it 

// example 

console.log(regularUser.fullname?.userfullname.firstname);
// we dont use this then we have to write multiple if else condition 



// operations on objects 


// combining two objects 

const obj1 = {1:"a", 2:"b"}
const obj2 = { 3:"c", 4: "d"}


// **********************bekaar approach which will create objects under object **********************************************

const obj3 = {obj1,obj2}

// **********************************thoda better approaach****************************************************************



const obj4  = Object.assign(obj1,obj2); // first arguement to assign method works as a target and all other are source 
// here all changes are being done in obj1` only but it is bad approavh to change given input so we cretae a new object as 

const obj5 = Object.assign({},obj1, obj2);

// using this syntax of object we can combine multiple objects as 

// create a new object and add 

const obj6 = {5: "e", 6: "f"}

const obj7 = Object.assign({},obj1,obj2,obj6)

console.log(obj7);



// ***************************************** thoda aur better approach - production level*********************************

// using spread operator 

const obj8 = {...obj1, ...obj2, ...obj6}
console.log(obj8);


// we can access keys and values and get them in form of array using 

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
