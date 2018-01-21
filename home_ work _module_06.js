const letters = "qwertyuiopasdfghjklzxcvbnm"
const keyTrainer = {}
keyTrainer.chars = Array.from(letters)

keyTrainer.checkPositiveInteger = function(inputNumber) { return inputNumber === Math.round(Math.abs(inputNumber)) }
keyTrainer.setCharCount = function() {
    let numb = prompt("Введите число, равное количеству символов", "")
    while (this.checkPositiveInteger(+numb) === false) {
        numb = prompt("Введите целое положительное число", "")
    }
    this.charCount = +numb
    return numb
}

keyTrainer.createTask = function() {
    let arr = new Array(this.charCount).fill('')
    this.task = arr.map(n => this.chars[(Math.floor(Math.random() * this.chars.length))])
}

keyTrainer.userErrors = 0
keyTrainer.startTask = function() {
    this.userInput = prompt(`Введите данную строку ${this.task.join('')}`, '');
    return this.userInput
}
keyTrainer.checkErrors = function() {
    const arrUserInput = Array.from(this.userInput)
    const errorArr = (this.task).filter((n, i) => (n === arrUserInput[i]) === false)
    this.userErrors = errorArr.length
}

function run() {
    let abort = keyTrainer.setCharCount()
    if (abort === null) {
        alert('Упс... \nВы упустили свой шанс!')
    } else {
        keyTrainer.createTask()
        let task = keyTrainer.startTask()
        if (task === null) {
            alert('Упс... \nВы упустили свой шанс!')
        } else {
            keyTrainer.checkErrors()
            console.log(keyTrainer.userErrors)
            if (keyTrainer.userErrors === 0) {
                alert("Поздравляем, у вас нет ошибок!!!")
            } else {
                alert(`Кошмар, количество ваших ошибок: ${keyTrainer.userErrors}. \n Удачи в следующем занятии!!!`)
            }
        }
    }
}

run()
