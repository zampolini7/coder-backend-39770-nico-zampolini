import { Command } from "commander";

// const program = new Command();

// program
//   .option("-d", "variable para debug", false)
//   .option("-p, --port <port>", "puerto para el server", 8060)
//   .option("--mode <mode>", "Modo de trabajo", "Development")
//   .requiredOption(
//     "-u, <user>",
//     "usuario utilizando el app",
//     "No se ha definido usuario"
//   )
//   .option("-l, --letters [letter...]", "specify letters")
//   .parse();

// console.log("options", program.opts());
// console.log("arg", program.args);

const commander = new Command();

commander.option("--mode <mode>", "Modo de trabajo", "development").parse();

export { commander };
