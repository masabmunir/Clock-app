//console.log("working..")

function updateClock(){
let currenttime = new Date();


let currentHour = currenttime.getHours();
let currentMinutes = currenttime.getMinutes();
let currentSeconds = currenttime.getSeconds();

currentMinutes = (currentMinutes<10 ? "0" : "") + currentMinutes;
currentSeconds = (currentSeconds<10 ? "0" : "") + currentSeconds;

let timeOfDay  = (currenttime < 12) ? "AM":"PM";

currentHour = ( currentHour>12) ? currentHour - 12 : currentHour;
currentHour = (currentHour==0)? 12 : currentHour;

let currentTimeStr  = currentHour + ":" + currentMinutes  
+ ":" + currentSeconds + " " + timeOfDay;

document.getElementById('clock').innerHTML = currentTimeStr;
}