console.log("iniciando el proceso");
process.on("exit", (code) => {
  console.log(`About to exit with code: ${code}`);
});
console.log("aqui");
process.on("uncaughtExceptions", (code) => {
  console.log(`Este atrapa las excepciones no controladras: ${code}`);
});
console();
