const suma = (...params) => {
  console.log(params);
  let resultado = 0;
  if (params.length === 0) {
    return 0;
  }
  let validInput = true;
  for (let i = 0; i < params.length && validInput; i++) {
    if (typeof params[i] !== "number") {
      validInput = false;
    }
  }
  if (!validInput) {
    return null;
  }
  for (let i = 0; i < params.length; i++) {
    resultado += params[i];
  }
  return resultado;
};

let testpasados = 0;
const cantidadDeTest = 4;
console.log(
  "Test 1: la funcion debe devolver null si alguno de los parametros no es number"
);

let resultTest1 = suma(2, "hola"); // null

if (resultTest1 === null) {
  console.log("Test 1 ok");
  testpasados++;
} else
  console.log(
    `Test 1 no ha pasado, se recibio ${typeof resultTest1} pero se esperaba null `
  );

if (testpasados === cantidadDeTest) {
  console.log("paso todos los test");
} else {
  console.log(`han pasado ${testpasados} de ${cantidadDeTest} test`);
}

console.log("----------------------------------------------------------");
console.log("Test 2: la funcion debe devolver 0 si no recibe parametros");

let resultTest2 = suma(); // null

if (resultTest2 === 0) {
  console.log("Test 2 ok");
  testpasados++;
} else
  console.log(
    `Test 2 no ha pasado, se recibio ${resultTest2} pero se esperaba 0 `
  );

if (testpasados === cantidadDeTest) {
  console.log("paso todos los test");
} else {
  console.log(`han pasado ${testpasados} de ${cantidadDeTest} test`);
}
console.log("----------------------------------------------------------");

console.log("Test 3: la funcion debe sumar correctamente");

let resultTest3 = suma(3, 5); // null

if (resultTest3 === 8) {
  console.log("Test 3 ok");
  testpasados++;
} else
  console.log(
    `Test 3 no ha pasado, se recibio ${resultTest3} pero se esperaba 8 `
  );

if (testpasados === cantidadDeTest) {
  console.log("paso todos los test");
} else {
  console.log(`han pasado ${testpasados} de ${cantidadDeTest} test`);
}
console.log("----------------------------------------------------------");

console.log(
  "Test 4: la funcion debe sumar de cualquier cantidad de parametros"
);

let resultTest4 = suma(3, 5, 2, 2); // null

if (resultTest4 === 12) {
  console.log("Test 4 ok");
  testpasados++;
} else
  console.log(
    `Test 4 no ha pasado, se recibio ${resultTest4} pero se esperaba 12 `
  );

if (testpasados === cantidadDeTest) {
  console.log("paso todos los test");
} else {
  console.log(`han pasado ${testpasados} de ${cantidadDeTest} test`);
}
console.log("----------------------------------------------------------");
