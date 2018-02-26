/*
  Создать компонент счетчика времени.
  
  Простой прямоугольник который показывает время
  со старта упражения и до того момента когда все
  клавиши были верно нажаты.
  
  На входе есть строка символов для упражнения.
  
  Написать метод countKPS() который,по окончанию упражнения,
  возвращает кол-во верных клавишь в секунду которое было нажато за
  время выполнения упражнения.
  
  Записать результат в localStorage, но только в том случае если
  он лучше чем тот что уже есть в localStorage.
  
  При повторном посещении страницы надо брать то что записано
  в localStorage и вешать на страницу, это будет компонент
  лучшего результата.
*/

// дается строка и от первого нажатия до посленего
// правильного набранного знака считать время
const lang = "qwerty";
const string = "qryte";
const charsArr = string.split("").reverse();
const timerOutput = document.querySelector(".timer");
const exerciseOutput = document.querySelector(".exercise");
const keyboard = document.querySelector(".keyboard");
let keyCount = 0;
const timer = {
    count: 0,
    id: true,
};
const result = JSON.parse(localStorage.getItem('bestResult')) || {
    currentResult: 0,
    bestResult: 0
}

exerciseOutput.textContent = string;
timerOutput.textContent = `Время выполнения задания: 0 секунд`;

(function time() {
    timer.id = true;
    setTimeout(() => {
        timer.count++;
        if (timer.id === true) {
            timerOutput.textContent = `Время выполнения задания: ${timer.count} секунд`;
            time();
        };
    }, 1000);
})();

function countKPS(event) {
    let char = (String.fromCharCode(event.keyCode)).toLowerCase();
    if (char === charsArr[charsArr.length - 1]) {
        charsArr.pop();
        keyboard.insertAdjacentText('beforeend', char);
        if (keyboard.textContent.length === string.length) {
            timer.id = false;
            result.currentResult = string.length / timer.count;
            exerciseOutput.textContent = `Скорость нажатия: ${result.currentResult.toFixed(4)} клавишь в секунду! `
            if (result.currentResult > result.bestResult) {
                result.bestResult = result.currentResult;
                localStorage.setItem('bestResult', JSON.stringify(result));
                exerciseOutput.insertAdjacentText('beforeend', `Это твой новый рекорд!!!`);
            } else {
                exerciseOutput.insertAdjacentText('beforeend', `Ооооочень плохо, попробуй еще раз!!!`);
                exerciseOutput.insertAdjacentText('beforeend', `Лучший результат: ${result.bestResult.toFixed(4)} клавишь в секунду!`);
            }
        }
    }
}
window.addEventListener("keydown", countKPS);
