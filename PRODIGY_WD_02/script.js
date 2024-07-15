const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

const start = document.getElementById("start");
const stop = document.getElementById("stop");
const lap = document.getElementById("lap");
const reset = document.getElementById("reset");

const lapsection = document.getElementById("lapsection");

const Lap = document.getElementById("Lap");
const Time = document.getElementById("Time");
const TotalTime = document.getElementById("TotalTime");

const lapContainer = document.getElementById("lapContainer");

let second = 0;
let minute = 0;
let hour = 0;
let lapCount = 0;
let previousLapTime = 0;
let timer;
let totalElapsedTime = 0;

start.addEventListener("click", function () {
  timer = setInterval(() => {
    if (second > 59) {
      second = 0;
      minute++;
    }
    if (minute > 59) {
      minute = 0;
      hour++;
    }

    second++;

    totalElapsedTime = hour * 3600 + minute * 60 + second;

    seconds.innerHTML = second <= 9 ? "0" + second : second;
    minutes.innerHTML = minute <= 9 ? "0" + minute : minute;
    hours.innerHTML = hour <= 9 ? "0" + hour : hour;
  }, 1000);
});

stop.addEventListener("click", function () {
  clearInterval(timer);
});

reset.addEventListener("click", function () {
  clearInterval(timer);
  hours.innerHTML = "00";
  minutes.innerHTML = "00";
  seconds.innerHTML = "00";

  lapContainer.innerHTML = "";
  Lap.innerHTML = "";
  Time.innerHTML = "";
  TotalTime.innerHTML = "";
  lapCount = 0;
  previousLapTime = 0;
  second = 0;
  minute = 0;
  hour = 0;
  totalElapsedTime = 0;
});

lap.addEventListener("click", function () {
  if (lapCount == 0) {
    Lap.innerHTML = "Lap";
    Time.innerHTML = "Time";
    TotalTime.innerHTML = "TotalTime";
  }

  lapCount++;
  
  const currentLapTime = totalElapsedTime - previousLapTime;
  previousLapTime = totalElapsedTime;

  const lapElement = document.createElement("div");
  lapElement.className = "lapcontainer";
  lapElement.innerHTML = `
    <div>${lapCount}</div>
    <div>${formatTime(currentLapTime)}</div>
    <div>${formatTime(totalElapsedTime)}</div>`;
  lapContainer.prepend(lapElement);
});

function formatTime(totalSeconds) {
  const hours = Math.floor(totalSeconds / 3600);
  totalSeconds %= 3600;
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function pad(number) {
  return number <= 9 ? "0" + number : number;
}
