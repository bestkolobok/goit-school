let resortList = ["Taba", "Sharm", "Hurgada"];
let resortChoice;
let num = prompt('Введите число от 1 до 3-х \n 1 - Курорт Taba; \n 2 - Курорт Sharm; \n 3 - Курорт Hurgada;', 1) - 1;

if (num == 0 || num == 1 || num == 2) {
    resortChoice = `Вы выбрали курорт: ${resortList[num]}`
} else { resortChoice = "Введено число, варианта курорта для которого не было" };


console.log(resortChoice);
