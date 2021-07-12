class Timer {
  constructor({ selector, targetDate }) {
    this.targetDate = targetDate;
    this.selector = selector;
    this.refs = {
      days: document.querySelector(`${this.selector} [data-days]`),
      hours: document.querySelector(`${this.selector} [data-hours]`),
      minutes: document.querySelector(`${this.selector} [data-minutes]`),
      seconds: document.querySelector(`${this.selector} [data-seconds]`),
    };
  }

  getDate() {
    const targetDate = Date.parse(this.targetDate);
    const currentDate = new Date();
    return targetDate - currentDate;
  }

  timerStart() {
    this.clearInterval = setInterval(() => {
      const diffMs = this.getDate();
      const { days, hours, minutes, seconds } = this.convertMs(diffMs);
      this.refs.days.textContent = this.pad(days);
      this.refs.hours.textContent = this.pad(hours);
      this.refs.minutes.textContent = this.pad(minutes);
      this.refs.seconds.textContent = this.pad(seconds);
    }, 1000);
  }

  pad(value) {
    return String(value).padStart(2, 0);
  }

  convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
  }
}

const timer = new Timer({ selector: '#timer', targetDate: '2021,07,17' });

timer.timerStart();
