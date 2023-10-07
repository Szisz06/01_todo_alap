class TodoWiev {
    constructor(TODOLIST, TODOLIST2, szulElem) {
        this.TODOLIST = TODOLIST;
        this.TODOLIST2 = TODOLIST2;
        this.szulElem = szulElem;
        let tabla = this.htmlOsszeallit();
        szulElem.html(tabla);
    }

    htmlOsszeallit() {
        let tabla =
            "<table class='table table-striped table-info text-center' id='familyTable'>";

        tabla += "<tbody>";
        
        for (let i = 0; i < this.TODOLIST2.length; i++) {
            tabla += "<tr>";
            tabla += `<td>${this.TODOLIST2[i].tevekenyseg}</td>`;
            tabla += `<td>${this.TODOLIST2[i].hatarido}</td>`;
            tabla += "</tr>";
        }

        tabla += "</tbody>";
        tabla += "</table>";
        return tabla;
    }
}

export default TodoWiev;
