const params2 = new URLSearchParams(location.search);
const pid2 = params2.get("id");

const buttonSubmit = document.getElementById("btn-comprar");
// const units = product.value;
console.log(product, "product");
buttonSubmit.addEventListener("click", (e) => {
  console.log("aca entra");
  e.preventDefault();
  agregarAlCarrito(pid);
});
async function agregarAlCarrito(productId) {
  const product = document.getElementById("inputCantidad");
  const units = product.value;
  // Implementa la lógica para agregar el producto al carrito usando el ID recibido
  try {
    const response = await fetch(
      `http://localhost:8060/api/carts?cid=6491cd2966e5508adacac8e0/product?pid=${productId}?un=${units}`,
      {
        method: "PUT",
      }
    );
    if (response.ok) {
      console.log(response, "response");
      alert("product created");
      window.location.href = "/carts/1";
    } else {
      const errorData = await response.json();
      alert(`Error: ${errorData.message}`);
    }
  } catch (error) {
    console.error("Error:", error);
    alert("An error occurred");
  }
  console.log(
    `Agregar al carrito id: ${productId}, y stock ${stock} ${valueQuantity}`
  );
}
