#!/usr/bin/env node
const argv = require('yargs').argv;
const Triangle = require('./src/Triangle');

// function logArgv(argv) {
//   for(const prop in argv) {
//     console.log(`${prop}: ${argv[prop]}`);
//   }
// }
// logArgv(argv);

const triangle = new Triangle(
  Number.parseFloat(argv.side1),
  Number.parseFloat(argv.side2),
  Number.parseFloat(argv.side3));

console.log(`\n  |> Triangle type: ${triangle}\n`);
