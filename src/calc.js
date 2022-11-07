var Parser = require("expr-eval").Parser;

var parser = new Parser();
var expr = parser.parse("2 * x ^ 2 + 1");
console.log(expr.evaluate({ x: 3 })); // 7
