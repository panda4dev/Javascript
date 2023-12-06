// discussion abput date and time in js 

let mydate = new Date() 
console.log(mydate);

// there are multiple ways by whcich we can modify and take out a part of information from date 
// they are 

console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toLocaleString());

// there are many more 

// the type of date data type is Object 

console.log(typeof mydate);


// we can create a date using 

let mycreatedDate= new Date(2023,0,23);

// the arguement given here are year,month,date

console.log(mycreatedDate.toDateString());

// we can also give time as arguement

let Adatetime = new Date(2020 , 3 , 4 , 5, 6)
console.log(Adatetime.toLocaleString());

// another method which is mostly used in quizes to decide who has submitted fast is timestamp

// all dates are calculated in miliseconds 

console.log(mycreatedDate.getTime()); // output will be in miliseconds 

// converting to seconds 

console.log(Math.floor(Date.now()/1000));

// we can get month and day etc using 

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());

// since month in jS starts with zero so to avoid confusion programmers add 1 to the getmonth method 

console.log(newDate.getMonth() + 1);

// one important method to remember in datetime is 
newDate.toLocaleString('default',{
    weekday: "long",
    
});

// here first arguement is encoding in which default means international 
// second arguement is the object of what we want to have 
// we can have multiple key value pair like weekday, timezone , timezone name etc


