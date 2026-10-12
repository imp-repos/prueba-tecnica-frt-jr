// =========================================================
//  Catálogo de Productos - NovaTech
//
//  Los datos ya están cargados en la variable "datos"
//  (ver data.js). Tenés disponibles:
//     datos.productos    -> lista de productos
//     datos.categorias   -> lista de categorías
//     datos.moneda       -> "Q"
//
//  Cada producto tiene:
//     nombre, categoria, precio, descripcion, color, destacado
// =========================================================

// 1) Referencias a los elementos del HTML
const catalogo = document.getElementById("catalogo");
const buscador = document.getElementById("buscador");
const selectCategoria = document.getElementById("categoria");

// 2) Mostrar productos en pantalla
//    Recibe una lista y crea una tarjeta por cada producto
//    dentro de #catalogo. Guiate por el diseño de Figma.
function mostrarProductos(lista) {
  // TODO: limpiá #catalogo y creá una tarjeta por cada producto de "lista".
  //       Tip: podés usar lista.forEach(...) para recorrerla.
  //       Para cada producto usá sus campos: producto.nombre, producto.precio, etc.
}

// 3) Llenar el filtro con las categorías
function cargarCategorias() {
  // TODO: agregá una <option> al select por cada categoría en datos.categorias.
}

// 4) Filtrar los productos según el buscador y la categoría
function filtrar() {
  // TODO: leé el texto del buscador y la categoría seleccionada,
  //       filtrá datos.productos y llamá a mostrarProductos(resultado).
}

// 5) Conectar los eventos (cuando el usuario escribe o cambia la categoría)
// TODO: buscador.addEventListener("input", filtrar);
// TODO: selectCategoria.addEventListener("change", filtrar);

// 6) Al cargar la página: llená las categorías y mostrá todos los productos
cargarCategorias();
mostrarProductos(datos.productos);
