var timeHour = new Date().getHours();
var timeHr = document.getElementById("hour");
timeHr.innerHTML = timeHour;

var timeDate = new Date().getDate();
var timeDt = document.getElementById("Date");
timeDt.innerHTML = timeDate;

var timeMinute = new Date().getMinute();
var timeMt = document.getElementById("Minute");
timeMt.innerHTML = timeMinute;

var timeDay = new Date().getDay();
var a ="Monday";
var b ="Tuesay";
var c ="Wednesday";
var d ="Thursday";
var e ="friday";
var f ="Saturday";
var g ="Sunday";
if(timeDay === 0){
  timeDay = g;
}
if(timeDay === 1){
  timeDay = a;
}
if(timeDay === 2){
  timeDay = b;
}
if(timeDay === 3){
  timeDay = c;
}
if(timeDay === 4){
  timeDay = d;
}
if(timeDay === 5){
  timeDay = e;
}
if(timeDay === 6){
  timeDay = f;
}
var timeDy = document.getElementById("day");
timeDy.innerHtml = "Day"+timeDay;
