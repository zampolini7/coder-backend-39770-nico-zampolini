import { faker } from "@faker-js/faker";

function generateProducts() {
  return {
    title: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    price: faker.commerce.price(),
    stock: parseInt(faker.string.numeric()),
    image: faker.image.url(),
    id: faker.database.mongodbObjectId(),
  };
}

function generateUsers() {
  let numOfUsers = parseInt(faker.string.numeric(1, { bannedDigits: ["0"] }));
  let products = [];
  for (let i = 0; i < numOfUsers; i++) {
    products.push(generateProducts());
  }
  return {
    first_name: faker.name.firstName(),
    last_name: faker.name.lastName(),
    gender: faker.person.sex(),
    birthDate: faker.date.birthDate(),
    phone: faker.phone.number(),
    image: faker.image.avatar(),
    id: faker.database.mongodbObjectId(),
    email: faker.internet.email(),
    products,
  };
}

export { generateUsers };
