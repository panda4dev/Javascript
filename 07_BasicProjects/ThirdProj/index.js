const clock = document.getElementById('clock');
// alternate way 
// const clock = document.querySelector('#clock')

setInterval(function () {

    let date = new Date()
    clock.innerHTML= date.toLocaleTimeString;

},1000);