//Используя логику создания массива клавиатурных строк, создать функцию addKeyboardLayout(alphabet) 
//которая на входе получает строку-алфавит и возвращает массив-массивов клавиатурных строк.

//Создать функцию getRandCharInRow(row) которая получает номер строки клавиатуры и возвращает 
//случайную букву из этой строки.

//Создать функцию getRandCharInAlph() которая возвращает случайную букву из всего алфавита.

const alphabet = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";

function addKeyboardLayout(alphabet) {
    const arr = alphabet.split('');
    let strArr = [
        [],
        [],
        []
    ];
    strArr[0] = arr.filter((n, id) => id <= arr.indexOf(']'));
    strArr[1] = arr.filter((n, id) => (id <= arr.indexOf("'") && id > arr.indexOf("]")));
    strArr[2] = arr.filter((n, id) => id > arr.indexOf("'"));

    return strArr;
}

function getRandCharInRow(row) {
    const indexRand = Math.floor(Math.random() * addKeyboardLayout(alphabet)[row - 1].length);
    return addKeyboardLayout(alphabet)[row - 1].find((n, i) => i == indexRand);
}

function getRandCharInAlph() {
    const rowRand = Math.floor(Math.random() * addKeyboardLayout(alphabet).length);
    const indexRand = Math.floor(Math.random() * addKeyboardLayout(alphabet)[rowRand].length);
    return addKeyboardLayout(alphabet)[rowRand].find((n, i) => i == indexRand);
}

console.log(getRandCharInRow(1));
console.log(getRandCharInRow(2));
console.log(getRandCharInRow(3));
console.log(getRandCharInAlph());
