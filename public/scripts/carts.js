let carts = document.querySelectorAll(".cart-id");

carts.forEach(async function (cart) {
  try {
    const response = await fetch(
      `http://localhost:${process.env.PORT}/api/products/${+cart.id}`
    );
    const data = await response.json(); // Convierte la respuesta en formato JSON

    console.log(data);

    // Accede a los valores específicos del objeto data
    const code = data.code;
    const description = data.description;
    const price = data.price;
    const thumbnail = data.thumbnail;
    const title = data.title;

    const handleSubmit = (e) => {
      //   e.preventDefault();
      e.target.preventDefault();
      const id = e.target.value;
      console.log(id);
    };
    // Crea elementos HTML para mostrar los datos en el DOM
    const cartItem = document.createElement("div");
    cartItem.innerHTML = `
    <form onSubmit={${() => handleSubmit}>
      <h3>${title}</h3>
      <p>${description}</p>
      <p>Code: ${code}</p>
      <p>Price: $${price}</p>
      <img src="${thumbnail}" alt="${title}" />
      <button type="submit" id="${cart.id}" onClick={${() =>
      console.log(cart.id)}}  />
    </form>
      `;

    // Agrega el elemento al DOM (por ejemplo, a un contenedor con id "cart-items")
    const cartItemsContainer = document.querySelector(".cart-id");
    cartItemsContainer.appendChild(cartItem);
  } catch (error) {
    console.log(error);
  }
});
