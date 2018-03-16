const alphabet = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";
let keyboard = [
    [],
    [],
    []
];

for (let i = 0, k = 0; i < 3; k += 1) {
    keyboard[i].push(alphabet.charAt(k));
    if (
        alphabet.charAt(k) === "]" ||
        alphabet.charAt(k) === "'" ||
        alphabet.charAt(k) === "/") {
        i += 1;
    }
}

function id(i, k) {
    return keyboard[i][k];
};

const hel = id(1, 5) + id(0, 2) + id(1, 8) + id(1, 8) + id(0, 8);
const jav = id(1, 6) + id(1, 0) + id(2, 3) + id(1, 0) + id(1, 1) + id(2, 2) + id(0, 3) + id(0, 7) + id(0, 9) + id(0, 4);
const tra = id(0, 4) + id(0, 3) + id(1, 0) + id(0, 7) + id(2, 5) + id(0, 2) + id(0, 3);

console.log(`Hello: ${hel}`);
console.log(`Javascript: ${jav}`);
console.log(`Trainer: ${tra}`);
