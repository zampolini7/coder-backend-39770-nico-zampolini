class productDTO {
  constructor(product) {
    this.title = product.title;
    this.description = product.description;
    this.stock = product.stock;
    this.price = product.price;
    this.thumbnail = product.thumbnail;
  }
}

export default productDTO;
