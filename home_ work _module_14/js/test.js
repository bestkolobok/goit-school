/*
1. Создать две кнопки в HTML: start и stop.
2. Реализовать функционал таймера отсчета старта печати через функцию-конструктор со свойсвами 
startTime, stopTime и interval. Добавить в prototype методы start и stop.
3. При нажатии на кнопку start, функция сохраняет момент нажатия в свойство startTime.
4. При нажатии на кнопку stop, функция сохраняет значение текущего момента времени в stopTime 
и записывает разницу между startTime и stopTime в interval.
5. При нажатии на stop, значение interval выводится в консоль.*/

const startButton = document.querySelector("#start");
const stopButton = document.querySelector("#stop");

function Timer() {}

Timer.prototype.startTimer = function() {
    this.startTime = Date.now();
}

Timer.prototype.stopTimer = function() {
    this.stopTime = Date.now();
    this.interval = this.stopTime - this.startTime;
    const int = Math.floor(this.interval / 1000);
    console.log(int);
}

let currentInterval = new Timer();
let setStart = currentInterval.startTimer.bind(currentInterval);
let setStop = currentInterval.stopTimer.bind(currentInterval);

startButton.addEventListener("click", setStart);
stopButton.addEventListener("click", setStop);