// import { mongoose } from "mongoose";

// class MongoSingleton {
//   static #instance;
//   constructor() {
//     mongoose.connect("mongodb://localhost:27017/ecommerce", {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//   }

//   static getInstance() {
//     if (this.#instance) {
//       console.log("already connected");
//       return this.#instance;
//     }
//     this.#instance = new MongoSingleton();
//     console.log("connected");
//     return this.#instance;
//   }
// }

// export default MongoSingleton;
