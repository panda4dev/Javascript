const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descripter);

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nhi bni");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, 'name', {
    //writable: false,
    enumerable: true,
    
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) { // objects by default iterable nhi hote so we use object.enties to iterate over it 
    if (typeof value !== 'function') { // agar is line ko nhi likhenge to key value pair ke roop me function mil jaayega matlab pura kaa pura function definition hi user ko output screen pe mil jaayegaa 
        
        console.log(`${key} : ${value}`);
    }
}
