import "./src/style.css";
import { pintarTarea } from "./src/tarea.js";
import { tarjeta } from "./src/tarjeta.js";
import { obtenerTareas } from "./src/utilidades.js";

if (document.querySelector("#app")) {
  const tareas = await obtenerTareas();
  tareas.forEach((tarea) => {
    document.querySelector("#listaTareas").appendChild(pintarTarea(tarea));
  });
}

if (document.querySelector("#trello")) {
  const tareas = await obtenerTareas();
  tareas.forEach((tarea) => {
    switch (tarea.status) {
      case 1:
        document.querySelector("#toDo").appendChild(tarjeta(tarea));
        break;
      case 2:
        document.querySelector("#doing").appendChild(tarjeta(tarea));
        break;
      case 3:
        document.querySelector("#did").appendChild(tarjeta(tarea));
        break;
      default:
        break;
    }
  });
}
