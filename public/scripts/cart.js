const div = document.getElementById("cart");

fetch(`/api/carts/6491cd2966e5508adacac8e0`)
  .then((response) => response.json())
  .then((data) => {
    const cart = data.response;
    fetch(`/api/products/${cart.product_id}`)
      .then((response) => response.json())
      .then((data2) => {
        const product = data2.response;
        const { title, description, price, thumbnail, code } = product;
        const html = `
    <div>
      <h3>${title}</h3>
      <p>${description}</p>
      <p>Unidades en carrito: ${cart.quantity}</p>
      <p>Price: $${price}</p>
      <img
      src=${product.thumbnail} style="
        max-width: 400px;
        max-height: 200px;
        object-fit: scale-down;
      "
      alt="${title}" 
      />
      <button type="submit" id="${cart.id}" >Eliminar de carrito</button>
    </div>
    `;
        div.innerHTML = html;
      });
  });
