let main = document.getElementById("main")
let rows = document.getElementById("rows")
let cols = document.getElementById("columns")
let buttonNode = document.getElementById("button")

buttonNode.addEventListener("click", function() {
    let table = document.createElement("table")
    main.append(table);
    let tbody = document.createElement("tbody")
    table.append(tbody)

    for (let i = 0; i < rows.value; i++) {
        let tr = document.createElement("tr")
        tbody.append(tr)

        for (let j = 0; j < cols.value; j++) {
            let td = document.createElement("td")
            tr.append(td)
        }
    }
    return table
});