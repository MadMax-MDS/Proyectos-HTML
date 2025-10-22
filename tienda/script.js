const tienda = [
  { id: 1, nombre: "Aguacate", precio: 2000 },
  { id: 2, nombre: "Manzana", precio: 1000 },
  { id: 3, nombre: "Plátano maduro", precio: 1800 },
  { id: 4, nombre: "Mandarina", precio: 1500 }
];

let carrito = [];

const contenedorTienda = document.getElementById("tienda");
const contenedorCarrito = document.querySelector(".items");
const totalTexto = document.querySelector(".total");
const botonComprar = document.querySelector(".comprar");

// Mostrar productos en la tienda
tienda.forEach(item => {
  const itemDiv = document.createElement("div");
  itemDiv.classList.add("producto");

  const infoDiv = document.createElement("div");
  infoDiv.classList.add("info");

  const nombre = document.createElement("p");
  nombre.classList.add("nombre");
  nombre.textContent = item.nombre;

  const precio = document.createElement("p");
  precio.classList.add("precio");
  precio.textContent = "$" + item.precio;

  infoDiv.appendChild(nombre);
  infoDiv.appendChild(precio);

  const btnAgregar = document.createElement("button");
  btnAgregar.classList.add("add-btn");
  btnAgregar.textContent = "🛒";
  btnAgregar.addEventListener("click", () => agregarAlCarrito(item.id));

  itemDiv.appendChild(infoDiv);
  itemDiv.appendChild(btnAgregar);
  contenedorTienda.appendChild(itemDiv);
});

// Agregar producto al carrito
function agregarAlCarrito(id) {
  const producto = tienda.find(p => p.id === id);
  const itemEnCarrito = carrito.find(item => item.id === id);

  if (itemEnCarrito) {
    itemEnCarrito.cantidad++;
  } else {
    carrito.push({ ...producto, cantidad: 1 });
  }

  mostrarCarrito();
}

// Mostrar carrito
function mostrarCarrito() {
  contenedorCarrito.innerHTML = "";
  let total = 0;

  carrito.forEach((item, index) => {
    const div = document.createElement("div");
    div.classList.add("producto");

    const texto = document.createElement("span");
    texto.textContent = `(${item.cantidad}) ${item.nombre} - $${item.precio * item.cantidad}`;

    const btnEliminar = document.createElement("button");
    btnEliminar.innerHTML = "🗑️";
    btnEliminar.addEventListener("click", () => eliminarDelCarrito(index));

    div.appendChild(texto);
    div.appendChild(btnEliminar);
    contenedorCarrito.appendChild(div);

    total += item.precio * item.cantidad;
  });

  totalTexto.textContent = `Total: $${total}`;
}

// Eliminar producto del carrito
function eliminarDelCarrito(index) {
  if (carrito[index].cantidad > 1) {
    carrito[index].cantidad--;
  } else {
    carrito.splice(index, 1);
  }
  mostrarCarrito();
}

// Botón comprar
botonComprar.addEventListener("click", () => {
  if (carrito.length === 0) {
    alert("El carrito está vacío ");
  } else {
    alert("Compra realizada con éxito ");
    carrito = [];
    mostrarCarrito();
  }
});
