/////////////////  HTML  /////////////////
const body = document.querySelector("body");
const root = document.querySelector("#root");
const text = document.querySelector("#text");
text.hidden = true;

function createRoot() {
    let boxString = '';
    for (let i = 0; i < 9; i++) {
        boxString = boxString + '<div id="cell' + i + '" class="box"><b></b></div>'
    }
    const root = '<div id="root">' + boxString + '</div><div id="text"><b></b></div>'
    return root
}
body.innerHTML = createRoot()

/////////////////  LOGIC  /////////////////
const WIN_COMBINATIONS = [
    ["0", "4", "8"],
    ["2", "4", "6"],
    ["1", "4", "7"],
    ["3", "4", "5"],
    ["0", "1", "2"],
    ["6", "7", "8"],
    ["0", "3", "6"],
    ["2", "5", "8"]
];
let gameStatus = {}
let winSrtingRand = 0;

for (let i = 0; i < 9; i++) {
    gameStatus['cell' + i] = null
}

function onClick(event) {
    if (event.target !== event.currentTarget && event.target.classList.contains("box") && win()) {
        gameStatus[event.target.id] = true;
        if (win()) {
            startGame()
            win()
        }
        setStatus()
    }
}
root.addEventListener("click", onClick);

function setStatus() {
    for (let i = 0; i < 9; i++) {
        if (gameStatus['cell' + i] === true) {
            root.children[i].firstChild.innerHTML = "X";
            root.children[i].classList.add("player-x");
        }
        if (gameStatus['cell' + i] === false) {
            root.children[i].firstChild.innerHTML = "O";
            root.children[i].classList.add("player-o");
        }
    }
}

function tryToWin() {
    let x = 1;
    let stop = true;
    let counter = 0;
    let tryWinString;

    function gameStatusCheck(n) {
        const check = tryWinString[n]
        return gameStatus['cell' + check]
    }

    function searchInString() {
        if (gameStatusCheck(0) !== true &&
            gameStatusCheck(1) !== true &&
            gameStatusCheck(2) !== true &&
            searchPreWin(true) === true ||
            counter === 0
        ) {
            let stopTwo = true;
            let counterTwo = 0;
            while (stopTwo === true && counterTwo < 10) {
                const winCellRand = Math.floor(Math.random() * 3);
                if (gameStatusCheck(winCellRand) === null) {
                    const check = tryWinString[winCellRand];
                    gameStatus['cell' + check] = false;
                    stopTwo = false;
                    stop = false;
                }
                counterTwo += 1;
            }
        }
    }
    while (stop === true && counter < 30) {
        winSrtingRand = Math.floor(Math.random() * (x + 1));
        tryWinString = WIN_COMBINATIONS[winSrtingRand];
        searchInString()
        counter += 1;
        if (counter > 6 && x === 1) {
            x = 3;
        }
        if (counter > 12 && x === 3) {
            x = 7;
        }
    }
}

function searchPreWin(condition) {
    let search = true;
    for (const n of WIN_COMBINATIONS) {
        if (gameStatus['cell' + n[0]] === condition && gameStatus['cell' + n[1]] === condition && gameStatus['cell' + n[2]] === null) {
            gameStatus['cell' + n[2]] = false;
            search = false;
        } else
        if (gameStatus['cell' + n[0]] === condition && gameStatus['cell' + n[1]] === null && gameStatus['cell' + n[2]] === condition) {
            gameStatus['cell' + n[1]] = false;
            search = false;
        } else
        if (gameStatus['cell' + n[0]] === null && gameStatus['cell' + n[1]] === condition && gameStatus['cell' + n[2]] === condition) {
            gameStatus['cell' + n[0]] = false;
            search = false;
        }
        if (search === false) {
            winSrtingRand = n;
            break;
        }
    }
    return search
}

function win() {
    let count = 0;
    let search = true;

    function noWinners(n) {
        if (
            (gameStatus['cell' + n[0]] === true && gameStatus['cell' + n[1]] === false) ||
            (gameStatus['cell' + n[0]] === true && gameStatus['cell' + n[2]] === false) ||
            (gameStatus['cell' + n[1]] === true && gameStatus['cell' + n[2]] === false) ||
            (gameStatus['cell' + n[0]] === true && gameStatus['cell' + n[1]] === false) ||
            (gameStatus['cell' + n[2]] === true && gameStatus['cell' + n[0]] === false) ||
            (gameStatus['cell' + n[2]] === true && gameStatus['cell' + n[1]] === false)
        ) { count += 1 }
    }

    for (const n of WIN_COMBINATIONS) {
        if (gameStatus['cell' + n[0]] === true && gameStatus['cell' + n[1]] === true && gameStatus['cell' + n[2]] === true) {
            text.firstChild.innerHTML = "YOU WIN!!!";
            search = false;
        } else
        if (gameStatus['cell' + n[0]] === false && gameStatus['cell' + n[1]] === false && gameStatus['cell' + n[2]] === false) {
            text.firstChild.innerHTML = "YOU LOOSER!!!";
            search = false;
        } else {
            noWinners(n)
        }
    }
    if (count > 6) {
        text.firstChild.innerHTML = "IS DRAW!!!";
        search = false;
        for (const n of root.children) {
            if (n.classList.contains("player-x") === false) {
                n.classList.add("player-x")
            }
        }
    }
    if (search === false) {
        text.hidden = false;
        text.style = "width: 500px";
    }
    return search
}

function startGame() {
    if (searchPreWin(false) === true) {
        if (searchPreWin(true) === true) {
            if (gameStatus['cell4'] === null) { gameStatus['cell4'] = false } else {
                tryToWin()
            }
        }
    }
}
