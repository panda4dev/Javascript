 //distructuring 

 const course = {
    coursename: "js in hindi",
    price: "9898",
    instructor: "shyam"

 }

 // if we want the value of instructor we can get it as 

 console.log(course.instructor);

// destructuring 

// if we want instructor name multiple times then writing course.instructor multiple times is tedious process
// so we can solve this problem using destructuring 

const {instructor} = course;

// in this syntax we have to first give key which we want to access and then on RHS we write object from which we want to access 


console.log(instructor);

// again if you feel  key instructor is long we can write shorthand for it also using 

const {instructor: inst} = course;
console.log(inst);

// array can also be distructed 

