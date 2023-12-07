 // function to print my name 

function myname(){
    console.log("s");
    console.log("h")
    console.log("y")
    console.log("a")
    console.log("m")
}
myname();

// function to add two numbers 

// arguement => value given when function is called 
// parameters => values given when function prototype is declared 

function addNumbers(number1,number2){
    //way 1
    console.log(number1+number2);
    // way 2
    let result = number1 + number2;
    return result;

    //way3 

    //return number1+number2;
}

const result = addNumbers(2,3);
console.log(result);

// function inform that a user loggedin 

function userlogin(username){
    return `${username} logged in now`;

}
 
console.log(userlogin("shyam"));

// rest operators 

// they are used when we dont know exact number of arguements comming to a function 

// for example in e commerce website we dont know how many items an user can add to cart at once

// we use rest operator and it takes all values and return array of values 

function CalculateCartPrice(...num1){
    return num1;
}

console.log(CalculateCartPrice(100,200,400,500,700));

// it will return array of numbers 

// import interview question 

function CalculatePrie(val1,val2, ... num2){
    return num2;
}

console.log(CalculateCartPrice(100,200,400,500,700)); 

// the output will contain [400,500,700] beacuse 100 and 200 are mapped tp val1 and val2 respectively 


// passing objects to the function 

// when coding professionally we need to check if the value passed as arguemnt is of type object or not 
// while learnig we ignore this 
// we also need tro check that key which we want to access from object exist or not 

function handleobject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}
handleobject({
    username: "shyam",
    price: 499
})

// or we can separately define object and pass


const userobj= { 
    username: "shyam",
    price: 499
}
handleobject(userobj);


// passing array in functions 

const myarr = [200,300,400,500]

function returnSecondValue(getArr){
    return getArr[1];
}

console.log(returnSecondValue(myarr));