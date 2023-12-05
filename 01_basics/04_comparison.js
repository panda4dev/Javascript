// simple comparisons 

console.log(2<3);
console.log(2>1)
console.log(4>=3);
console.log(2<=3);
//there are many more like == , != etc 

//advanced comparisons 

console.log("2" > 1) // it will also return true because javascript automatically does type conversion thats why peoples are shifting to typescript 
//because javascript is unpredictible sometimes 

console.log("02">1) // same as above 

console.log(null > 0); // false 
console.log(null == 0); //false 
console.log(null >= 0); //true because type conversion is done with null converted to zero 

//  important note =>  == (equality)  and comaprisons(<,>,=>,<=) works differently so we get true for null > = 0 and false for null == zero 

// === is called strict comparison 
