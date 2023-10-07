class MegjSor {
  #adat = {};
  constructor(adat, szulElem) {
    this.#adat = adat;
    this.szulElem = szulElem;
    this.sor();
    this.sorElem=this.szulElem.children("tr:last-child")
    this.pipaElem=$(".kesz:last")
    //this.pipaElem=this.sorElem.children("td").children(".kesz")
    this.pipaElem.on("click",()=>{
        console.log(this)
    })
  }
  sor() {
    let txt = "<tr>";
    for (const key in this.#adat) {
      txt += `<td>${this.#adat[key]}</td>`;
    }
    txt += `<td><span class"kesz">✅</span> <span class"töröll">🪣</span></td>`;
    txt += "</tr>";
    this.szulElem.append(txt);
  }
}
export default MegjSor;

//td tagaeken MINDEN MŰKÖDJÖN A BOOTSTRAP