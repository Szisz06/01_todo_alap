import { TODOLIST } from "./adatok.js";
import TodoWiev from "./megjelenit.js";
import { TODOLIST2 } from "./adatok.js";

$(function () {
  const szulElem = $(".ujadat");
  new TodoWiev( TODOLIST, TODOLIST2, szulElem);
  
});