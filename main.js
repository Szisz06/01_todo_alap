import TodoWiev from "./megjelenit.js";
import { TODOLIST2 } from "./adatok.js";

$(function () {
  const szulElem = $(".ujadat");
  new TodoWiev( TODOLIST2, szulElem);
  
});