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


// for boolean 
// 1=> true    0 =. false 
// empty string ""=> false 
// non empty strings "shyam"=> true 


