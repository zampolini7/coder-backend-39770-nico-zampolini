import { model, Schema } from "mongoose";

const collection = "students";
const schema = new Schema({
  name: { type: String, required: true },
  last_name: { type: String, required: true },
  age: { type: Number, required: true },
  dni: { type: String, required: true },
  course: { type: String, required: true },
  note: { type: Number, required: true },
});

let Student = model(collection, schema);

export default Student;
