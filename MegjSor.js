class MegjSor {
  #adat = {};
  constructor(adat, szulElem, todoView) {
    this.#adat = adat;
    this.szulElem = szulElem;
    this.todoView = todoView;
    this.sor();
    this.sorElem = this.szulElem.children("tr:last-child");
    this.pipaElem = this.sorElem.find(".kesz");
    this.torolElem = this.sorElem.find(".töröll");

    this.pipaElem.on("click", () => {
      this.toggleBackgroundColor();
    });

    this.torolElem.on("click", () => {
      this.todoView.deleteRow(this.sorElem);
    });
  }

  sor() {
    let txt = "<tr>";
    for (const key in this.#adat) {
      txt += `<td>${this.#adat[key]}</td>`;
    }
    txt += `<td><span class="kesz">✅</span></td> <td><span class="töröll">❌</span></td>`;
    txt += "</tr>";
    this.szulElem.append(txt);
  }

  toggleBackgroundColor() {
    if (this.sorElem.css("background-color") === "rgb(144, 238, 144)") {
      this.sorElem.css("background-color", "");
    } else {
      this.sorElem.css("background-color", "lightgreen");
    }
  }
}

export default MegjSor;
