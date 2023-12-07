// there is problem with var with scope so we dont use var in js

var d =300;

if(true){
let a = 10;
const b =20;
var c =30
var d = 40
}


//console.log(a)
//console.log(b)
console.log(c) // according to rule it should not be accesible but it is accessible 
console.log(d) // according to rule sice d is globally declared 300 it should print 300 but it will print 40 

function one(){
    const username = "shyam"

    function two(){
        const website = "youtube"

        console.log(username);
    }

    // console.log(website) // it will give error because website is not in its scope . if we comment it then two() will be executed

    two()
}

one()

// ++++++++++++++++++++++++++++++++++++++ INTERSTING +++++++++++++++++++++++++++++++++++++++++++++=


// two ways of writinf function in javascript 

// variables in javascript are so powerfull that theycan hold function also 

function addOne(num){
    return num+1
}

addOne(5);


const addTwo = function(num){
    return num+2
}

addTwo(5);
