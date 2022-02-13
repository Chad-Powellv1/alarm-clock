let alarmTime = null;
let alarmTimeout = null;
const alarmAudio = new Audio("reveille.mp3");
let alarmTimeValue = document.getElementById("input");
let weekDays = document.getElementById("days");

let alarmControls = document.getElementById("alarmControl");
let alarmSet = document.getElementById("alarmSet");

/* CREATE HEADING */
let heading = document.getElementById("header");
let h1 = document.createElement("h1");
let title = document.createTextNode("JavaScript Clock Project");
h1.appendChild(title);
heading.appendChild(title);

/* FUNCTION TO GET TIME AND DISPLAY */
const digitalClock = function () {
  let date = new Date();
  let hour = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let period = "AM";
  
  hour = twelveHourFormat(hour);
  minutes = addZero(minutes);
  seconds = addZero(seconds);
  period = twelvleHourFormat(hour) < 12 ? "AM" : "PM";

  let time = `${hour} : ${minutes} : ${seconds} ${period}`;

  document.getElementById("timeDisplay").textContent = time;
};

/* FUNCTION TO GET CURRENT DATE  AND DISPLAY */
const getDateDisplay = function () {
  const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let d = new Date();
  let currentDay = day[d.getDay()];
  let currentDate = addZero(d.getDate());
  let currentMonth = month[d.getMonth()];
  let currentYear = d.getFullYear();
  let currentFullDate = `${currentDay} ${currentMonth} ${currentDate}, ${currentYear}`;

  document.getElementById("date").textContent = currentFullDate;
};

/* FUNCTION TO CONVERT HOUR TO 12HR FORMAT */

const twelveHourFormat = function (hour) {
  if (hour > 12) {
    return hour - 12;
  } else 
  return hour
};



/* FUNCTION TO ADD ZERO IF NUM IS LESS THAN 10 */
const addZero = function (i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
};

const setAlarmTime = function (value) {
  alarmTime = new Date(value).getTime();
};

const setAlarm = function () {
  let currentTime = new Date().getTime();
  if (alarmTime && alarmTime >= currentTime) {
    const timeout = alarmTime - currentTime;
    alarmTimeout = setTimeout(() => alarmAudio.play(), timeout);
  }
};

/* FUNCTION TO TURN ALARM OFF */
const alarmOff = function () {
  alarmAudio.pause();
  if (alarmTimeout) {
    clearTimeout(alarmTimeout);
  }
};

const init = function () {
  setInterval(digitalClock, 1000);
  getDateDisplay();
};
