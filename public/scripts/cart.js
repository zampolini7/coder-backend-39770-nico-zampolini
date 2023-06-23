const div = document.getElementById("cart");

fetch(`/api/carts/6493373168e55ecc0fb91da8`)
  .then((response) => response.json())
  .then((data) => {
    console.log(data, "data");
    const cart = data.response;
    fetch(`/api/products/${cart}`)
      .then((response) => response.json())
      .then((data2) => {
        console.log(data2);
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
