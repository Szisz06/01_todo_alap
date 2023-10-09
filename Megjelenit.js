import MegjSor from "./MegjSor.js";

class TodoWiev {
  #list = [];
  #deletedRows = [];
  constructor(list, szulElem) {
    this.#list = list;
    this.szulElem = szulElem;
    szulElem.append("<table>");
    this.tablaElem = szulElem.children("table");
    this.addButton("Hupsz", () => {
      this.restoreLastDeletedItem();
    });
    this.addButton("Újratölt", () => {
      this.reloadPage();
    });
    this.tablabaIr();
  }

  addButton(text, clickHandler) {
    const button = $("<button>").text(text).on("click", clickHandler);

    this.szulElem.append(button);
  }

  tablabaIr() {
    for (let i = 0; i < this.#list.length; i++) {
      new MegjSor(this.#list[i], this.tablaElem, this);
    }
  }

  deleteRow(row) {
    this.#deletedRows.push(row);
    row.remove();
  }

  restoreLastDeletedItem() {
    if (this.#deletedRows.length > 0) {
      const lastDeletedRow = this.#deletedRows.pop();
      this.tablaElem.append(lastDeletedRow);
    }
  }
  reloadPage() {
    location.reload();
  }
}
export default TodoWiev;
