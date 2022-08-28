import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const startBtn = document.querySelector(`button[data-start]`);
const input = document.querySelector('#datetime-picker');
const spanDays = document.querySelector('span[data-days]');
const spanHours = document.querySelector('span[data-hours]');
const spanMinutes = document.querySelector('span[data-minutes]');
const spanSeconds = document.querySelector('span[data-seconds]');

startBtn.disabled = true;

let inrervaId = null;
let deltaTime = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    if (selectedDates[0].getTime() < options.defaultDate.getTime()) { 
      return Notiflix.Notify.failure('Please choose a date in the future');
    } else {
      startBtn.disabled = false;
    };
  },
};

flatpickr('#datetime-picker', options);

startBtn.addEventListener(`click`, onStartBtnClick);

function onStartBtnClick() {
  inrervaId = setInterval(() => {
    deltaTime = new Date(input.value) - new Date();
    if (deltaTime >= 0) {
       startBtn.disabled = true;
       const { days, hours, minutes, seconds } = convertMs(deltaTime);
       spanDays.textContent = `${days}`;
       spanHours.textContent = `${hours}`;
       spanMinutes.textContent = `${minutes}`;
       spanSeconds.textContent = `${seconds}`;
    } else {
      clearInterval(inrervaId);
      startBtn.disabled = false;
    };
  }, 1000);
};

function addLeadingZero(value) {
  return String(value).padStart(2, `0`);
};

function padDays(value) {
  return String(value).padStart(3, `0`);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = padDays(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
};