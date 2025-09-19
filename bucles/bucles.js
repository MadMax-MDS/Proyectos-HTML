const tabla = document.getElementById("tabla")


for (let x = 1; x <= 10; x++) {
    const fila = document.createElement("tr")
    tabla.appendChild(fila)

    for (let y = 1; y <= 10; y++){
        const columna = document.createElement("td")
        fila.appendChild(columna)

        columna.textContent = x * y
    }

}
