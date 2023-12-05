 const name = "shyam"
 const repoCount = 40

 // string concatenation in older ways 

 console.log(name + repoCount + " values");

 // string concatenatio in newwer ways => string interpolation 

 console.log(`hell my name is ${name}  and my repo count is ${repoCount}`);

 // twoways of declaring strings 

 const names = "shyam";
 const newname = new String("shyam"); // it provides various methods to operate on string 
 console.log(newname.length);

 console.log(newname.toUpperCase()); // it doesnot affect original variable because it is primitive data type that is passed by value and stored in heap 
 console.log(newname);

 console.log(newname.charAt(1));
 
 console.log(newname.indexOf('y'));

 console.log(newname.substring(0,3));
 
 console.log(newname.slice(-5,3));
 const newvar="   abscsc  ";
 
 console.log(newvar.trim()); // remove whoitespace and new line characters 
 const url = "www.shyam%20online.com" // sometimes developers gives spaces in the name of website but browsers doesnt understand spaces so they replace it with %20
 console.log(url.replace("%20","-"));
 



