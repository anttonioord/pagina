// Carrito de compras
let carrito = [];
let total = 0;
const tipoCambio = 7.8; // 1 USD = 7.8 GTQ

// Función para agregar productos al carrito
function agregarAlCarrito(nombreProducto, precioProductoGTQ) {
    // Aquí se usa directamente el precio en Quetzales (GTQ)
    carrito.push({ nombre: nombreProducto, precio: precioProductoGTQ });
    total += precioProductoGTQ; // Agregar al total en quetzales
    actualizarCarrito();
}

// Función para actualizar el carrito y el total
function actualizarCarrito() {
    const totalCarrito = document.getElementById("totalCarrito");
    totalCarrito.innerHTML = `Total: Q.${total.toFixed(2)}`; // Mostrar el total en Quetzales
}

// Función para limpiar el carrito
function limpiarCarrito() {
    carrito = [];
    total = 0;
    actualizarCarrito();
}

// Función para finalizar la compra
function finalizarCompra() {
    if (total > 0) {
        alert("¡Compra realizada con éxito!");
        limpiarCarrito();
    } else {
        alert("El carrito está vacío. Agrega productos antes de finalizar la compra.");
    }
}






// Función para mostrar y ocultar el menú
function toggleMenu() {
    const menu = document.getElementById("menu");
    const btn = document.getElementById("toggleMenuBtn");

    if (menu.style.display === "none" || menu.style.display === "") {
        menu.style.display = "block";
        btn.innerHTML = "Ocultar Redes sociales";
    } else {
        menu.style.display = "none";
        btn.innerHTML = "Mostrar Redes Sociales";
    }
}

