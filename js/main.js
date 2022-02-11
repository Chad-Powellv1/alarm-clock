let alarmTimeSet = null;
let weekDays = document.getElementById("days");
let alarmControls = document.getElementById("alarmControl");

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
  period = hour <= 12 ? "AM" : "PM";

  let time = `${hour} : ${minutes} : ${seconds} ${period}`;

  document.getElementById("timeDisplay").innerHTML = time;
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

  document.getElementById("date").innerHTML = currentFullDate;
};

/* FUNCTION TO CONVERT HOUR TO 12HR FORMAT */

const twelveHourFormat = function (hour) {
  if (hour > 12) {
    hour - 12;
  } else {
    12;
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

/* FUNCTION TO START PROGRAM & UPDATE CLOCK EVERY SECOND */

const init = function () {
  setInterval(digitalClock, 1000);
  getDateDisplay();
};
