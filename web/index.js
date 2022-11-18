let celdas = document.querySelectorAll(".celda");
let linea = document.querySelector(".raya");

let contador = 0;

const tresEnLinea = (x, y, z, simbolo, color) => {
    if (celdas[x].textContent == simbolo &&
        celdas[y].textContent == simbolo &&
        celdas[z].textContent == simbolo) {

        celdas[x].style.backgroundColor = color;
        celdas[y].style.backgroundColor = color;
        celdas[z].style.backgroundColor = color;
    }
}

celdas.forEach(e => {
    e.addEventListener("click", () => {
        if (contador % 2 == 0 && e.innerHTML == "") {
            e.innerHTML = "X";
            contador++;
        }
        if (contador % 2 == 1 && e.innerHTML == "") {
            e.innerHTML = "O";
            contador++;
        }
        tresEnLinea(0, 3, 6, "X", "red");
        tresEnLinea(0, 1, 2, "X", "red");
        tresEnLinea(0, 4, 8, "X", "red");
        tresEnLinea(3, 4, 5, "X", "red");
        tresEnLinea(6, 7, 8, "X", "red");
        tresEnLinea(1, 4, 7, "X", "red");
        tresEnLinea(2, 4, 6, "X", "red");
        tresEnLinea(2, 5, 8, "X", "red");

        tresEnLinea(0, 3, 6, "O", "blue");
        tresEnLinea(0, 1, 2, "O", "blue");
        tresEnLinea(0, 4, 8, "O", "blue");
        tresEnLinea(3, 4, 5, "O", "blue");
        tresEnLinea(6, 7, 8, "O", "blue");
        tresEnLinea(1, 4, 7, "O", "blue");
        tresEnLinea(2, 4, 6, "O", "blue");
        tresEnLinea(2, 5, 8, "O", "blue");
    })
});