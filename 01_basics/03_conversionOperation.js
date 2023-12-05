//datatype conversion  => important topic 
let score = 33
let newScore = "33abc"
let nextScore  = null;
let newestScore = undefined;

console.log(typeof(score));
console.log(typeof(newScore));
console.log(typeof(nextScore));
console.log(typeof(newestScore));

let valueinNumber = Number(newScore); // here if we check type of valueinNumber it will show number 
//but if try to print value inside it then output will be not a number (NaN).

// let valueinNumber = Number(score);  //type is number value will be 33

// let valueinNumber = Number(nextScore); // type is number value is zero(0)
// let valueinNumber = Number(newestScore); // type is number value is NaN

let valueInBoolean = Boolean(score);
// for boolean 
// 1=> true    0 =. false 
// empty string ""=> false 
// non empty strings "shyam"=> true 

// covert to string 

let valueInString = String(score);



// ******************************OPERATIONS*******************************************************

let value = 3
let negvalue = -value;
console.log(negvalue);

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3);
console.log(2/2);
console.log(5%2);

// important behaviour 
console.log("1" + 2);  // output is 12
console.log(1 + "2");  // output is 12
console.log("1" + 2 + 2); // output is 122
console.log(1 + 2 + "2"); // output is 32

console.log(+true) // output is 1





