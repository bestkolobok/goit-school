/*
  Написать скрипт который собирает 3 строки клавиатуры
  и клавишу "пробел" из шаблона по заданому объекту.
  
  Для зарендереной клавиатуры реализовать поведение из
  модуля 8, подсветка нажатой клавиши, отображение символа итд.
*/

const lang = {
    en: "qwertyuiop[]asdfghjkl;'zxcvbnm,./"
};
const arr = lang.en.split("")
lang.en = (new Array(3)).fill([]);
lang.en[0] = arr.filter((n, id) => id <= arr.indexOf("]"));
lang.en[1] = arr.filter((n, id) => (id <= arr.indexOf("'") && id > arr.indexOf("]")));
lang.en[2] = arr.filter((n, id) => id > arr.indexOf("'"));


const html = document.getElementById('menu').textContent.trim();
const output = document.getElementById('output');
const compiled = _.template(html);
const result = compiled(lang);
output.innerHTML = result;

const pressed = document.querySelector(".pressed");
const activeBtn = {
    node: null
};

function onClick(event) {
    if (activeBtn.node !== null) {
        activeBtn.node.classList.remove("keyboard__btn--active")
    }
    if (event.target.classList.contains("keyboard__btn")) {
        event.target.classList.add("keyboard__btn--active");
        activeBtn.node = event.target
        pressed.textContent = event.target.textContent
    }
}
output.addEventListener("click", onClick);
