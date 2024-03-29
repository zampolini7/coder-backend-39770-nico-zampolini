import { model, Schema, Types } from "mongoose";

const collection = "users";
const schema = new Schema({
  name: { type: String, required: true },
  photo: {
    type: String,
    default:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3pb8EWdg4BxhNGjD1wu5cbi6umMs6ZZuvGiLPG2vebQ&s",
    // required: true,
  },
  email: { type: String, required: true, unique: true, index: true },
  age: { type: Number },
  role: { type: String, default: "user" },
  cart: { type: Types.ObjectId, ref: "carts", default: null },
  password: { type: String, required: true },
});

const User = model(collection, schema);

export default User;
