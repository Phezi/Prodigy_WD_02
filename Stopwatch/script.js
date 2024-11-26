let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;

let intervalId = null;
let timeDisplay = document.querySelector('.timer-display');

function startTimer() {
  intervalId = setInterval(() => {
    milliseconds += 10;

    if (milliseconds >= 1000) {
      milliseconds = 0;
      seconds++;
    }

    if (seconds >= 60) {
      seconds = 0;
      minutes++;
    }

    if (minutes >= 60) {
      minutes = 0;
      hours++;
    }

    const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${milliseconds.toString().padStart(3, '0')}`;
    timeDisplay.textContent = formattedTime;
  }, 10);
}

function pauseTimer() {
  clearInterval(intervalId);
}

function resetTimer() {
  clearInterval(intervalId);
  milliseconds = 0;
  seconds = 0;
  minutes = 0;
  hours = 0;
  timeDisplay.textContent = '00:00:00:000';
}

document.getElementById('play-timer').addEventListener('click', startTimer);
document.getElementById('pause-timer').addEventListener('click', pauseTimer);
document.getElementById('reset-timer').addEventListener('click', resetTimer);