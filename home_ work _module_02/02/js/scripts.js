/*
  Пользователь через prompt вводит число участников группы. 
  Необходимо проверить является ли введенные данные целым 
  положительным числом. Вывести alert в случае ошибочного ввода.
        
  Всего имеется три группы sharm, hurgada и taba.
  В группах ограничено кол-во свободных мест:
    sharm - 15
    hurgada - 25
    taba - 6
    
  Если количество мест позволяет, то вывести пользователю 
  сообщение через confirm что есть место в группе такой-то, 
  согласен ли пользоваетель быть в этой группе?
  
  Если ответ ok, уменьшаем число свободных мест на  число участников группы.
  Если ответ нет, предлагаем следующую группу со свободными местами.
  
  Если мест нигде нет, выводим сообщение alert('Мест нет!')
*/

let sha = 15;
let hur = 25;
let tab = 6;
let book;
let check;
let num = +prompt('Введите число участников группы', 1);
if (parseInt(num) == num && num > 0) {
    if (num <= sha) {
        book = confirm(`Есть место в группе Sharm`)
    }
    if (book == true) {
        sha = sha - num,
            console.log(sha, hur, tab),
            check = true
    }
    if (num <= hur && check != true) {
        book = confirm(`Есть место в группе Hurgada`)
    }
    if (book == true && check != true) {
        hur = hur - num,
            console.log(sha, hur, tab),
            check = true
    }
    if (num <= tab && check != true) {
        book = confirm(`Есть место в группе Taba`)
    }
    if (book == true && check != true) {
        tab = tab - num,
            console.log(sha, hur, tab),
            check = true
    }
    if (check != true) {
        alert('Мест нет!')
    }
} else {
    alert('Вы ввели неверное число!')
}
