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
