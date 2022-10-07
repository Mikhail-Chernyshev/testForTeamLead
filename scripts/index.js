const minutesRef = document.querySelector('.timer__minutes');
const secondsRef = document.querySelector('.timer__seconds');

let seconds = 59;
let minutes = 29;
const counter = () => {
  if (seconds === 0) {
    seconds = 59;
    minutes--;
    minutesRef.innerText =
      minutes < 10 ? `0${minutes}` : minutes;
  }
  if (minutes === 0) {
    return;
  }
  secondsRef.innerText =
    seconds < 10 ? `0${seconds}` : seconds;
  seconds--;
};

const timer = setInterval(counter, 1000);
