let elementos = document.querySelectorAll(".cart-id");

// Recorrer los elementos y hacer una solicitud fetch por cada uno
elementos.forEach(async function (elemento) {
  let id = elemento.id;

  // Realizar solicitud fetch
  try {
    const response = await fetch(
      `http://localhost:${process.env.PORT}/api/products/:${id}`
    );

    console.log(response);

    // Crear elementos HTML con la estructura proporcionada
    var row = document.createElement("div");
    row.classList.add("row", "no-gutters");

    var colImg = document.createElement("div");
    colImg.classList.add("col-md-3");

    var img = document.createElement("img");
    img.classList.add("card-img");
    img.src = "ruta_de_la_imagen.jpg";
    img.alt = "Imagen";

    var colBody = document.createElement("div");
    colBody.classList.add("col-md-9", "d-flex");

    var cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    var cardTitle = document.createElement("h2");
    cardTitle.classList.add("card-title");
    cardTitle.textContent = "Nombre del producto: " + data.nombre;

    var cardSubtitle = document.createElement("h4");
    cardSubtitle.classList.add("card-subtitle");
    cardSubtitle.textContent = "Subtítulo de la tarjeta";

    var cardQuantity = document.createElement("h6");
    cardQuantity.classList.add("card-text");
    cardQuantity.textContent = "Cantidad: " + data.quantity;

    var cardText = document.createElement("p");
    cardText.classList.add("card-text");
    cardText.textContent = "Información adicional sobre la tarjeta.";

    // Estructurar los elementos
    colImg.appendChild(img);

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardSubtitle);
    cardBody.appendChild(cardQuantity);
    cardBody.appendChild(cardText);

    colBody.appendChild(cardBody);

    row.appendChild(colImg);
    row.appendChild(colBody);

    // Agregar la estructura al elemento correspondiente
    elemento.appendChild(row);
  } catch (error) {}
});

const product = document.getElementById("inputCantidad");
async function agregarAlCarrito(productId, stock) {
  const units = product.value;
  // Implementa la lógica para agregar el producto al carrito usando el ID recibido
  try {
    const response = await fetch(
      `http://localhost:${process.env.PORT}/api/carts/1/product/${productId}/${units}`,
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
