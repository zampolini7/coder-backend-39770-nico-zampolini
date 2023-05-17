// Obtén todos los elementos con la clase "agregar-al-carrito"
const agregarAlCarritoButtons = document.querySelectorAll(
  ".agregar-al-carrito"
);

// Itera sobre cada botón y asigna el evento onclick
agregarAlCarritoButtons.forEach((button) => {
  const productId = button.dataset.productId; // Obtén el ID del producto desde el atributo de datos

  button.addEventListener("click", (e) => {
    e.preventDefault();
    agregarAlCarrito(productId); // Llama a la función agregarAlCarrito con el ID del producto
  });
});

function agregarAlCarrito(productId) {
  // Implementa la lógica para agregar el producto al carrito usando el ID recibido

  console.log("Agregar al carrito:", productId);
}
