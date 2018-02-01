/*
 Напишите скрипт который реализует следующее поведение:
 
 - При нажатии на клавишу (не виртуальной клавиатуры) должно 
  обрабатываться событие keydown.
  (Для обработки нажатия нажатия клавиш, повесьте слушателя на window.
  window.addEventListener("keydown", callback);)
 
 - Должны обрабатываться только те клавиши, которые присутствуют
  в разметке HTML (на виртуальной клавиатуре).
 
 - Звук нажатия на клавишу должен соответсвовать ноте, описанной 
  в атрибуте button data-note.

 - Подсветку текущей клавиши реализуйте с помощью класса
  keyboard__btn--active.
 
 - Чекбокс Sound должен включать и выключать звук нажатия на клавиши. 
*/

const playSound = note => {
    const audio = document.querySelector(`audio[data-note=${note}]`);
    audio.currentTime = 0;
    audio.play();
};

const buttons = Array.from(document.querySelectorAll("button"));
const keys = "qwertyuiop[]asdfghjkl;'zxcvbnm,./".split("");

const label = document.querySelector("label");
const input = document.querySelector("input");
const activeBtn = {
    node: null,
    sound: true
};

function onDown(event) {
    let char;
    switch (event.keyCode) {
        case 219:
            char = "[";
            break;
        case 221:
            char = "]";
            break;
        case 186:
            char = ";";
            break;
        case 222:
            char = "'";
            break;
        case 188:
            char = ",";
            break;
        case 190:
            char = ".";
            break;
        case 191:
            char = "/";
            break;
        case 32:
            char = "space";
            break;
        default:
            char = (String.fromCharCode(event.keyCode)).toLowerCase();
    }
    for (const n of buttons) {
        if (n.textContent === char) {
            if (activeBtn.node !== null) {
                activeBtn.node.classList.remove("keyboard__btn--active")
            };
            n.classList.add("keyboard__btn--active");
            activeBtn.node = n;
            const note = n.getAttribute("data-note");
            if (activeBtn.sound === true) {
                playSound(note);
            };
        }
    }
}
window.addEventListener("keydown", onDown);

function check() {
    if (input.checked) { activeBtn.sound = false } else { activeBtn.sound = true }
};
label.addEventListener("click", check);
