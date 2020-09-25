
//Defined variables to assign elements from HTML
let daysElement = document.getElementById("days");
let hoursElement = document.getElementById("hours");
let minutesElement = document.getElementById("minutes");
let secondsElement = document.getElementById("seconds");

//Halley's next appearance will be on  July 29 2061
const nextAppearance = '29 Jul 2061';

//Function for calculating the remaining time
function countDown() {
    const nextAppearDate = new Date(nextAppearance);
    const currentDate = new Date();
    const timeLeft = nextAppearDate - currentDate;

    let secondsLeft = Math.floor(timeLeft/1000);

    let days = Math.floor(secondsLeft / 3600 / 24);
    let hours = Math.floor(secondsLeft / 3600) % 24;
    let minutes = Math.floor(secondsLeft / 60) % 60;
    let seconds = secondsLeft % 60;

    //assign the HTML elements innerHTML to the data resulted from the logic
    daysElement.innerHTML = days;
    hoursElement.innerHTML = hours;
    minutesElement.innerHTML = minutes;
    secondsElement.innerHTML = seconds;
    
    console.log(days, hours, minutes, seconds);
}
 countDown();

 setInterval(countDown, 1000);

