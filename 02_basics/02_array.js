 const arr1 = [1,2,3,4,5,6]
 const arr2 = [7,8,9,10]

 console.log(arr1.push(arr2));

 const arr3 = arr1.concat(arr2);
 console.log(arr3);
// this is called spreading 
 const arr4 = [...arr1, ...arr2];
 console.log(arr4);

 // other important array methods 

 console.log(Array.isArray("Shyam")); // output is false 
 // converting to array 

 console.log(Array.from("shyam")); // output will be ["s","h","y","a","m"]
 console.log(Array.from({name: "shyam"})) // since we want to create array from object it will return empty array 
 //we need to specify that we need the array of keys or values if we want non empty array 

 // another important method to convert the data to array is Array.of

 let score1 = 100;
 let score2 = 200;
 let score3 = 300;

 console.log(Array.of(score1,score2,score3));

   