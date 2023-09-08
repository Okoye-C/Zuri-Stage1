const time = new Date();
/* const timeHour = time.getHours();
const timeMin = time.getMinutes();
const timeSec = time.getSeconds(); */
const realTime = time.getUTCMilliseconds();
const pTime = document.getElementById("time");
let timeMsg = `Current UTC time is: ${realTime}ms`;
pTime.innerHTML = timeMsg;

const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const day = new Date();
const realDay = weekday[day.getDay()];
const pDay = document.getElementById("day");
let dayMsg = `Today is: ${realDay}`;
pDay.innerHTML = dayMsg;
