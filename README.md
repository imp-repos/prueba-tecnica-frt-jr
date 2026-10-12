# Prueba Técnica: Catálogo de Productos

**Improgress**

Duración: 2 horas

---

## Antes de empezar

Esta prueba no busca que sepas todo ni que la termines perfecta. Queremos ver
cómo pensás, cómo armás las cosas y cómo resolvés cuando algo no te sale a la
primera. Tómalo con calma. Si no llegas a todo, está bien: preferimos algo
simple y bien hecho que mucho a medias.

---

## El reto

Vas a construir un **catálogo de productos** de una tienda (NovaTech) a partir
del diseño que te damos. Es una sola pantalla: una grilla de tarjetas de
productos, con un buscador y un filtro por categoría.

El **diseño de Figma es la guía que debes seguir**: muestra la estructura de
la página (cómo se acomoda todo) y el estilo de cada parte del contenido
(colores, tamaños, tipografía, espacios). Tu objetivo es que tu resultado se
parezca a ese diseño.

Te damos los datos de los productos en este mismo repositorio; tu trabajo es
mostrarlos en pantalla y que se puedan filtrar.

---

## Qué recibes

- **Los datos** de los productos, ya incluidos en el repositorio. Cada producto
  trae nombre, categoría, precio, una descripción corta y un color.
- **El diseño** de referencia en Figma:
  https://www.figma.com/design/VCvcwfUKuZzxox2f2k3ES8/Prueba-Tecnica-JR

---

## Cómo correr y estructura del proyecto

No necesitás instalar nada. Abrí `index.html` en tu navegador (doble clic). Si
usás VS Code, también podés abrirlo con la extensión "Live Server".

- `index.html` -> la estructura base de la página.
- `style.css` -> tus estilos (está casi vacío a propósito).
- `script.js` -> tu código JavaScript, con comentarios que te guían por dónde
  empezar.
- `data.js` -> los datos de los productos, ya cargados en la variable `datos`
  (`datos.productos` y `datos.categorias`).
- `novatech-productos.json` -> los mismos datos en formato JSON, por si preferís
  usarlos así.

---

## Qué construir

**Lo principal (enfócate aquí primero):**

1. Un **encabezado** con el nombre de la tienda, un **buscador** (input de
   texto) y un **filtro por categoría** (un select o botones).
2. Una **grilla de tarjetas**, una por producto, mostrando su nombre,
   categoría, precio y descripción. Usa el `color` de cada producto como
   bloque o detalle visual (no necesitas imágenes reales).
3. Que el **buscador** filtre las tarjetas por nombre mientras se escribe.
4. Que el **filtro por categoría** muestre solo los productos de esa categoría.

**Si te queda tiempo (suma, pero no es obligatorio):**

- Un **estado vacío** con un mensaje cuando ningún producto coincide con el
  filtro.
- Un contador de "Agregados" que suba al hacer clic en un botón "Agregar" de
  cada tarjeta.
- Una etiqueta de "Destacado" en los productos que lo sean.
- Que se vea bien en distintos tamaños de pantalla.

---

## Reglas

- Puedes usar **HTML, CSS y JavaScript puro**, o **React** si lo manejás.
  React suma, pero no es obligatorio; usá lo que domines mejor.
- Trata de que el diseño se parezca al de referencia (colores, espacios,
  tamaños), sin obsesionarte con que quede exacto al pixel.
- Puedes usar IA y buscar en internet. Lo único que te pedimos es que
  **entiendas lo que entregás**, porque después nos lo vas a explicar.
- Mantené el código lo más ordenado que puedas, con nombres claros.

---

## Cómo se ve "bien"

- Los productos se muestran leyendo los datos del archivo (no escritos a mano
  uno por uno en el HTML).
- El buscador y el filtro por categoría funcionan.
- El código está ordenado y lo podés explicar.
- Se parece razonablemente al diseño.

---

## Tiempo y qué sigue

- Tenés **2 horas** para trabajar.
- Al terminar, vamos a platicar un rato: nos mostrás lo que hiciste, nos
  contás cómo lo resolviste y qué te costó más. No es un examen, es para
  conocerte mejor.

Lo más importante: mostranos cómo pensás y tus ganas de aprender. ¡Éxitos!
