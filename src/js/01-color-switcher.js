const startBtn = document.querySelector(`button[data-start]`);
const stopBtn = document.querySelector(`button[data-stop]`);

startBtn.addEventListener(`click`, onStartBtnClick);
stopBtn.addEventListener(`click`, onStopBtnClick);

const changeColor = {
    intervalId: null,
    start() {
        startBtn.disabled = true;
        stopBtn.disabled = false;
        this.intervalId = setInterval(() => {
            document.body.style.backgroundColor = getRandomHexColor();
        }, 1000);
    }, 
    stop() {
        clearInterval(this.intervalId);
        startBtn.disabled = false;
        stopBtn.disabled = true;
    }
};
       
function onStartBtnClick() {
    changeColor.start();
}

function onStopBtnClick(evt) {
    changeColor.stop();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

