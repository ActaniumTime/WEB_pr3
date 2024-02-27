document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('generateButton').addEventListener('click', generateMagicSquare);
});

function generateMagicSquare() {
    const N = document.getElementById("inputN").valueAsNumber;
    let magicSquare = Array.from({ length: N }, () => Array.from({ length: N }, () => 0));

    let num = 1;
    let i = 0;
    let j = Math.floor(N / 2);

    while (num <= N * N) {
        magicSquare[i][j] = num;
        num++;
        let newi = (i - 1 + N) % N;
        let newj = (j + 1) % N;
        if (magicSquare[newi][newj] !== 0) {
            i = (i + 1) % N;
        } else {
            i = newi;
            j = newj;
        }
    }

    displayMagicSquare(magicSquare);
}

function displayMagicSquare(square) {
    const container = document.getElementById("magicSquareContainer");
    container.innerHTML = "<p>Magic Square:</p>";
    const table = document.createElement("table");
    for (let i = 0; i < square.length; i++) {
        const row = document.createElement("tr");
        for (let j = 0; j < square[i].length; j++) {
            const cell = document.createElement("td");
            cell.textContent = square[i][j];
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
    container.appendChild(table);
}
