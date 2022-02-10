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
  period = twelveHourFormat(hour) <= 12 ? "AM" : "PM";

  let time = `${hour} : ${minutes} : ${seconds} ${period}`;

  document.getElementById("timeDisplay").innerHTML = time;
};

/* FUNCTION TO ADD ZERO IF NUM IS LESS THAN 10 */

const addZero = function (i) {
  if (i < 10) {
    i = i + "0";
  }
  return i;
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

/* FUNCTION TO START PROGRAM & UPDATE CLOCK EVERY SECOND */

const init = function () {
  setInterval(digitalClock, 1000);
};
