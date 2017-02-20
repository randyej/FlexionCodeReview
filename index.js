#!/usr/bin/env node
const argv = require('yargs').argv;
const Triangle = require('./src/Triangle');

// function logArgv(argv) {
//   for(const prop in argv) {
//     console.log(`${prop}: ${argv[prop]}`);
//   }
// }
// logArgv(argv);

const triangle = new Triangle(argv.side1, argv.side2, argv.side3);

console.log(`\n  |> Triangle type: ${triangle}\n`);
