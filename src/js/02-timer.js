const startBtn = document.querySelector(`button[data-start]`);
const clockFace = document.querySelector(`.timer`);

class Timer {
    constructor({onTick}) {
        this.inrervaId = null;
        this.isActive = false;
        this.onTick = onTick;

        this.init();
    };
    init() {
        const time = this.convertMs(0)
        this.onTick(time)
    }
    start() {
        if (this.isActive) {
            return;
        }
        const startTime = Date.now();
        this.isActive = true;

        this.inrervaId = setInterval(() => {
            const currentTime = Date.now();
            const deltaTime = currentTime - startTime;
            const time = this.convertMs(deltaTime);

            this.onTick(time);
        }, 1000);
    };

    convertMs(ms) {
  // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

  // Remaining days
    const days = this.pad(Math.floor(ms / day));
  // Remaining hours
    const hours = this.pad(Math.floor((ms % day) / hour));
  // Remaining minutes
    const minutes = this.pad(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
    const seconds = this.pad(Math.floor((((ms % day) % hour) % minute) / second));

    return { days, hours, minutes, seconds };
    };

    pad(value) {
        return String(value).padStart(2, `0`);
    };
};

const timer = new Timer({
    onTick: updateClockFace
});

startBtn.addEventListener(`click`, timer.start.bind(timer));

function updateClockFace({ days, hours, minutes, seconds }) {
    clockFace.textContent = `${days}:${hours}:${minutes}:${seconds}`;
}





// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}