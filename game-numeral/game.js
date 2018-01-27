//////////////////// create HTML ////////////////////
function createWrapper() {
    let boxString = '';
    for (let i = 0; i < 16; i++) {
        boxString = boxString + '<div id="cell' + i + '" class="item"></div>'
    }
    const wrapper = '<div id="wrapper">' + boxString + '</div>'
    return wrapper
}
const body = document.querySelector("body");
body.innerHTML = createWrapper()

//////////////////// LOGIC //////////////////////////
const wrap = document.querySelector("#wrapper");
let gameBase = {}
for (let i = 0; i < 16; i++) {
    gameBase['cell' + i] = null
}

function cell(i) {
    let stop = false;
    while (stop === false) {
        let keyRand = Math.floor(Math.random() * 16)
        if (gameBase['cell' + keyRand] === null) {
            gameBase['cell' + keyRand] = i;
            wrap.children[keyRand].innerHTML = i;
            stop = true;
        }
    }
}
for (let i = 0; i < 8; i++) {
    cell(i)
    cell(i)
}

function classRemove(box) {
    for (const n of box.classList) {
        if (n !== "item") {
            box.classList.remove(n)
        }
    }
}

function changeClass(classNew, box) {
    classRemove(box);
    box.classList.add(classNew);
}

let trigger = null;
let safeKey = false;

function onClick(event) {
    if (event.target !== event.currentTarget && event.target.classList.contains("disabled") === false && safeKey === false) {
        changeClass("clicked", event.target)
        if (trigger === null) {
            trigger = event.target;
        } else {
            changeClass("initial", event.target)
            changeClass("initial", trigger)
            safeKey = true;

            function timeout() {
                if (event.target.textContent !== trigger.textContent) {
                    classRemove(event.target)
                    classRemove(trigger)
                } else {
                    changeClass("disabled", event.target)
                    changeClass("disabled", trigger)
                }
                trigger = null;
                safeKey = false;
            }
            setTimeout(timeout, 1000);
        }
    }
}
wrap.addEventListener("click", onClick);
