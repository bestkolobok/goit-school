/*Создать две кнопки в HTML: start и stop.

* Создать класс Timer с полями startTime, stopTime и interval. Создать несколько экземпляров класса 
с разными значениями свойств, вывести их в консоль.

* Для класса Timer создать методы start и stop, getTime.

* Создать экземпляр класса Timer, пусть он называется stopwatch.

* При нажатии на кнопку start, метод stopwatch.start сохраняет момент нажатия в свойство startTime.

* При нажатии на кнопку stop, метод stopwatch.stop сохраняет значение текущего момента времени в stopTime и записывает 
разницу между startTime и stopTime в interval. А метод stopwatch.getTime возвращает значение поля interval, которое необходимо вывести в консоль.

* Для класса Timer создать статический метод timeToNY который возвращает кол-во дней от сегодня и до Нового Года.*/
const startButton = document.querySelector("#start");
const stopButton = document.querySelector("#stop");

class Timer {
    constructor(start, stop) {
        this.startTime = start;
        this.stopTime = stop;
        this.interval = this.stopTime - this.startTime;
    }
    output() {
        console.log(`Start time: ${this.startTime}, stop time: ${this.stopTime}, interval: ${this.interval}`)
    }
    start() {
        this.startTime = Date.now();
    }
    stop() {
        this.stopTime = Date.now();
        this.interval = this.stopTime - this.startTime;
    }
    getTime() {
        return this.interval
    }

    static timeToNY() {
        let date = new Date();
        const nextYear = date.getFullYear() + 1
        let dateNY = new Date(nextYear, 0, 1);
        const millisecondsInterval = dateNY - Date.now();
        const dayInterval = Math.floor(millisecondsInterval / 86400000);
        return dayInterval;
    }
}

let time1 = new Timer(10, 20);
let time2 = new Timer(25, 44);
let time3 = new Timer(15, 37);

var stopwatch = new Timer();

startButton.addEventListener("click", startWatchTime);
stopButton.addEventListener("click", stopWatchTime);

function startWatchTime(e) {
    stopwatch.start();
}

function stopWatchTime(e) {
    stopwatch.stop();
    let printInterval = stopwatch.getTime() / 1000;
    console.log(printInterval);
}

time1.output();
time2.output();
time3.output();
console.log(Timer.timeToNY())