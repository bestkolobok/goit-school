/*
  Соединить задание 1 и 2
  
  Напишите функцию validate которая проверяет все поля формы 
  и возвращает результат в виде обьекта со свойствами firstname,
  lastname и tel.
  
  Кроме того, формат объекта: в свойства записывается буль-флаг 
  уведомляющий о статусе прохождения валидации для поля.
  
  При клике на кнопку submit должна происходить проверка.
  
  Визуализировать результат проверки.
    Написать функцию showResults(results), которая принимает
    один аргумент results - объект такого формата который возвращает
    функция validate, и создает html разметку по результатам
    этого объекта.
  
    showResults добавляет в список с классом .results 
    (уже есть в html), li для каждого поля формы. В li записать:
    SUCCESS: 'имя поля' passed validation
    ERROR: 'имя поля' failed validation
  
    Для li с положительным результатом дать класс success, 
    с отрицательным error.
*/

const firstname = document.getElementById("first_name");
const lastname = document.getElementById("last_name");
const tel = document.getElementById("tel");
const submitBtn = document.getElementById("submit-btn");
const resultsList = document.querySelector(".results");

submitBtn.addEventListener("click", validate);

function validate(evt) {
    evt.preventDefault();
    let res = {
        firstname: false,
        lastname: false,
        tel: false
    }
    const firstnamePattern = /^[a-zа-яёЁґєії`´ʼ’ʼ’]+(\s[a-zа-яёЁґєії`´ʼ’ʼ’]+){0,2}$/i;
    const lastnamePattern = /^[a-zа-яёЁґєії`´ʼ’ʼ’]+(([-\s]|\s-\s)[a-zа-яёЁґєії`´ʼ’ʼ’]+)?$/i;
    const telPattern = /^\+(\d[-\s]?){12}$/;
    if (firstnamePattern.test(firstname.value)) {
        res.firstname = true;
    }
    if (lastnamePattern.test(lastname.value)) {
        res.lastname = true;
    }
    if (telPattern.test(tel.value)) {
        res.tel = true;
    }
    showResults(res);
}

function showResults(results) {
    const oldElem = Array.from(resultsList.getElementsByTagName('*'));
    if (oldElem.length !== 0) { oldElem.map(elem => elem.remove()) };
    let fields = {};
    for (let field in results) {
        fields[field] = document.createElement('li');
        if (results[field]) {
            fields[field].classList.add('success');
            fields[field].textContent = `${field} passed validation`;
        } else {
            fields[field].classList.add('error');
            fields[field].textContent = `${field} failed validation`;
        }
        resultsList.appendChild(fields[field]);
    }
}