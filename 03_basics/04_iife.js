// Immediately Invoked Function Expression (IFFE)

// while writing more than one iffe in a file make sure to put semicolon at last because iife does not know whhen to stop 


(function chai(){
    // this type of iife is called names iife 

    console.log("chai taiyaar hai")
})();

// simple iife 
( () => {
    console.log("this type of iife is called simple iife ")
})

// passing parameters to the function 
( (name) => {
    console.log(`my name is ${name}`);
})("shyam"); 