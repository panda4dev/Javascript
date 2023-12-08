const coding = ["js", "ruby", "java", "python", "cpp"]


// forEach loop requires a function called callBack function  


// coding.forEach( function (val){
//     console.log(val);
// } )



// using arrow function with forEach loop 




// coding.forEach( (item) => {
//     console.log(item);
// } )



// passing a predefined function to for each loop



// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )



// most important use case of for each loop is to handle array of objects 



const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {   
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )