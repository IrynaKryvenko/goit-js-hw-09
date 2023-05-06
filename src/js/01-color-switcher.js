const refs = {
    startBtn: document.querySelector('[data-start]'),
    stopBtn: document.querySelector('[data-stop]'),
    body: document.querySelector('body'),    
}
 
let timerId = null;
refs.stopBtn.disabled = true;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

refs.startBtn.addEventListener('click', onStartBtnClick);
refs.stopBtn.addEventListener('click', onStopBtnClick);

function changeColor() {
    refs.body.style.backgroundColor = getRandomHexColor();
};

function onStartBtnClick() {
    timerId = setInterval(() => {
    changeColor();
    }, 1000);
    refs.startBtn.disabled = true;
    refs.stopBtn.disabled = false;
};

function onStopBtnClick() {
    clearInterval(timerId);
    refs.startBtn.disabled = false;
    refs.stopBtn.disabled = true;
}