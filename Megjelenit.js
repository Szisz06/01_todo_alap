import MegjSor from "./MegjSor.js";

class TodoWiev {
    #list = [];
  constructor(list, szulElem) {
    this.#list = list;
    szulElem.append("<table class='table table-striped table-info text-center'>");
    this.tablaElem = szulElem.children("table");
    console.log(this.tablaElem)
    this.tablabaIr();
  }

  tablabaIr() {
    let txt = "";

    for (let i = 0; i < this.#list.length; i++) {
      new MegjSor(this.#list[i], this.tablaElem)
    }
    this.tablaElem.append(txt);
  }
}

export default TodoWiev;
