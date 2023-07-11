import { data30 } from "../../src/data/data30.js";
import Product from "../../src/models/Product.js";

const insertManyProducts = async () => {
  console.log("entro en el insertmany");
  try {
    const insertMany = await Product.insertMany(data30);
    console.log(insertMany);
  } catch (error) {
    console.log(error);
  }
};

export default insertManyProducts;
