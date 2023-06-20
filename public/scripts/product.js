const params = new URLSearchParams(location.search);
const pid = params.get("id");
fetch(`/api/products/${pid}`)
  .then((res) => res.json())
  .then((data) => {
    // const dataProudct = data.response[0];
    const product = data.response;
    const productDiv = document.getElementById("product");
    const div = document.createElement("div");
    const innerHTML = `
        <div class="container overflow-hidden h-100 w-100 bg-warning">
            <h1 class="mb-0">Producto: ${product.title}</h1>
            <div
                class="d-flex w-100 h-100 justify-content-center align-items-center mt-0"
            >

                <div class="card mb-3 w-75 h-75">
                <div class="row g-0 h-100">
                    <div
                    class="col-md-4 h-100 d-flex justify-content-center align-items-center"
                    >
                    <img
                        src=${product.thumbnail}
                        class="img-fluid rounded-start"
                        alt="..."
                    />
                    </div>
                    <div
                    class="col-md-8 h-100 d-flex justify-content-center align-items-center"
                    >
                    <div class="card-body">
                        <h5 class="card-title">${product.title}</h5>
                        <p class="card-text">${product.description}</p>
                        <p class="card-text">${product.stock}</p>
                        <div class="form-group">
                        <label for="inputCantidad" class="form-label">Cantidad</label>
                        <div class="input-group">
                            <input
                            type="number"
                            class="form-control form-control-warning"
                            id="inputCantidad"
                            min="1"
                            placeholder="Ingresa la cantidad"
                            required
                            value='0'
                            />
                            <button
                            class="btn btn-warning"
                            type="submit"
                            id="btn-comprar"
                            class="agregar-al-carrito"
                            >Agregar al carrito x ${product.price}</button>

                        </div>
                        <div class="form-text text-warning">Ingresa la cantidad de
                            productos que deseas agregar al carrito.</div>
                        </div>

                    </div>  
                    </div>

                </div>
                </div>
            </div>
        </div>
    `;
    div.innerHTML = innerHTML;
    productDiv.appendChild(div);
  });
