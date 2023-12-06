// array 

// declaration 

// way 1 
const myArr = [1,2,3,4,5,6]

const myHeros = ["shaktimaan", "naagraj"]

// way 2

const myArr2 = new Array(1,2,3,4)


console.log(myArr[0]);
console.log(myArr2[0]);


// array methods 

//adding values 

myArr.push(6)
console.log(myArr);

//removing from last

myArr.pop();


// adding a value at start 

myArr.unshift(9);

console.log(myArr);


// removing from start 

myArr.shift();

console.log(myArr.includes(3));
console.log(myArr.indexOf(3));


// slice and splice 

// slicce => do not change original array 

// splice => chnages original array 



const myn1 = myArr.slice(1,3);
console.log(myn1)
console.log("original array", myArr);

const myn2 = myArr.splice(1,2);
console.log(myn2);
console.log("original array", myArr);




