fetch("/api/products")
  .then((res) => res.json())
  .then((data) => {
    console.log(data, "datita");
    const products = document.getElementById("products");
    data.payload.forEach((product) => {
      const div = document.createElement("div");
      div.className = "col-4 d-flex justify-content-center p-4";
      div.style = "max-width: 400px; max-height: 500px";
      div.innerHTML = `

              <div
                class="card justify-content-between h-100"
                style="width: 15rem"
              >
                <img
                  src=${product.thumbnail}                 style="
                    max-width: 400px;
                    max-height: 200px;
                    object-fit: scale-down;
                  "
                />
                <div class="card-body d-flex flex-column justify-content-end">
                  <h5 class="card-title">${product.title}</h5>
                  <p class="card-text">${product.description}</p>
                  <p class="card-text">Unidades disponibles: ${product.stock}</p>
                  <p class="card-text">Precio: ${product.price}</p>

                  <button
                    id=${product._id}
                    class="agregar-al-carrito btn btn-link w-100 d-flex justify-content-center text-decoration-none"
                  >
                    <a
                      href="/product.html?id=${product._id}"
                      class="btn text-light bg-dark d-flex justify-content-center"
                      >Ver detalle del producto
                    </a>
                  </button>
                </div>
              </div>
      `;
      products.appendChild(div);
    });
  });
