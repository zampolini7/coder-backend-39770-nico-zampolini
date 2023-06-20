import { model, Schema, Types } from "mongoose";

const collection = "products";
const schema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: String, required: true },
  thumbnail: { type: String, required: true },
  stock: { type: String, required: true },
});

const Product = model(collection, schema);

export default Product;
