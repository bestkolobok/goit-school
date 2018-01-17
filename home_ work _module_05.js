// Массив строк клавиатуры из прошлого модуля преобразовать в объект keyboard следующего формата.

//     поле layouts содержит обьекты раскладок языков, в каждом из которых по 3 массива строк клавиатуры
//     поле langs содержит массив доступных языков
//     поле currentLang будет содержать язык который сейчас выбран

//     Написать скрипт который на старте спрашивает пользователя какой язык он хочет использовать на тренажере. Это обычный prompt в котором написано en-0, ru-1, ua-2. Пользователь вводит 0, 1 или 2, если введено другое значение то вывести alert о том что был выбран не доступный язык и повторить prompt до того момента пока не будет введено подходящее значание языка или нажат cancel. При cancel прекратить выполнение скрипта.

// Результат выбора языка пользователем записать в обьект keyboard в поле currentLang как строку, 0 это en, 1 это ru, 2 это ua.

// Модифицировать функцию getRandCharInAlph() так, чтобы она возвращала случайную букву из выбраного пользователем алфавита.

function addKeyboardLayout(lang) {
    const alphabetEn = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";
    const alphabetRu = "йцукенгшщзхъфывапролджэячсмитьбю.";
    const alphabetUa = "йцукенгшщзхїфівапролджєячсмитьбю.";
    let strKeyOne;
    let strKeyTwo;
    if (lang === "en") {
        strKeyOne = "]";
        strKeyTwo = "'";
        alphabet = alphabetEn
    } else if (lang === "ru") {
        strKeyOne = "ъ";
        strKeyTwo = "э";
        alphabet = alphabetRu
    } else if (lang === "ua") {
        strKeyOne = "ї";
        strKeyTwo = "є";
        alphabet = alphabetUa
    } else {}
    const arr = alphabet.split('');
    let strArr = (new Array(3)).fill([]);
    strArr[0] = arr.filter((n, id) => id <= arr.indexOf(strKeyOne));
    strArr[1] = arr.filter((n, id) => (id <= arr.indexOf(strKeyTwo) && id > arr.indexOf(strKeyOne)));
    strArr[2] = arr.filter((n, id) => id > arr.indexOf(strKeyTwo));
    return strArr;
}

const keyboard = {};
keyboard.layouts = {};

function row(lang) {
    return {
        topRow: addKeyboardLayout(lang)[0],
        middleRow: addKeyboardLayout(lang)[1],
        bottomRow: addKeyboardLayout(lang)[2]
    }
}
keyboard.layouts['en'] = row('en');
keyboard.layouts['ru'] = row('ru');
keyboard.layouts['ua'] = row('ua');
keyboard.langs = ['en', 'ru', 'ua'];
keyboard.currentLang = ''

let lang

function printMessage() {
    lang = prompt('Выберите язык:\n(введите 0, 1 или 2) \n0 - "en"\n1 - "ru"\n2 - "ua"', '')
    checkAlert()
}

function checkAlert() {
    if (lang === '0' || lang === '1' || lang === '2') {
        keyboard.currentLang = lang + ''
        getRandCharInAlph()
    } else if (lang !== null) {
        alert('Введен недоступный язык')
        printMessage()
    } else {}
}

function getRandCharInAlph() {
    let alphabet
    let lang = keyboard.currentLang
    if (lang === '0') {
        alphabet = keyboard.layouts['en']
    } else if (lang === '1') {
        alphabet = keyboard.layouts['ru']
    } else if (lang === '2') {
        alphabet = keyboard.layouts['ua']
    } else {}
    const rowLangth = (Object.keys(alphabet)).length;

    const rowRand = Math.floor(Math.random() * rowLangth);
    const rowRandName = Object.keys(alphabet)[rowRand]
    const indexRand = Math.floor(Math.random() * alphabet[rowRandName].length);
    console.log(alphabet[rowRandName].find((n, i) => i == indexRand));
}
printMessage()
console.log(keyboard)
