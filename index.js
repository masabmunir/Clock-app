//console.log("working..")

function updateClock(){
let currenttime = new Date();


let currentHour = currenttime.getHours();
let currentMinutes = currenttime.getMinutes();
let currentSeconds = currenttime.getSeconds();

let timeOfDay  = (currenttime < 12) ? "AM":"PM";

let currentTimeStr  = currentHour + ":" + currentMinutes  
+ ":" + currentSeconds + " " + timeOfDay;

document.getElementById('clock').innerHTML = currentTimeStr;
}