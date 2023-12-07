// this refers to current context 


const user = {
    
    username: "shyam",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to github`);

        // improvising code to get context 

        console.log(this) // it will print two contexts one for shyam and one for sam 

    }
}

user.welcomeMessage();
user.username = "sam"
user.welcomeMessage() // it will print sam, welcome to githb
// it is possible because we had not hard coded the values instead we gave the reference of current context using {this.username}
// sice the context is chnaged the output will be changed

console.log(this) // this will show empty object as context as we are in node environment which does not have any global context
 
// browser does have global context  called window and using that we can execute various methods like cilck and others


// this keyword for givinh=g context works fine for objects but inside function it doest provide context 

//  function chai(){
//     let username = "shyam"
//     console.log(this.username);// it will give multiple oututs but not username that is shyam 
//  }

//  chai()
 

 const chai = function(){
    let username = "shyam"
    console.log(this.username) // print multiple this=ngs but not username 

 }

 // arraow function 

//  const chai = () => {
//     let username = "shyam"
//     console.log(this); // print only empty object
//  }

 // ways of writing arrow function 


 // method 1 

 const addTwo =  (num1,num2) => {
    return num1+num2;
 }
 console.log(addTwo(3,4))

 // method 2 called impicit return 

  const addTwonums = (num1,num2) => (num1+num2)
  console.log(addTwonums(3,4))
  // or 
  const addtwonum =  (num1,num2) => num1+num2
  console.log(addtwonum(3,4))

  // for implicit return of objects 

  const objfun = () => ({username : "shyam"})
  console.log(objfun());

