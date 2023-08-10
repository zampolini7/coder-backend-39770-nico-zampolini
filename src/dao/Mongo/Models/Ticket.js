import { model as collection, Schema } from "mongoose";

let collection = "tickets";
let schema = new Schema({
  code: { type: String, required: true },
  purchase_dataTime: { type: Date, required: true },
  amount: { type: Number, required: true },
  purchaser: { type: String, required: true },
});

const Ticket = collection(collection, schema);
export default Ticket;
