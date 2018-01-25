function createLayout() {
    const topRow = 'QWERTYUIOP'
    const middleRow = 'ASDFGHJKL'
    const bottomRow = 'ZCVBNM'

    function createRow(row) {
        let ddd = 34;
        row = Array.from(row)
        return row.map(n => '<button>' + n + '</button>').join('')
    }
    const rows = '<div class="toprow">' + createRow(topRow) + '</div><div class="middlerow">' + createRow(middleRow) + '</div><div class="bottomrow">' + createRow(bottomRow) + '</div>'
    const main = document.querySelector("main");
    main.insertAdjacentHTML('afterbegin', rows)
}
createLayout()
