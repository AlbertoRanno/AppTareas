let fs = require("fs");
//console.log (fs);

let textoJson = fs.readFileSync(__dirname + "/tareas.json", "utf-8");
//console.log (datosJson);   // - FORMA CLASICA
//let textoJson = require("./tareas.json");
//console.log (textoJson);  // - NUEVA FORMA

//Puedo crear un objeto literal "tareas", que guarde todas las funciones, como el de la concesionaria.
//y luego exporte este unico objeto. Y cito cada propiedad acorde a la func que necesite.

let tareas = {
  datosDeJSONaArray: JSON.parse(textoJson), // si los ponia como variable definida fuera del objeto, no era accesible desde app.js, dado que solo tendra disponible lo exportado.
  listarTareas: function (unArray) {
    unArray.forEach((tareas) => {
      console.log(tareas);
    });
  },

  escribirJSON: function (nuevasTareas) {
    let datosDeArrayAJSON = JSON.stringify(nuevasTareas);
    fs.writeFileSync(__dirname + "/tareas.json", datosDeArrayAJSON);
  },
  guardarTareas: function (tarea) {
    this.datosDeJSONaArray.push(tarea);
    this.escribirJSON(this.datosDeJSONaArray);
  },
  filtrarPorEstado: function (estado) {
    let tareasFiltradas = this.datosDeJSONaArray;
    return tareasFiltradas.filter((tareas) => tareas.estado == estado);
  },
};

module.exports = tareas;
