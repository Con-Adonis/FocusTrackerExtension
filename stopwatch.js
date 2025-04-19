document.addEventListener("DOMContentLoaded", function () {
    const startButton = document.getElementById("startButton");
  
    startButton.addEventListener("click", function () {
      let seconds = 0, minutes = 0, hours = 0;
      const timerDisplay = document.getElementById("displayTime");

      timerDisplay.textContent = `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

      setInterval(() => {
        seconds++;
        timerDisplay.textContent = `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

        if (seconds == 60){
            minutes++
            seconds = 0
        }
        if (minutes == 60){
            hours++
            minutes = 0
        }
      }, 1000);
    });
  });
  