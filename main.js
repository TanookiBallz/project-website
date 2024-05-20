const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

const targetDate = new Date('2024-06-20'); // Replace with your target date
const now = new Date();

const totalSeconds = (targetDate - now) / 1000;

const updateCountdown = () => {
  const remainingSeconds = totalSeconds - (Date.now() - now.getTime()) / 1000;

  const daysLeft = Math.floor(remainingSeconds / 86400);
  const hoursLeft = Math.floor((remainingSeconds % 86400) / 3600);
  const minutesLeft = Math.floor((remainingSeconds % 3600) / 60);
  const secondsLeft = Math.floor(remainingSeconds % 60);

  days.textContent = daysLeft;
  hours.textContent = hoursLeft.toString().padStart(2, '0');
  minutes.textContent = minutesLeft.toString().padStart(2, '0');
  seconds.textContent = secondsLeft.toString().padStart(2, '0');

  if (remainingSeconds <= 0) {
    clearInterval(intervalId);
  }
};

const intervalId = setInterval(updateCountdown, 1000);
