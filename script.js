import ProductManager from "./index.js";

let product = new ProductManager("./data/data.json");
async function productManager() {
  await product.addProduct({
    title: "Buzz LightYear",
    description: "Juguete bien picantovich para niños y adultos",
    price: 4000,
    stock: 20,
    thumbnail:
      "https://media.revistagq.com/photos/62a8546d6b74c0e2031238a6/1:1/w_770,h_770,c_limit/buzz.jpg",
  });

  await product.addProduct({
    title: "Woody",
    description: "El vaquero mas cra de todo el condado",
    price: 5000,
    stock: 10,
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/en/0/01/Sheriff_Woody.png",
  });

  await product.addProduct({
    title: "Al",
    description: "El que queria vender a woody",
    price: 2200,
    stock: 10,
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/en/0/01/Sheriff_Woody.png",
  });

  await product.addProduct({
    title: "Al1",
    description: "El que queria vender a woody",
    price: 2200,
    stock: 10,
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/en/0/01/Sheriff_Woody.png",
  });

  await product.addProduct({
    title: "Al2",
    description: "El que queria vender a woody",
    price: 2200,
    stock: 10,
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/en/0/01/Sheriff_Woody.png",
  });

  await product.addProduct({
    title: "Al4",
    description: "El que queria vender a woody",
    price: 2200,
    stock: 10,
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/en/0/01/Sheriff_Woody.png",
  });

  await product.addProduct({
    title: "Al5",
    description: "El que queria vender a woody",
    price: 2200,
    stock: 10,
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/en/0/01/Sheriff_Woody.png",
  });

  product.addProduct({
    title: "Al6",
    description: "El que queria vender a woody",
    price: 2200,
    stock: 10,
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/en/0/01/Sheriff_Woody.png",
  });

  await product.addProduct({
    title: "Al7",
    description: "El que queria vender a woody",
    price: 2200,
    stock: 10,
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/en/0/01/Sheriff_Woody.png",
  });

  await product.addProduct({
    title: "Al8",
    description: "El que queria vender a woody",
    price: 2200,
    stock: 10,
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/en/0/01/Sheriff_Woody.png",
  });

  await product.getProductById(9);
  product.getProducts();

  await product.updateProduct(9, {
    description: "Las personas no son producto, pero es mi app ah re",
    title: "Andy",
    price: 12000,
    stock: 1,
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS1mh3kr9y7ImLx9AbCAhXttMpQ7vEteMEFdFyfDZePg&s",
  });
  await product.deleteProductById(10);
  // product.getProducts();
}

// productManager();
export default product;
