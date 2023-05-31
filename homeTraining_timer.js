var minutes = prompt("시간(분)을 입력하세요", "5");
var seconds = 0;

var timeElement = document.getElementById("timer");
var startButton = document.getElementById("startButton");
var pauseButton = document.getElementById("pauseButton");
var totalTime = minutes * 60 + seconds;

updateTimer();

function updateTimer() {
  var minutesRemaining = Math.floor(totalTime / 60);
  var secondsRemaining = totalTime % 60;

  var formattedTime =
    ("00" + minutesRemaining).slice(-2) +
    ":" +
    ("00" + secondsRemaining).slice(-2);

  timeElement.textContent = formattedTime;

  if (totalTime > 0) {
    totalTime--;
  } else {
    clearInterval(timerInterval);
  }
}

startButton.addEventListener("click", function () {
  timerInterval = setInterval(updateTimer, 1000);
  startButton.disabled = true;
});

pauseButton.addEventListener("click", function () {
  clearInterval(timerInterval);
  startButton.disabled = false;
});
