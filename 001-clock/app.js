const ONE_SECOND = 1000;

const clock = document.getElementById('clock');

const setPadStart = (timeToPad) => {
  return `${timeToPad}`.padStart(2, '0')
} 

const showCurrentTime = () => {
    var currentTime = new Date();
 
    var hours = setPadStart(currentTime.getHours());
    var minutes = setPadStart(currentTime.getMinutes());
    var seconds = setPadStart(currentTime.getSeconds());

    var clockTime = `${hours}:${minutes}:${seconds}`;

    clock.innerText = clockTime;
};

const updateClock = () => {
  showCurrentTime();
};

updateClock();

setInterval( updateClock, ONE_SECOND);
