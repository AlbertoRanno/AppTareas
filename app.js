const tareas = require("./funcionesDeTareas.js");

//console.log(process.argv);

let comandoPorConsola = process.argv[2];

switch (comandoPorConsola) {
  case "listar":
    console.log("Listado de Tareas:");
    tareas.listarTareas(tareas.datosDeJSONaArray);
    break;
  case "crear":
    console.log("Agregando nueva tarea al JSON - Indicar Titulo");
    let nuevasTareas = {
      titulo: "_____ completar_____",
      estado: "pendiente",
    };
    tareas.guardarTareas(nuevasTareas);
    break;
  case undefined:
    console.log("Atención - Tienes que pasar una acción");
    break;
  case "filtrar":
    let estado = "en progreso";
    let filtradas = tareas.filtrarPorEstado(estado);
    tareas.listarTareas(filtradas);
    break;
  default:
    console.log("No entiendo qué quieres hacer.");
    console.log(
      "los unicos comandos que entiendo son 'listar', 'crear' y 'filtrar'"
    );
    break;
}
