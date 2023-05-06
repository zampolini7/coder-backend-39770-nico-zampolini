import CartManager from "./cartManager.js";

let cart = new CartManager("./src/data/cart.json");

async function cartManager() {
  cart.addCart([
    {
      title: "Buzz LightYear",
      description: "Juguete bien picantovich para niños y adultos",
      price: 4000,
      thumbnail:
        "https://media.revistagq.com/photos/62a8546d6b74c0e2031238a6/1:1/w_770,h_770,c_limit/buzz.jpg",
      stock: 20,
      id: 1,
    },
    {
      title: "Woody",
      description: "El vaquero mas cra de todo el condado",
      price: 5000,
      thumbnail:
        "https://upload.wikimedia.org/wikipedia/en/0/01/Sheriff_Woody.png",
      stock: 10,
      id: 2,
    },
    {
      title: "Al",
      description: "El que queria vender a woody",
      price: 2200,
      thumbnail:
        "https://upload.wikimedia.org/wikipedia/en/0/01/Sheriff_Woody.png",
      stock: 10,
      id: 3,
    },
  ]);
  cart.addCart([
    {
      title: "Buzz LightYear",
      description: "Juguete bien picantovich para niños y adultos",
      price: 4000,
      thumbnail:
        "https://media.revistagq.com/photos/62a8546d6b74c0e2031238a6/1:1/w_770,h_770,c_limit/buzz.jpg",
      stock: 20,
      id: 1,
    },
    {
      title: "Woody",
      description: "El vaquero mas cra de todo el condado",
      price: 5000,
      thumbnail:
        "https://upload.wikimedia.org/wikipedia/en/0/01/Sheriff_Woody.png",
      stock: 10,
      id: 2,
    },
    {
      title: "Al",
      description: "El que queria vender a woody",
      price: 2200,
      thumbnail:
        "https://upload.wikimedia.org/wikipedia/en/0/01/Sheriff_Woody.png",
      stock: 10,
      id: 3,
    },
  ]);
  cart.addCart([
    {
      title: "Buzz LightYear",
      description: "Juguete bien picantovich para niños y adultos",
      price: 4000,
      thumbnail:
        "https://media.revistagq.com/photos/62a8546d6b74c0e2031238a6/1:1/w_770,h_770,c_limit/buzz.jpg",
      stock: 20,
      id: 1,
    },
    {
      title: "Woody",
      description: "El vaquero mas cra de todo el condado",
      price: 5000,
      thumbnail:
        "https://upload.wikimedia.org/wikipedia/en/0/01/Sheriff_Woody.png",
      stock: 10,
      id: 2,
    },
    {
      title: "Al",
      description: "El que queria vender a woody",
      price: 2200,
      thumbnail:
        "https://upload.wikimedia.org/wikipedia/en/0/01/Sheriff_Woody.png",
      stock: 10,
      id: 3,
    },
  ]);
}

// cartManager();
export default cart;
