#!/usr/bin/env node

const { parse, stringify } = require('../src/api');
const { help } = require('./help');

const [,, ...args] = process.argv;
if (args.length === 1) {
  if (args[0] === '-h') {
    console.log(help);
  }
} else if (args.length === 2) {
  const parseOrStringify = args[0];
  if (parseOrStringify === 'parse') {
    console.log(parse(args[1]));
  }
  if (parseOrStringify === 'stringify') {
    console.log(stringify(Number(args[1])));
  }
} else {
  console.log('datos incorrectos');
}

// console.log(`Hello world ${args}`);

/* const { parse, stringify } = require('../src/api');
const { help } = require('./help');

let input;

process.stdin.on('data', (data) => {
  input = data.toString().trim();
  input = input.split(' ');
  if (input[0] === 'parse') {
    process.stdout.write(`${parse(input[1]).toString()} \n`);
    process.exit();
  }
  if (input[0] === 'stringify') {
    process.stdout.write(`${stringify(Number(input[1])).toString()} \n`);
    process.exit();
  }
  if (input[0] === '-h') {
    process.stdout.write(`${help.toString()} \n`);
    process.exit();
  }
});

// process.stdin.setEncoding('utf-8');
// process.stdin.resume();
// process.stdout.write('hello world'); */
