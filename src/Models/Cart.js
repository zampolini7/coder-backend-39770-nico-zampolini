import { model, Schema, Types } from "mongoose";

const collection = "carts";
const schema = new Schema({
  user_id: { type: String, required: true, ref: "products" },
  product_id: { type: String, required: true, ref: "products" },
  quantity: { type: Number, required: true },
});

const Cart = model(collection, schema);

export default Cart;
