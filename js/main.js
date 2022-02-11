let alarmSetTime = null;
let alarmTimeLeft = null;
let alarmTimeValue = document.getElementById("input");
let weekDays = document.getElementById("days");

let alarmControls = document.getElementById("alarmControl");
let alarmSet = document.getElementById("alarmSet");

/* CREATE TIME INPUT FOR ALARM */
let inputAlarm = document.createElement("input");
inputAlarm.type = "datetime-local";
alarmSet.appendChild(inputAlarm);

/* CREATE ALARM OFF BUTTON */
let alarmOffBtn = document.createElement("button");
alarmOffBtn.id = "alarmOff";
alarmOffBtn.innerHTML = "Alarm Off";
alarmControls.appendChild(alarmOffBtn);

/* CREATE SNOOZE BUTTON */
let snoozeBtn = document.createElement("button");
snoozeBtn.id = "snooze";
snoozeBtn.innerHTML = "Snooze";
alarmControls.appendChild(snoozeBtn);

/* CREATE HEADING */
let heading = document.getElementById("header");
let h1 = document.createElement("h1");
let title = document.createTextNode("JavaScript Clock Project");
h1.appendChild(title);
heading.appendChild(title);

const alarmAudio = new Audio("reveille.mp3");
let alarmTime = null;

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
  period = twelveHourFormat(hour) < 12 ? "AM" : "PM";

  let time = `${hour} : ${minutes} : ${seconds} ${period}`;

  document.getElementById("timeDisplay").innerHTML = time;
};

inputAlarm.addEventListener("input", (e) => {
  alarmTime = e.target.value;
});

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

  document.getElementById("date").innerHTML = currentFullDate;
};

/* FUNCTION TO CONVERT HOUR TO 12HR FORMAT */

const twelveHourFormat = function (hour) {
  if (hour > 12) {
    hour = hour - 12;
  } else {
    hour = 12;
  }
  return hour;
};

/* FUNCTION TO ADD ZERO IF NUM IS LESS THAN 10 */

const addZero = function (i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
};

const setAlarm = function (d, alarmTime) {
  if (alarmTime) {
    let currentTime = d;
    let alarmTimeOut = new Date(alarmTime);

    if (alarmTime > currentTime) {
      alarmTimeOut = alarmTimeOut.getTime() - currentTime.getTime();
      alarmTimeLeft = setTimeOut(() => alarmAudio.play(), alarmTimeOut);
    }
  }
};

/* CREATE SET ALARM BUTTON */
let setAlarmBtn = document.createElement("button");
setAlarmBtn.id = "setAlarm";
setAlarmBtn.innerHTML = "Set Alarm";
setAlarmBtn.onclick = setAlarm();
alarmSet.appendChild(setAlarmBtn);

/* FUNCTION TO START PROGRAM & UPDATE CLOCK EVERY SECOND */

const init = function () {
  setInterval(digitalClock, 1000);
  getDateDisplay();
};
