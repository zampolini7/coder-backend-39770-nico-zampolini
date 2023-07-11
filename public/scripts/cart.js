const div = document.getElementById("cart");

fetch(`/api/carts/649d79bea013def76d32be82`)
  .then((response) => response.json())
  .then((data) => {
    console.log(data, "data");
    const cart = data.response;
    const products = cart.products;
    const html = products
      .map((product) => {
        console.log(product, "lokai");
        const { title, description, price, thumbnail, code, quantity } =
          product;
        return `
        <div>
          <h3>${title}</h3>
          <p>${description}</p>
          <p>Unidades en carrito: ${quantity}</p>
          <p>Price: $${price}</p>
          <img src=${thumbnail} style="
            max-width: 400px;
            max-height: 200px;
            object-fit: scale-down;
          " alt="${title}" />
          <button type="submit" id="${cart.id}">Eliminar de carrito</button>
        </div>
      `;
      })
      .join("");
    div.innerHTML = html;
  });
