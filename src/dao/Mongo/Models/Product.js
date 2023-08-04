import { model, Schema, Types } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const collection = "products";
const schema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: String, required: true },
  thumbnail: { type: String, required: true },
  stock: { type: String, required: true },
});

schema.plugin(mongoosePaginate);
const Product = model(collection, schema);

export default Product;
