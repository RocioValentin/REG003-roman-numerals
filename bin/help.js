const help = `
Usage: roman-numerals [opttions] <command> [<input>]
Commands:
  parse <input>      Parse a roman numeral string into an integer.
  stringify <input>  Takes an integer and converts it to a roman numeral.
Options:
  -h,--help     Show this help.
  -v,--version  Show version number.
`;

module.exports = {
  help,
};
