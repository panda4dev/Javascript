const accountId=1222343
let accountEmail="shyam@gmail.com"
var accountPassword="2324334"
accountCity="Bengaluru" //variables can be decalred without key words but it is not a good practice 

console.log(accountId); 
// accountId=123  cant do it because its not possible to changge value of a variable declared as const

let accountState; //when we print this it will print undefined 

//print all variables data in tabular form 
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);


