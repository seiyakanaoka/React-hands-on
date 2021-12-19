// setInterval(logClockTime, 1000);

// function logClockTime() {
//   let times = getClockTime();

//   console.clear();
//   console.log(times);
// };

// function getClockTime() {
//   let date = new Date();

//   let time = {
//     hours: date.getHours(),
//     minutes: date.getMinutes(),
//     seconds: date.getSeconds(),
//     ampm: "AM"
//   };

//   if (time.hours === 12) {
//     time.ampm = "PM";
//   } else if (time.hours > 12) {
//     time.ampm = "PM";
//     time.hours -= 12;
//   }

//   if (time.hours < 10) {
//     time.hours = "0" + time.hours;
//   }

//   if (time.minutes < 10) {
//     time.minutes = "0" + time.minutes;
//   }

//   if (time.seconds) {
//     time.seconds = "0" + time.seconds;
//   }

//   return time.hours + ":" + time.minutes + ":" + time.seconds + " " + time.ampm;
// };

const getNowTimes = () => {1
  const nowTime = new Date();
  return ({
    year: nowTime.getFullYear(),
    month: nowTime.getMonth(),
    date: nowTime.getDate(),
    hour: nowTime.getHours(),
    minute: nowTime.getMinutes(),
    second: nowTime.getSeconds(),
  });
};

const clock = () => {
  const { year, month, date, hour, minute, second } = getNowTimes();
  console.log(`${year}/${month}/${date} ${hour}:${minute}:0${second}`);
  return oneSecondsClear = () => {
    console.clear();
    clock();
  }
};

const clockTime = (fn, mn) => setInterval(fn, mn);

clockTime(clock(), 1000);

