const countDownTimer = () => {
  const countDate = new Date('July 21,2021').getTime();
  const currentDate = new Date().getTime();
  const time = countDate - currentDate;

  const pad = value => {
    return String(value).padStart(2, 0);
  };

  const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
  const hours = pad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
  );
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

  document.querySelector('[data-value="days"]').innerText = days;
  document.querySelector('[data-value="hours"]').innerText = hours;
  document.querySelector('[data-value="minutes"]').innerText = mins;
  document.querySelector('[data-value="seconds"]').innerText = secs;
};

setInterval(countDownTimer, 1000);
