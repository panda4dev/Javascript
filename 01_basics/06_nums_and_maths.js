const score =400;
console.log(score);
// it will store 400 as number in score but it can be confusing in some cases

const balance = new Number(100)
console.log(balance);

// it will confidently store it as number 
// it will store balance as an object of class number 

//we can convert it to string and then apply various operations to it 

console.log(balance.toString().length);
console.log(balance.toFixed(2));// used to speify precision value while calculating large decimal calculations 


const OtherNumber= 23.88
console.log(OtherNumber.toPrecision(3));  // output is 23.9 becauseit has to show 3 digits 
console.log(OtherNumber.toPrecision(2)); //output is 24 because it has to show 2 digits 
console.log(OtherNumber.toPrecision(1)); // convert into exponential form output is 2e+1

// toPrecision method converts values to string this is an important point to note 
  const hundreds = 1000000;
  console.log(hundreds.toLocaleString('en-IN')); // convert to indian number system output is 10,00,000


  // ************************ MATHS *****************************************************


  // maths library come by default with javascript 

  console.log("MATHS STARTED");

// various maths functions

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(3.9));
console.log(Math.min(4,3,6,8));
console.log(Math.max(4,3,6,8));

// random 

console.log(Math.random());

// math.random always gives values between 0 and 1 

// when we want values greater than 1 we do 
console.log( (Math.random()*10 )  + 1)

// the general formula for the same is math.random() * (max-min+1) + min 
// (max-min+1) we have added 1 to avoid zero value and then at last added 10 to get atleast min value
const min = 10 
const max = 20

console.log(Math.floor(Math.random() * ( max - min + 1 )) + min);

