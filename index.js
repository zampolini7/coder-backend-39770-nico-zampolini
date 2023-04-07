class ProductManager {
  constructor() {
    this.products = [];
  }

  addProduct({ title, description, price, thumbnail, stock }) {
    let id;
    if (this.products.length === 0) {
      id = 1;
    } else {
      let lastProduct = this.products[this.products.length - 1];
      id = lastProduct.id + 1;
    }
    let product = { title, description, price, thumbnail, stock, id };
    this.products.push(product);
  }

  getProducts() {
    console.log(this.products);
    return this.products;
  }

  getProductById(id) {
    let productById;
    for (let i = 0; i < this.products.length; i++) {
      if (id === this.products[i].id) {
        productById = this.products[i];
        break;
      } else {
        productById = "Not found";
      }
    }
    console.log(productById);
    return productById;
  }
}

let product = new ProductManager();

product.addProduct({
  title: "Buzz LightYear",
  description: "Juguete bien picantovich para niños y adultos",
  price: 4000,
  stock: 20,
  thumbnail:
    "https://media.revistagq.com/photos/62a8546d6b74c0e2031238a6/1:1/w_770,h_770,c_limit/buzz.jpg",
});

product.addProduct({
  title: "Woody",
  description: "El vaquero mas cra de todo el condado",
  price: 5000,
  stock: 10,
  thumbnail: "https://upload.wikimedia.org/wikipedia/en/0/01/Sheriff_Woody.png",
});

// product.getProducts();

product.getProductById(0);
product.getProductById(1);
product.getProductById(2);
product.getProductById(3);
