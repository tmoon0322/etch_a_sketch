button = document.querySelector("button")
button.addEventListener("click", setSize)
let size = 24

function setSize() {
    let size = prompt("Please enter a number 1 - 100")
    drawGrid(size)
}

function drawGrid(size) {
    const container = document.querySelector(".container")
    container.textContent = ""

    for (let i = 0; i < size; i++) {
        const row = document.createElement("div")
        row.setAttribute("class", "row")
        for (let i = 0; i < size; i++) {
            const box = document.createElement("div")
            box.setAttribute("class", "box")
            box.addEventListener("mouseover", () => {
                box.classList.add("color_change")
            })
            row.appendChild(box)
        }
        container.appendChild(row)
    }
}


const container = document.querySelector(".container")
container.textContent = ""

for (let i = 0; i < size; i++) {
    const row = document.createElement("div")
    row.setAttribute("class", "row")
    for (let i = 0; i < size; i++) {
        const box = document.createElement("div")
        box.setAttribute("class", "box")
        box.addEventListener("mouseover", () => {
            box.classList.add("color_change")
        })
        row.appendChild(box)
    }
    container.appendChild(row)
}